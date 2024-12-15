import { useState, useEffect} from 'react'
import SidebarItem from './SideBarItem'
import { FaSignOutAlt, FaCarSide, FaChartLine, FaInbox, FaRegCalendarAlt, FaSun, FaMoon, FaWallet } from 'react-icons/fa'

function SideBar({ activeItem, onItemClick }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'Light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light')
    }

    return (
        <>
            <div className="w-1/6 bg-white p-4 shadow-lg rounded-lg flex flex-col">
                <div className="space-y-5">
                    <p className="text-gray-500 text-sm mb-2">MAIN MENU</p>
                    <SidebarItem
                        icon={<FaChartLine />} 
                        label="Dashboard"
                        active={activeItem === 'Dashboard'}
                        onClick={() => onItemClick('Dashboard')}
                    />
                    <SidebarItem
                        icon={<FaCarSide />}
                        label="Car Rent"
                        active={activeItem === 'Car Rent'}
                        onClick={() => onItemClick('Car Rent')}
                    />
                    <SidebarItem
                        icon={<FaChartLine />}
                        label="Insight"
                        active={activeItem === 'Insight'}
                        onClick={() => onItemClick('Insight')}
                    />
                    <SidebarItem
                        icon={<FaWallet />}
                        label="Reservations"
                        active={activeItem === 'Reservations'}
                        onClick={() => onItemClick('Reservations')}
                    />
                    <SidebarItem
                        icon={<FaInbox />}
                        label="Inbox"
                        active={activeItem === 'Inbox'}
                        onClick={() => onItemClick('Inbox')}
                    />
                    <SidebarItem
                        icon={<FaRegCalendarAlt />}
                        label="Calendar"
                        active={activeItem === 'Calendar'}
                        onClick={() => onItemClick('Calendar')}
                    />
                </div>

                <div className="mt-12 space-y-2">
                    <p className="text-gray-500 text-sm mb-2">PREFERENCES</p>
                    <div
                        onClick={toggleTheme}
                        className="flex items-center p-2 rounded-lg text-gray-700 cursor-pointer hover:bg-blue-200"
                    >
                        {theme === 'Light' ? (
                            <FaSun className="text-yellow-500 mr-2 text-lg" />
                        ) : (
                            <FaMoon className="text-gray-700 mr-2 text-lg" />
                        )}
                        <span>{theme === 'Light' ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <SidebarItem
                        icon={<FaSignOutAlt />}
                        label="Log Out"
                    />
                </div>
            </div>
        </>
    )
}

export default SideBar
