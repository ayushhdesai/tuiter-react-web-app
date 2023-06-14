import axios from "axios";
const USERS_URL = `https://tuiter-node-server-final.onrender.com/api/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
    console.log("link : ", `${USERS_URL}/login`)
    console.log("nn");
 const response = await api.post(`${USERS_URL}/login`, {username, password});
 console.log("here");
 const user = response.data;
 console.log(user);
 return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
   };
   export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
   };
   export const updateUser = async (user) => {
    console.log("id", `${USERS_URL}/update`, user);
    const response = await api.put(`${USERS_URL}`, {user});
    return response.data;
   };
   export const register = async ({ username, password }) => { 
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    const user = response.data;
    return user;
   }