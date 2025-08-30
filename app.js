const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('¡Hola Mundo, EPNewman!');
}); 

app.listen(3000,()=> {
    console.log('Aplicacion ejecutándose en el puerto 3000')
});