import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import Button from '~/components/ui/Button';
import {BASE_PATH} from '~/config/constants';

export default function Error() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="errorPage" pagePath="404"/>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('errorPage.heading')}</h1>
                    <p className="mb-4">{t('errorPage.text')}</p>

                    <Button href={BASE_PATH}>{t('errorPage.goHome')}</Button>

                    {/* TODO: Create the Error page content */}
                </div>
            </Container>
        </>
    );
}