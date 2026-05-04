export function WpContent({ html, className = "" }) {
  if (!html) return null;
  return (
    <div
      className={`wp-content text-base leading-7 text-zinc-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

