const { PrismaClient } = require("@prisma/client");
const { fetchuser } = require("../middleware/fetchuser");

const prisma = new PrismaClient();

async function createEvent(req, res) {
  const { title, desc, venue, time, organizer_id } = req.body;

  await prisma.event
    .create({
      data: {
        title: title,
        desc: desc,
        venue: venue,
        time: time,
        organizer_id: organizer_id,
      },
    })
    .then(async () => {
      res.status(200).send("Event Created Successfully!");
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

async function getEvents(req, res) {

}


module.exports = { createEvent };