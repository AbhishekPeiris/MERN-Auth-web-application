import React from 'react';
import "./UserStats.scss";
import InfoBox from '../infoBox/InfoBox';
import { FaUsers } from 'react-icons/fa'; // Correct import for FaUsers
import { BiUserCheck, BiUserMinus, BiUserX } from 'react-icons/bi';

// Icons
const icon1 = <FaUsers size={40} color="#fff"/>;
const icon2 = <BiUserCheck size={40} color="#fff"/>;
const icon3 = <BiUserMinus size={40} color="#fff"/>;
const icon4 = <BiUserX size={40} color="#fff"/>;

function UserStats() {
  return (
    <div className='user-summary'>
        <h3 className='--mt'>User Stats</h3>
        <div className='info-summary'>
            <InfoBox bgColor="card1" title={"Total User"} count={"3"} icon={icon1} />
            <InfoBox bgColor="card2" title={"Verified Users"} count={"3"} icon={icon2} />
            <InfoBox bgColor="card3" title={"Unverified User"} count={"3"} icon={icon3} />
            <InfoBox bgColor="card4" title={"Sus[ended] User"} count={"3"} icon={icon4} />
        </div>
    </div>
  );
}

export default UserStats;
