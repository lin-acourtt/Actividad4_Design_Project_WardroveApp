import Footer from "./Footer";
import Header from "./Header";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

import Body_Labels from "./Body_Labels.jsx";

const Page_Labels = () => {

    return (
    <>
        <LanguageProvider>
        <div className="flex min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header />

            <main className="flex-1">
                <Body_Labels />
            </main>
            
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Labels;