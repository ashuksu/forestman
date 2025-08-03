import {APP_PATH} from '~/config/constants';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const anchorMap: Record<string, string> = {
    'contacts-section': APP_PATH,
    // 'example-section': `${APP_PATH}pageLink`
};

export default function Navigation() {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href') ?? '';
        const anchorId = href.replace('#', '');

        if (!anchorId) return;

        const section = document.getElementById(anchorId);

        if (section) {
            e.preventDefault();
            section.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
            const targetPath = anchorMap[anchorId];

            if (targetPath) {
                navigate(`${targetPath}#${anchorId}`);
            } else {
                console.warn(`Anchor ID "${anchorId}" not found in anchorMap.`);
            }
        }
    };

    return (
        <>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href={`${APP_PATH}catalog`} className="hover:underline">{t('header.catalogLink')}</a>
                <a href={`${APP_PATH}about`} className="hover:underline">{t('header.aboutLink')}</a>
                <a href="#contacts-section" onClick={handleAnchorClick} className="hover:underline">
                    {t('contacts.heading')}
                </a>
            </nav>
        </>
    );
}