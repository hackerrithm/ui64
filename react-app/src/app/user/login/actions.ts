import * as ActionTypes from "./types";
import axios from 'axios';

const BASE_URL = "http://localhost:7002";

const isLogged = (bool: boolean) => {
	return {
		type: ActionTypes.IS_LOGGED,
		isLogged: bool
	};
};

const loginHasError = (bool: boolean) => {
	return {
		type: ActionTypes.LOGIN_HAS_ERROR,
		hasError: bool
	};
};

const loginIsLoading = (bool: boolean) => {
	return {
		type: ActionTypes.LOGIN_IS_LOADING,
		isLoading: bool
	};
};

export const loginUser = (username: string, password: string) => {
	return async (dispatch: any) => {
		dispatch(loginIsLoading(true));

		if (!username || !password) {
			await dispatch(loginHasError(true));
			await dispatch(loginIsLoading(false));

			return;
		}

		let config = {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			responseType: 'json'
		};

		await axios.post(`${BASE_URL}/auth/login`, JSON.stringify({ username: username, password: password }), config)
			.then((response) => {
				if (response !== null || response !== undefined) {
					dispatch(loginIsLoading(false));
					dispatch(loginHasError(false));
					dispatch(isLogged(true));
					localStorage.setItem("token", <string>response.data.token);
				}
			})
			.catch(e => {
				dispatch(loginHasError(true));
			});
	};
};

const logout = () => {
	localStorage.removeItem("token");
	return {
		type: ActionTypes.LOGOUT
	};
};

export default {
	isLogged,
	loginHasError,
	loginIsLoading,
	loginUser,
	logout
};
