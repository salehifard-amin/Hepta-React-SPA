import { Fragment } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

export default function Layout( { children } ) {
    
    return (
        <Fragment>
            <Header />
            { children }
            <Footer />
        </Fragment>
    )
}