import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function app({children}) {
    return(
        <div className="App">
            <Head>
                <title>Tech-Blog</title>
            </Head>

            <Header></Header>
            <main>{children}</main> 
            <Footer></Footer>
        </div>
    )
}