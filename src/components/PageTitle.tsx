import { pageTitle } from "../types/pageTitle";

export const PageTitle = ({title}:pageTitle) => {
    return (
        <h2
            className="text-3xl 
                            text-center 
                            py-4
                            drop-shadow-lg
                            mt-6
                            mb-12
                            outline-alert 
                            outline 
                            outline-2
                            text-main
                            shadow-xl
                            w-screen
                            "
        >
            {title}
        </h2>
    );
};
