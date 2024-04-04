export const useBodyLock = () => {
  const lock = (): void => {
    const body = document.querySelector('body')
    body?.classList.add('lock')
  }
  const unlock = (): void => {
    const body = document.querySelector('body')
    body?.classList.remove('lock')
  }

  return { lock, unlock }
}
