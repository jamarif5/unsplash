import axios from "axios";
const api = axios.create({
baseURL:'https://api.unsplash.com/',
headers:{
    Authorization:' Client-ID 0TFKHFqMN9Q1cX1dxAes4KEZv-f-zURP7LgLOpz1TsM'

}

});
export default api