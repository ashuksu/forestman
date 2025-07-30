import {Container} from "~/components/layout/Container";
import {APP_PATH} from "~/config/constants.ts";
import {Link} from "react-router-dom";
import {Meta, Title} from "react-head";

export default function Error() {
    return (
        <>
            <>
                <Title>Page Not Found - Forestman Woodcraft</Title>
                <Meta name="description" content="The page you are looking for could not be found."/>
                <Meta name="keywords" content="404, page not found, error, forestman"/>
                <Meta name="author" content="Forestman Team"/>

                {/* Open Graph / Social Media Meta Tags for Error page */}
                <Meta property="og:title" content="Page Not Found - Forestman Woodcraft"/>
                <Meta property="og:description" content="The page you are looking for could not be found."/>
                <Meta property="og:type" content="website"/>
                <Meta property="og:url" content="https://yourwebsite.com/404"/>
                <Meta property="og:image" content="https://placehold.co/1200x630/cccccc/333333?text=Forestman+Error"/>

                {/* Twitter Card Meta Tags for Error page */}
                <Meta name="twitter:card" content="summary_large_image"/>
                <Meta name="twitter:title" content="Page Not Found - Forestman Woodcraft"/>
                <Meta name="twitter:description" content="The page you are looking for could not be found."/>
                <Meta name="twitter:image" content="https://placehold.co/1200x675/cccccc/333333?text=Forestman+Error"/>
            </>

            <Container className="py-8">
                <div className="flex min-h-80 items-center justify-center flex-col text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="mb-4">The page you are looking for does not exist.</p>
                    <Link to={APP_PATH} className="hover:underline">Go Home</Link>
                    {/* TODO: Create the Error page content */}
                </div>
            </Container>
        </>

    )
}