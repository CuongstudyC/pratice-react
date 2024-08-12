import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { fetchDataRegister } from "../../data/dataUser";

export default function ModelSignUp({ setStatus, setEmailSignIn }:
   { setStatus: React.Dispatch<React.SetStateAction<string>>,
    setEmailSignIn: React.Dispatch<React.SetStateAction<string>>
   }) {
  const [typePassword, setTypePassword] = useState<boolean>(true);
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const hangleSignUp =async () => {
    if(password.length < 8) {
      return;
    }
    if(!email.match(/^[A-Z]\w+@[a-zA-Z]+\.[a-zA-Z]{1,3}$/)) {
      return;
    }
    const name = firstname.concat(` ${lastname}`);
    const data = await fetchDataRegister({name, password, email});
    if(data) {
      setEmailSignIn(email);
      setFirstName('');
      setLastName('');
      setTypePassword(true);
      setEmail('');
      setPassword('');
      setStatus("sign-in");
    }
  }

  return (
    <div className="model-sign-up">
      <div>
        <div className="title-sign-up">
          Sign up
        </div>
        <div className="form-sign-up">
          <div className="wrapper">
            <div className="first-name wrapper-item-sign-up">
              <label htmlFor="first-name-sign-up">First name</label>
              <div className="box-input">
                <input type="text" id="first-name-sign-up"
                  placeholder="Input first name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)} />
              </div>

            </div>
            <div className="last-name wrapper-item-sign-up">
              <label htmlFor="last-name-sign-up">Last name</label>
              <div className="box-input">
                <input type="text" id="last-name-sign-up"
                 placeholder="Input last name"
                 value={lastname}
                 onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
          </div>

          <div>
            <div className="wrapper-item-sign-up">
              <label htmlFor="email-sign-up">Email</label>
              <div className="box-input">
                <input type="email" id="email-sign-up"
                 placeholder="example.email@gmail.com"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          </div>

          <div>
            <div className="wrapper-item-sign-up">
              <label htmlFor="password-sign-up">Password</label>
              <div className="box-input">
                <input type={`${typePassword ? 'password' : 'text'}`} id="password-sign-up"
                 placeholder="Enter at least 8+ characters "
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />
                {
                  typePassword ? <EyeSlash size={32} onClick={() => setTypePassword(false)} /> : <Eye size={32} onClick={() => setTypePassword(true)} />
                }

              </div>
            </div>
          </div>

          <div>
            <div className="button-sign-up" onClick={() => hangleSignUp()}>
              <button>Sign up</button>
            </div>
            <div className="check-login-sign-up">
              <p>Already have an account? <span onClick={() => setStatus("sign-in")}>Log in</span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
