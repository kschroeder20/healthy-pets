import axios from 'axios';

export default {
    getPets: () => {
        return axios.get('/api/pets')
    },
    getPetById: (id) => {
        return axios.get(`/api/pets/${id}`)
    },
    // Saves a Pet to the database
    savePet: (petData) => {
        return axios.post("/api/pets", petData);
    },
    deletePet: (id) => {
        return axios.delete(`/api/pets/${id}`)
    },
    updatePet: (id) => {
        return axios.update(`/api/pets/${id}`)
    }
};