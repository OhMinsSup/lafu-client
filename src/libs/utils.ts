export function delay<D = any>(time: number, data: D): Promise<D> {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}
