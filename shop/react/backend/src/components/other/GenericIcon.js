import * as icons from "@mui/icons-material";
import {BrokenImageOutlined} from "@mui/icons-material";

export const GenericIcon = ({sx, iconName}) => {
    let Icon = icons[iconName];
    Icon = Icon ? Icon : BrokenImageOutlined;
    return <Icon sx={{...sx}}/>;
};