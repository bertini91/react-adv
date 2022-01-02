import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/Products";

const ShoppingPage = () => {
  const product = products[0];
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {
              /* {!isMaxCountReached ? (
              <button onClick={() => increaseBy(+2)}>+2</button>
            ) : null} */
              !isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )
            }

            <span>{count} - {maxCount} </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
