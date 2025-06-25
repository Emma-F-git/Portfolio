import { NextResponse } from "next/server";
import Message from "@/models/Message";
import dbConnect from "@/lib/mongodb";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const message = await Message.create(body);

    return NextResponse.json(
      { message: "Message enregistré" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur dans l’API contact :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
