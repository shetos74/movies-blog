import React from "react";

export default async function animeReviewPage({
  params,
}: {
  params: Promise<{ animeId: string }>;
}) {

  const { animeId } = await params;
  console.log("🚀 ~ animeReviewPage ~ slug:", animeId)

  return <div>anime review</div>;
}
