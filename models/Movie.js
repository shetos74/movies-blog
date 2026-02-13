import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cover_image_url: String,
    slug: { type: String, index: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema, "movies");