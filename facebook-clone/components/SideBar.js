import { useSession } from "next-auth/client";
import {
    ShoppingBagIcon,
    ChevronDownIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import {
    CalendarIcon,
    UserIcon,
    ClockIcon,
    DesktopComputerIcon
} from '@heroicons/react/solid'
import SideBarRow from "./SideBarRow";

function SideBar() {

    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SideBarRow src={session.user.image} title={session.user.name} />
            <SideBarRow Icon={UserIcon} title="Friend" />
            <SideBarRow Icon={UserGroupIcon} title="Group" />
            <SideBarRow Icon={ShoppingBagIcon} title="Market Place" />
            <SideBarRow Icon={DesktopComputerIcon} title="Watch" />
            <SideBarRow Icon={CalendarIcon} title="Events" />
            <SideBarRow Icon={ClockIcon} title="Memories" />
            <SideBarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default SideBar
