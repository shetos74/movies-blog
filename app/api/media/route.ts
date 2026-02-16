import Media from "../../../models/Media.js";
import mongoose from "mongoose";

async function connect() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
}

export async function GET() {
    try {
        await connect()
        const media = await Media.find().limit(50).lean();
        
        return new Response(JSON.stringify(media), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(request: Request) {
    try {
        await connect()
        const body = await request.json();
        const newMedia = new Media(body);
        await newMedia.save();

        return new Response(JSON.stringify(newMedia), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}