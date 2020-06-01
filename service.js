const {getusersApi,postUsersApi} = require('./api_helpers')

exports.getusers = async (req, res, next) => {
    getusersApi().then(users => {
        res.send(users)})
        .catch(error =>{
          console.log(error)
        })
}

exports.postUsers = async (req, res, next) => {
    const users = {
        user_id: req.body.user_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        country: req.body.country,
        is_infected: req.body.is_infected,
        tracking_save_duration : req.body.tracking_save_duration,
        bluetooth_save_duration: req.body.bluetooth_save_duration,
        phone: req.body.phone,
        zip_code: req.body.zip_code

      };
    postUsersApi(users).then(response => {
        res.send(response)})
        .catch(error =>{
          console.log(error)
        })
}