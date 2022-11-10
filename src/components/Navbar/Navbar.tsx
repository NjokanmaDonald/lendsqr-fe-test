import { useState } from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }
  return (
    <div className="navbar">
        <div className='navbar__Info'>
            <img src='/images/Union.png' className='navbar__Logo'/>
            <img src='/images/lendsqr.png' className='navbar__Name' />
        </div>

        <div className='navbar__Search'>
            <input placeholder='Search for anything' />
            <SearchIcon className='navbar__SearchIcon'/>
        </div>

        {
        !open ?
        <div className='navbar__HamburgerNav'>
            <MenuIcon onClick={openMenu}/>
        </div>
        :
        <div className='navbar__HamburgerNav'>
            <CloseIcon onClick={openMenu}/>
                <div className='navbar__Hamburger__Right'>
                <p className='navbar__Right__Text'>Docs</p>
                <NotificationsNoneIcon className='navbar__Right__Icon'/>
                <AccountCircleIcon className='navbar__Right__Icon'/>
                <div className='navbar__PersonalInfo'>
                    <p>Adedeji</p>
                    <ArrowDropDownIcon className='navbar__Right__Icon'/>
                </div>
            </div>
        </div>
        }

        
        <div className='navbar__Right'>
            <p className='navbar__Right__Text'>Docs</p>
            <NotificationsNoneIcon className='navbar__Right__Icon'/>
            <AccountCircleIcon className='navbar__Right__Icon'/>
            <div className='navbar__PersonalInfo'>
                <p>Adedeji</p>
                <ArrowDropDownIcon className='navbar__Right__Icon'/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar