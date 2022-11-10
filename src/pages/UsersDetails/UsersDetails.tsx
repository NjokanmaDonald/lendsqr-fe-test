import {useState, useEffect} from 'react'
import './UserDetails.scss'
import axios from 'axios'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Link, useLocation } from 'react-router-dom';


export type Infos = {
    accountNumber?: string;
    accountBalance?: string;
    id?: string;
    username?: string;
}

export type EducationInfo = {
    duration?: string;
    employmentStatus?: string;
    level?: string;
    loanRepayment?: string;
    officeEmail?: string;
    sector?: string;
    monthlyIncome: Array<any>;
}

export type ProfileInfo = {
    address?: string;
    avatar: string;
    bvn?: string;
    currency?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    phoneNumber?: string;
}

export type SocialInfo = {
    facebook?: string;
    instagram?: string;
    twitter?: string;
}

export type GuarantorInfo = {
    address?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    phoneNumber?: string;
}

function UsersDetails() {
    const [info, setInfo] = useState<Infos | null>();
    const [education, setEducation] = useState<EducationInfo | null>();
    const [profile, setProfile] = useState<ProfileInfo | null>()
    const [social, setSocial] = useState<SocialInfo | null>()
    const [guarantor, setGuarantor] = useState<GuarantorInfo | null>()

    const location = useLocation();
    const path = (location.pathname.split("/")[2]);

    useEffect(() => {
        axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/' + path)
            .then(res => {
                console.log(res);
                setInfo(res.data)
                setEducation(res.data.education)
                setProfile(res.data.profile)
                setSocial(res.data.socials)
                setGuarantor(res.data.guarantor)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div className="userDetails">
        <div className='userDetails__Top'>
            <Link to='/'><KeyboardBackspaceIcon className='userDetails__BackIcon'/></Link> Back to User
            </div>

        <div className='userDetails__Head'>
            <div className='userDetails__Head__Text'>
                <h2>User Details</h2>
            </div>

            <div className='userDetails__Buttons'>
                <button className='userDetails__Button1'>Blacklist User</button>
                <button className='userDetails__Button2'>Activate User</button>
            </div>
        </div>

        <div className='userDetails__Container'>
            <div className='userDetails__Container__Top'>
                <div className='userDetails__Container__Avatar'>
                    <img src={profile?.avatar} alt="..."/>
                </div>

                <div className='userDetails__Container__Name'>
                    <h2>{profile?.firstName} {profile?.lastName}</h2>
                    <p>{info?.accountNumber}</p>
                </div>

                <div className='userDetails__Container__Rating'>
                    <p>User's Tier</p>
                    <StarOutlinedIcon />
                </div>

                <div className='userDetails__Container__BankDetails'>
                    <h2>#{info?.accountBalance}</h2>
                    <p>9912345678/ProvidusBank</p>
                </div>
            </div>

            <div className='userDetails__Container__Bottom'>
                <p>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App systems</p>
            </div>
        </div>

        <div className='userDetails__Container2'>
            <div className='personal__Information'>
                <h3>Personal Information</h3>
                <div className='personal__Information__Content'>
                    <div className='personal__Information__Details'>
                        <p>Full Name</p>
                        <h3>{profile?.firstName} {profile?.lastName}</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Phone Number</p>
                        <h3>{profile?.phoneNumber}</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Email</p>
                        <h3>{profile?.phoneNumber}</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>BVN</p>
                        <h3>{profile?.bvn}</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Gender</p>
                        <h3>{profile?.gender}</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Marital status</p>
                        <h3>Single</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Children</p>
                        <h3>None</h3>
                    </div>

                    <div className='personal__Information__Details'>
                        <p>Type of Residence</p>
                        <h3>{profile?.address}</h3>
                    </div>
                </div>
            </div>

            <div className='educational__And__Employment'>
                <h3>Educational and Employment</h3>
                <div className='educational__And__Employment__Content'>
                    <div className='educational__And__Employment__Details'>
                        <p>Level of Education</p>
                        <h3>{education?.level}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>Employment Status</p>
                        <h3>{education?.employmentStatus}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>Sector of employment</p>
                        <h3>{education?.sector}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>Duration of emploment</p>
                        <h3>{education?.duration}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>Office Email</p>
                        <h3>{education?.officeEmail}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>monthly income</p>
                        <h3>#{education?.monthlyIncome[0]} - #{education?.monthlyIncome[1]}</h3>
                    </div>

                    <div className='educational__And__Employment__Details'>
                        <p>Loan Repayment</p>
                        <h3>#{education?.loanRepayment}</h3>
                    </div>
                </div>
            </div>

            <div className='social'>
                <h3>Social</h3>
                <div className='social__Content'>
                    <div className='social__Details'>
                        <p>Twitter</p>
                        <h3>@{social?.twitter}</h3>
                    </div>

                    <div className='social__Details'>
                        <p>Facebook</p>
                        <h3>{social?.facebook}</h3>
                    </div>

                    <div className='social__Details'>
                        <p>Instagram</p>
                        <h3>@{social?.instagram}</h3>
                    </div>
                </div>
            </div>

            <div className='guarantor'>
                <h3>Gurantor</h3>
                <div className='guarantor__Content'>
                    <div className='guarantor__Details'>
                        <p>Full name</p>
                        <h3>{guarantor?.firstName} {guarantor?.lastName}</h3>
                    </div>

                    <div className='guarantor__Details'>
                        <p>Phone Number</p>
                        <h3>{guarantor?.phoneNumber}</h3>
                    </div>

                    <div className='guarantor__Details'>
                        <p>Email Address</p>
                        <h3>{guarantor?.firstName}@gmail.com</h3>
                    </div>

                    <div className='guarantor__Details'>
                        <p>Relationship</p>
                        <h3>Sister</h3>
                    </div>
                </div>
            </div>

            <div className='guarantor2'>
                
                <div className='guarantor2__Content'>
                    <div className='guarantor2__Details'>
                        <p>Full name</p>
                        <h3>{guarantor?.firstName} {guarantor?.lastName}</h3>
                    </div>

                    <div className='guarantor2__Details'>
                        <p>Phone Number</p>
                        <h3>{guarantor?.phoneNumber}</h3>
                    </div>

                    <div className='guarantor2__Details'>
                        <p>Email Address</p>
                        <h3>{guarantor?.firstName}@gmail.com</h3>
                    </div>

                    <div className='guarantor2__Details'>
                        <p>Relationship</p>
                        <h3>Sister</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UsersDetails