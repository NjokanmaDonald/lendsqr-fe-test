import './UsersSummary.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function UsersSummary() {
  return (
    <div className='usersSummary'>
      <div className='usersSummary__Title'>
        <h2>Users</h2>
      </div>    

      <div className='usersSummary__Containers'>
        <div className='usersSummary__Container'>
          <PeopleAltIcon className='usersSummary__Container__UserIcon'/>
          <p className='usersSummary__Container__Text'>Users</p>
          <p className='usersSummary__Container__Number'>2,453</p>
        </div>
        
        <div className='usersSummary__Container'>
          <FontAwesomeIcon icon="users" className='usersSummary__Container__ActiveIcon'/>
          <p className='usersSummary__Container__Text'>Active Users</p>
          <p className='usersSummary__Container__Number'>2,453</p>
        </div>
        
        <div className='usersSummary__Container'>
          <ReceiptLongIcon className='usersSummary__Container__LoansIcon'/>
          <p className='usersSummary__Container__Text'>Users with Loans</p>
          <p className='usersSummary__Container__Number'>12,453</p>
        </div>
        
        <div className='usersSummary__Container'>
          <FontAwesomeIcon icon="database" className='usersSummary__Container__SavingsIcon'/>
          <p className='usersSummary__Container__Text'>users with savings</p>
          <p className='usersSummary__Container__Number'>102,453</p>
        </div>
        
      </div>
    </div>
  )
}

export default UsersSummary