import {Container} from '~/components/layout/Container';
import BannerSlider from "~/components/layout/BannerSlider";
import {Meta, Title} from 'react-head';

export default function Home() {
    return (
        <>
            <>
                <Title>Forestman Woodcraft - Handcrafted Wooden Products</Title>
                <Meta name="description"
                      content="Explore the unique collection of handcrafted wooden items at Forestman. Perfect gifts and home decor."/>
                <Meta name="keywords"
                      content="woodcraft, handcrafted, wood products, wooden gifts, unique wood, artisan wood, forestman, woodworking"/>
                <Meta name="author" content="Forestman Team"/>

                {/* Open Graph / Social Media Meta Tags */}
                <Meta property="og:title" content="Forestman Woodcraft"/>
                <Meta property="og:description"
                      content="Discover exquisite handcrafted wood products from Forestman. Unique and high-quality wooden items for your home and gifts."/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content="https://yourwebsite.com/"/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Home"/>

                {/* Twitter Card Meta Tags */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content="Forestman Woodcraft"/>
                <Meta name="twitter:description"
                      content="Discover exquisite handcrafted wood products from Forestman. Unique and high-quality wooden items for your home and gifts."/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Home"/>
            </>

            <section
                className="banner-slider container w-full max-w-[1920px] mx-auto mb-4 landscape:-mt-10 landscape:sm:-mt-12 landscape:lg:-mt-15 sm:-mt-12 lg:-mt-15">
                <BannerSlider/>
            </section>

            <Container className="py-8">
                <section className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">Home Page</h1>
                    <p className="text-lg text-center text-gray-700">
                        Discover exquisite woodcraft creations.
                    </p>
                    {/* TODO: Create the Home page content */}
                </section>
            </Container>
        </>
    )
}