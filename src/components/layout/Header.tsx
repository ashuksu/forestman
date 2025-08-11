import {APP_PATH} from '~/config/constants';
import logo from '~/assets/images/logo.svg';
import Navigation from '~/components/Navigation';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export default function Header() {
    const {i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-section flex items-center justify-between space-x-6 h-10 sm:h-12 lg:h-15">
                <Link to={APP_PATH} className="logo p-1 flex items-center">
                    <img src={logo} className="h-5 lg:h-8" alt="Logo"/>
                </Link>

                <div className="flex items-center space-x-6">
                    <Navigation/>

                    <div className="flex space-x-2">
                        <button onClick={() => changeLanguage('en')} className="hover:underline">EN</button>
                        <button onClick={() => changeLanguage('uk')} className="hover:underline">UA</button>
                        <button onClick={() => changeLanguage('ru')} className="hover:underline">RU</button>
                    </div>
                </div>
                {/* TODO: Theme switcher and a cart button will go here */}
            </div>
        </header>
    );
}