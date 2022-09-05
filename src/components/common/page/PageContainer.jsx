import * as Styled from '@/components/common/page/PageContainer.styled';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';
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
