const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')

const app = express();
app.use(express.json()); 
app.use(cors())

mongoose.connect('mongodb+srv://std:std1234@cluster0.b1201.mongodb.net/101203463_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


app.use(employeeRouter);




const port = process.env.PORT || 8080
app.listen(port, () => { console.log('Server is running http://localhost:8080/') })