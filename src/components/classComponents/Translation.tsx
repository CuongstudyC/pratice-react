import { useGlobal } from "../common/globalContext"

export default function Translation({children} : {children : string}) {
  const {Translate} = useGlobal();
  return (
    <>{Translate(children)}</>
  )
}
