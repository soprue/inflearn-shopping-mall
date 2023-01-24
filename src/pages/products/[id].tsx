import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { graphqlFetcher, QueryKeys } from '../../queryClient'
import { GET_PRODUCT, Product } from '../../graphql/products'

import ProductDetail from '../../components/product/detail'

const ProductDetailPage = () => {
    const { id } = useParams();

    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id],
        () => graphqlFetcher(GET_PRODUCT, { id })
    );

    if (!data) return null;

    return (
        <div>
            <h2>상품 상세</h2>
            <ProductDetail item={data} />
        </div>
    );
}

export default ProductDetailPage;