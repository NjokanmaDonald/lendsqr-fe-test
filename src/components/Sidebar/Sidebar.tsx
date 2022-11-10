import './Sidebar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Link } from 'react-router-dom';


function Sidebar() {

  
  return (
    <>
    <div className="sidebar">
      <div className='sidebar__Head1__Container'>
      <div className="sidebar__Content">
        <FontAwesomeIcon icon="briefcase" className='sidebar__Head1Icon'/>
        <p className='sidebar__Head1'>Switch Organization</p>
        <FontAwesomeIcon icon="angle-down" className='sidebar__Head1Icon'/>
        </div>
      </div>

      <div className='sidebar__Head2__Container'>
      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Head2Icon'/>
        <p className='sidebar__Head2'><Link to='/' style={{textDecoration: "none", color: "#213F7D"}}>Dashboard</Link></p>
        </div>
      </div>

      <div className='sidebar__Head3__Container'>
      <div className="sidebar__Head3__Content">
          <p className='sidebar__Head3'>Customers</p>
        </div>
      </div>

      <div className="sidebar__Content">
        <PeopleAltIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Users</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="users" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Guarantors</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="usd" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Loans</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="handshake" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Decision Models</p>
      </div>

      <div className="sidebar__Content">
        <SavingsIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Savings</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Loan Requests</p>
      </div>

      <div className="sidebar__Content">
        <PersonAddAltIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>WhiteList</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="user-times" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Karma</p>
      </div>

      <div className='sidebar__Head3__Container'>
      <div className="sidebar__Head3__Content">
        <p className='sidebar__Head3'>Businesses</p>
      </div>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="briefcase" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Organization</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Loan Products</p>
      </div>

      <div className="sidebar__Content">
        <AccountBalanceIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>SavingProducts</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Fees and Charges</p>
      </div>

      <div className="sidebar__Content">
        <PhonelinkRingIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Transactions</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="cog" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Services</p>
      </div>

      <div className="sidebar__Content">
        <EngineeringIcon  className='sidebar__Icon'/>
        <p className='sidebar__Item'>Services Account</p>
      </div>

      <div className="sidebar__Content">
        <ReceiptLongIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Settlements</p>
      </div>

      <div className="sidebar__Content">
        <SignalCellularAltIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Reports</p>
      </div>

      <div className='sidebar__Head3__Container'>
      <div className="sidebar__Head3__Content">
        <p className='sidebar__Head3'>Settings</p>
      </div>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Preferences</p>
      </div>

      <div className="sidebar__Content">
        <FontAwesomeIcon icon="home" className='sidebar__Icon'/>
        <p className='sidebar__Item'>Fees and Pricing</p>
      </div>

      <div className="sidebar__Content">
        <ContentPasteIcon className='sidebar__Icon'/>
        <p className='sidebar__Item'>Audit Logs</p>
      </div>
    </div>
    </>
  )
}

export default Sidebar