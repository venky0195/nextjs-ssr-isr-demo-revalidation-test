import Link from 'next/link'

export const Home = () => {
  return (
    <div>
      <p>Home Page...</p>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/test-revalidation">Test Revalidation</Link>
      </div>
    </div>
  );
};
export default Home;
