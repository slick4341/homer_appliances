import { FaStackOverflow, FaLinkedinIn, FaDiscord, FaPatreon  } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Help",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Track Order",
                path: "/"
            },
            {
                id: 3,
                link: "Cancel Order",
                path: "/"
            },
            {
                id: 4,
                link: "Return Order",
                path: "/"
            },
            {
                id: 5,
                link: "Warranty Info",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 1,
                link: "Return Policy",
                path: "/"
            },
            {
                id: 2,
                link: "Security Policy",
                path: "/"
            },
            {
                id: 3,
                link: "Sitemap",
                path: "/"
            },
            {
                id: 4,
                link: "Privacy Policy",
                path: "/"
            },
            {
                id: 5,
                link: "Terms & Conditions",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "/"
            },
            {
                id: 3,
                link: "Service Centres",
                path: "/"
            },
            {
                id: 4,
                link: "Careers",
                path: "/"
            },
            {
                id: 5,
                link: "Affiliates",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaStackOverflow  />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaDiscord  />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaPatreon />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
