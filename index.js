const unwrap = async (v) => {
  if (v instanceof Promise)
    return await v;
  return v;
};
const deep_await = async (object) => {
  if (!object) return object;

  if (Array.isArray(object)) {
    for (let i=0;i<object.length;i++) {
      object[i] = await unwrap(object[i]);
    }
  }
  else if (typeof object === 'object') {
    for (const key of Object.keys(object)) {
      const v = object[key];
      object[key] = await unwrap(v);
    }
  }
  else {
    return await unwrap(object);
  }

  return object;
};
module.exports = deep_await;
