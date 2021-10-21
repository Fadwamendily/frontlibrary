import axios from "axios";
import { requests } from "../requests";

export function createfile(data) {
    return axios.post(requests.fileapi +'/addfile', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
