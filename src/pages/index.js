const path = require('path');

async function home(req, res){
	var options = {
		root: path.join(__dirname, '../../views'),
		dotfiles: 'deny',
	}

	return res.sendFile('home.html', options)
}

async function addUserToSub(req, res) {
	
	const {
		email,
		when,
		period,
		code
	} = req.query;

	
}

module.exports = {
	home
}