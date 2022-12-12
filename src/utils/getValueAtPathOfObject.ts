export default function getValueAtPathOfObject(
  object: string,
  path: string,
  value?: any
): any {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter((key) => key)

  const pathArrayFlat = pathArray.flatMap((part) =>
    typeof part === 'string' ? part.split('.') : part
  )

  return pathArrayFlat.reduce((obj, key) => obj && obj[key], object) || value
}
