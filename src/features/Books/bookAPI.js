import axios from "axios";
import { requests } from "../requests";

export function createbook(data) {
    return axios.post(requests.bookapi +'/addbook', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getallBooks() {
    return axios.get(requests.bookapi + '/allbook')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}