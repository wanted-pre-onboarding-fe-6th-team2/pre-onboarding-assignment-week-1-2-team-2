import React from 'react';
import Header from '@/components/PageContainer/Header';
import Footer from '@/components/PageContainer/Footer';
import * as Styled from '@/components/PageContainer/PageContainer.styled';

const PageContainer = ({ children }) => {
  return (
    <Styled.PageContainer>
      <Header />
      {children}
      <Footer />
    </Styled.PageContainer>
  );
};

export default PageContainer;
