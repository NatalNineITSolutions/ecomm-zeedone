import React, { useState } from 'react';
import CommonLayout from '../../components/shop/common-layout';
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductList from './common/productList';
import { Container, Row } from 'reactstrap';
import FilterPage from './common/filter';

const Shop = () => { // Renamed component from LeftSidebar to Shop
    const [sidebarView, setSidebarView] = useState(false);
    
    const toggleSidebar = () => {
        setSidebarView(!sidebarView);
    };

    return (
        <CommonLayout title="Shop" parent="Home"> {/* Changed title to "Shop" */}
            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <FilterPage 
                                sm="3" 
                                sidebarView={sidebarView} 
                                closeSidebar={() => toggleSidebar()} 
                            />
                            <ProductList 
                                colClass="col-xl-3 col-6 col-grid-box" 
                                layoutList=""  
                                openSidebar={() => toggleSidebar()} 
                            />
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
    );
};

export default Shop; // Exported the renamed component
