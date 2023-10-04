const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const prisma = new PrismaClient();

async function create_user(req, res) {
    const {email, username, phone, password} = req.body;
    const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);

    await prisma.user.create({
        data: {
            email: email,
            username: username,
            phone: phone,
            hashed_password: hashed_password
        }
    })
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
}

