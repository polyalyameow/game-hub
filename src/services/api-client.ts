import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "4bdc7ccce8104cd5899a07494f96bbac"
    }
})