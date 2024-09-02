import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-items/collection-items.component";
import { selectShopCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { collectionId } = useParams(); // Get collectionId directly in mapStateToProps
  return {
    collection: selectShopCollection(collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
