import axios from "axios";
import { API_URL } from "../constants";

export class AuthApi {
    static async register(username, email, password) {
        return axios.post(`${API_URL}/auth/signup`, { 
            username: username, 
            email: email, 
            password: password
        });
    }

    static async login(username, password) {
        return axios.post(`${API_URL}/auth/signin`, { 
            username: username, 
            password: password 
        });
    }
}
