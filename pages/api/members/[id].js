import admin from "libs/firebase/nodeApp";
import prisma from "libs/prisma";

export default async function handle(req, res) {
  const memberId = req.query.id;
  
  if (req.method === "GET") {
    handleGET(memberId, res);
  } else if (req.method === "DELETE") {
    handleDELETE(memberId, res);
  } else if (req.method === "PATCH") {
    const { id, ...body } = req.body;
    handlePATCH(memberId, body, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/members/:id
async function handleGET(memberId, res) {
  const user = await prisma.user.findUnique({
    where: { id: memberId },
  });
  res.json(user);
}

// PATCH /api/members/:id
async function handlePATCH(memberId, data, res) {
  const user = await prisma.user.update({
    where: { id: memberId },
    data,
  });
  await admin.auth().updateUser(user.firebaseUid, {
    email: user.email,
    displayName: user.name,
    photoURL: user.avatar,
  });
  res.json(user);
}

// DELETE /api/members/:id
async function handleDELETE(memberId, res) {
  const user = await prisma.user.delete({
    where: { id: memberId },
  });
  await admin.auth().deleteUser(user.firebaseUid);
  res.json(user);
}
