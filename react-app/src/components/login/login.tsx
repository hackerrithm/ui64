import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// import { IProps, IState } from './types';
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

export interface Props {
	username: string;
	password: string;
	onLogin: Function;
	onChange: any;
	loginForm: any;
}

export interface State {
	username: string;
	password: string;
}

class LoginView extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}
	render() {

		const { classes }: any = this.props;
		// let { username, password} = state;
		return (
			<div className={classes.root}>
				{this.props.loginForm}
			</div>
		)
	}
}
export default (withStyles(styles, { withTheme: true })(LoginView))


