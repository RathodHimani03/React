import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function ProductDetail() {

    const params = useParams();


    return (
        <>
            <h1>ProductDetail Page</h1>
            <p>{params.productId}</p>
            <Link to=".." relative="path">back</Link>
        </>
    )
};


export default ProductDetail;