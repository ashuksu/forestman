import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import BannerSlider from '~/components/layout/BannerSlider';
import ContactsSection from '~/components/layout/ContactsSection';
import AboutSection from '~/components/layout/AboutSection';
import InfoSection from '~/components/layout/InfoSection';

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="homePage" pagePath=""/>

            <section
                id="banner-slider-section"
                className="banner-slider w-full max-w-[var(--3xl)] mx-auto mb-4 landscape:-mt-10 landscape:sm:-mt-12 landscape:lg:-mt-15 sm:-mt-12 lg:-mt-15">
                <BannerSlider/>
            </section>

            <section id="next-section">
                <Container className="py-8">
                    <div className="flex min-h-80 items-center justify-center flex-col text-center">
                        <h1 className="text-4xl font-bold mb-4">{t('homePage.welcomeHeading')}</h1>
                        <p className="text-lg text-center text-gray-700">{t('homePage.welcomeText')}</p>
                        {/* TODO: Create the Home page content */}
                    </div>
                </Container>
            </section>

            <AboutSection/>

            <InfoSection/>

            <ContactsSection/>
        </>
    );
}