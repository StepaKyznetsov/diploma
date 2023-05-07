export function getRandomElements<T>(array: T[], count: number): T[] {
  if (count > array.length)
    throw new Error("Count should be less or equal to array length");

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
