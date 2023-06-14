import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
  
//   // Prisma sample code for a create query to the db

//   await prisma.user.create({
//     data: {
//       name: 'Alice', // creates a new user with post and profile
//       email: 'alice@prisma.io',
//       posts: { // nested write
//         create: { title: 'Hello World' },
//       },
//       profile: { // nested write
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })

//   const allUsers = await prisma.user.findMany({
//     include: { // include these in the printed output
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allUsers, { depth: null })
// }

async function main() {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1) // close the database connects when the script terminates
  })

  // //query to read all User records from the database and print the result
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

  // //My attempt at a create query to the db adding a user and print to console
  // await prisma.user.create({
  //   data: {
  //     // id:
  //     image: "./assets/user-images/image-zena.jpg",
  //     name: "Zena Kelley",
  //     username: "velvetround",
  //     // comments: 
  //   },
  // })

  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);