import styled from '@emotion/styled';

const PaymentSummarySection = styled.section`
  position: absolute;
  top: 60px;
  right: 0;
  padding: 20px;
  width: 245px;
`;

const PaymentSummaryHeading = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const SummaryBox = styled.div`
  margin-top: 20px;
  padding: 10px 16px;
  background: rgb(250, 250, 250);
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`;

const SummaryTitle = styled.span`
  font-size: 17px;
`;

const SummaryContent = styled.span`
  font-size: 17px;
`;

const DivisionLine = styled.div`
  border-bottom: 1px solid rgb(222, 222, 222);
`;

const TotalOrderAmountTitle = styled.span`
  font-size: 17px;
`;

const TotalOrderAmountContent = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  PaymentSummarySection,
  PaymentSummaryHeading,
  SummaryBox,
  SummaryWrapper,
  SummaryContent,
  SummaryTitle,
  TotalOrderAmountContent,
  TotalOrderAmountTitle,
  DivisionLine,
};
