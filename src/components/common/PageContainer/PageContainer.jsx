import * as Styled from '@/components/common/PageContainer/PageContainer.styled';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
const PageContainer = ({ children, as }) => {
  return (
    <>
      <Header />
      <Styled.Main className={as}>{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default PageContainer;
