import {Container} from "~/components/layout/Container";
import {APP_PATH} from "~/config/constants.ts";
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <Container className="py-8">
            <div className="flex min-h-80 items-center justify-center flex-col text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="mb-4">No pages found</p>
                <Link to={APP_PATH} className="hover:underline">Go Home</Link>
                {/* TODO: Create the Error page content */}
            </div>
        </Container>
    )
}