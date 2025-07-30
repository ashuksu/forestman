import {Container} from "~/components/layout/Container";
import {Meta, Title} from "react-head";
import {useTranslation} from 'react-i18next';

export default function Catalog() {
    const {t} = useTranslation();

    return (
        <>
            <>
                <Title>{t('catalogPage.title')}</Title>
                <Meta name="description" content={t('catalogPage.description')}/>
                <Meta name="keywords" content={t('catalogPage.keywords')}/>
                <Meta name="author" content={t('common.author')}/>

                {/* Open Graph / Social Media Meta Tags for Catalog page */}
                <Meta property="og:title" content={t('catalogPage.title')}/>
                <Meta property="og:description" content={t('catalogPage.description')}/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content={t('common.websiteUrl') + 'catalog'}/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Catalog"/>

                {/* Twitter Card Meta Tags for Catalog page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content={t('catalogPage.title')}/>
                <Meta name="twitter:description" content={t('catalogPage.description')}/>
                <Meta name="twitter:image"
                      content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Catalog"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('catalogPage.heading')}</h1>
                    <p className="text-lg text-center text-gray-700">{t('catalogPage.text')}</p>
                    {/* TODO: Create the Catalog page content */}
                </div>
            </Container>
        </>
    )
}