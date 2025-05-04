let wakeLock: WakeLockSentinel | null = null;

export async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await (navigator as any).wakeLock.request("screen");
      console.log("Wake lock activé");

      wakeLock?.addEventListener("release", () => {
        console.log("Wake lock relâché");
      });
    }
  } catch (err) {
    console.error(`Erreur wake lock: ${err}`);
  }
}

export function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release();
    wakeLock = null;
  }
}
