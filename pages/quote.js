//Quote page, using this page to demonstrate props,event handling, state and conditional rendering
//imports 3 components, QuoteCard, Counter, ToggleMessage
import Link from 'next/link';
import QuoteCard from '../components/QuoteCard';
import Counter from '../components/Counter';
import ToggleMessage from '../components/ToggleMessage';

export default function QuotePage() {
  return (
    <div>
      <nav>
    <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/quote">Quote</Link>
      </nav>
      <h1>Quote I Like</h1>
      <p>This one hits especially hard when I'm training(im an amateur boxer) or working late on assignments:</p>
    <QuoteCard
        quote="Discipline is doing what you hate to do, but doing it like you love it."
        author="-Mike Tyson"
      />

      <h2>Try Counter</h2>
    <Counter />

      <h2>Toggle Message</h2>
    <ToggleMessage />
    </div>
  );
}
