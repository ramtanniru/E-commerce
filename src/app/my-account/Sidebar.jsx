import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Manage My Account', subpages: ['My Profile', 'Address Book'] },
    { name: 'My Orders', subpages: ['My Returns', 'My Cancellations'] },
    { name: 'My WishList', subpages: []},
  ];

  return (
    <div className="w-1/4 h-full bg-gray-100 p-4">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-4">
          <p
            className={`cursor-pointer text-blue-500 `}
          >
            {item.name}
          </p>
          <ul className="ml-4 mt-2">
              {item.subpages.map((subpage, idx) => (
                <li key={idx} className="text-gray-600 cursor-pointer hover:text-blue-500">
                  {subpage}
                </li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
