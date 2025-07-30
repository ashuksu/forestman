import {Container} from "~/components/layout/Container";
import {Meta, Title} from "react-head";

export default function About() {
    return (
        <>
            <>
                <Title>About Us - Forestman Woodcraft</Title>
                <Meta name="description"
                      content="Learn more about Forestman Woodcraft, our mission, and the passion behind our handcrafted wooden products."/>
                <Meta name="keywords"
                      content="woodcraft, handcrafted, wood products, wooden gifts, unique wood, artisan wood, forestman, woodworking, about us, mission"/>
                <Meta name="author" content="Forestman Team"/>

                {/* Open Graph / Social Media Meta Tags for About page */}
                <Meta property="og:title" content="About Us - Forestman Woodcraft"/>
                <Meta property="og:description"
                      content="Learn more about Forestman Woodcraft, our mission, and the passion behind our handcrafted wooden products."/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content="https://yourwebsite.com/about"/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+About"/>

                {/* Twitter Card Meta Tags for About page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content="About Us - Forestman Woodcraft"/>
                <Meta name="twitter:description"
                      content="Learn more about Forestman Woodcraft, our mission, and the passion behind our handcrafted wooden products."/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+About"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">About Forestman Woodcraft</h1>
                    <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">
                        Forestman Woodcraft is dedicated to creating unique and high-quality wooden products.
                        Each item is carefully handcrafted, reflecting our commitment to traditional artistry and
                        sustainable practices.
                        We believe in the beauty of natural wood and strive to bring warmth and elegance into your home.
                    </p>
                </div>
            </Container>
        </>
    )
}