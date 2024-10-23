import { Single } from '../../components/single/Single';
import { singleUserData } from '../../data';
import './user.scss';

export const User = () => {
  return (
    <div className="user">
      <Single {...singleUserData} />
    </div>
  );
};
