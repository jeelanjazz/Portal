import axios from "axios"

axios.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = 'AIzaSyB1_luhdK0XaNlh5sySZ_iyuLUPhJpUVxk';
const url = `/accounts:signUp?key=${API_KEY}`;
const loginUrl = `/accounts:signInWithPassword?key=${API_KEY}`;
export const RegisterApi = (inputs)=>{
    let data = {displayName:inputs.name,email:inputs.email,password:inputs.password}
   return axios.post(url, data)
}
export const LoginApi = (inputs)=>{
    let data = {email:inputs.email,password:inputs.password}
   return axios.post(loginUrl, data)
}

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
// api key -- AIzaSyB1_luhdK0XaNlh5sySZ_iyuLUPhJpUVxk