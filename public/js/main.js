const form = document.querySelector("#subscription-form")

const inputsRadio = document.querySelectorAll("#subscription-form input[type='radio']")
const inputs = document.querySelectorAll("#mail, #notify")

function getInputsValues() {
	let inputsValues = {}

	inputs.forEach( (input) => {
		inputsValues ={
			... inputsValues,
			[input.getAttribute("name")]: input.value
 		}
	}) 

 	inputsRadio.forEach( (input) => {
 		if(input.checked){
 			inputsValues ={
 				... inputsValues,
 				[input.getAttribute("name")]: input.value
 			}
 		}
 	})

 	return inputsValues;
 	
 } 

function enviarCadastro(event) {
	event.target == form

	const formValues = getInputsValues();

	fetch("/cadastro", {
		method: 'POST',
		headers:{
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formValues)
	})
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	enviarCadastro(e);
})
