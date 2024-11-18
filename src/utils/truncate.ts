const truncate = (str: string, length: number = 190): string => {
  if (str.length >= length) {
    return str.length > 10 ? `${str.substring(0, length)}...` : str
  } else {
    return str
  }
}

export default truncate
