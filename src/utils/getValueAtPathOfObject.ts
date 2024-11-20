export default function getValueAtPathOfObject(
  object: Record<string, unknown>,
  path: string,
  value?: string | number | unknown
) {
  if (typeof object !== 'object' || object === null) {
    return value;
  }

  const pathArray = Array.isArray(path) ? path : path.split('.').filter((key) => key);

  const pathArrayFlat = pathArray.flatMap((part) => (typeof part === 'string' ? part.split('.') : part));

  return pathArrayFlat.reduce((obj, key) => (obj && typeof obj === 'object' ? obj[key] : undefined), object) || value;
}
