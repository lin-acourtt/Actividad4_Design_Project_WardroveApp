import Footer from "./Footer";
import Body_Signup from "./Body_Signup";
import Header_Login from "./Header_Login";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

const Page_Signup = () => {

    return (
    <>
        <LanguageProvider>
        <div className="min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header_Login />
            <Body_Signup />
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Signup;