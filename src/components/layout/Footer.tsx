import {PROJECT_SHORT_NAME} from "~/config/constants";

export default function Footer() {
    return (
        <footer className="border-t">
            <div
                className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} {PROJECT_SHORT_NAME}. All Rights Reserved.
                    </p>
                </div>
                {/* TODO: There may be social media icons here */}
            </div>
        </footer>
    );
}