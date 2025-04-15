import { useCallback, useState } from 'react';
import './login-page.css';
import UserService from '../../services/users/user-service';
import Authentication from '../../dtos/authentications/authentication';
import StorageService from '../../services/storages/storage-service';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import AuthenticationResult from '../../dtos/authentications/authentication-result';
import Result from '../../dtos/results/result';

const LoginPage = () => {
    const [authentication, setAuthentication] = useState<Authentication | null>(null);

    const login = useCallback(() => {
        UserService.authenticate<AuthenticationResult>(authentication).then((result: Result<AuthenticationResult>) => {
            StorageService.setToken(result.data!.token);
            StorageService.setUsername(result.data!.username);
        });
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

                    <div className='login-button'>
                        <Button
                            title={'Login'}
                            buttonClassName={'sth-button sth-button-secondary sth-button-sm'}
                            showLoading={false}
                            disabled={false}
                            callback={login}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;