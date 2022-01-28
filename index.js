const express = require ('express');

const { home, addUserToSub } = require('./src/pages');

const port = process.env.PORT || 3000;
const app = express();

// Define uses
app.use(express.static('public'))
app.use(express.json());

// Define routes
app
.get('/', home)
.post('/cadastro', addUserToSub)


// Start server
app.listen(port, ()=>{
	console.log("Runnig server ...")
})