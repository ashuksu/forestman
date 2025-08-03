import {Outlet, useNavigate} from 'react-router-dom';
import Header from '~/components/layout/Header.tsx';
import Footer from '~/components/layout/Footer.tsx';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';
import {BASE_PATH} from '~/config/constants';
import ScrollToTop from '~/components/ScrollToTop';

function RedirectHandler() {
    const navigate = useNavigate();
    const routerBasename = BASE_PATH;

    useEffect(() => {
        const redirectPath = localStorage.getItem('redirectPath');
        if (redirectPath) {
            localStorage.removeItem('redirectPath');

            let pathAfterBase = redirectPath;
            if (redirectPath.startsWith(routerBasename)) {
                pathAfterBase = redirectPath.substring(routerBasename.length);
            }
            if (!pathAfterBase.startsWith('/')) {
                pathAfterBase = '/' + pathAfterBase;
            }

            navigate(pathAfterBase, {replace: true});
        }
    }, [navigate, routerBasename]);

    return null;
}

export default function App() {
    // TODO: The logic for determining and setting the theme (light/dark) will be here

    const {i18n} = useTranslation();

    // TODO: before react-helmet-async is updated
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="flex min-h-screen flex-col">
            {/*<Html lang={i18n.language}/> TODO: when will react-helmet-async be updated */}
            <Header/>
            <main className="flex-grow">
                <ScrollToTop/>
                <RedirectHandler/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}