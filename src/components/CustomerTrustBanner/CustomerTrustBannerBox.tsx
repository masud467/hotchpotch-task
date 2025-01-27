import React from 'react';

interface CustomerTrustBannerBoxProps {
  label: string;
  icon: React.ElementType; // Ensures `icon` is a valid React component type
}

const CustomerTrustBannerBox: React.FC<CustomerTrustBannerBoxProps> = ({ label, icon: Icon }) => {
  return (
    <div
      className={`flex 
        flex-row
        row-span-2 
        items-center 
        justify-center 
        gap-2
        p-3
        hover:
        cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CustomerTrustBannerBox;
