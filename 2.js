var r = {};
var a = {'nb': 45};


function isEmpy(obj){
    if (Object.keys(obj).length == 0) {
  return true;
    } else {
  return false;
    }
}
console.log(isEmpy(r));
console.log(isEmpy(a)); 