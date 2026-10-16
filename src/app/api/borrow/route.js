import { auth } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { bookId, bookTitle } = await request.json();
    const collection = db.collection("borrowedBooks");

    const existing = await collection.findOne({ userId: session.user.id, bookId });
    if (existing) return NextResponse.json({ error: "Already borrowed" }, { status: 400 });

    await collection.insertOne({
        userId: session.user.id,
        bookId,
        bookTitle,
        borrowedAt: new Date(),
    });

    return NextResponse.json({ success: true });
}

export async function GET(request) {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const collection = db.collection("borrowedBooks");
    const books = await collection.find({ userId: session.user.id }).toArray();

    return NextResponse.json(books);
}
