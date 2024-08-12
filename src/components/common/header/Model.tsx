import { EnvelopeSimple, Eye, EyeSlash, LockKey } from "phosphor-react";
import { useGlobal } from "../globalContext";
import {  useRef, useState} from "react";


export default function Model() {
  const { activeModel, setActiveModel, setUser, login } = useGlobal();
  const refModel = useRef<HTMLDivElement>(null!);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const refPassword = useRef<HTMLInputElement>(null!);
  const [visiblePass, setVisiblePass] = useState<boolean>(false);

  const hangleClickModel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (refModel.current && !refModel.current.contains(e.target as Node)) {
      setActiveModel(false);
      setEmail("");
      setPassword("");
      setVisiblePass(false);
      const pass = refPassword.current;
      pass.type = "password";
    }
  }

  const hangleSignIn = () => {
    const findUser = login(email,password);
    if(findUser) {
      setUser(findUser);
      setEmail("");
      setPassword("");
      setActiveModel(false);
      setVisiblePass(false);
      const pass = refPassword.current;
      pass.type = "password";
    }
  }

  const hangleCancel = () =>{
    setEmail("");
    setPassword("");
    setActiveModel(false);
    setVisiblePass(false);
    const pass = refPassword.current;
    pass.type = "password";
  }

  const hangleClickEye = () => {
    const pass = refPassword.current;
    pass.type === "password" ? pass.type = "text" : pass.type = "password";
    setVisiblePass(visiblePass ? false: true);
  }

  return (
    <div className={`box-modal ${activeModel ? 'active' : ''}`} onClick={(e) => hangleClickModel(e)}>
      <div className="model-account" ref={refModel}>
        <div className="model-content">
          <h2>Sign Up</h2>
          <span>Welcome back</span>

          <div className="form">
            <div className="group">
              <div className="group-input">
                <label htmlFor="email">Email</label>
                <div className="group-content">
                  <EnvelopeSimple size={20}  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="group-input input-pass">
                <label htmlFor="password">Password</label>
                <div className="group-content">
                  <LockKey size={20} />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={refPassword}
                  />
                  <div onClick={() => hangleClickEye() }>
                  {
                    visiblePass ? <Eye size={32} /> : <EyeSlash size={20}/>
                  }               
                  
                  </div>
                  
                </div>
              </div>

              <div className="box-forgot-password">
                <div className="sign-up">
                  <div>
                    Don't have an <br />
                    account?
                  </div>
                  <div>
                    sign up
                  </div>
                </div>

                <div className="forgot-password">
                  <div>Forgot password?</div>
                </div>
              </div>

              <div className="sign-in">
                <div>
                  <button onClick={() => hangleCancel()}>Cancel</button>
                </div>
                <div>
                  <button onClick={() => hangleSignIn()}>Sign In</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
