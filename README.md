# 원티드 프리온보딩 2팀

> 김주탁, 류하준, 윤영주, 이형민, 조남경, 하성화, 강주희, 변지윤

## 데모

[🌎 데모 페이지]()

## 목차

- [폴더 구조](#폴더구조)
- [구현 내용](#구현내용)

## 폴더구조

```
├── App.js
├── api
│ ├── auth.js
│ ├── core.js
│ └── todos.js
├── components
│ ├── Admin
│ │ ├── OptionList.jsx
│ │ ├── RegisterList.jsx
│ │ ├── Register.jsx
│ │ └── Register.styled.js
│ └── TodoList.jsx
├── constants
│ ├── .jsx
│ └── .jsx
├── main.jsx
├── pages
│ ├── Admin
│ │ ├── ProductListPage.jsx
│ │ └── ProductRegisterPage.jsx
│ └── Todos
├── styles
│ └── reset.js
└── redux
  ├── orderSlice
  │ ├── OptionList.jsx
  │ ├── RegisterList.jsx
  │ ├── Register.jsx
  │ └── Register.styled.js
  └── productSlice

```

## 구현내용

### 사용자 기능/스토어 상품목록 조회(`/`)

**개선점**


**보완점**


### 사용자 기능/스토어 상품 상세 조회(`/`)

**개선점**


**보완점**


### 사용자 기능/스토어 상품 주문(`/`)

**개선점**


**보완점**


### 사용자 기능/스토어 상품 주문 내역 확인(`/`)

**개선점**


**보완점**


### 관리자 기능/상품 목록 관리(`/`)

**개선점**


**보완점**


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
