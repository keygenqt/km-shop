// assets
import {
    CategoryOutlined,
    ConnectWithoutContactOutlined,
    DashboardOutlined,
    FolderOutlined,
    ListAltOutlined,
    NewReleasesOutlined,
    PendingActionsOutlined,
    PeopleOutlined,
    ShoppingBagOutlined,
    VerifiedOutlined,
} from "@mui/icons-material";

/**
 * Menu admin panel configuration
 */
export const MenuConf = [
    {
        // default selected
        selected: true,
        // icon item menu
        icon: DashboardOutlined,
        // title item menu
        title: 'Dashboard',
        // route open click
        link: '/',
        // selected check route
        links: ['/']
    },
    {
        type: 'driver',
        title: 'Your store, setting price categories and product characteristic'
    },
    {
        group: 'Shop',
        icon: ShoppingBagOutlined,
        children: [
            {
                icon: CategoryOutlined,
                title: 'Categories',
                link: '/categories',
                links: ['/categories', '/categories/:id']
            },
            {
                icon: FolderOutlined,
                title: 'Products',
                link: '/products',
                links: ['/products', '/products/:id']
            },
        ]
    },
    {
        type: 'driver',
        title: 'Orders made on the site or in applications divided by status'
    },
    {
        group: 'Orders',
        icon: ListAltOutlined,
        children: [
            {
                icon: NewReleasesOutlined,
                title: 'New',
                link: '/orders',
                links: ['/orders', '/orders/:id']
            },
            {
                icon: PendingActionsOutlined,
                title: 'Pending',
                link: '/orders/pending',
                links: ['/orders/pending', '/orders/pending/:id']
            },
            {
                icon: VerifiedOutlined,
                title: 'Completed',
                link: '/orders/completed',
                links: ['/orders/completed', '/orders/completed/:id']
            },
        ]
    },
    {
        type: 'driver'
    },
    {
        icon: PeopleOutlined,
        title: 'Managers',
        link: '/managers',
        links: ['/managers', '/managers/:id']
    },
    {
        icon: ConnectWithoutContactOutlined,
        title: 'Help Desk',
        link: '/help-desk',
        links: ['/help-desk']
    },
];