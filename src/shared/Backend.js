import axios from 'axios';
import { BASE_URL } from '../config';
import { GET_TOKEN } from './Storage';
import { LOGGER } from './Methods';

const GET_HEADER = () => {
    const token = GET_TOKEN();

    if (token) {
        return {
            'Content-Type': 'application/json',
            Authorization: token
        }
    };

};

export const SERVER_REQUEST = async (endpoint, type, body) => {
    try {
        const response = type.toLowerCase() === 'post'
            ? await axios.post(`${BASE_URL}${endpoint}`, body, { headers: GET_HEADER() })
            : await axios.get(`${BASE_URL}${endpoint}`, { headers: GET_HEADER() });

        LOGGER(endpoint, response.data);
        return response.data;
    } catch (error) {
        LOGGER(`${endpoint} error`, HANDLE_ERROR(error.message));
        return HANDLE_ERROR(error.message);
    }
};

export const NEW_SERVER_REQUEST = async (endpoint, type, body) => {
    try {
        const response = type.toLowerCase() === 'post'
            ? await axios.post(`${BASE_URL}${endpoint}`, body, { headers: GET_HEADER() })
            : await axios.get(`${BASE_URL}${endpoint}`, { headers: GET_HEADER() });

        LOGGER(endpoint, response);
        return response;
    } catch (error) {
        LOGGER(`${endpoint} error`, HANDLE_ERROR(error));
        return HANDLE_ERROR(error.message);
    }
};

export const HANDLE_ERROR = (errorMessage) => ({
    data: null,
    message: errorMessage,
    status: '99'
});
