import { connect } from "react-redux";
import { loginUser } from "../../app/user/login/actions";
import LoginView from "./login";
// import { OwnProps, StateProps, DispatchProps } from "./types";
import { Button, Icon, TextField } from "@material-ui/core";
import React, { PureComponent } from "react";
import { IProps, IState } from "./types";

class Login extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			username: "", //undefined,
			usernameError: "",
			password: "", //undefined,
			passwordError: "",
			credentialsError: false
		};

		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate() {
		console.log("did update");
		if (this.props.isLogged) {
			this.props.history.push("/profile");
		}
		if (this.props.hasError) {
			this.props.history.push("/login");
		}

		// if (credentialsError === true) {

		// } else {
		// 	if (localStorage.getItem("token") !== null || localStorage.getItem("token") !== undefined) {

		// 	}
		// }
	}

	private login = (e?: any) => {
		e.preventDefault();
		let { username, password } = this.state;
		this.props.loginUser(username, password);
	};

	private onChange = (event: any) => {
		this.validate();
		console.log(event);

		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		} as any);
	};

	private validate = () => {
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
		// const {username, password, classes} = this.props;
		// const { username, password } = this.state;
		const loginform = (
				<form
					onSubmit={() => {
						this.props.onLogin();
					}}
				>
					<div className="form-group">
						<TextField
							id="username"
							label="Username"
							className={this.props.classes.textField}
							margin="normal"
							// error={this.state.usernameError !== undefined}
							aria-describedby="username-error-text"
							name="username"
							onChange={() => {
								console.log("====================================");
								console.log("pressed");
								console.log("====================================");
								this.props.onChange;
							}}
							value={this.props.username}
						/>
					</div>
					<div className="form-group">
						<TextField
							id="password"
							label="Password"
							className={this.props.classes.textField}
							margin="normal"
							// error={this.state.passwordError !== undefined}
							aria-describedby="password-error-text"
							name="password"
							type="password"
							onChange={() => {
								this.props.onChange;
							}}
							value={this.props.password}
						/>
					</div>
					<div className="form-group">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={this.props.classes.button}
						onClick={this.props.onLogin()}
						>
							Login
              <Icon className={this.props.classes.rightIcon}>send</Icon>
						</Button>
					</div>
				// </form>
		);
		return (
			<LoginView
				loginForm={loginform}
				onLogin={() => this.login()}
				username={this.props.username}
				password={this.props.password}
				onChange={() => this.onChange}
			/>
		);
	}
}

export const mapStateToProps = (state: any): any => {
	return {
		// loginError: state.loginReducer.loginError,
		username: state.loginReducer.username,
		password: state.loginReducer.password,
		isLogged: state.loginReducer.isLogged,
		hasError: state.loginReducer.hasError,
		isLoginLoading: state.loginReducer.isLoading
	};
};

export const mapDispatch = (dispatch): any => {
	return {
		loginUser: (username: any, password: any) =>
			dispatch(loginUser(username, password))
	};
};

export default connect(
	mapStateToProps,
	mapDispatch
)(Login);
