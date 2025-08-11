import {APP_PATH} from '~/config/constants';
import {Link} from 'react-router-dom';
import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';

export default function Error() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="errorPage" pagePath="404"/>

            <div className="container-section py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('errorPage.heading')}</h1>
                    <p className="mb-4">{t('errorPage.text')}</p>
                    <Link to={APP_PATH} className="hover:underline">{t('errorPage.goHome')}</Link>
                    {/* TODO: Create the Error page content */}
                </div>
            </div>
        </>
    );
}