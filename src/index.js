const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database.js');

const app = express();
	
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.use('/api/task', require('./routes/task.routes.js'));



//Static Files
app.use(express.static(path.join(__dirname, 'public'))); 


// Starting the sv
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});