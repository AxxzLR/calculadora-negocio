export const getParameterByName = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export const getDiffTimeInDays = (fMin = 0, fMax = Date.now()) => {
    return (fMax - fMin) / (1000 * 60 * 60 * 24)
    // return (fMax - fMin) / (1000)
}

const REGEX_EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
export const validarEmail = (email) => {
    return REGEX_EMAIL.test(email);
}

export const Perfiles = {
    MASTER: 0,
    ADMIN: 1,
    USER: 2,
}

export const EstatusUsuario = {
    INACTIVO: 0,
    ACTIVO: 1,
}
