const setItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
}

const getItem = (key: string) => window.localStorage.getItem(key);

const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
}

export {
  setItem,
  getItem,
  removeItem,
}