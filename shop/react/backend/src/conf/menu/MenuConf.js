// assets
import {
    CategoryOutlined,
    CloudOutlined,
    ConnectWithoutContactOutlined,
    DashboardOutlined,
    FolderOutlined,
    InfoOutlined,
    ListAltOutlined,
    NewReleasesOutlined,
    PendingActionsOutlined,
    PeopleOutlined,
    SettingsOutlined,
    ShoppingBagOutlined,
    SwapCallsOutlined,
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
        icon: ConnectWithoutContactOutlined,
        title: 'Help Desk',
        link: '/help-desk',
        links: ['/help-desk']
    },
    {
        type: 'driver',
        icon: InfoOutlined,
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
                links: ['/categories']
            },
            {
                icon: FolderOutlined,
                title: 'Products',
                link: '/products',
                links: ['/products']
            },
        ]
    },
    {
        type: 'driver',
        icon: InfoOutlined,
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
                links: ['/orders']
            },
            {
                icon: PendingActionsOutlined,
                title: 'Pending',
                link: '/orders/pending',
                links: ['/orders/pending']
            },
            {
                icon: VerifiedOutlined,
                title: 'Completed',
                link: '/orders/completed',
                links: ['/orders/completed']
            },
        ]
    },
    {
        type: 'driver',
        icon: InfoOutlined,
        title: 'Settings and running system scripts that allow you to execute them manually'
    },
    {
        group: 'Settings',
        icon: SettingsOutlined,
        children: [
            {
                icon: PeopleOutlined,
                title: 'Managers',
                link: '/managers',
                links: ['/managers']
            },
            {
                icon: CloudOutlined,
                title: 'Uploads',
                link: '/uploads',
                links: ['/uploads']
            },
            {
                icon: SwapCallsOutlined,
                title: 'System',
                link: '/system',
                links: ['/system']
            },
        ]
    },
];