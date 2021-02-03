import axios from 'axios';

/** GET REQUEST */
export const getData = async (url) => {
	const {data} = await axios.get(url);
	return data;
};

/** POST REQUEST */
export const postData = async (url, data) => {
	const {data: reponseData} = await axios.post(url, data);
	return reponseData;
};