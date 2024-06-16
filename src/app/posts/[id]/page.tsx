import React from "react";
import UpvoteButton from "@/components/upvote-btn";

type PostProps = {
  params: {
    id: string;
  };
};

export default async function Post({ params }: PostProps) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="text-center px-7 mt-32">
      <h2 className="text-5xl font-semi-bold capitalize mb-7">{post.title}</h2>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <UpvoteButton />
    </main>
  );
}
