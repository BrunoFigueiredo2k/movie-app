import {getData, postData} from './ajax';

const baseUrl = "http://localhost:8080/"
const formsUrl = `${baseUrl}api/v1/contactForms`;

export const getForms = () => {
    return getData(formsUrl);
}

export const postForm = (data) => {
    return postData(formsUrl, data);
}