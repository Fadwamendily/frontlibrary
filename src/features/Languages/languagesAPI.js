import axios from "axios";
import { requests } from "../requests";

export function getAllLanguegess() {
    return axios.get(requests.languagesapi + '/alllanguage')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}