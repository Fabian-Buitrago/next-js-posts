import { Counter } from "./Counter";

export default function PostsLayout({ children }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
