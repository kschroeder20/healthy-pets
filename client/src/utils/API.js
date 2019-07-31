import axios from 'axios';

export default {
    getPets: () => {
        return axios.get('/api/pets')
    },
    getPetById: (id) => {
        return axios.get(`/api/pets/${id}`)
    },
    // Saves a Pet to the database
    savePetData: (data) => {
        return axios.post("/api/pets", data);
    },
    deletePet: (id) => {
        return axios.delete(`/api/pets/${id}`)
    },
    updatePet: (info) => {
        return axios.put(`/api/pets/${info.userId}`, info)
    },
    getUsers: () => {
        return axios.get('/api/users')
    },
    getUserById: (id) => {
        return axios.get(`/api/users/${id}`)
    },
    // Saves a Pet to the database
    saveUserData: (data) => {
        return axios.post("/api/users", data);
    },
    deleteUser: (id) => {
        return axios.delete(`/api/users/${id}`)
    },
    updateUser: (info) => {
        return axios.put(`/api/users/${info.userId}`, info)
    },
    downloadPDF: (id) => {
        return axios.get(`/api/pets/pdf/${id}`)
    }
};