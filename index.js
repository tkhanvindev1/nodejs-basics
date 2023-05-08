const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/users'))

const PORT = 5051
app.listen(PORT , () => {
    console.log('Server started on port '+ PORT)
});