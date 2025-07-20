import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



// Hunter API Request
export const fetchHunterData = async (domain) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/osint/hunter`, { domain });
        return response.data;
    } catch (error) {
        console.error("Error fetching Hunter.io data:", error);
        return { error: "Failed to fetch data" };
    }
};



// Netlas API Request
export const fetchNetlasData = async (query) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/osint/netlas`, { query });
        return response.data;
    } catch (error) {
        console.error("Error fetching Netlas data:", error.response?.data || error.message);
        return { error: "Failed to fetch Netlas data" };
    }
};


// VirusTotal API Request
export const fetchVirusTotalData = async (url) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/osint/virustotal`, { url });
        return response.data;
    } catch (error) {
        console.error("Error fetching VirusTotal data:", error);
        return { error: "Failed to fetch data from VirusTotal" };
    }
};