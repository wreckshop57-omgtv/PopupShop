// Wraps every occurrence of "gone" inside the given text with a <span class="ghost-word">
// so it can be animated by CSS. Splits by word boundary to keep punctuation intact.
export const Ghost = ({ text, className = "" }) => {
  const parts = text.split(/(\bgone\b)/gi);
  let ghostIndex = 0;
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (/^gone$/i.test(part)) {
          const delay = ghostIndex % 4; // cycles 0..3 across the page
          ghostIndex += 1;
          return (
            <span
              key={i}
              data-testid="ghost-word"
              className={`ghost-word${delay ? ` delay-${delay}` : ""}`}
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};
