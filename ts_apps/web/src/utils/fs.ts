import path from 'path'

export const getRootPath = (): string => {
  return path.dirname(path.dirname(__dirname))
}

export const safeJsonParse = (obj?: string): any | undefined => {
  if (!obj) {
    return undefined
  }

  try {
    return JSON.parse(obj)
  } catch (e: any) {
    console.error('json parse fail:', e)
    return undefined
  }
}
