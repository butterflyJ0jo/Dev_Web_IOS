let myHTML = '<ul>'
const Mercado = ['algodão', 'acetona', 'esmalte','sabonete', 'creme hidratante' ];

Mercado.forEach((number, index, array) => {
	myHTML += `<li>${number}</li>`;
});
myHTML += '</ul>';
// https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer