import ListOfPosts from "./ListOfPosts";
import { Suspense } from "react";

export default async function PostsPage() {
  return (
    <section>
      <Suspense fallback={<p>Loading posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
}
