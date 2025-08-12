import BannerSlider from '~/components/layout/BannerSlider';
import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';
import ContactsSection from '~/components/layout/ContactsSection';
import InfoSection from '~/components/layout/InfoSection.tsx';

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="homePage" pagePath=""/>

            <section
                className="banner-slider container w-full max-w-[1920px] mx-auto mb-4 landscape:-mt-10 landscape:sm:-mt-12 landscape:lg:-mt-15 sm:-mt-12 lg:-mt-15">
                <BannerSlider/>
            </section>

            <section id="next-section">
                <div className="container-section py-8">
                    <div className="flex min-h-80 items-center justify-center flex-col text-center">
                        <h1 className="text-4xl font-bold mb-4">{t('homePage.welcomeHeading')}</h1>
                        <p className="text-lg text-center text-gray-700">{t('homePage.welcomeText')}</p>
                        {/* TODO: Create the Home page content */}
                    </div>
                </div>
            </section>

            <InfoSection/>

            <ContactsSection/>
        </>
    );
}