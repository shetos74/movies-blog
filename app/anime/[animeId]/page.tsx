import React from "react";

export default async function animeReviewPage({
  params,
}: {
  params: Promise<{ animeId: string }>;
}) {

  const { animeId } = await params;

  return <div>anime review</div>;
}
