import admin from "libs/firebase/nodeApp";
import prisma from "libs/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    let firebaseUser = null;

    try {
      firebaseUser = await admin.auth().createUser({
        email: body.email,
        displayName: body.name,
        photoURL: body.avatar,
        password: "secretPassword",
      });
      const { uid } = firebaseUser;
      const user = await prisma.user.create({
        data: {
          ...body,
          batch: Number(body.batch),
          firebaseUid: uid,
        },
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(409).json({
        error: error.message,
      });
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
