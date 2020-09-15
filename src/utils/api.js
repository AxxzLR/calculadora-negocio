import config from './config'
const BASE_URL = config.API_URL
const callApi = async (endpoint, options = {}) => {
    try {
        options.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        const url = BASE_URL + endpoint;
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        return { hasError: true, message: error.message }
    }
}

const APIFetch = {
    POST(body, endpoint) {
        return callApi(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },
    GET(endpoint) {
        return callApi(`${endpoint}`);
    }
}

// const APIMethods = {
//     Login(user) {
//         return APIFetch.GET(`users/Login/${user.Correo}/${user.Contraseña}`)
//     },
//     GetUsers(key) {
//         return APIFetch.GET(`users/${key}`)
//     },
//     GetUser(key, id) {
//         return APIFetch.GET(`users/${key}/${id}`)
//     },
//     CreateUser(user){
//         return APIFetch.POST(user, `users/createuser`)
//     }
//     ,
//     UpdateUser(user){
//         return APIFetch.POST(user, `users/updateuser`)
//     }
// }

const callFakeApi = async () => {
    try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        return data
    } catch (error) {
        return { hasError: true, message: error.message }
    }
}

const APIMethods = {
    async Login(x) {
        const response = await callFakeApi()
        return response.User
    },
    async GetUsers(x) {
        const response = await callFakeApi()
        return response.Users
    },
    async GetUser(key, id) {
        const response = await callFakeApi()
        return {
            Usuario: {
                ...response.Users.Usuarios.filter(x => x.IDUsuario === id)[0],
                Contraseña: ""
            },
            "hasError": false,
            "message": ""
        }
    },
    async CreateUser(x) {
        const response = await callFakeApi()
        return response.Test
    },
    async UpdateUser(x) {
        const response = await callFakeApi()
        return response.Test
    }
}

export default APIMethods