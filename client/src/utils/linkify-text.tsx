export const linkifyText = (text: string) => {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const elements = [];
  let lastIndex = 0;

  for (const match of text.matchAll(urlRegex)) {
    const url = match[0];
    const startIndex = match.index ?? 0;

    // Texte avant le lien
    if (startIndex > lastIndex) {
      elements.push(text.slice(lastIndex, startIndex));
    }

    // Lien cliquable (affiché sans https://)
    const displayText = url.replace(/^https?:\/\//, "");

    elements.push(
      <a
        key={startIndex}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Ouvrir le lien"
        aria-label="Ouvrir le lien"
        className="hover:underline"
      >
        {displayText}
      </a>
    );

    lastIndex = startIndex + url.length;
  }

  // Texte après le dernier lien
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
};
