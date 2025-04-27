import { Icons } from "@/components/Icons";

export const linkifyText = (text: string) => {
  if (!text) return null;

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
    const displayText = new URL(url).hostname.replace(/^www\./, "");

    elements.push(
      <a
        key={startIndex}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title="Visiter le lien"
        aria-label="Visiter le lien"
        className="hover:underline inline-flex items-center gap-1"
      >
        <Icons.externalLink width={16} height={16} />
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
