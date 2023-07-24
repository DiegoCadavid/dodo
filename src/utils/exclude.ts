const exclude = <T extends object, Key extends keyof T> (data: T, keys: string[]): Omit<T, Key> => {
  return Object.fromEntries( Object.entries(data).filter(([key]) => !keys.includes(key))) as Omit<T, Key>;   
}

export default exclude;