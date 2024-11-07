
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost/api",
    // withCredentials:true
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("webapp_token") || localStorage.getItem("doctor_webapp_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("Token added to request:", token);
    }
    else {
        console.log("No token found in local storage.");
    }
    return config;
});
axiosClient.interceptors.response.use(
    
    (response) => {
       
        return response;
    },
    (error) => {
        try {
            const { response } = error;
            if (response && response.status === 401) {
                localStorage.removeItem("webapp_token");
            }
        } catch (err) {
            console.error( err);
        }
        throw error;
    }
);

export default axiosClient;

