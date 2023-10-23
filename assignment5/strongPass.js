//description
//check how many of strings are weak and how many are strong
//if string contains any of this "@,#,$,*" is strong else string is weak;
//sample input = ['test123', 'new@t', 'mon*y', 'nrupul']
//ouptut = weak strong strong weak

const passArr = ["test123", "new@t", "mon*y", "nrupul"];
function strongPassword(arr) {
  let output = "";
  for (let ele of arr) {
    let res = checkStr(ele);
    output += res + " ";
  }
  console.log(output);
}
strongPassword(passArr);
function checkStr(str) { 
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@" || str[i] === "#" || str[i] === "*" || str[i] === "$") {
      return "strong";
    }
  }
  return "weak";
}


