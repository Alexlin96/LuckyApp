// 深拷贝
export const deepClone = (obj, hash = new WeakMap()) => {
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (obj === null || typeof obj !== 'object') return obj
  if (hash.has(obj)) return hash.get(obj)
  // 如果obj是数组，那么 obj.constructor是[Function Array]
  // 如果obj是对象，那么 obj.constructor是[Function Object]
  const t = new obj.constructor()
  hash.set(obj, t)
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], hash)
    }
  }
  return t
}
