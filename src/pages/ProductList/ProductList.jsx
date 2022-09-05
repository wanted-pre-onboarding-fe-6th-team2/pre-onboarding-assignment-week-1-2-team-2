import React from 'react';
import Pagination from '@/components/common/Pagination/Pagination';
import ProductList from '@/components/ProductList/ProductList';
import PageContainer from '@/components/common/PageContainer/PageContainer';
import { useSelector } from 'react-redux';

const Store = () => {
  const products = useSelector(state => state.product);
  const filteredProducts = products.filter(item => item.isDisplay === true);

  return (
    <PageContainer>
      <Pagination data={filteredProducts}>
        <ProductList />
      </Pagination>
    </PageContainer>
  );
};

export default Store;