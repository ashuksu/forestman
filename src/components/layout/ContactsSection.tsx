import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import Title from '~/components/ui/Title';
import Contacts from '~/components/Contacts';
import FeedbackForm from '~/components/FeedbackForm';

export default function ContactsSection() {
    const {t} = useTranslation();

    return (
        <section id="contacts-section" className="py-16 lg:pb-20">
            <Container>
                <div id="contacts" className="flex flex-col-reverse lg:flex-row justify-center gap-x-6 gap-y-16">
                    <div className="flex-1 lg:flex-1/2 max-w-xl mx-auto lg:mx-0">
                        <Title>{t('contacts.heading')}</Title>

                        <p className="text-lg text-gray-700 mb-4">{t('contacts.text')}</p>

                        <Contacts/>

                        <p className="text-lg text-gray-700 mt-6 whitespace-pre-line">{t('contacts.contactNote')}</p>
                    </div>
                    <div className="flex-1 lg:flex-1/2 max-w-xl mx-auto lg:mx-0">
                        <Title>{t('form.heading')}</Title>

                        <p className="text-lg text-gray-700 mb-4">{t('form.text')}</p>

                        <FeedbackForm/>
                    </div>
                </div>
            </Container>
        </section>
    );
}