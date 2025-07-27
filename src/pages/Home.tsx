import {Container} from '~/components/layout/Container';
import BannerSlider from "~/components/layout/BannerSlider";

export default function Home() {
    return (
        <>
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