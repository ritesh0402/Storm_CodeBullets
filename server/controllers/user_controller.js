const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
require('dotenv').config();
JWT_SECRET = process.env.JWT_SECRET;
const cookieParser = require("cookie-parser");

const SALT_ROUNDS = 10;

const prisma = new PrismaClient();

async function create_user(req, res) {
  const { email, username, phone, password, fullName } = req.body;
  const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user
    .create({
      data: {
        email: email,
        username: username,
        phone: phone,
        password: hashed_password,
        fullName: fullName
      },
    })
    .then(async () => {
      res.status(200).send("User Created Successfully!");
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

//User login
const userLogIn = async (req, res) => {
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
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    return res.cookie("auth_token", authtoken, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    })
      .status(200)
      .send("Login Successful");
  } catch (error) {
    res.status(500).send({ "Error": error.message });
  }
};


async function userEventRegistration(req, res) {
  const userId = req.user.id;
  const { eventId } = req.body;
  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      attending_events: {
        connect: {
          id: eventId
        }
      }
    }
  })
    .then(async () => {
      res.status(200).send("User Subscribed Successfully!");
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

}




module.exports = { userLogIn, create_user, userEventRegistration };