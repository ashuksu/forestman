import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import Title from '~/components/ui/Title';
import InfoCard from '~/components/ui/InfoCard';
import Icon1 from '~/assets/images/icons/1.png';
import Icon2 from '~/assets/images/icons/2.png';
import Icon3 from '~/assets/images/icons/3.png';

export default function InfoSection() {
    const {t} = useTranslation();

    const infoCardsData = [
        {
            icon: Icon1,
            titleKey: 'infoSection.card1Title',
            textKey: 'infoSection.card1Text',
        },
        {
            icon: Icon2,
            titleKey: 'infoSection.card2Title',
            textKey: 'infoSection.card2Text',
        },
        {
            icon: Icon3,
            titleKey: 'infoSection.card3Title',
            textKey: 'infoSection.card3Text',
        },
    ];

    return (
        <section id="info-section" className="py-16 bg-[#f9f9f7]">
            <Container>
                <Title className="text-center mb-8">{t('infoSection.infoTitle')}</Title>

                <div className="flex flex-col items-center md:items-stretch md:flex-row gap-6">
                    {infoCardsData.map((card, index) => (
                        <InfoCard
                            key={index}
                            icon={<img src={card.icon} alt={`Icon ${index + 1}`} className="w-8 h-8 object-contain"/>}
                            title={t(card.titleKey)}
                            text={t(card.textKey)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}