import './SidebarResponsive.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

function SidebarResponsive() {

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

  return (
    <div className="sidebarResponsive">
        {!open ? 
            <MenuIcon className="sidebarResponsive__MenuIcon" onClick={openMenu}/>
        :
        <>
            <CloseIcon className="sidebarResponsive__MenuIcon" onClick={openMenu}/>
            <div className="sidebarResponsive1">
                <div className='sidebarResponsive__Head1__Container'>
                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="briefcase" className='sidebarResponsive__Head1Icon'/>
                    <p className='sidebarResponsive__Head1'>Switch Organization</p>
                    <FontAwesomeIcon icon="angle-down" className='sidebarResponsive__Head1Icon'/>
                    </div>
                </div>

                <div className='sidebarResponsive__Head2__Container'>
                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Head2Icon'/>
                    <p className='sidebarResponsive__Head2'>Dashboard</p>
                    </div>
                </div>

                <div className='sidebarResponsive__Head3__Container'>
                <div className="sidebarResponsive__Head3__Content">
                    <p className='sidebarResponsive__Head3'>Customers</p>
                    </div>
                </div>

                <div className="sidebarResponsive__Content">
                    <PeopleAltIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Users</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="users" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Guarantors</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="usd" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Loans</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="handshake" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Decision Models</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <SavingsIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Savings</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Loan Requests</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <PersonAddAltIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>WhiteList</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="user-times" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Karma</p>
                </div>

                <div className='sidebarResponsive__Head3__Container'>
                <div className="sidebarResponsive__Head3__Content">
                    <p className='sidebarResponsive__Head3'>Businesses</p>
                </div>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="briefcase" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Organization</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Loan Products</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <AccountBalanceIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>SavingProducts</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Fees and Charges</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <PhonelinkRingIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Transactions</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="cog" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Services</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <EngineeringIcon  className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Services Account</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <ReceiptLongIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Settlements</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <SignalCellularAltIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Reports</p>
                </div>

                <div className='sidebarResponsive__Head3__Container'>
                <div className="sidebarResponsive__Head3__Content">
                    <p className='sidebarResponsive__Head3'>Settings</p>
                </div>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Preferences</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <FontAwesomeIcon icon="home" className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Fees and Pricing</p>
                </div>

                <div className="sidebarResponsive__Content">
                    <ContentPasteIcon className='sidebarResponsive__Icon'/>
                    <p className='sidebarResponsive__Item'>Audit Logs</p>
                </div>
                </div>
        </>}
    </div>
  )
}

export default SidebarResponsive