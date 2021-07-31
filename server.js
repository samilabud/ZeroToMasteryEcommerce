const express = require('express');
//const cors = require('cors'); //ya no se necesita
//const bodyParser = require('body-parser');  Ya no se usa, ahora se usa el mismo express, ver debajo
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

//usar el .env si no estamos en produccion, de lo contrario setear las variables en produccion tipo:
     //heroku config:set STRYPE_SECRET_KEY=1234
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRYPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true})) deprecated, usar como se indica debajo
app.use(compression());
app.use(express.urlencoded({extended: false})); //parsear el request por post y html por form url encoded
app.use(express.json()); //parsear el request por json
app.use(enforce.HTTPS({trustProtoHeader:true}));

//app.use(cors()); //ya no se necesita

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname,'client/build','index.html'));
    })
}

app.listen(port, error=>{
    if(error){
        throw error;
    }
    console.log('Server running on port ' + port);

});

app.post('/payment',function(req,res){
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).send({error: stripeErr});
        }else{
            res.status(200).send({success:stripeRes});
        }

    });

})