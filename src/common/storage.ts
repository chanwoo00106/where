const saveStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const clearStorage = () => {
  localStorage.clear()
}

const getStorage = (key: string): string | null => {
  return localStorage.getItem(key)
}

export default { saveStorage, clearStorage, getStorage }
