import React from 'react'
import "./UserList.scss"
import PageMenu from '../../components/pageMenu/PageMenu'
import UserStats from '../../components/userStats/UserStats'

function UserList() {
  return (
    <section>
        <div className='container'>
            <PageMenu />
            <UserStats />
        </div>
    </section>
  )
}

export default UserList