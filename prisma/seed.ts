import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = await prisma.email.upsert({
    where: { id: 0 },
    update: {},
    create: {
      subject: "Test Subject",
      preview: "Test Preview",
      deployment: new Date(),
      sent: true,
    },
  });
  console.log({ email });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
