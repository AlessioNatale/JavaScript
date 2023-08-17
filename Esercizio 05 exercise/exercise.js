const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1;

// facendo così viene aggiunto solo un riferimento 
// ma non viene duplicato l'oggetto che quindi resta soltanto uno

// Modify the property `firstName` of the `person2` in "Simon".

//metodo1

const person2={}

for(let key in person1){
  person2[key]=person1[key]
}

person2.firstName="Simon"

//metodo2

const person2=Object.assign({},person1)

person2.firstName="Simon"


console.log(person1);
console.log(person2);
