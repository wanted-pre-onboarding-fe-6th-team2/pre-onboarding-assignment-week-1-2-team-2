import React from 'react';
import img from '@/assets/images/apple.jpg';
import Pagination from '@/components/common/Pagination/Pagination';
import ProductList from '@/components/ProductList/ProductList';
import PageContainer from '@/components/common/PageContainer/PageContainer';
import { useSelector } from 'react-redux';

const dummy = [
  {
    id: 1,
    imageUrl: img,
    name: '물에 타먹는 제주 수제 감귤칩',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '전통 재래식 메주로 띄운 수제 된장 1kg, 2kg',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '100% 제주감귤주스 (15팩 x 1box)',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '반려동물과자 아기과자 동결건조 사과칩 50g (5봉지, 10봉지 묶음상품)',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '100% 제주감귤주스 (15팩 x 1box)',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '반려동물과자 아기과자 동결건조 사과칩 50g (5봉지, 10봉지 묶음상품)',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 11,
    imageUrl: img,
    name: '사탕',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 12,
    imageUrl: img,
    name: '과자',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 13,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 14,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 15,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 16,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 17,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 18,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 19,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 20,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 21,
    imageUrl: img,
    name: '사탕',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 22,
    imageUrl: img,
    name: '과자',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 23,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 24,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 25,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 26,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 27,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 28,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 29,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 30,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 31,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 32,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 33,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 34,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 35,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 36,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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
    id: 37,
    imageUrl: img,
    name: '아이스크림',
    description:
      '물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩 물에 타먹는 제주 수제 감귤칩',
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

const Store = () => {
  const products = useSelector(state => state.product);
  const filteredDummy = dummy.filter(item => item.isDisplay === true);

  console.log('products', products);

  return (
    <PageContainer>
      <Pagination data={filteredDummy}>
        <ProductList />
      </Pagination>
    </PageContainer>
  );
};

export default Store;
