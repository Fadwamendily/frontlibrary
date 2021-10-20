import { requests } from "../requests";
import axios from 'axios'

axios.defaults.withCredentials = true

export function uploadAvatar(data) {
    return axios.put(requests.userapi + '/avatar/' + data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function updateUser(data) {
    return axios.put(requests.userapi + '/updateUserById/' + data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function sendMail(data) {
    return axios.put(requests.userapi + '/sendMail'+ data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

///get me api request
export function getMe() {
    return axios.get(requests.userapi + '/getme'  , {credentials : true})
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}