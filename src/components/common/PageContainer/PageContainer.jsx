import React from 'react';
import * as Styled from '@/components/common/PageContainer/PageContainer.styled';

const PageContainer = ({ children }) => {
  return (
    <>
      <Styled.Container>{children}</Styled.Container>;
    </>
  );
};

export default PageContainer;
