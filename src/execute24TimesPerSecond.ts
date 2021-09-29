// https://nodejs.org/en/docs/guides/timers-in-node/

const ONE_SECOND = 1000
const INTERVAL = ONE_SECOND / 24

export async function execute24TimesPerSecond(fn: () => void | Promise<void>) {
  const interval = setInterval(fn, INTERVAL)

  setTimeout(() => clearInterval(interval), Number(interval) * 5, interval)
}
