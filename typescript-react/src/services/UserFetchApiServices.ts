import axios from "axios";

export class UserFetchApiServices {
    
    private static URL: string = "https://jsonplaceholder.typicode.com"; 
    
    public static getAllUser() {
        let UserURL: string = `${this.URL}/users`;
        return axios.get(UserURL); //npm i axios @types/axios
    }

} 