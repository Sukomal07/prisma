import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(title: string, description: string, userId: number) {
  const todo = await prisma.todo.create({
    data: {
      title: title,
      description: description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  console.log(todo);
}

createTodo("todo title 1", "this is title 1", 2)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
