const axios = require('axios');

exports.getusersApi = async () =>  {
    response = await axios.get('http://49.12.77.250:3400/ohioh/api/v1/users');
    const data = await response.data;
    return data;
  };

exports.postUsersApi = async (users) => {
response = await axios.post('http://49.12.77.250:3400/ohioh/api/v1/users', users);
const rep = await response.data;
return rep;

};

