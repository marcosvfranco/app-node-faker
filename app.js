const {faker} = require('@faker-js/faker');

const primeiroNome = faker.name.firstName();
const animal = faker.animal.type();

console.log(primeiroNome, animal);