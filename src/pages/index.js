import path from 'path';

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

	console.table({
		mail,
		period,
		notify
	})

	return res.sendStatus(200)
}

export {
	home,
	addUserToSub
}