import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Styled from '@/components/Admin/ProductList.styled';
import { productActions } from '@/redux/productSlice/productSlice';
import { ROUTES } from '@/constants/route';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.product);

  const handleChangeCheckBox = product => {
    dispatch(productActions.config({ ...product, isDisplay: !product.isDisplay }));
  };

  const handleDeleteProduct = productId => {
    dispatch(productActions.delete(productId));
  };

  return (
    <Styled.Container>
      <Styled.Title>상품 관리</Styled.Title>
      <Styled.TableHeader>
        <h4>상품 목록</h4>
        <Styled.Button onClick={() => navigate(ROUTES.ADMINREGISTER)}>상품 등록</Styled.Button>
      </Styled.TableHeader>
      <Styled.Table>
        <thead>
          <tr>
            <th>목록</th>
            <th>상품사진</th>
            <th>상품명</th>
            <th>
              옵션
              <Styled.OptionContainer>
                <div>옵션명</div>
                <div>가격</div>
                <div>재고</div>
              </Styled.OptionContainer>
            </th>
            <th>상품노출</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <tr key={product.id}>
                <td>{idx + 1}</td>
                <td>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                </td>
                <td>{product.name}</td>
                <td>
                  {product.option.map(option => (
                    <Styled.OptionContainer key={option.optionId}>
                      <div>{option.optionName}</div>
                      <div>{option.optionPrice}원</div>
                      <div>{option.optionStock}개</div>
                    </Styled.OptionContainer>
                  ))}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={product.isDisplay}
                    onChange={() => handleChangeCheckBox(product)}
                  />
                </td>
                <td>
                  <Styled.DeleteButton onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Styled.DeleteButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>상품이 존재하지 않습니다.</td>
            </tr>
          )}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  );
};

export default ProductList;
