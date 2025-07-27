import {Container} from "~/components/layout/Container";

export default function Error() {
    return (
        <Container className="py-8">
            <div className="flex min-h-80 items-center justify-center flex-col text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p>No pages found</p>
                {/* TODO: Create the Error page content */}
            </div>
        </Container>
    )
}