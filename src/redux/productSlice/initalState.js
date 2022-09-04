export const initialState = [
  {
    id: 1,
    imgeUrl: 'https://cdn.imweb.me/thumbnail/20200715/53fa50226803f.jpg',
    name: '거창 오가네체리자두 3kg 한 상자',
    description:
      '다양한 사탕을 만나보세요!\n 입안에 가득 퍼지는 과일향!\n 한번 맛보면 헤어나올 수 없습니다.',
    origin: '전라남도 완도',
    shipping: {
      shippingPrice: '무료 배송',
      shippingBasis: 3000,
    },
    option: [
      {
        optionId: 1,
        optionName: '초코맛 50g',
        optionPrice: 300,
        optionStock: 10,
      },
      {
        optionId: 2,
        optionName: '딸기맛 55g',
        optionPrice: 200,
        optionStock: 5,
      },
    ],
    price: 100,
    discountRate: 15,
    isDisplay: true,
    isLiked: false,
  },
];
