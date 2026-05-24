import Body_Suggestions from "./Body_Suggestions";
import Header from "./Header";
import {LanguageProvider} from "/src/hooks/useContext.jsx"

const Page_Suggestions = () => {

    return (
    <>
        <LanguageProvider>
        <div className="min-h-screen flex-col font-[Nunito] caret-transparent">
            <Header />
            <Body_Suggestions />
        </div>
        </LanguageProvider>

    </>
  )

}

export default Page_Suggestions;