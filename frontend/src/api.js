import axios from "axios";

const URI='http://localhost:8081'
const URI1 = 'http://localhost:1111'

//const addUser = () => axios.post(`${URI}/re/add`)
const addFeed = () => axios.post(`${URI1}/addfed`)


export {addFeed}