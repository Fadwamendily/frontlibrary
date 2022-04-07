import axios from "axios";
import { requests } from "../requests";

export function createorder(data) {
    return axios.post(requests.ordersapi +'/addcommande', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function getallorders() {
    return axios.get(requests.ordersapi + '/allcommande')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
