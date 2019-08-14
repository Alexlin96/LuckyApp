// 深拷贝
// export const deepClone = (obj,hash = new WeakMap()) =>{
//     if(obj instanceof RegExp) return new RegExp(obj);
//     if(obj instanceof Date) return new Date(obj);
//     if(obj === null || typeof obj !== 'object') return obj;
//     if(hash.has(obj)) return hash.get(obj);
//     // 如果obj是数组，那么 obj.constructor是[Function Array]
//     // 如果obj是对象，那么 obj.constructor是[Function Object]
//     let t = new obj.constructor();
//     hash.set(onj,t)
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             t[key] = deepClone(obj[key],hash);
//         }
//     }
//     return t;
// }
export const deepClone = (data)=>{
    const t = typeOf(data);
    let o;
  
    if (t === 'array') {
      o = [];
    } else if (t === 'object') {
      o = {};
    } else if (t === 'date') {
      return new Date(data.valueOf());
    } else {
      return data;
    }
  
    if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
        o.push(deepCopy(data[i]));
      }
    } else if (t === 'object') {
      for (let i in data) {
        o[i] = deepCopy(data[i]);
      }
    }
    return o;
}
