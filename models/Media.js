import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    media_url: String,
    media_type: String,
    caption: String,
    display_order: Number,
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.models.Media || mongoose.model("Media", MediaSchema, "media");