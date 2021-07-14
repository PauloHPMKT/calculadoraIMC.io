//inputs selectors---------------------------------------
const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

//button click selector----------------------------------
const calcular = document.querySelector('#calcular')

const resultado = document.querySelector('#resultado')


// click function to validate input data------------------------
calcular.onclick = function validarCampos() {
	if (nome.value !=='' && altura.value !== '' && peso.value !== '') {
		calcularIMC()
	} else {
		resultado.textContent = 'Prencha todos os campos!!!'
	}
}

// rule business function and calc-------------------------------
function calcularIMC () {
	const valorIMC = (peso.value /(altura.value * altura.value)).toFixed(1)
	let classificacao = '';
		if(valorIMC < 18.5) {
			classificacao = 'abaixo do peso.';
		}else if(valorIMC < 25){
			classificacao = 'com o peso ideal. Parabens!';
		}else if(valorIMC < 30){
			classificacao = 'levemente acima do peso.';
		}else if(valorIMC < 35){
			classificacao = 'com obesidade grau I.';
		}else if(valorIMC < 40){
			classificacao = 'com obesidade grau II.';
		}else{
			classificacao = 'com obesidade grau III. Cuidado!';
		}	

		resultado.textContent = `${nome.value} seu IMC é ${valorIMC} e você está ${classificacao}`
}



const limparDados = document.querySelector('#clean').onclick = () => {
	if(nome.value =='' && altura.value == '' && peso.value == '') {
		alert(`É necessário conter algum dado nos campos`)
	} else {
		nome.value = ''
		altura.value = ''
		peso.value = ''
		resultado.textContent = ''
	}
	
}



