const path = require ('path');

const { cadastroValidate } = require ('../utils/validate.js');

async function home(req, res){
	var options = {
		root: path.join(__dirname, '../../views'),
		dotfiles: 'deny',
	}

	return res.sendFile('home.html', options)
}

async function addUserToSub(req, res) {

	const {
		mail,
		period,
		notify
	} = req.body;

	try{

		await cadastroValidate.validate({
			mail,
			period,
			notify
		})

	}catch(err){
		console.log(err.errors)
		return res.status(400).json({error: err.errors})	

	}


	return res.sendStatus(200)
	
}

module.exports = {
	home,
	addUserToSub
}