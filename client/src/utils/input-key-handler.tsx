export const handleKeydown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
  const target = e.currentTarget as HTMLElement | null;
  if ((e.key === "Enter" || e.key === " ") && target) {
    e.preventDefault();
    const nextSibling = target.nextElementSibling as HTMLElement | null;
    if (nextSibling) {
      nextSibling.click();
    }
  }
};

export const handleLabelClick = (fileInputId: string) => {
  const fileInput = document.getElementById(fileInputId) as HTMLElement | null;
  if (fileInput) {
    fileInput.click();
  }
};