"use client";

import { useState } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);

  return (
    <button style={{ padding: "10px" }} onClick={() => setLiked(!liked)}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
