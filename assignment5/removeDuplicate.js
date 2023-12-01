
//removing duplicate using set 
const removeDuplicate = (arr) => {
return Array.from(new Set(arr))
}
console.log(removeDuplicate([1, 1, 2, 4, 4, 5, 5,]))

//encapsulation
function createPerson(firstName, lastName) {
    var _firstName = firstName; // Private variable
    var _lastName = lastName;   // Private variable
  
    return {
      getFullName: function () {
        return _firstName + " " + _lastName;
      },
  
      setFirstName: function (newFirstName) {
        _firstName = newFirstName;
      },
  
      setLastName: function (newLastName) {
        _lastName = newLastName;
      }
    };
  }
  
  var person = createPerson("John", "Doe");
  console.log(person)
  console.log(person.getFullName()); // Output: "John Doe"
  person.setFirstName("Jane");
  console.log(person.getFullName()); // Output: "Jane Doe"
  