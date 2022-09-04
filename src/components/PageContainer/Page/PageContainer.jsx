import * as Styled from '@/components/PageContainer/Page/PageContainer.styled';
import Header from '@/components/PageContainer/Header/Header';
import Footer from '@/components/PageContainer/Footer/Footer';

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Container>{children}</Styled.Container>
      <Footer />
    </>
  );
};

export default PageContainer;
