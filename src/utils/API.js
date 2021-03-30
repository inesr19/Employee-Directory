import axios from "axios"; 

axios({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      return axios.get(data)
    }
  });