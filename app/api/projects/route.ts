import dbConnect from "@/lib/db";
import { Project } from "@/models";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const projects = await Project.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
