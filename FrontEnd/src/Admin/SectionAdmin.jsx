import React, {useState} from 'react'
import SideBar from './SlideBar/SideBar'
import Content from './Content'

function SectionAdmin() {
    const [activeItem, setActiveItem] = useState('Dashboard')

    const handleItemClick = (item) => {
        setActiveItem(item)
    }

    return (
        <>
            <section className="flex p-0.5">
                <SideBar activeItem={activeItem} onItemClick={handleItemClick}></SideBar>
                <div className="w-4/5 p-8 space-y-6">
                    <Content activeItem={activeItem}></Content>
                </div>
            </section>
        </>
    )
}

export default SectionAdmin
