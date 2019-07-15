import axios from 'axios';

export default {
    getPets: () => {
        return axios.get('/api/pets')
    },
    getPetByEmail: (email) => {
        email = email.replace(/[^a-zA-Z0-9]/g, '');
        return axios.get(`/api/pets/${email}`)
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