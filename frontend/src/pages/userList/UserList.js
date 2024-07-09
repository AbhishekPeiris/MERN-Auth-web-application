import React from 'react'
import "./UserList.scss"
import PageMenu from '../../components/pageMenu/PageMenu'
import UserStats from '../../components/userStats/UserStats'
import Search from '../../components/search/Search'

function UserList() {
  return (
    <section>
        <div className='container'>
            <PageMenu />
            <UserStats />

            <div className='user-list'>
                <div className='--flex-between'>
                    <span>
                        <h3>All Users</h3>
                    </span>
                    <span>
                        <Search />
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UserList