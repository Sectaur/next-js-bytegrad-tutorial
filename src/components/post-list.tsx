import React from "react";
import Link from "next/link";

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <main>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`} className="text-2xl">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
