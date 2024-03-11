import Link from 'next/link'

export default function UsingSSR({ time }) {
  return (
    <main>
      <div>
        <Link href="/">Home</Link>
      </div>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
    </main>
  );
}

export async function getServerSideProps({ req, res }) {
  const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Dubai');
  const data = await response.json();

  res.setHeader("cache-control", "s-maxage=2, stale-while-revalidate=2");

  console.log(
    "Revalidated Data",
    data.datetime
  );

  return {
    props: {
      time: new Date(data.datetime).toString(),
    },
  };
}
