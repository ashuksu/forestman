import {Container} from "~/components/layout/Container";
import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';
import Contacts from "~/components/Contacts";
import FeedbackForm from "~/components/FeedbackForm";

export default function About() {
    const {t} = useTranslation();

    return (
        <>
            <PageMeta pageKey="aboutPage" pagePath="about"/>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">{t('aboutPage.heading')}</h1>
                    <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">{t('aboutPage.text')}</p>
                    {/* TODO: Create the About page content */}
                </div>
            </Container>
            <Container className="py-15 lg:pb-25">
                <div className="flex flex-col-reverse lg:flex-row justify-center gap-x-6 gap-y-20">
                    <div className="flex-1 lg:flex-1/2 max-w-xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-bold mb-2">{t('contacts.heading')}</h2>
                        <p className="text-lg text-gray-700 mb-4">{t('contacts.text')}</p>
                        <Contacts/>
                        <p className="text-lg text-gray-700 mt-6 whitespace-pre-line">{t('contacts.contactNote')}</p>
                    </div>
                    <div className="flex-1 lg:flex-1/2 max-w-xl mx-auto lg:mx-0">
                        <h2 className="text-2xl font-bold mb-2">{t('form.heading')}</h2>
                        <p className="text-lg text-gray-700 mb-4">{t('form.text')}</p>
                        <FeedbackForm/>
                    </div>
                </div>
            </Container>
        </>
    );
}