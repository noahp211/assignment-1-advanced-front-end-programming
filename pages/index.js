// Home page, includes a message and NAV
import Link from 'next/link';

export default function StartPage() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/quote">Quote</Link>
      </nav>
      <h1>Noah Park's Advanced Front-End Assignment 1</h1>
      <p>This site is for Advanced Front-End Assignment 1.</p>
    </div>
  );
}
