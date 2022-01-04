import axios from "axios";
import { requests } from "../requests";

export function createbook(data) {
    return axios.post(requests.ordersapi +'/addcommande', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getallBooks() {
    return axios.get(requests.ordersapi + '/allcommande')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
/* export function getallBooks() {
    return axios.get(requests.ordersapi + '/allcommande')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
} */