import {ReactNode} from "react";

export default function Layout({ children }: {
    children: ReactNode;
}) {
    return <main className="layout">{children}</main>;
}
