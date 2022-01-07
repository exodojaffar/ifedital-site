const express = require('express');

const { 
	home
	} = require('./src/pages');


const port = process.env.PORT || 3000;
const app = express();

// Define uses
app.use(express.static('public'))

// Define routes
app
.get('/', home)


// Start server
app.listen(port, ()=>{
	console.log("Runnig server ...")
})