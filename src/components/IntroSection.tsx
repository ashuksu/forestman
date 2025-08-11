import {useTranslation} from 'react-i18next';
import {Container} from "~/components/layout/Container";
import Icon1 from '~/assets/images/icons/1.png';
import Icon2 from '~/assets/images/icons/2.png';
import Icon3 from '~/assets/images/icons/3.png';

export default function IntroSection() {
    const {t} = useTranslation();

    const infoCardsData = [
        {
            icon: Icon1,
            titleKey: 'introSection.card1Title',
            textKey: 'introSection.card1Text',
        },
        {
            icon: Icon2,
            titleKey: 'introSection.card2Title',
            textKey: 'introSection.card2Text',
        },
        {
            icon: Icon3,
            titleKey: 'introSection.card3Title',
            textKey: 'introSection.card3Text',
        },
    ];

    return (
        <section id="intro" className="py-16 bg-[#f9f9f7]">
            <Container className="py-8">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
                    {t('introSection.introTitle')}
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

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

function InfoCard({icon, title, text}: InfoCardProps) {
    return (
        <div
            className="flex flex-col justify-between w-full max-w-[500px] md:w-1/3 bg-white p-6 pb-7 rounded-lg shadow-md min-h-[240px] md:min-h-[300px]">
            <div>
                <div className="flex items-start gap-3 mb-4">
                    {icon}
                    <h3 className="text-xl font-semibold leading-tight pt-1 ">
                        {title}
                    </h3>
                </div>

                <p className="text-md text-gray-700 line-clamp-[8] md:line-clamp-[10]">
                    {text}
                </p>
            </div>
        </div>
    );
}
