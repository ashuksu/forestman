import {useTranslation} from 'react-i18next';
import {Container} from '~/components/layout/Container';
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
        <section id="info" className="py-16 bg-[#f9f9f7]">
            <Container className="py-8">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
                    {t('infoSection.infoTitle')}
                </h2>

                <div className="flex flex-col items-center md:items-stretch md:flex-row gap-6">
                    {infoCardsData.map((card, index) => (
                        <InfoCard
                            key={index}
                            icon={<img src={card.icon} alt={`Icon ${index + 1}`} className="w-8 h-8"/>}
                            title={t(card.titleKey)}
                            text={t(card.textKey)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}