# 원티드 프리온보딩 2팀

> 김주탁, 류하준, 윤영주, 이형민, 조남경, 하성화, 강주희, 변지윤

## 데모

[🌎 데모 페이지](https://fruitte-renewal.netlify.app/)

## 목차

- [폴더 구조](#폴더구조)
- [구현 내용](#구현내용)

## 폴더구조

```
├── App.jsx
├── main.jsx
├── assets
│ ├── images
│ └── svg
├── components
│ ├── Admin
│ │ ├── OptionList.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductList.styled.js
│ │ ├── RegisterList.jsx
│ │ ├── Register.jsx
│ │ └── Register.styled.js
│ ├── MyPage
│ │ ├── OrderItem
│ │ │ ├── OrderItem.jsx
│ │ │ └── OrderItem.styled.js
│ │ ├── OrderList
│ │ │  ├── OrderListForm.jsx
│ │ │  └── OrderListForm.styled.js
│ ├ ├── ProductDetail
│ │ ├── ProductDetail.jsx
│ │ └── ProductDetail.styled.js
│ ├── ProductList
│ │ ├── ProductList.jsx
│ │ ├── ProductList.styled.js
│ │ └── ProductListItem.jsx
│ ├── common
│ │ ├── PageContainer
│ │ │ ├── PageContainer.jsx
│ │ │ └── PageContainer.styled.js
│ │ ├── Pagination
│ │ │ ├── Pagination.jsx
│ │ │ ├── Pagination.styled.js
│ │ │ └── PaginationButton.jsx
│ │ ├── footer
│ │ │ ├── Footer.jsx
│ │ │ └── Footer.styled.js
│ │ ├── header
│ │ │ ├── Header.jsx
│ │ │ └── Header.styled.js
│ │ └── page
│ │   ├── PageContainer.jsx
│ │   └── PageContainer.styled.js
├── constants
│ └── route.js
├── main.jsx
├── pages
│ ├── Admin
│ │ ├── ProductListPage.jsx
│ │ └── ProductRegisterPage.jsx
│ ├── Home
│ │ └── Home.jsx
| ├── Mypage
│ │ └── OrderList.jsx
| ├── Order
│ │ └── Order.jsx
| ├── ProductDetail
│ │ └── ProductDetail.jsx
| └── ProductList
│   └── ProductList.jsx
├── styles
│ └── reset.js
└── redux
  ├── orderSlice
  │ ├── initalState.js
  │ └── orderSlice.js
  ├── productSlice
  │ ├── initalState.js
  │ └── productSlice.js
  └── orderSlicestore.js
```

## 구현내용

### 사용자 기능/스토어 상품목록 조회(`/`, `/product-list`)

**개선점**

- 기존 웹사이트의 경우 모든 상품 목록이 보여지기 때문에, 추후 스토어에 더 많은 상품이 입점될 경우에 사용자의 대기 시간과 서버의 로드 시간이 길어지는 문제점을 발생할 수 있습니다. 따라서 이를 줄일 수 있게 페이지네이션 기능을 구현했습니다.

- 페이지네이션 기능의 경우 이후에 다른 컴포넌트에서도 활용할 수 있게 확장성을 고려하여 분리했습니다.

- 상품의 제목과 설명의 길이가 일정 수준 이상으로 길어지는 경우, 줄바꿈이 되어 UI를 해치는 기존 웹사이트의 문제점과 이미지 크기를 수정하여 UI를 개선했습니다.

**보완점**

- 페이지네이션의 경우 api 없이 기능만을 구현했으므로 api 추가 시 로직을 보완해야 합니다.

- TopButton, 최근 본 상품 등을 포함한 퀵 메뉴를 추가하면 좋을 것 같습니다.

- 상품 목록에 대한 검색 기능과 필터링 기능을 추가하면 UX를 향상시킬 수 있습니다.

### 사용자 기능/스토어 상품 상세 조회(`/`)

**개선점**

**보완점**

### 사용자 기능/스토어 상품 주문(`/`)

**개선점**

**보완점**

### 사용자 기능/스토어 상품 주문 내역 확인(`/order-list`)

**개선점**

- 옵션별 구매 개수가 확인 가능하도록 개선하였습니다.
- 주문 정보와 제품 정보를 매칭시켜 노출될 수 있도록 구현하였습니다.

**보완점**

- 결제 관련 정보와 문의 글을 남길 수 있는 버튼을 리스트에 노출하여 사용자의 편리성을 높이면 좋을 것 같습니다.
- 주문내역 필터 기능이 추가되면 편리할 것 같습니다.

### 관리자 기능/상품 목록 관리(`/admin`)

**개선점**

- 관리지 상품 목록 리스트 조회 페이지를 작성했습니다.
- checkbox를 이용해서 상품 노출 여부를 선택 가능하도록 구현했습니다.
- 삭제 버튼을 클릭하면 해당 상품은 삭제됩니다.

**보완점**

- 상품 검색, 필터, 페이지네이션 기능을 추가하면 좋을 것 같습니다.
- 더 구체적인 정보를 보여주기 위한 모달이나 화면 구성을 변경이 필요합니다.

### 관리자/상품 등록 (`/admin/register`)

**개선점**

- 기존에 존재하지 않았던 상품 등록 페이지를 작성하였습니다.
- 자주 사용하는 form 유형은 컴포넌트화 하여 추후 등록 항목이 추가 되었을 때 빠르게 추가할 수 있도록 구현하였습니다.
- 잦은 입력을 대비해 tab 키 만으로 빠르게 다음 form으로 도달할 수 있습니다.
- 옵션을 여러개 추가할 수 있습니다.

**보완점**

- 옵션 추가 기능은 있으나 추후 옵션 삭제 버튼까지 추가하면 좋을 것 같습니다.
- formData의 유효성 검사가 필요합니다.
- 현재 데이터 전송 시 일부 데이터의 tracking이 되지 않고 있습니다. 태그 특성에 따른 상태 관리가 필요합니다.
