import React from 'react';
import CustomerTrustBanner from '@/components/CustomerTrustBanner/CustomerTrustBanners';
import ContentWithAi from '@/components/Home/ContentWithAi';
import ConveyMessageBanner from '@/components/Home/ConveyMessageBanner';
import WritingTools from '@/components/Home/WritingTools';
import WebsiteItems from '@/components/Home/WebsiteItems';
import CustomerReviews from '@/components/Home/CustomerReviews';
import PriceSection from '@/components/Home/PriceSection';
import Header from '@/components/Home/Header';
const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <CustomerTrustBanner></CustomerTrustBanner>
      <ContentWithAi></ContentWithAi>
      <ConveyMessageBanner></ConveyMessageBanner>
      <WritingTools></WritingTools>
      <WebsiteItems></WebsiteItems>
      <CustomerReviews></CustomerReviews>
      <PriceSection></PriceSection>
    </div>
  );
}

export default HomePage;
