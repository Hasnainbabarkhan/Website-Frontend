import {
    HiOutlineViewGrid,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi';
import { GrVirtualMachine } from "react-icons/gr";
import { MdOutlineStorage } from "react-icons/md";
import { RiSoundModuleLine } from "react-icons/ri";
import { FaHashnode } from "react-icons/fa6";
import { BsImages } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid/>
    },

    {
        key: 'virtual machine',
        label: 'Virtual Machines',
        path: '/virtual_machines',
        icon: <GrVirtualMachine />
    },
    {
        key: 'storage',
        label: 'Storage',
        path: '/storage',
        icon: <MdOutlineStorage />
    },

    {
        key: 'clusters',
        label: 'Clusters',
        path: '/clusters',
        icon: <RiSoundModuleLine />
    },

    {
        key: 'nodes',
        label: 'Nodes',
        path: '/nodes',
        icon: <FaHashnode />

    },

    {
        key: 'imagees',
        label: 'Images',
        path: '/imagees',
        icon: <BsImages />

    },
    {
        key: 'users',
        label: 'Users(RBAC)',
        path: '/users',
        icon: <LuUsers />


    }
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS =[

    {
        key: 'setting',
        label: 'Setting',
        path: '/setting',
        icon: <HiOutlineQuestionMarkCircle/>
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineCog/>
    }
]