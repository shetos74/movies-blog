import mongoose from "mongoose";
import Movie from "../../../models/Movie.js";
import Review from "../../../models/Review.js";
import Media from "../../../models/Media.js";

async function connect() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
}

export async function GET() {
  try {
    await connect();
    const movies = await Movie.find().limit(50).lean();
    const ids = movies.map((m) => m._id);

    const media = await Media.find({ movie_id: { $in: ids } })
      .sort({ display_order: 1 })
      .lean();

    const reviews = await Review.find({ movie_id: { $in: ids } }).lean();

    const result = movies.map((m) => ({
      ...m,
      media: media.filter((mm) => String(mm.movie_id) === String(m._id)),
      reviews: reviews.filter((r) => String(r.movie_id) === String(m._id)),
    }));

    return new Response(JSON.stringify(result), {
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