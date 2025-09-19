export const saveToStorage = (Key: string, value: any) => {
  localStorage.setItem(Key, JSON.stringify(value));
};

export const loadFromStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const RemoveFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
