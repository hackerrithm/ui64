import { connect } from "react-redux";
import { loginUser } from '../../app/user/login/actions';
import LoginView from './login';
import { OwnProps, StateProps, DispatchProps } from './types';
import React, { PureComponent } from "react";
import { IProps, IState } from "./types";


class Login extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			username: '',//undefined,
			usernameError: '',
			password: '',//undefined,
			passwordError: '',
			credentialsError: false,
		};
		
		this.login = this.login.bind(this);
	}

	login = (e?: any) => {
		e.preventDefault();
		let { username, password, credentialsError } = this.state;
		this.props.loginUser(username, password);
		if (credentialsError === true) {
			this.props.history.push("/login");
		} else {
			if (localStorage.getItem("token") !== null || localStorage.getItem("token") !== undefined) {
				this.props.history.push("/profile");
			}
		}


	};

	private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.validate();
		console.log(event);

		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		} as any);
	};

	private validate() {
		if (!this.state.username || this.state.username.length < 3) {
			this.setState({
				usernameError: "Username is too short"
			});
		} else {
			this.setState({
				usernameError: undefined
			});
		}

		if (!this.state.password || this.state.password.length < 3) {
			this.setState({
				passwordError: "Password is too short"
			});
		} else {
			this.setState({
				passwordError: undefined
			});
		}
	}

	render() {
        // const {username, password} = this.props;
        const { username, password } = this.state;
		return (
            <LoginView loginUser={() => this.login()} username={username} password={password} onChange={this.onChange}/>
		);
	}
}


export const mapStateToProps = (state: any): StateProps => {
    return {
        // loginError: state.loginReducer.loginError,
        username: state.loginReducer.username,
        password: state.loginReducer.password,
    };
};

export const mapDispatch = (dispatch): DispatchProps => {
    return {
        loginUser: (username: any, password: any) => dispatch(loginUser(username, password))
    };
};


export default connect(mapStateToProps, mapDispatch)(Login);
