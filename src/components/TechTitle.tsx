import { techTitle } from "../types/techtitle";

export const TechTitle = ({title}:techTitle) => {
    return (
        <h2
            className="text-3xl 
                            text-center 
                            py-4
                            drop-shadow-lg
                            my-4
                            outline-alert 
                            outline 
                            outline-2
                            text-main
                            shadow-xl
                            "
        >
            {title}
        </h2>
    );
};
