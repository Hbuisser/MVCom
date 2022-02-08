import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
	// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmJhMWM1MTYzM2U3ZTI0NTgxNTg0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzk4NjI1MiwiZXhwIjoxNjQ0MjQ1NDUyfQ.l_16qC7pXVaonTHN8gzb5mmdBs4kyVKOUOAL3goIPQ4";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
