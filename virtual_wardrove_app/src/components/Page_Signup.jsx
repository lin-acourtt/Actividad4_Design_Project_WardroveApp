import Footer from "./Footer";
import Body_Signup from "./Body_Signup";
import Header_Login from "./Header_Login";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

const Page_Signup = () => {

    return (
    <>
        <LanguageProvider>
        <div className="flex min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header_Login />
            <main className="flex-1">
                <Body_Signup />
            </main>
            <Footer />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Signup;