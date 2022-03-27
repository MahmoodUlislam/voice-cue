export default function getOccurrences(str) {
  var obj = {};

  str.split(" ").forEach(function (el, i, arr) {
    obj[el] = obj[el] ? ++obj[el] : 1;
  });

  let arr = [];
  for (const el in obj) {
    arr.push({ value: el, count: obj[el] });
  }

  return arr;
}