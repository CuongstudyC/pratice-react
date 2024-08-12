import { User } from "phosphor-react";
import { useGlobal } from "../globalContext";
import Model from "./Model";
import UserActive from "./UserActive";



export default function Login() {
  const { user, setActiveModel, activeModel } = useGlobal();
  return (
    <>
    <div className="account">
      <div className="account-wrapper">
        {/* <div
          className="language"
          onClick={() => setLanguage(language === "EN" ? "VI" : "EN")}
        >
          {language}
        </div> */}
        <div>
          {
            !user ? <User size={18} color="#171A1FFF"
            onClick={() => setActiveModel(activeModel ? false: true)}/> : 
            <UserActive avatar={(user !== undefined) ? (user.avatar  === null ? "": user.avatar) : 'none'}></UserActive>
            
          }

        </div>
      </div>
    </div>
    <Model ></Model>
    </>
  )
}
