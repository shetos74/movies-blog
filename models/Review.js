import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    review_content: String,
    rating: Number,
    author_name: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema, "reviews");