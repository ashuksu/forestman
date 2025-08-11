import {useTranslation} from 'react-i18next';
import Contacts from '~/components/Contacts';
import FeedbackForm from '~/components/FeedbackForm';

export default function ContactsSection() {
    const {t} = useTranslation();

    return (
        <section id="contacts-section">
            <div className="container-section py-15 lg:pb-25">
                <div id="contacts" className="flex flex-col-reverse lg:flex-row justify-center gap-x-6 gap-y-20">
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
            </div>
        </section>
    );
}