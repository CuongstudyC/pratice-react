import { useGlobal } from "../globalContext"

export default function UserActive({avatar}: {avatar: string}) {
  const {logout} = useGlobal();
  return (
    <div className="avatar" onClick={logout}>
        <img src={avatar} alt="" />
    </div>
  )
}
