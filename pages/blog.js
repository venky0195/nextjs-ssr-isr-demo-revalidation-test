import Link from 'next/link'

// posts will be populated at build time by getStaticProps()
function Blog({ time }) {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <ul>
        <time dateTime={time}>{time}</time>
      </ul>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Dubai");
  const data = await res.json();

  console.log("getting data for blog");
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      time: new Date(data.datetime).toString(),
    },
  };
}

export default Blog;
