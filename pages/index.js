import Link from 'next/link'
import { redirect } from 'next/navigation'

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
redirect(`/post/${id}`) // Navigate to the new post page

export default Home;
