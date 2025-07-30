import {Container} from "~/components/layout/Container";
import {Meta, Title} from "react-head";

export default function Catalog() {
    return (
        <>
            <>
                <Title>Woodcraft Catalog - Forestman Woodcraft</Title>
                <Meta name="description"
                      content="Browse our exquisite collection of handcrafted wooden products, including furniture, decor, and unique gifts."/>
                <Meta name="keywords"
                      content="woodcraft, handcrafted, wood products, wooden gifts, unique wood, artisan wood, forestman, woodworking, catalog, shop"/>
                <Meta name="author" content="Forestman Team"/>

                {/* Open Graph / Social Media Meta Tags for Catalog page */}
                <Meta property="og:title" content="Catalog - Forestman Woodcraft"/>
                <Meta property="og:description"
                      content="Browse our exquisite collection of handcrafted wooden products, including furniture, decor, and unique gifts."/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content="https://yourwebsite.com/catalog"/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Catalog"/>

                {/* Twitter Card Meta Tags for Catalog page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content="Catalog - Forestman Woodcraft"/>
                <Meta name="twitter:description"
                      content="Browse our exquisite collection of handcrafted wooden products, including furniture, decor, and unique gifts."/>
                <Meta name="twitter:image"
                      content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Catalog"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Woodcraft Catalog</h1>
                    <p className="text-lg text-center text-gray-700">
                        Explore our unique collection of handcrafted wooden items.
                    </p>
                    {/* TODO: Create the Catalog page content */}
                </div>
            </Container>
        </>
    )
}