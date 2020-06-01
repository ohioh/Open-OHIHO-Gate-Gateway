const express = require('express');
const axios = require('axios')
const app = express();
app.use(express.json());

const api_helper = require('./api_helpers')
const {getusers,postUsers} = require('./service')
const gatewayPrefix = '/gateway/ohioh';

app.get('/', (req, res) => {
    res.send('Welcom to Ohioh gateway')

});

app.get(gatewayPrefix+'/users', getusers);
app.post(gatewayPrefix+'/users', postUsers);

app.listen(3000, () => console.log('Listening on port 3000'));