import { useCallback, useState } from 'react';
import Input from '../components/input';
import './login.css';
import Authentication from '../dtos/authentications/authentication';

const Login = () => {
    const [authentication, setAuthentication] = useState<Authentication | null>(null);

    const login = useCallback(() => {

    }, [authentication]);

    return (
        <div className="login-container">
            <div className="login-sub-container">
                <img className="login-logo" src="images/logo.png" alt="" />

                <div className="login-fields">
                    <div className="login-field">
                        <Input
                            title={'Username'}
                            value={authentication?.username}
                            type={'string'}
                            callback={username => setAuthentication({
                                ...authentication,
                                username: username
                            })}
                        />
                    </div>

                    <div className="login-field">
                        <Input
                            title={'Password'}
                            value={authentication?.password}
                            type={'password'}
                            callback={password => setAuthentication({
                                ...authentication,
                                password: password
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;