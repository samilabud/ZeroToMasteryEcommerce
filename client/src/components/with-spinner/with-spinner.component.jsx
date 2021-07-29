import React from 'react';

import {Spinner} from '../spinner/spinner.component';

const WithSpinner = WrappedDocument => ({isLoading, ...otherProps}) => {
    return isLoading ? (<Spinner/>) : (<WrappedDocument {...otherProps} />)
};

export default WithSpinner;