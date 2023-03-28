import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const sidebarObjects=[
    {
        title: "Settings",
        icon: <ArrowBackIosNewOutlinedIcon/>,
        link: "/settings"
    },
    {
        title: "Edit",
        icon: <EditOutlinedIcon/>,
        link: "/edit"
    },
    {
        title: "Notification",
        icon: <NotificationsActiveOutlinedIcon/>,
        link: "/profile"
    },
    {
        title: "Security",
        icon: <LockOutlinedIcon/>,
        link: "/security"
    },
    {
        title: "Appearance",
        icon: <SettingsOutlinedIcon/>,
        link: "/appearance"
    },
    {
        title: "Help",
        icon: <HelpOutlineOutlinedIcon/>,
        link: "/help"
    },
] 