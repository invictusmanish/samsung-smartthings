export const baseImagePath = (path) => {
  if (path.includes('https') || path.includes('http')) {
    return path;
  }
  return require(`../assets/images/${path}`);
};
