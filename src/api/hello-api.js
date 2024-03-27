import axios from "axios";
import { API_URL } from "../constants";
import authHeader from "../helpers/AuthHeaderHelper";

export class HelloApi {
    static async sayHello(jwtTotken, name) {

        const headers = authHeader(jwtTotken);
        const params = { name: name };

        return axios.get(`${API_URL}/say-hello`, { headers, params });
    }
}

