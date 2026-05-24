import Footer from "./Footer";
import Header from "./Header";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

import Body_Categories from "./Body_Categories.jsx";

const Page_Categories = () => {

    return (
    <>
        <LanguageProvider>
        <div className="flex min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header />
            <main className="flex-1">
                <Body_Categories />
            </main>
            
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Categories;