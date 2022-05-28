import axios from "axios";

const url = 'https://neko-cafe-back.herokuapp.com/auth/test';
//без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)

export const RequestsApi = {
    postRequest(checked: boolean) {
        return axios.post(url , {success: checked})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })

    }
}