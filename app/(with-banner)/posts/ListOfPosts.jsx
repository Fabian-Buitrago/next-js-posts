import LikeButton from "./LikeButton";
import Link from "next/link";

const fetchPosts = () => {
  // getStaticProps
  // --> return fetch("https://jsonplaceholder.typicode.com/posts")}).then((res) => res.json());

  // getServerSideProps
  // --> return fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'no-store'})}).then((res) => res.json());

  // incremental static regeneration
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article key={post.id}>
      <Link href="posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton id={post.id} />
    </article>
  ));
}
