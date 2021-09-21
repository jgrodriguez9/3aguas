import httpInstance from "../config/api";


export default function Post(props){
    const keys = require('../config/keys')
    const data = props.data
    let config = {
        headers: { 
            "X-Authorization": keys.commerceJsKey,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    return httpInstance.post(props.url, data, config)
}