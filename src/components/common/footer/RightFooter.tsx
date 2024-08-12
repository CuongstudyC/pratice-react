import { EnvelopeSimple } from "phosphor-react";
import { useGlobal } from "../globalContext";
import { useState } from "react";

export default function RightFooter() {
  const {user} = useGlobal();
  const [email,setEmail] = useState<string>(user ? user.email : '');
  return (
    <div className="promotions">
      <div>
        <span>Receive new promotions</span>
      </div>
      <div className="content">
        <span>Duis ea tempor commodo amet reprehende</span>
      </div>
      <div className="mail">
        <div className="mail-item">
          <EnvelopeSimple size={24} color="#DEE1E6FF" />
          <input type="email" placeholder="Input your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <button onClick={() =>  {
            alert(email ? `Thank you ${email} subscribed` : 'You must required your email');
            setEmail('');
          } }>Subscribe</button>
        </div>

      </div>

      <div className="icon">
          <img src="../../phosphor-Twitter.svg" alt="" />
          <img src="../../phosphor-facebook.svg" alt="" />
          <img src="../../phosphor-Linkedin.svg" alt="" />
          <img src="../../phosphor-Youtube.svg" alt="" />
      </div>
      <div className="brand">
            <span>© 2022 Brand, Inc.</span>
            <span>•</span>
            <span>Privacy</span>
            <span>•</span>
            <span>Terms</span>
            <span>•</span>
            <span>Sitemap</span>
        </div>
    
    </div>
  )
}
