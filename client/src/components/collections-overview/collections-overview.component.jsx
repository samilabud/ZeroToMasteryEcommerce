import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

import CollectionPreview from '../../components/preview-collection/preview-collection-component';

import './collections-overview.styles.scss';

const collectionOverview = ({collections}) =>(
    <div className='collection-overview'>
         {collections.map(({id, ...othersProps})=>(
                <CollectionPreview key={id} {...othersProps} />
          ))}
    </div>

)
const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionForPreview
}
)

export default connect(mapStateToProps)(collectionOverview);