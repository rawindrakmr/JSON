var people='{"person1":{"name":"laurance","age":"40","location":"Toronto"},"person2":{"name":"mike","age":"20","location":"New York"}}'

// console.log(people.person1)
console.log(typeof(people))

var myObj=JSON.parse(people)
console.log(typeof(myObj))

console.log(myObj)

console.log(myObj.person1)

var data=JSON.stringify(myObj)
console.log(data)
console.log(typeof(data))