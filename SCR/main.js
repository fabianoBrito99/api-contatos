const express = require('express')
const app = express();

app.get('/', function(request, response){
    return response.send('API Funcioando ...');
   
    //response.send('API Funcionando...');
});
app.get('/autor', function(request, response){
    return response.send('Autor: Fabiano Brito');
   
    //response.send('API Funcionando...');
});
app.get('/sobre', function(request, response){
    const info = {
        nome: 'Fabiano Brito',
        email: 'fabiano@gmail.com',
        telefone: "(69) 99999-7777"


    }
    return response.json(info)
});


app.listen(3000, function(){
    console.log('API Iniciada na porta: 3000')
});
