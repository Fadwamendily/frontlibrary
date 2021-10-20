import axios from "axios";
import { requests } from "../requests";

export function createbook(data) {
    return axios.post(requests.bookapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
