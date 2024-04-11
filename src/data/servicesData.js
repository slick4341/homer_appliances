import {FaShippingFast, FaShieldAlt, FaTags, FaGooglePay } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Express Delivery",
        info: "Ships in 24 Hours",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Reliable Warranty",
        info: "100% Original products",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Exciting Offers",
        info: "On all valued appliances",
    },
    {
        id: 4,
        icon: <FaGooglePay  />,
        title: "Secure Payments",
        info: "UPI Available",
    },
];

export default servicesData;