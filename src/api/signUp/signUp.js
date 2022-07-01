import { instance  } from "../index";

export const postSignUp = async (data) => {
    const url = `/Sign-Up`;
    
    const response = await instance.post(
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
