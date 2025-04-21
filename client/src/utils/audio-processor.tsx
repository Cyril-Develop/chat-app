/**
 * Utilitaire pour gérer le traitement audio dans le chat vocal
 */

export interface AudioProcessingContext {
  audioContext: AudioContext | null;
  sourceNode: MediaStreamAudioSourceNode | null;
  gainNode: GainNode | null;
  destinationNode: MediaStreamAudioDestinationNode | null;
  processedStream: MediaStream | null;
}

export function setupAudioProcessing(
  audioStream: MediaStream,
  volume: number
): AudioProcessingContext {
  // Créer un nouveau AudioContext
  const audioContext = new AudioContext();

  // Créer les nœuds audio
  const sourceNode = audioContext.createMediaStreamSource(audioStream);
  const gainNode = audioContext.createGain();
  gainNode.gain.value = volume;
  const destinationNode = audioContext.createMediaStreamDestination();

  // Connecter les nœuds
  sourceNode.connect(gainNode);
  gainNode.connect(destinationNode);

  // Renvoyer le contexte de traitement audio
  return {
    audioContext,
    sourceNode,
    gainNode,
    destinationNode,
    processedStream: destinationNode.stream,
  };
}

export function cleanupAudioProcessing(context: AudioProcessingContext) {
  if (context.audioContext && context.audioContext.state !== "closed") {
    context.audioContext.close();
  }
}
