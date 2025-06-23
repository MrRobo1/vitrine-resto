import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
    return (
        <div className="flex flex-col min-h-full">
            {props.children}
        </div>
    );
};