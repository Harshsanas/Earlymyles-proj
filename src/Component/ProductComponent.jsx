import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"

const CARTITEM = styled.div`
  width: 400px;
  display: flex;
  margin: 30px;
  text-align: center;
  border: 1px solid gray;
  img {
    height: 100px;
  }

  p {
    font-weight: 600;
  }

  h4 {
    color: gray;
  }

  .buttonssec {
    display: flex;
    .pricetag {
      background-color: Yellow;
      width: 50%;
      font-weight: 600;
    }
    .ratetag {
      background-color: green;
      color: white;
      width: 50%;
      font-weight: 600;
    }
  }
`;

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category,description,rating } = product;
    return (
      <>
        <CARTITEM>
          <div className="container" key={id}>
            <div>
              <img src={image} alt={title} />
            </div>
            <div>
              <div>
                <h4>{title}</h4>
              </div>

              <p>{category}</p>
              <div>{description}</div>
              <div className="buttonssec">
                <div className="pricetag">Buy @ Rs.{price}</div>
                <div className="ratetag">{rating.rate}/5 out of {rating.count}</div>
              </div>
            </div>
          </div>
        </CARTITEM>
      </>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
