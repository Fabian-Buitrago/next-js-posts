import Image from "next/image";

const fetchComments = async (id) => {
  // incremental static regeneration
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul
      style={{
        marginLeft: "50px",
        background: "#444",
        padding: "20px",
        listStyle: "none",
      }}
    >
      {comments.map((comment) => (
        <li
          style={{
            marginTop: "10px",
          }}
          key={comment.id}
        >
          <Image
            width={50}
            height={50}
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
