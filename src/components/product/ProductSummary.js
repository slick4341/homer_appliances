import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Overview
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Brand</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Model</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Generic Name</span>
                                            <span>{category}</span>
                                        </li>
                                        <li>
                                            <span>Feature Type</span>
                                            <span>{type}</span>
                                        </li>
                                        <li>
                                            <span>Net Weight</span>
                                            <span>{connectivity}</span>
                                        </li>
                                        <li>
                                            <span>Wifi-Connectivity</span>
                                            <span>Yes</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span> {info} delivers exceptional performance and effortless convenience to your daily routine.</h3>
                                    <ul>
                                        <li>Multi-Functionality abled</li>
                                        <li>Smart Home Integration</li>
                                        <li>Energy Efficent</li>
                                    </ul>
                                    <p>Buy the <b>{title} {info}</b> which transforms your daily chores with unmatched efficiency and ease. Experience superior performance and intuitive controls that take the hassle out of household tasks. Enjoy the perfect blend of power and intelligent design, making the {category} a revolutionary upgrade to your home life.</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;