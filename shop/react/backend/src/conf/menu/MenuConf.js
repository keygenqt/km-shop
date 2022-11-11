// assets
import {
    AndroidOutlined,
    Apple,
    CategoryOutlined,
    CloudOutlined,
    DashboardOutlined,
    FolderOutlined,
    LinkOutlined,
    ListAltOutlined,
    NewReleasesOutlined,
    PendingActionsOutlined,
    PeopleOutlined,
    SettingsOutlined,
    ShoppingBagOutlined,
    SwapCallsOutlined,
    VerifiedOutlined,
    WebOutlined,
} from "@mui/icons-material";

/**
 * Menu admin panel configuration
 */
export const MenuConf = [
    {
        icon: DashboardOutlined,
        title: 'Dashboard',
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
            },
        ]
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
                title: 'Completed',
            },
        ]
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
    {
        group: 'Links',
        icon: LinkOutlined,
        children: [
            {
                icon: WebOutlined,
                title: 'Website',
            },
            {
                icon: AndroidOutlined,
                title: 'Android',
            },
            {
                icon: Apple,
                title: 'iOS',
            },
        ]
    }
];