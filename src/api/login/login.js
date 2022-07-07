import { instance  } from "../index";

export const getLogin = async (data) => {
    const url = `/login`;
    const response = await instance.get(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json multipart/form-data",
            }
        }
    )
    .then((response) => {
        return response;
    }).catch(error => {
        return error.response;
    })
    return response;
};

export const getSignUpIdCheck = async (data) => {
    const url = `/login/SignUpIdCheck`;
    const response = await instance.get(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json multipart/form-data",
            }
        }
    )
    .then((response) => {
        return response;
    }).catch(error => {
        return error.response;
    })
    return response;
};


export const getFindId = async (data) => {
    const url = `/login/getFindId`;
    const response = await instance.get(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json multipart/form-data",
            }
        }
    )
    .then((response) => {
        return response;
    }).catch(error => {
        return error.response;
    })
    return response;
};

export const getFindPassword = async (data) => {
    const url = `/login/getFindPassword`;
    const response = await instance.get(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json multipart/form-data",
            }
        }
    )
    .then((response) => {
        return response;
    }).catch(error => {
        return error.response;
    })
    return response;
};
