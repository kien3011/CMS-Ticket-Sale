import { EmailIcon, NotificationIcon } from 'components/Icons';
import React from 'react';
import './AccountItem.scss';
import { Link } from 'react-router-dom';

const AccountItem: React.FC<{}> = () => {
    return (
        <div className="app__account-item">
            <EmailIcon className="app__account-item__email-icon" size={24} />
            <NotificationIcon className="app__account-item__notification-icon" size={24} />
            <Link className="app__account-item__account-avatar" to={'/dashboard'}>
                <img
                    src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HL0EKdMUQI8AX9pTk9W&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVLzqLGD0HX86nybWariAi-XUOGqlbOJYXgJ2z9IvZJjlQ&oe=62D65C0E"
                    alt="Harry 80M"
                />
            </Link>
        </div>
    );
};

export default AccountItem;
