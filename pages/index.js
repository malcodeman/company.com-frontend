import Link from "next/link";

function Home() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/testimonials">
        <a>Testimonials</a>
      </Link>
    </div>
  );
}

export default Home;
