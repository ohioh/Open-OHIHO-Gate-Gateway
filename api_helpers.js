const axios = require('axios');
require('dotenv').config()

const user_url = process.env.USERS_URL;
const user_service =  process.env.USER_SERVICE;
const user_location_url = process.env.USER_LOACTIONS_URL;
const user_location_service = process.env.USER_LOCATIONS_SERVICE;
const user_location_lat_url = process.env.USER_LOACTION_LAT_URL;
const user_location_lat_service = process.env.USER_LOCATION_LAT_SERVICE;
const bluetooth_encounter_url = process.env.BLUETOOTH_ENCOUNTER_URL;
const bluetooth_encounter_service = process.env.BLUETOOTH_ENCOUNTER_SERVICE;

exports.getusersApi = async () =>  {
    response = await axios.get(user_url+"/"+user_service);
    const data = await response.data;
    return data;
  };

exports.postUsersApi = async (users) => {
response = await axios.post(user_url+"/"+user_service, users);
const rep = await response.data;
return rep;

};

exports.postUserLocationsApi = async (userLocations)=>{
  response = await axios.post(user_location_lat_url+"/"+locaiton,userLocations);
  const rep = await response.data;
  return rep;
};

exports.postUserLocationLatApi = async (userLocationLat)=>{
  response = await axios.post(user_location_lat_url+"/"+user_location_lat_service,userLocationLat);
  const rep = await response.data;
  return rep;
};

exports.postBluetoothEncounterApi = async (buletoothEncounter)=>{
  response = await axios.post(bluetooth_encounter_url+"/"+bluetooth_encounter_service,buletoothEncounter);
  const rep = await response.data;
  return rep;
};