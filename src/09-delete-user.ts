import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteUser(email: string) {
  await prisma.user.delete({
    where: {
      email: email,
    },
  });
  console.log("done");
}

deleteUser("sukomal@gmail.com")
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
