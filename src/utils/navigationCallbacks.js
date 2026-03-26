const callbacks = new Map();
let nextId = 1;

export const registerNavigationCallback = (fn) => {
  if (typeof fn !== 'function') return null;
  const id = String(nextId++);
  callbacks.set(id, fn);
  return id;
};

export const consumeNavigationCallback = (id) => {
  if (!id) return null;
  const fn = callbacks.get(String(id));
  callbacks.delete(String(id));
  return typeof fn === 'function' ? fn : null;
};

export const clearNavigationCallback = (id) => {
  if (!id) return;
  callbacks.delete(String(id));
};
