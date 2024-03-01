import path from 'path'

export const getRootPath = (): string => {
  return path.dirname(path.dirname(__dirname))
}
