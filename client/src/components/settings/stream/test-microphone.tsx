import { useVoiceStore } from "@/store/voice.store";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TestMicrophoneButton() {
  const [testing, setTesting] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputGainNodeRef = useRef<GainNode | null>(null);
  const outputGainNodeRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Lire inputVolume et outputVolume depuis Zustand
  const inputVolume = useVoiceStore((state) => state.inputVolume);
  const outputVolume = useVoiceStore((state) => state.outputVolume);

  // Effet pour mettre à jour les valeurs de gain lorsque les volumes changent
  useEffect(() => {
    if (inputGainNodeRef.current) {
      inputGainNodeRef.current.gain.value = Math.min(
        1,
        Math.max(0, inputVolume)
      );
    }

    if (outputGainNodeRef.current) {
      outputGainNodeRef.current.gain.value = Math.min(
        1,
        Math.max(0, outputVolume)
      );
    }
  }, [inputVolume, outputVolume]);

  // Effet pour ajuster la taille du canvas à son conteneur
  useEffect(() => {
    if (testing && canvasRef.current && containerRef.current) {
      const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        // Obtenir la largeur du conteneur
        const containerWidth = container.clientWidth;

        // Mettre à jour le canvas
        canvas.width = containerWidth;
        canvas.height = 100; // Garder la hauteur fixe
      };

      // Redimensionner immédiatement
      resizeCanvas();

      // Mettre en place un observateur de redimensionnement
      const resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(containerRef.current);

      // Nettoyer l'observateur lors du démontage
      return () => {
        if (containerRef.current) {
          resizeObserver.unobserve(containerRef.current);
        }
        resizeObserver.disconnect();
      };
    }
  }, [testing]);

  // Effet pour nettoyer lors du démontage du composant
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Effet pour initialiser et réinitialiser le visualiseur en fonction de l'état testing
  useEffect(() => {
    if (testing && canvasRef.current && analyserRef.current) {
      drawVisualizer();
    } else if (!testing && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;

      // Nettoyer le canvas si nécessaire
      if (canvasRef.current) {
        const canvasCtx = canvasRef.current.getContext("2d");
        canvasCtx?.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    }
  }, [testing]);

  const drawVisualizer = () => {
    if (!analyserRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    analyserRef.current.fftSize = 256;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!testing || !analyserRef.current) return;

      try {
        analyserRef.current.getByteFrequencyData(dataArray);

        if (!canvasCtx) return;
        canvasCtx.fillStyle = "rgb(0, 0, 0)";
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        const barWidth = (WIDTH / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 2;

          const gradient = canvasCtx.createLinearGradient(
            0,
            HEIGHT,
            0,
            HEIGHT - barHeight
          );
          gradient.addColorStop(0, "rgb(0, 183, 255)");
          gradient.addColorStop(1, "rgb(0, 120, 255)");

          canvasCtx.fillStyle = gradient;
          canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }

        animationRef.current = requestAnimationFrame(draw);
      } catch (err) {
        console.error("Erreur dans le rendu du visualiseur:", err);
      }
    };

    draw();
  };

  const startTest = async () => {
    if (testing) return;

    try {
      // Créer le contexte audio d'abord
      const audioContext = new window.AudioContext();
      audioContextRef.current = audioContext;

      // Ensuite demander l'accès au microphone
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      streamRef.current = stream;

      // Créer tous les nœuds audio
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      const inputGainNode = audioContext.createGain();
      const outputGainNode = audioContext.createGain();

      // Configurer les nœuds
      analyser.smoothingTimeConstant = 0.85;
      inputGainNode.gain.value = Math.min(1, Math.max(0, inputVolume));
      outputGainNode.gain.value = Math.min(1, Math.max(0, outputVolume));

      // Stocker les références
      inputGainNodeRef.current = inputGainNode;
      outputGainNodeRef.current = outputGainNode;
      analyserRef.current = analyser;

      // Connecter les nœuds
      source.connect(inputGainNode);
      inputGainNode.connect(analyser);
      analyser.connect(outputGainNode);
      outputGainNode.connect(audioContext.destination);

      setTesting(true);
    } catch (err) {
      console.error("Erreur lors de l'accès au micro :", err);
      alert("Impossible d'accéder au microphone. Vérifiez les permissions.");
    }
  };

  const stopTest = () => {
    // Arrêter l'animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Arrêter le stream et nettoyer les ressources
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
    }

    audioContextRef.current = null;
    inputGainNodeRef.current = null;
    outputGainNodeRef.current = null;
    analyserRef.current = null;

    setTesting(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Button
        size="lg"
        variant="default"
        className="text-button w-full"
        onClick={testing ? stopTest : startTest}
      >
        {testing ? "Arrêter le test" : "Vérifions ça !"}
      </Button>

      {testing && (
        <div ref={containerRef} className="flex flex-col items-center w-full">
          <canvas
            ref={canvasRef}
            className="w-full border border-popover rounded-md"
            height="100"
          />
        </div>
      )}
    </div>
  );
}
