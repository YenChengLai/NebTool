import axios from 'axios';

export default {
    getUsers() {
        return axios.get('http://localhost:3000/users');
    },
    getGroups() {
        return axios.get('http://localhost:3000/groups');
    }
};