const {getusersApi,postUsersApi,postUserLocationsApi,postUserLocationLatApi,postBluetoothEncounterApi} = require('./api_helpers')
const Joi = require('joi');
exports.getusers = async (req, res, next) => {
    getusersApi().then(users => {
        res.send(users)})
        .catch(error =>{
          console.log(error)
        })
}

exports.postUsers = async (req, res, next) => {
    const users = req.body;
    postUsersApi(users).then(response => {
        res.send(response)})
        .catch(error =>{
          console.log(error)
        })
}

exports.postUserLocations = async (req, res, next) =>{
  const userLocations = req.body;
  postUserLocationsApi(userLocations).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}

exports.postUserLocationLat = async (req, res, next) =>{
  
  const userLocationLat = req.body;
  postUserLocationLatApi(userLocationLat).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}

exports.postBluetoothEncounter = async (req, res, next) =>{
  
  const bluetoothEncounter = req.body;
  postBluetoothEncounterApi(bluetoothEncounter).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}