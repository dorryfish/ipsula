const obj = {
  prop1: null,
  prop2: "value",
  prop3: false,
  prop4: "another value"
};

for (let key in obj) {
  if (obj[key] === null || obj[key] === false) {
    delete obj[key];
  }
}

console.log(obj);
