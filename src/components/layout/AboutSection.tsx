import {useTranslation} from 'react-i18next';
import Title from '~/components/ui/Title';
import Button from '~/components/ui/Button';
import {BASE_PATH} from '~/config/constants';
import Image from '~/assets/images/pictute4.jpeg';

export default function AboutSection() {
    const {t} = useTranslation();

    return (
        <section id="about-section" className="pt-16 pb-12 md:pb-16">
            <div
                className="w-full max-w-[var(--2xl)] mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:items-stretch gap-6">
                <div className="w-full md:w-1/2">
                    <img
                        src={Image}
                        alt={t('aboutSection.imageAlt')}
                        loading="lazy"
                        className="w-full h-auto md:h-full object-cover rounded-xl md:rounded-l-none 2xl:rounded-xl shadow-md"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6">
                    <Title className="text-center">{t('aboutSection.heading')}</Title>

                    <p className="text-lg text-gray-700 mb-6">
                        {t('aboutSection.text')}
                    </p>

                    <Button href={`${BASE_PATH}about`}>
                        {t('aboutSection.buttonText')}
                    </Button>
                </div>
            </div>
        </section>
    );
}