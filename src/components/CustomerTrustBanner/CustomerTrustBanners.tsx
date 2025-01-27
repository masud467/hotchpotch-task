import React from 'react';
import CustomerTrustBannerBox from '../CustomerTrustBanner/CustomerTrustBannerBox';
import CustomerTrusts from '../CustomerTrustBanner/CustomerTrustData';

export default function CustomerTrustBanners() {
  return (
    <div className="text-white mt-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-lg sm:text-xl lg:text-3xl font-semibold">
        Trusted by nearly 5000+ paying customers
      </h1>
      <div className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 lg:gap-10">
          {CustomerTrusts?.map((item) => (
            <CustomerTrustBannerBox
              key={item.label}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
