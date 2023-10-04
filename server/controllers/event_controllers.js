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
        time: parseInt(time),
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

async function deleteEvent(req, res) {
  const userId = req.userId;
  const eventId = req.body.eventId;

  const event = await prisma.event.findFirst({
    where: {
      organizer_id: req.user.id
    }
  });

  if(event){
    if(event.organizer_id == req.userId) {
      await prisma.event.delete({
        where: {
          id: event.id
        }
      });
      res.status(200).send("Event deleted successfully");
    } else{
      res.status(403).send("Unauthorized to delete the event!");
    }
  } else {
    res.status(404).send("No such event found!");
  }
}


module.exports = { createEvent,getAllEvents,getEventsByUser, deleteEvent };