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
  const schema = {
    user_id: Joi.string().min(3).required(),
    first_name: Joi.string().alphanum().min(3).max(30).required(),
    last_name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().integer().required(),
    country: Joi.string().alphanum().min(3).max(30).required(),
    is_infected: Joi.boolean().required(),
    tracking_save_duration: Joi.number().integer().required(),
    bluetooth_save_duration: Joi.number().integer().required(),
    phone: Joi.string().regex(/\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/),
    zip_code: Joi.string().regex(/^\d{5}$/)
   

  };
  const result = Joi.validate(req.body, schema)
  if(result.error){
    res.status(400).send(result.error.details[0].message)
    return;
  }
    const users = req.body;
    postUsersApi(users).then(response => {
        res.send(response)})
        .catch(error =>{
          console.log(error)
        })
}

exports.postUserLocations = async (req, res, next) =>{
  const schema = {
    user_id: Joi.string().min(3).required(),
    location_id: Joi.string().required(),
    splitted: Joi.boolean().required(),
    location_type: Joi.number().integer().required(),
    longitude: Joi.number().required(),
    speed: Joi.number().integer().required(),
    arrival: Joi.boolean().required()
  };
  const result = Joi.validate(req.body, schema)
  if(result.error){
    res.status(400).send(result.error.details[0].message)
    return;
  }
  const userLocations = req.body;
  postUserLocationsApi(userLocations).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}

exports.postUserLocationLat = async (req, res, next) =>{
  const schema = {
    location_id: Joi.string().min(3).required(),
    latitude: Joi.number().required(),
    departure: Joi.boolean().required()
  };
  const result = Joi.validate(req.body, schema)
  if(result.error){
    res.status(400).send(result.error.details[0].message)
    return;
  }
  const userLocationLat = req.body;
  postUserLocationLatApi(userLocationLat).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}

exports.postBluetoothEncounter = async (req, res, next) =>{
  const schema = {
    user_id: Joi.string().min(3).required(),
    encounter_user_id: Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema)
  if(result.error){
    res.status(400).send(result.error.details[0].message)
    return;
  }
  const bluetoothEncounter = req.body;
  postBluetoothEncounterApi(bluetoothEncounter).then(response => {
    res.send(response)
  })
  .catch(error => {
    console.log(error)
  })
}