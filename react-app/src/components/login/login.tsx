import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Icon, TextField } from "@material-ui/core";
import { IProps, IState } from "./types";
// import { connect } from "react-redux";
const styles: any = (theme: any) => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	},
	menu: {
		width: 200
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	}
});

class LoginView extends React.Component<IProps, IState> {
	constructor(props: IProps){
		super(props);
	}
	render() {

		const { classes, onChange, username, password }:any = this.props;
		// let { username, password} = state;
		return (
			<div className={classes.root}>
			<form onSubmit={() => {this.props.loginUser} }>
				<div className="form-group">
					<TextField
						id="username"
						label="Username"
						className={classes.textField}
						margin="normal"
						// error={this.state.usernameError !== undefined}
						aria-describedby="username-error-text"
						name="username"
						onChange={onChange}
						value={username}
					/>
				</div>
				<div className="form-group">
					<TextField
						id="password"
						label="Password"
						className={classes.textField}
						margin="normal"
						// error={this.state.passwordError !== undefined}
						aria-describedby="password-error-text"
						name="password"
						type="password"
						onChange={onChange}
						value={password}
					/>
				</div>
				<div className="form-group">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.button}
						// onClick={() => loginUser('admin', 'password')}
					>
						Login
		  <Icon className={classes.rightIcon}>send</Icon>
					</Button>
				</div>
			</form>
		</div>
		)
	}
}
export default (withStyles(styles, { withTheme: true })(LoginView))



// export default connect(mapStateToProps, mapDispatch)(Login);