import axios from 'axios';

const NALURI_API_URL = 'http://localhost:3010/naluri/v1';
export const getData = async (setData) => {
    try {
        const response = await axios.get(`${NALURI_API_URL}/getPI`);
        setData({
            pi: response.data.pi,
            circumference: response.data.circumference,
        });
    } catch (err) {
        console.log(err);
    }
    }