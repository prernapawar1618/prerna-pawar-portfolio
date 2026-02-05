import dbConnect from "@/lib/db";
import { Message } from "@/models";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newMessage = await Message.create({
            name,
            email,
            subject,
            message,
        });

        return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
