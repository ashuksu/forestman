import PageMeta from '~/components/PageMeta';
import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import ProductCard from '~/components/ProductCard.tsx';

export default function Catalog() {
    const {t} = useTranslation();

    const products = [
        {id: 1, name: 'Стул', imageUrl: 'https://picsum.photos/400/300?random=1'},
        {id: 2, name: 'Стол', imageUrl: 'https://picsum.photos/400/300?random=2'},
        {id: 3, name: 'Полка', imageUrl: 'https://picsum.photos/400/300?random=3'},
        {id: 4, name: 'Табурет', imageUrl: 'https://picsum.photos/400/300?random=4'},
    ];

    return (
        <>
            <PageMeta pageKey="catalogPage" pagePath="catalog"/>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">{t('catalogPage.heading')}</h1>
                    <p className="text-lg text-center text-gray-700">{t('catalogPage.text')}</p>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            index={index}
                            product={product}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
}