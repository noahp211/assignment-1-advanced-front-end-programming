//about page for assignment, little explanation of assignment

import Link from 'next/link';

export default function AboutSection() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/quote">Quote</Link>
      </nav>
      <h1>What This Assignment Is About</h1>
      <p>This project is part of my coursework for Advanced Front-End Development. I'm using React and Next.js to advance my skills and build a small app that helps me understand key ideas like components, state, props, and routing.</p>
      <p>It’s quote simple from first glance, but the goal is to learn how, make them interactive, and organize everything clearly with no errors</p>
    </div>
  );
}
