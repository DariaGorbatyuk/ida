export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Не получилось записать данные");
  }
}


export function getAllItems() {
  const length = localStorage.length;
  const res = [];
  for (let i = 0; i < length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    if(item.idea) res.push(item)
  }
  return res;
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log("Не получилось удалить данные");
  }
}
