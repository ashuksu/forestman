import {Container} from "~/components/layout/Container";
import {Meta, Title} from "react-head";
import {useTranslation} from 'react-i18next';

export default function About() {
    const {t} = useTranslation();

    return (
        <>
            <>
                <Title>{t('aboutPage.title')}</Title>
                <Meta name="description" content={t('aboutPage.description')}/>
                <Meta name="keywords" content={t('aboutPage.keywords')}/>
                <Meta name="author" content={t('common.author')}/>

                {/* Open Graph / Social Media Meta Tags for About page */}
                <Meta property="og:title" content={t('aboutPage.title')}/>
                <Meta property="og:description" content={t('aboutPage.description')}/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content={t('common.websiteUrl') + 'about'}/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+About"/>

                {/* Twitter Card Meta Tags for About page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content={t('aboutPage.title')}/>
                <Meta name="twitter:description" content={t('aboutPage.description')}/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+About"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('aboutPage.heading')}</h1>
                    <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">{t('aboutPage.text')}</p>
                </div>
            </Container>
        </>
    )
}