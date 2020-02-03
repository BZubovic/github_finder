import React from 'react';
import { Link } from 'react-router-dom';
export interface IUserItemProps {
  user: any;
}
interface IUserItemState {}
const UserItem: React.FC<IUserItemProps> = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          more
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
