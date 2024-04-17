# How to run this repo in Local ?

This is a repository that demonstrates how to set up Prisma in local with a PostgreSQL database.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Sukomal07/prisma.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Initialize TypeScript configuration:
   ```bash
   npx tsc --init
   ```
4. Install Prisma as a dev dependency:
   ```bash
   npm install prisma --save-dev
   ```
5. Update the Postgres database URL in the `.env` file to your own URL.
6. Initialize Prisma with PostgreSQL as the datasource provider:
   ```bash
   npx prisma init --datasource-provider postgresql
   ```
7. Add the following models to your `prisma/schema.prisma` file:

   ```prisma
   model User {
     id       Int     @id @default(autoincrement())
     email    String  @unique
     name     String?
     posts    Post[]
   }

   model Post {
     id        Int     @id @default(autoincrement())
     title     String
     content   String?
     published Boolean @default(false)
     author    User    @relation(fields: [authorId], references: [id])
     authorId  Int
   }
   ```

8. Run the migration to create the initial database schema:
   ```bash
   npx prisma migrate dev --name init
   ```
9. Update the data according to your needs.
10. Build the TypeScript files:
    ```bash
    tsc -b
    ```
11. Run the compiled JavaScript file (replace `file_name` with the actual file name) `note : first create user and post` :
    ```bash
    node dist/file_name
    ```
12. To view and manage your data, run Prisma Studio:
    ```bash
    npx prisma studio
    ```

## Additional Details

For more details and advanced usage, refer to the [Prisma documentation](https://www.prisma.io/docs/getting-started/quickstart).
