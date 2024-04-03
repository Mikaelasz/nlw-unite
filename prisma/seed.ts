import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "07a8248b-9d61-49e7-8c09-bead80174cd3",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados por código!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded");
});
