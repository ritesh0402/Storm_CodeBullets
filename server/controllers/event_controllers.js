const { PrismaClient } = require("@prisma/client");
const { fetchuser } = require("../middleware/fetchuser");

const prisma = new PrismaClient();

async function createEvent(req, res) {
  const { title, desc, venue,startTime,endTime,imageUrl, organizer_id } = req.body;
  await prisma.event
    .create({
      data: {
        title: title,
        desc: desc,
        venue: venue,
        startTime: parseInt(startTime),
        endTime:parseInt(endTime),
        imageUrl:imageUrl,
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

async function getAllEvents(req, res) {
  const events = await prisma.event.findMany();
  res.status(200).send(events);
}

async function getEventsByUser(req, res){
  const { id } = req.user.id;
  const events = await prisma.user.findMany({
    where:{ id:id},
    select:{events:true}
  });
  res.status(200).send(events);
}


module.exports = { createEvent,getAllEvents,getEventsByUser };