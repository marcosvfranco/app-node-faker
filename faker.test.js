const {faker} = require('@faker-js/faker');

test('funcao firstName do faker sempre retorna uma string', () => {
    expect(typeof faker.name.firstName()).toBe('string');
})

test('funcao firstName do faker nunca pode retornar um valor vazio', () => {
    expect(faker.name.firstName()).toBeDefined();
})
