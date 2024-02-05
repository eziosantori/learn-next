import { Posts, Post } from "../models/post";

async function getData(): Promise<Posts> {
  const endpoint = "http://localhost:3000/api/posts";
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export default async function BlogPage() {
  const data = await getData();
  const items: Post[] = data?.items || [];

  return (
    <main>
      <h1>Blog Page</h1>
      {items.map((item, idx) => {
        return <li key={`post-${idx}`}>{item.title}</li>;
      })}
    </main>
  );
}