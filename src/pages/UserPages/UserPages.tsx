import {useState, useEffect} from 'react'
import './UserPages.scss'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UsersSummary from '../../components/UsersSummary/UsersSummary';
import { Link } from 'react-router-dom';

function UserPages() {
  const [open, setOpen] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const openMenu = () => {
    setOpen(!open)
  }

    useEffect(() => {
        axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then(res => {
                console.log(res);
                setResults(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
    <UsersSummary />
    <div className='userPages'>
      <table>
      <thead>
      <tr>
          <th>Organizations <FontAwesomeIcon icon='sort-amount-desc' onClick={openMenu}/></th>
          <th>Username <FontAwesomeIcon icon='sort-amount-desc'/></th>
          <th>Email <FontAwesomeIcon icon='sort-amount-desc'/></th>
          <th>Phone Number <FontAwesomeIcon icon='sort-amount-desc'/></th>
          <th>Date Joined <FontAwesomeIcon icon='sort-amount-desc'/></th>
          <th>Status <FontAwesomeIcon icon='sort-amount-desc'/></th>
          <th></th>
      </tr>
      </thead>

      <tbody>
      {results?.map((result) => { 
          return (
            <tr key={result.id}>
            <td>{result.orgName}</td>
            <td><Link to={`/users/${result.id}`} style={{ textDecoration: "none", color: "#545F7D"}}>{result.userName}</Link></td>
            <td>{result.email}</td>
            <td>{result.phoneNumber}</td>
            <td>{result.createdAt.substring(0, 10)}</td>
            <td>Suspended</td>
            <td><MoreVertIcon /></td>
        </tr>
            )
        })}
      </tbody>
    </table> 
    </div>



    </>
  )
}

export default UserPages