export function getRandomElements<T>(array: T[], count: number | null): T[] {
  if (!count) return array;

  const result: T[] = [];
  const indices = new Set<number>();
  
  while (result.length < count) {
    const index = Math.floor(Math.random() * array.length);

    if (!indices.has(index)) {
      indices.add(index);
      result.push(array[index]);
    }
  }

  return result;
}
