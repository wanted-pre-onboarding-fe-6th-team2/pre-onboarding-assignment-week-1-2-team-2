import React from 'react';
import Pagination from '@/components/common/Pagination/Pagination';
import ProductList from '@/components/ProductList/ProductList';
import { useSelector } from 'react-redux';
import PageContainer from '@/components/common/page/PageContainer';

const Store = () => {
  const products = useSelector(state => state.product);
  const filteredProducts = products.filter(item => item.isDisplay === true);

  return (
    <PageContainer as="space">
      <Pagination data={filteredProducts}>
        <ProductList />
      </Pagination>
    </PageContainer>
  );
};

export default Store;
