import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "../models/Movie.js";
import Review from "../models/Review.js";
import Media from "../models/Media.js";


dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const seedMovies = [
  {
    title: "Jujutsu Kaisen",
    cover_image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    slug: "jujutsu-kaisen",
    published: true,
  },
  {
    title: "Naruto",
    cover_image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    slug: "naruto",
    published: true,
  },
  {
    title: "Attack on Titan",
    cover_image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    slug: "attack-on-titan",
    published: true,
  },
];

async function seed() {
  if (!MONGODB_URI) {
    console.error("MONGODB_URI not set in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);

    // Remove old collections data
    await Movie.deleteMany({});
    await Review.deleteMany({});
    await Media.deleteMany({});

    // Optional: drop legacy 'users' collection if it exists (removes User table)
    const hasUsers = await mongoose.connection.db
      .listCollections({ name: "users" })
      .hasNext();
    if (hasUsers) {
      await mongoose.connection.db.dropCollection("users");
      console.log("Dropped legacy 'users' collection");
    }

    // Insert movies
    const createdMovies = await Movie.insertMany(seedMovies);

    // Create reviews and media linked to inserted movies
    const reviews = [
      {
        movie_id: createdMovies[0]._id,
        review_content: "Great action and characters.",
        rating: 8,
        author_name: "Reviewer A",
      },
      {
        movie_id: createdMovies[1]._id,
        review_content: "Nostalgic and long-running.",
        rating: 7,
        author_name: "Reviewer B",
      },
    ];

    const media = [
      {
        movie_id: createdMovies[0]._id,
        media_url: createdMovies[0].cover_image_url,
        media_type: "cover",
        caption: "Cover image",
        display_order: 1,
      },
      {
        movie_id: createdMovies[1]._id,
        media_url: createdMovies[1].cover_image_url,
        media_type: "cover",
        caption: "Cover image",
        display_order: 1,
      },
      {
        movie_id: createdMovies[2]._id,
        media_url: createdMovies[2].cover_image_url,
        media_type: "cover",
        caption: "Cover image",
        display_order: 1,
      },
    ];

    await Review.insertMany(reviews);
    await Media.insertMany(media);

    console.log("Database seeded successfully 🚀");
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
