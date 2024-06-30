import React, { useState } from 'react'
import Card from '../../components/card/Card'
import profileImg from '../../assets/avatarr.png'
import"./ChangePassword.scss"
import PageMenu from '../../components/pageMenu/PageMenu'
import PasswordInput from '../../components/passwordInput/PasswordInput'

const intitialState = {
    oldPassword: '',
    password: '',
    password2: '',
}

function ChangePassword() {

    const [formData, setFormData] = useState(intitialState)

    const {oldPassword, password, password2} = formData

    const handleInputChange = (e) => {

    }

  return (
    <section>
        <div className='container'>
            <PageMenu />
            <h2>Change Password</h2>
            <div className='--flex-start profile'>
                <Card cardClass={"card"}>
                    <>
                        <form>
                            <p>
                                <label>Current Password:</label>
                                <PasswordInput placeholder='Old Password' name="oldPassword" value={oldPassword} onChange={handleInputChange} />
                            </p>
                            <p>
                                <label>New Password:</label>
                                <PasswordInput placeholder='Password' name="password" value={password} onChange={handleInputChange} />
                            </p>
                            <p>
                                <label>Confirm New Password:</label>
                                <PasswordInput placeholder='Confirm Password' name="password2" value={password2} onChange={handleInputChange} />
                            </p>

                            <button className='--btn --btn-danger --btn-block' style={{width:"95%",marginLeft:"10px",marginBottom:"10px"}}>Change Password</button>
                        </form>
                    </>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default ChangePassword