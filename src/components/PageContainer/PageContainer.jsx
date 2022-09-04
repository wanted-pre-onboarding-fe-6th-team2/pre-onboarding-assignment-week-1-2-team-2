import React from 'react';
import * as Styled from '@/components/PageContainer/PageContainer.styled';

const PageContainer = ({ children }) => {
  return <Styled.PageContainer>{children}</Styled.PageContainer>;
};

export default PageContainer;
