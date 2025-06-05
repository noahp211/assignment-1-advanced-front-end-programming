//A component that displays a quote and author and receive prop

export default function QuoteCard({ quote, author }) {
  return (
<div>
    <p>"{quote}"</p>
    <p>– {author}</p>
</div>
  );
}
