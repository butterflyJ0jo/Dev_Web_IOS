console.log('Festa');

let convidados = [ 'Joaquim', 'José', 'Silva', 'Xavier']
console.log(`\nconvidados: ${convidados}`);

let y = convidados.unshift('Amanda'); // y = 5
console.log('Amanda Entrou');
console.log(`lista: ${convidados}`);


let x = convidados.pop(); // x = "Xavier"
console.log('\nXavier saiu');
console.log(`lista: ${convidados}`);


let z = convidados.push('Zuleica'); // y = 5
console.log('\nZuleica Entrou');
console.log(`lista: ${convidados}`);


let a = convidados.shift(); // x = "Amanda"
console.log('\nAmanda saiu');
console.log(`lista: ${convidados}`);


console.log('\nSilva saiu');
delete convidados[2];
console.log(`lista: ${convidados}`);

convidados[2]="Silvana"
console.log('\nSilvana Entrou');
console.log(`lista: ${convidados}`);

console.log('\nFicaram 4 pessoas na festa, que são: Joaquim,José,Silvana,Zuleica')

