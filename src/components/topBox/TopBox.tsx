import { topDealUsersData } from '../../data';
import './topBox.scss';

export const TopBox = () => {
  const sortedData = topDealUsersData.sort((a, b) => b.amount - a.amount);
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {sortedData.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
