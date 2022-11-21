import axios from "axios";

const baseUrl = "https://myspace22222222.herokuapp.com/";

export function customGET(url) {
    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.get(baseUrl + url, config);
}


export function customPOST(url, body) {
    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.post(baseUrl + url, body, config);
}

export function customPUT(url, body) {
    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.put(baseUrl + url, body, config);
}

export function customDELETE(url) {
    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.delete(baseUrl + url, config);
}