import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3/launches"
});

const getLaunches = () =>{
    return axiosInstance.get()
}

export {getLaunches}