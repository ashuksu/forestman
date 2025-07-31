import {useTranslation} from 'react-i18next';

export default function Contacts() {
    const {t} = useTranslation();

    return (
        <>
            <div className="text-lg text-gray-700">
                <p>
                    {t('common.contacts.email.name')}:{" "}
                    <a href={`mailto:${t('common.contacts.email.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('common.contacts.email.value')}
                    </a>
                </p>
                <p>
                    {t('common.contacts.phone1.name')}:{" "}
                    <a href={`tel:${t('common.contacts.phone1.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('common.contacts.phone1.value')}
                    </a>
                </p>
                <p>
                    {t('common.contacts.phone2.name')}:{" "}
                    <a href={`tel:${t('common.contacts.phone2.value')}`}
                       className="text-blue-500 hover:underline">
                        {t('common.contacts.phone2.value')}
                    </a>
                </p>
                <p>
                    {t('common.socials.telegram.name')}:{" "}
                    <a href={t('common.socials.telegram.value')}
                       className="text-blue-500 hover:underline"
                       data-element="link"
                       aria-label="Contact via Telegram"
                       role="button">
                        {t('common.socials.telegram.text')}
                    </a>
                </p>
            </div>
        </>
    );
}