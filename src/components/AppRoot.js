import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
export const AppRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
