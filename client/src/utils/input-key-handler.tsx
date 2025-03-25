export const handleKeydown = (
  e: React.KeyboardEvent<HTMLTextAreaElement | HTMLLabelElement>,
  formSubmit: () => void // Fonction pour soumettre le formulaire
) => {
  const target = e.currentTarget as HTMLElement | null;

  // Vérifier si la touche pressée est "Enter"
  if (e.key === "Enter" && target?.tagName === "TEXTAREA" && !e.shiftKey) {
    e.preventDefault(); // Empêcher le comportement par défaut de "Enter" (nouvelle ligne)
    formSubmit(); // Soumettre le formulaire
  }

  // Vérifier si la touche pressée est "Tab" et si nous sommes dans le Textarea
  if (e.key === "Tab" && target?.tagName === "TEXTAREA") {
    e.preventDefault(); // Empêcher le comportement par défaut de "Tab" (changement de focus)
    const textarea = target as HTMLTextAreaElement;
    const cursorPos = textarea.selectionStart;

    // Insérer un caractère de tabulation ou un espace lorsque "Tab" est pressé (pour l'indentation manuelle)
    const textBeforeCursor = textarea.value.substring(0, cursorPos);
    const textAfterCursor = textarea.value.substring(cursorPos);
    textarea.value = textBeforeCursor + "\t" + textAfterCursor; // Insertion de la tabulation
    textarea.selectionStart = textarea.selectionEnd = cursorPos + 1;
  }

  // Vérifier si "Enter" et "Shift" sont pressés simultanément (pour un saut de ligne dans le textarea)
  if (e.key === "Enter" && e.shiftKey && target?.tagName === "TEXTAREA") {
    // Autoriser le comportement par défaut (ajout d'une nouvelle ligne) si Shift + Enter est pressé
    return; // Laisser le navigateur insérer un saut de ligne (pas besoin de l'empêcher)
  }

  // Gérer le comportement du clic sur le champ de saisie de fichier (via le label)
  if ((e.key === "Enter" || e.key === " ") && target && target.tagName === "LABEL") {
    e.preventDefault(); // Empêcher le comportement par défaut
    const nextSibling = target.nextElementSibling as HTMLElement | null;
    if (nextSibling) {
      nextSibling.click(); // Déclencher le clic sur le champ de saisie de fichier
    }
  }
};

// Fonction pour gérer le clic sur le champ de saisie de fichier via le label
export const handleLabelClick = (fileInputId: string) => {
  const fileInput = document.getElementById(fileInputId) as HTMLElement | null;
  if (fileInput) {
    fileInput.click(); // Déclencher le clic sur le champ de saisie de fichier
  }
};
