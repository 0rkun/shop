import DetailClient from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";

type DetailProps = {
  productId?: string; //url number gösterir ama mongodb idsi stirng gelir
};

const Detail = ({ params }: { params: DetailProps }) => {
  const { productId } = params;

  const product = products.find((product) => product.id == productId);

  // console.log(product, "product");

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
