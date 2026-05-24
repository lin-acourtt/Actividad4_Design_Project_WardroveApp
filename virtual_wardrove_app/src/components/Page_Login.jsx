import Footer from "./Footer";
import Body_Login from "./Body_Login";
import Header_Login from "./Header_Login";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

const Page_Login = () => {

    return (
    <>
        <LanguageProvider>
        <div className="min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header_Login />
            <Body_Login />
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Login;