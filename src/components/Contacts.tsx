import {useTranslation} from 'react-i18next';

export default function Contacts() {
    const {t} = useTranslation();

    return (
        <>
            <div className="text-lg text-gray-700">
                <p>
                    {t('contacts.email.name')}:{" "}
                    <a href={`mailto:${t('contacts.email.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('contacts.email.value')}
                    </a>
                </p>
                <p>
                    {t('contacts.phone1.name')}:{" "}
                    <a href={`tel:${t('contacts.phone1.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('contacts.phone1.value')}
                    </a>
                </p>
                <p>
                    {t('contacts.phone2.name')}:{" "}
                    <a href={`tel:${t('contacts.phone2.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('contacts.phone2.value')}
                    </a>
                </p>
                <p>
                    {t('socials.telegram.name')}:{" "}
                    <a href={t('socials.telegram.value')}
                       className="text-blue-500 hover:underline"
                       data-element="link"
                       aria-label="Contact via Telegram"
                       role="button">
                        {t('socials.telegram.text')}
                    </a>
                </p>
            </div>
        </>
    );
}