import { RouteComponentProps } from 'react-router';

interface IDefaultProps extends RouteComponentProps<{}> {
    name?: any;
    classes?: any;
    theme?: any;
}

export interface IProps extends Partial<IDefaultProps> {
    // id: any;
    // text: string;
    // history?:any
    // isLoginPending?: boolean;
    // isLoginSuccess?: boolean;
    // loginError?: string;
    username?: any;
    password?: any;
    // login(email: string, password: string): void;
    loginUser?: Function;
    onChange?: any
    // readonly dispatch: Function;
}

export interface IState {
    username: string;
    usernameError?: string;
    password: string;
    passwordError?: string;
    credentialsError: boolean;
}

export interface IContext { }

export type StateProps = Pick<IProps, "username" | "password">;
export type OwnProps = Pick<IProps, "loginUser">;
export type DispatchProps = Pick<IProps, "loginUser">;