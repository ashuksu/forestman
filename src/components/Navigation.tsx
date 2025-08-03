import {APP_PATH} from "~/config/constants";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Navigation() {
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const handleContactsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const contactsSectionId = 'contacts-section';

        const isOnHomePageOrAboutPage = location.pathname === APP_PATH || location.pathname === `${APP_PATH}about`;

        if (isOnHomePageOrAboutPage) {
            e.preventDefault();
            const section = document.getElementById(contactsSectionId);

            if (section) {
                section.scrollIntoView({behavior: 'smooth', block: 'start'});
            } else {
                console.warn(`Section with ID ${contactsSectionId} not found on current page.`);
                navigate(`${APP_PATH}#${contactsSectionId}`);
            }
        } else {
            navigate(`${APP_PATH}#${contactsSectionId}`);
        }
    };

    return (
        <>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link to={`${APP_PATH}catalog`} className="hover:underline">{t('header.catalogLink')}</Link>
                <Link to={`${APP_PATH}about`} className="hover:underline">{t('header.aboutLink')}</Link>
                <a href={`#contacts-section`} onClick={handleContactsClick} className="hover:underline">
                    {t('contacts.heading')}
                </a>
            </nav>
        </>
    );
}