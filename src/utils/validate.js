const yup = require('yup')

const cadastroValidate = yup.object().shape(
	{
		mail: yup.string().required("É necessario um email").email("Insira um email valido"),
		period: yup.mixed().required("É necessario selecionar um periodo").oneOf(['1', '7', '15'], "Voce selecionou um periodo invalido"),
		notify: yup.mixed().required("É necessario selecionar quais são as notificações").oneOf(['0', '1'], "Voce selecionou um tipo de notificação invalida"),
	}
);


module.exports = {
	cadastroValidate
}