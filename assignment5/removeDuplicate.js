
//removing duplicate using set 
const removeDuplicate = (arr) => {
return Array.from(new Set(arr))
}
console.log(removeDuplicate([1,1,2,4,4,5,5,]))