"use client";

import { useState } from "react";

export default function UpvoteButton() {
  const [upvotes, setUpvotes] = useState(0);

  const addVote = () => {
    setUpvotes(upvotes + 1);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={addVote}
        className="bg-[#23aac9] text-white rounded-full p-2 mt-5 w-24 mx-auto"
      >
        Upvote
      </button>
      <p className="text-lg mt-3">Upvotes: {upvotes}</p>
    </div>
  );
}
