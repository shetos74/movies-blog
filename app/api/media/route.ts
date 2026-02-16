import { connectDB } from "../../../lib/mongodb.js";
import Media from "../../../models/Media.js";

export async function GET() {
    try {
        await connectDB()
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
        await connectDB()
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