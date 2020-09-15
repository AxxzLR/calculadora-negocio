import { routes } from '../routes'
const _DEV_AMBIENT = 'CALCULADORA_NEGOCIOx1'
const config = {
    DEV_AMBIENT: _DEV_AMBIENT,
    API_URL: 'http://localhost:3001/api/',
    // API_URL:'/api/',
    INITIAL_STATE: {
        DEV_AMBIENT: _DEV_AMBIENT,
        lastSession: Date.now(),
        userSession: { isLogged: false },
        appSession: { actualRoute: routes.LOGIN, nextRoute: {} }
    }
}



export default config