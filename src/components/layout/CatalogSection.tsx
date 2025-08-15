import {useTranslation} from 'react-i18next';
import Title from '~/components/ui/Title';
import Button from '~/components/ui/Button';
import {BASE_PATH} from '~/config/constants';
import Image from '~/components/ui/Image';

export default function CatalogSection() {
    const {t} = useTranslation();

    return (
        <section id="catalog-section" className="pt-12 pb-16">
            <div
                className="w-full max-w-[var(--2xl)] mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:items-stretch gap-6">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right p-6">
                    <Title className="text-center">{t('catalogSection.heading')}</Title>

                    <p className="text-lg text-gray-700 mb-6">
                        {t('catalogSection.text')}
                    </p>

                    <Button href={`${BASE_PATH}catalog`}>
                        {t('catalogSection.buttonText')}
                    </Button>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="pictute2.jpeg"
                        alt={t('catalogSection.imageAlt')}
                        width={330}
                        height={220}
                        className="w-full md:h-full object-cover rounded-xl md:rounded-r-none 2xl:rounded-xl shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}