import axios from 'axios'

const httpInstance = axios.create({
    baseURL: "https://api.chec.io"
})

httpInstance.interceptors.response.use(null, error => {
    console.log(error)
    console.log(error.response)
    if(error.response === undefined){
        alert("Hola estamos teniendo problemas de conexión con el servidor intente más tarde.")
    }else{
        return Promise.reject(error);    
    }    
});


export default httpInstance;