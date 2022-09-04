import PageContainer from '@/components/common/page/PageContainer';
import OrderListForm from '@/components/myPage/orderList/OrderListForm';
import React from 'react';

export default function OrderList() {
  return (
    <PageContainer as="space">
      <OrderListForm />
    </PageContainer>
  );
}
