export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faqs">
      {items.map((q) => (
        <details key={q.question}>
          <summary>
            {q.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{q.answer}</p>
        </details>
      ))}
    </div>
  );
}
