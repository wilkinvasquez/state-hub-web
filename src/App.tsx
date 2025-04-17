import { useCallback, useEffect, useState } from 'react';
import './App.css'
import TemplatePage from './pages/template/template-page';
import StorageService from './services/storages/storage-service';
import LoginPage from './pages/login/login-page';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const token = StorageService.getToken();
		const isAuthenticated = !!token;

		setIsAuthenticated(isAuthenticated);
	}, []);

	const onLogout = useCallback(() => {
		StorageService.clearLocalStorage();
		setIsAuthenticated(false);
	}, []);

	const onLogin = useCallback(() => {
		setIsAuthenticated(true);
	}, []);

	return (
		isAuthenticated
			?
			<TemplatePage onLogout={onLogout} />
			:
			<LoginPage onLogin={onLogin} />
	);
}

export default App
