const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  getAll,
  newEmail,
  deleteEmail,
};

async function getAll(req, res) {
  try {
    const emails = await prisma.email.findMany();
    return res.json(emails);
  } catch (error) {
    //send error
    res.status(500).json(error.message);
  }
}

async function newEmail(req, res) {
  console.log(req.body);
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
    res.status(500).json(error.message);
  }
}

async function deleteEmail(req, res) {
  const id = parseInt(req.params.id);
  try {
    const email = await prisma.email.delete({
      where: {
        id: id,
      },
    });
    return res.json(email);
  } catch (error) {
    //send error
    res.status(500).json(error.message);
  }
}
