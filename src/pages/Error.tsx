import {APP_PATH} from '~/config/constants';
import PageMeta from '~/components/PageMeta';
import Button from '~/components/ui/Button';
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
                    <Button href={APP_PATH}>{t('errorPage.goHome')}</Button>
                    {/* TODO: Create the Error page content */}
                </div>
            </div>
        </>
    );
}