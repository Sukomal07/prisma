import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "sukomal01@gmail.com",
      name: "Sukomal Dutta",
      password: "1234",
      posts: {
        create: [
          {
            title: "post for sukomal01",
            content: "This is a post from sukomal01",
          },
          {
            title: "Title of post 2",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
