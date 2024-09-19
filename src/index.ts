import express from "express";
import userRoutes from "./routes/userRoutes";
import articleRoutes from "./routes/articleRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Testing with hardcoded values
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // Create User
//   const user = await prisma.user.create({
//     data: {
//       name: "User one",
//       email: "One@one.com",
//     },
//   });
//   console.log(user);

//   //Get All Users
//   const users = await prisma.user.findMany();
//   console.log(users);

//   // Create an Article
//   const article = await prisma.article.create({
//     data: {
//       title: "This is first article",
//       body: "This is a test content of article",
//       author: {
//         connect: {
//           id: 1,
//         },
//       },
//     },
//   });
//   console.log(article);

//   // Get All Articles
//   const articles = await prisma.article.findMany();
//   console.log(articles);

//   // Creating User and Article with the same query
//   const userwithArticle = await prisma.user.create({
//     data: {
//       name: "User two",
//       email: "Two@two.com",
//       articles: {
//         create: {
//           title: "This is user two article",
//           body: "This is user two first article",
//         },
//       },
//     },
//   });
//   console.log(userwithArticle);

//   //Get All Users with articles
//   const usersandArticles = await prisma.user.findMany({
//     include: {
//       articles: true,
//     },
//   });
//   console.log(usersandArticles);

//   // Loop through articles
//   usersandArticles.forEach((user) => {
//     console.log(`Username: ${user.name}, Email: ${user.email}`);

//     user.articles.forEach((article) => {
//       console.log(
//         `Article Name: ${article.title}, Article Title: ${article.title}, Article Body: ${article.body}`
//       );
//     });
//   });

//   // Update User
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       name: "Updated user one",
//       email: "updated@email.com",
//     },
//   });
//   console.log(updatedUser);

//   // Delete Article
//   const deleteArticle = await prisma.article.delete({
//     where: {
//       id: 2,
//     },
//   });

//   console.log(deleteArticle);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
