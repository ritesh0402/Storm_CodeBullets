const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");

const SALT_ROUNDS = 10;

const prisma = new PrismaClient();

export async function create_user(req, res) {
  const { email, username, phone, password } = req.body;
  const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user
    .create({
      data: {
        email: email,
        username: username,
        phone: phone,
        password: hashed_password,
      },
    })
    .then(async () => {
        res.send("User creater successfully");
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

//User login
export const userLogIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Please enter correct Credential" });
    }

    let passCompare = await bcrypt.compare(password, user.password);

    if (!passCompare) {
      return res.status(401).json({ error: "Please enter correct Credential" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET);

    return res.cookie("access_token", authtoken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
      })
      .status(200)
      .send("Login Successful");
  } catch (error) {
    res.status(500).json("Error: ", error.message);
  }
};
