import React from 'react';
import img from '@/assets/images/apple.jpg';
import Pagination from '@/components/Pagination/Pagination';
import PageContainer from '@/components/PageContainer/PageContainer';

const dummy = [
  {
    id: 1,
    imageUrl: img,
    Name: '사탕',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 50,
    isDisplay: true,
  },
  {
    id: 2,
    imageUrl: img,
    Name: '과자',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 0,
    isDisplay: true,
  },
  {
    id: 3,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 4,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 5,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 6,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 7,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 8,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 9,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
  {
    id: 10,
    imageUrl: img,
    Name: '아이스크림',
    option: [
      {
        optionId: 1,
        optionName: '초코맛',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
  },
];

const ItemList = () => {
  const filteredDummy = dummy.filter(item => item.isDisplay === true);

  return (
    <PageContainer>
      <Pagination data={filteredDummy} />;
    </PageContainer>
  );
};

export default ItemList;
