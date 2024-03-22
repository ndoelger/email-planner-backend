const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  getAll,
  newEmail,
};

async function getAll(req, res) {
  try {
    const emails = await prisma.email.findMany();
    return res.json(emails);
  } catch (error) {
    //send error
    res.status(500).json(error);
  }
}

async function newEmail(req, res) {
  console.log(req.body)
  try {
    const email = await prisma.email.create({
      data: {
        subject: req.body.subject,
        preview: req.body.preview,
        deployment: new Date(),
        sent: false,
      },
    });
    return res.json(email);
  } catch (error) {
    //send error
    res.status(500).json(error);
  }
}
