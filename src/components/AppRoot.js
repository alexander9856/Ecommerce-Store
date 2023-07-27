import { Outlet } from 'react-router-dom';
import { Header } from './Header';
export const AppRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
