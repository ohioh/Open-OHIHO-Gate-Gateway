const express = require('express');
const axios = require('axios')
const app = express();
app.use(express.json());
require('dotenv').config()

const {getusers,postUsers,postUserLocations,postUserLocationLat,postBluetoothEncounter} = require('./service')
const gatewayPrefix = '/gateway/ohioh';

app.get('/', (req, res) => {
    res.send('Welcom to Ohioh gateway')

});

app.get(gatewayPrefix+'/users', getusers);
app.post(gatewayPrefix+'/users', postUsers);
app.post(gatewayPrefix+'/user_locations',postUserLocations);
app.post(gatewayPrefix+'/user_location_latitude',postUserLocationLat);
app.post(gatewayPrefix+'/bluetooth-encounter',postBluetoothEncounter);


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`));