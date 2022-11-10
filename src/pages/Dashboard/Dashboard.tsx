import {useState, useEffect} from 'react'
import './Dashboard.scss'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UsersSummary from '../../components/UsersSummary/UsersSummary';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [results, setResults] = useState<any[]>([])

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
    <div className='dashboard'>
      
      <table>
        <thead>
        <tr>
            <th>Organizations <FontAwesomeIcon icon='sort-amount-desc'/></th>
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
            <td data-label="Organizations">{result.orgName}</td>
            <td data-label="Username"><Link to={`/users/${result.id}`} style={{ textDecoration: "none", color: "#545F7D"}}>{result.userName}</Link></td>
            <td data-label="Email">{result.email}</td>
            <td data-label="Phone Number">{result.phoneNumber}</td>
            <td data-label="Date Joined">{result.createdAt.substring(0, 10)}</td>
            <td data-label="Status">Suspended</td>
            <td data-label="Icon"><MoreVertIcon /></td>
        </tr>
            )
        })}
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default Dashboard