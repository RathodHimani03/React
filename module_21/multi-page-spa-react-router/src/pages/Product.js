import { Link } from "react-router-dom";

const PRODUCT = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' }
]



function Product() {
    return (
        <>
            <h1>The Product Page</h1>
            <ul>
                {PRODUCT.map(
                    prod => <Link to={prod.id} relative="">
                        <li key={prod.key}>{prod.title}</li></Link>
                )}
            </ul>
            
        </>
    )
};


export default Product;