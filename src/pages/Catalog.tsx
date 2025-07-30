import {Container} from "~/components/layout/Container";
import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';

export default function Catalog() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="catalogPage" pagePath="catalog" />

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('catalogPage.heading')}</h1>
                    <p className="text-lg text-center text-gray-700">{t('catalogPage.text')}</p>
                    {/* TODO: Create the Catalog page content */}
                </div>
            </Container>
        </>
    );
}