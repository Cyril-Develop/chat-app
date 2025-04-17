import { useCallback, useRef } from "react";

export function useImageHandlers(setImage: (file: File | null) => void) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const resetImage = useCallback(() => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [setImage]);

  const removeImage = useCallback(() => {
    resetImage();
  }, [resetImage]);

  return {
    fileInputRef,
    resetImage,
    removeImage,
  };
}
