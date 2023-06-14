import axios from 'axios';
<<<<<<< HEAD
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = `${SERVER_API_URL}/api/tuits`;
=======
const TUITS_API = `https://tuiter-node-server-final.onrender.com/api/tuits`;
>>>>>>> d383d0934a9b6e8707d177fb23cbfe5ac047245c

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}   

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    const tuits = response.data;
    return tuits;
<<<<<<< HEAD

=======
>>>>>>> d383d0934a9b6e8707d177fb23cbfe5ac047245c
}