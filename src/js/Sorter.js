export default function orderByProps(obj, [first, second]) {
  const data = [];
  const keys = Object.keys(obj);
  
  for (const key of keys) {
    if (key === first || key === second) {
      data.push({ key, value: obj[key] });
    }
  }

  const sort = keys.filter(key => key !== first && key !== second).sort()
  for (const key of sort) {
    if (key !== first && key !== second) {
      data.push({ key, value: obj[key] });
    }
  }
  return data;
}