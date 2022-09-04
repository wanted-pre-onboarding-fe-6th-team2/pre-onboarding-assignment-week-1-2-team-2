import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as styled from '@/components/Admin/ProductList.styled';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.product);

  const handleChangeCheckBox = product => {
    dispatch({ type: 'product/config', payload: { ...product, isDisplay: !product.isDisplay } });
  };

  const handleDeleteProduct = productId => {
    dispatch({ type: 'product/delete', payload: { deleteId: productId } });
  };

  return (
    <styled.Container>
      <styled.Title>상품 관리</styled.Title>
      <styled.TableHeader>
        <h4>상품 목록</h4>
        <styled.Button onClick={() => navigate('/admin/addProduct')}>상품 등록</styled.Button>
      </styled.TableHeader>
      <styled.Table>
        <thead>
          <tr>
            <th>목록</th>
            <th>상품사진</th>
            <th>상품명</th>
            <th>
              옵션
              <styled.OptionContainer>
                <div>옵션명</div>
                <div>가격</div>
                <div>재고</div>
              </styled.OptionContainer>
            </th>
            <th>상품노출</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <tr key={product.id}>
                <td>{idx + 1}</td>
                <td>{product.iamgeUrl}</td>
                <td>{product.Name}</td>
                <td>
                  {product.option.map(option => (
                    <styled.OptionContainer key={option.optionId}>
                      <div>{option.optionName}</div>
                      <div>{option.optionPrice}원</div>
                      <div>{option.optionStock}개</div>
                    </styled.OptionContainer>
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
                  <styled.DeleteButton onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </styled.DeleteButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>상품이 존재하지 않습니다.</td>
            </tr>
          )}
        </tbody>
      </styled.Table>
    </styled.Container>
  );
};

export default ProductList;
