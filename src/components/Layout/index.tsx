import { ReactNode } from "react";
import Head from 'next/head'
import { Footer } from "../Footer";
import { Header } from "../Header";

type layoutProps = {
    children: ReactNode;

}

export function Layout({ children }: layoutProps) {
    return (
        <>
            <Head>
                <title>My page title</title>
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}