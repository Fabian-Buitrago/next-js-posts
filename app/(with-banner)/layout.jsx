export default function BannerLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "#000" }}>
        ::: 🍉 Post list 🍉 :::
      </marquee>
      {children}
    </div>
  );
}
