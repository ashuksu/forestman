import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import Title from '~/components/ui/Title';
import InfoCard from '~/components/ui/InfoCard';
import Image from '~/components/ui/Image';

export default function InfoSection() {
    const {t} = useTranslation();

    const infoCardsData = [
        {
            icon: 'icons/1.svg',
            titleKey: 'infoSection.card1.title',
            textKey: 'infoSection.card1.text',
        },
        {
            icon: 'icons/2.svg',
            titleKey: 'infoSection.card2.title',
            textKey: 'infoSection.card2.text',
        },
        {
            icon: 'icons/3.svg',
            titleKey: 'infoSection.card3.title',
            textKey: 'infoSection.card3.text',
        },
    ];

    return (
        <section id="info-section" className="py-16 bg-[var(--secondary)]">
            <Container>
                <Title className="text-center mb-8">{t('infoSection.heading')}</Title>

                <div className="flex flex-col items-center md:items-stretch md:flex-row gap-6">
                    {infoCardsData.map((card, index) => (
                        <InfoCard
                            key={index}
                            icon={
                                <Image
                                    src={card.icon}
                                    alt={`Icon ${index + 1}`}
                                    width={30}
                                    height={30}
                                    className="w-8 h-8 object-contain"
                                />
                            }
                            title={t(card.titleKey)}
                            text={t(card.textKey)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}