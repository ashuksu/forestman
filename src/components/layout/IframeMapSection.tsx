import {useTranslation} from 'react-i18next';
import Title from '@/components/ui/Title';
import Container from '@/components/layout/Container';

export default function IframeMapSection() {
    const {t} = useTranslation();

    return (
        <section id="map-section" className="bg-[var(--secondary)] py-16">
            <Container>
                <Title className="text-center">{t('mapSection.heading')}</Title>
                <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-8">
                    {t('mapSection.text')}
                </p>

                <div className="w-full h-[400px] md:h-[500px] rounded-lg shadow-md overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1700.6268166995803!2d36.23255659433676!3d50.00487874660844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sse!4v1755007791393!5m2!1sru!2sse"
                        width="1500"
                        className="w-full h-[400px] md:h-[500px] rounded-xl shadow-md"
                        height="400"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t('mapSection.heading')}
                    />
                </div>
            </Container>
        </section>
    );
}