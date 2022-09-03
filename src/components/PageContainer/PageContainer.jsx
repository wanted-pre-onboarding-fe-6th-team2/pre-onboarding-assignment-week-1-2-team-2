import * as Styled from '@/components/PageContainer/PageContainer.styled';
import Header from './Header';

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

export default PageContainer;
