let wakeLock: WakeLockSentinel | null = null;

export async function requestScreenWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await (navigator as any).wakeLock.request("screen");
    }
  } catch (err) {
    console.error(`Erreur wake lock: ${err}`);
  }
}

export function releaseScreenWakeLock() {
  if (wakeLock) {
    wakeLock.release();
    wakeLock = null;
  }
}
