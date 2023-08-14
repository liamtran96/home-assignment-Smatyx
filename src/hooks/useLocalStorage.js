export const useLocalStorage = () => {
  const get = (key) => {
    const getItem = localStorage.getItem(key);
    const response = getItem ? JSON.parse(getItem) : [];

    return response;
  };

  const set = (key, data) => {
    localStorage.setItem(key, data);
  };

  return { get, set };
};
