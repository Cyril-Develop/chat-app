"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({
  onDropImage,
}: {
  onDropImage: (file: File) => void;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onDropImage(file);
      }
      dragCounter.current = 0;
      setIsDragging(false);
    },
    [onDropImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
    maxSize: 4 * 1024 * 1024,
    noClick: true,
    noKeyboard: true,
  });

  // Écoute globale du drag
  useEffect(() => {
    const handleDragEnter = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes("Files")) {
        dragCounter.current++;
        setIsDragging(true);
      }
    };

    const handleDragLeave = () => {
      dragCounter.current--;
      if (dragCounter.current <= 0) {
        setIsDragging(false);
      }
    };

    const handleDrop = () => {
      dragCounter.current = 0;
      setIsDragging(false);
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 z-40 transition duration-150 ${
        isDragging ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        {...getRootProps()}
        className={`w-full h-full flex items-center justify-center ${
          isDragActive ? "bg-background/60 dark:bg-popover/60" : ""
        }`}
        title="Envoyer une image"
      >
        <input {...getInputProps()} />
        <div className="text-gray-600 dark:text-gray-400 font-semibold">
          <p>{isDragActive && "Déposez l'image ici"}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
