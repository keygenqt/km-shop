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
        link: '/orders',
        links: ['/orders']
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
                title: 'Category',
            },
            {
                icon: FolderOutlined,
                title: 'Products',
                link: '/orders',
                links: ['/orders']
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
            },
            {
                icon: PendingActionsOutlined,
                title: 'Pending',
            },
            {
                icon: VerifiedOutlined,
                title: 'Completed'
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
            },
            {
                icon: CloudOutlined,
                title: 'Uploads',
            },
            {
                icon: SwapCallsOutlined,
                title: 'System',
            },
        ]
    },
];