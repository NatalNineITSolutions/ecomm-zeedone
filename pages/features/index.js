import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import GridTwoPage from '../../pages/portfolio/grid-2';
// import { withApollo } from '../../helpers/apollo/apollo';
const index = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <GridTwoPage colClass="col-lg-4 col-sm-6" limit='9' />
        </CommonLayout>
    )
}

export default index;
