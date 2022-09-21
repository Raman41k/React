import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

const getUsers = () => {
    return axiosInstance.get('/users')
}

const setUser = (user) => {
    return axiosInstance.post('/users', user)
}

const getComments = () => {
    return axiosInstance.get('/comments')
}

const setComment = (comment) => {
    return axiosInstance.post('/comments', comment)
}

export {
    axiosInstance,
    getUsers,
    setUser,
    getComments,
    setComment
}