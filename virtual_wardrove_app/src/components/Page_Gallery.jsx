import Footer from "./Footer";
import Header from "./Header";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

import Body_Gallery from "./Body_Gallery.jsx";

const Page_Gallery = () => {

    return (
    <>
        <LanguageProvider>
        <div className="flex min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header />
            <main className="flex-1">
                <Body_Gallery />
            </main>
            
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Gallery;