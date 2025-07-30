import {Container} from "~/components/layout/Container";
import {APP_PATH} from "~/config/constants.ts";
import {Link} from "react-router-dom";
import {Meta, Title} from 'react-head';
import {useTranslation} from 'react-i18next';

export default function Error() {
    const {t} = useTranslation();

    return (
        <>
            <>
                <Title>{t('errorPage.title')}</Title>
                <Meta name="description" content={t('errorPage.description')}/>
                <Meta name="keywords" content={t('errorPage.keywords')}/>
                <Meta name="author" content={t('common.author')}/>

                {/* Open Graph / Social Media Meta Tags for Error page */}
                <Meta property="og:title" content={t('errorPage.title')}/>
                <Meta property="og:description" content={t('errorPage.description')}/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content={t('common.websiteUrl') + '404'}/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Error"/>

                {/* Twitter Card Meta Tags for Error page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content={t('errorPage.title')}/>
                <Meta name="twitter:description" content={t('errorPage.description')}/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Error"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('errorPage.heading')}</h1>
                    <p className="mb-4">{t('errorPage.text')}</p>
                    <Link to={APP_PATH} className="hover:underline">{t('errorPage.goHome')}</Link>
                    {/* TODO: Create the Error page content */}
                </div>
            </Container>
        </>

    )
}