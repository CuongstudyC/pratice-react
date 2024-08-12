import '../../../css/header.css'
import ActionHeader from './ActionHeader'

import Logo from './Logo'
import MainContent from './MainContent'


export default function Header() {
  return (
    <div className='header'>
        <div className='container'>
           <div className='header-wrapper'>
                <Logo></Logo>
                <MainContent></MainContent>
                <ActionHeader></ActionHeader>
           </div>
        </div>
    </div>
  )
}
