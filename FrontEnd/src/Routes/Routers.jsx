import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Categories from '../Categories/Categories'
import PopularCars from '../PopularCars/PopularCars'
import RecentCars from '../RecentCars/RecentsCar'
import Profile from '../Profile/Profile'
import Aide from '../Aide/Aide'
import Settings from '../Settings/Settings'
import SignUp from '../Login/SignUp'
import SignIn from '../Login/SignIn'
import Reservation from '../Reservation/Reservation'
import Payment from '../Payment/Payment'
import AdminDashboard from '../Admin/AdminDashboard'

function Routers({ isLoggedIn }) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/popularCars" element={<PopularCars />}/>
                <Route path="/recentCars" element={<RecentCars />}/>
                <Route path="/profile/:user" element={<Profile />}/>
                <Route path="/aide" element={<Aide />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/signUp" element={<SignUp />}/>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/reservation/:car" element={<Reservation />}/>
                <Route path="/payment" element={<Payment />}/>
                <Route path="/administration/:admin" element={<AdminDashboard />}/>
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default Routers
