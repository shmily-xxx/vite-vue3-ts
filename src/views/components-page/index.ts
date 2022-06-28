const files = import.meta.globEager("./page-desc/*.vue");
console.log(files)
console.log(Object.values(files))
console.log(Object.keys(files))
const arr=Object.values(files).map((v) => v.default)
console.log(arr);
let allComponents = {};
Object.keys(files).forEach(filePath => {
  const reqCom = files[filePath].default;
  // console.log(filePath.split('/')[2].split('.')[0])
  const reqComName = filePath.split('/')[2].split('.')[0];
  allComponents = { ...allComponents, [reqComName]: reqCom };
});
console.log(allComponents)
export default allComponents;