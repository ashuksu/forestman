import {Container} from '~/components/layout/Container';
import BannerSlider from "~/components/layout/BannerSlider";
import {Meta, Title} from 'react-head';
import {useTranslation} from 'react-i18next';

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <>
                <Title>{t('homePage.title')}</Title>
                <Meta name="description" content={t('homePage.description')}/>
                <Meta name="keywords" content={t('homePage.keywords')}/>
                <Meta name="author" content={t('common.author')}/>

                {/* Open Graph / Social Media Meta Tags */}
                <Meta property="og:title" content={t('common.appName')}/>
                <Meta property="og:description" content={t('homePage.description')}/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content={t('common.websiteUrl')}/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Home"/>

                {/* Twitter Card Meta Tags */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content={t('common.appName')}/>
                <Meta name="twitter:description" content={t('homePage.description')}/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Home"/>
            </>

            <section
                className="banner-slider container w-full max-w-[1920px] mx-auto mb-4 landscape:-mt-10 landscape:sm:-mt-12 landscape:lg:-mt-15 sm:-mt-12 lg:-mt-15">
                <BannerSlider/>
            </section>

            <Container className="py-8">
                <section className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('homePage.welcomeHeading')}</h1>
                    <p className="text-lg text-center text-gray-700">{t('homePage.welcomeText')}</p>
                    {/* TODO: Create the Home page content */}
                </section>
            </Container>
        </>
    )
}