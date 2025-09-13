
import { Routes  ,Route, Navigate} from "react-router-dom"

import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignupPage"
import AdminPage from "./pages/AdminPage"
import CategoryPage from "./pages/CategoryPage"
import CartPage from "./pages/CartPage"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast"
import { useUserStore } from "./stores/useUserStore"
import {useCartStore} from "./stores/useCartStore"
import { useEffect } from "react"
import LoadingSpinner from "./components/LoadingSpinner"
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage"
import PurchaseCancelPage from "./pages/PurchaseCancelPage"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot";

import VendorSignupPage from "./pages/VendorSignupPage"
import ProductDetails from "./pages/ProductDetails";



// ADMIN ANALYTICS PAGE
import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/Admin/OverviewPage";
import ProductsPage from "./pages/Admin/ProductsPage";
import UsersPage from "./pages/Admin/UsersPage";
import SalesPage from "./pages/Admin/SalesPage";
import OrdersPage from "./pages/Admin/OrdersPage";
import AnalyticsPage from "./pages/Admin/AnalyticsPage";
import SettingsPage from "./pages/Admin/SettingsPage";
import VendorsPage from "./pages/Admin/VendorsPage";
import Analyticspage from "./pages/Admin/AnalyticsPage"
import ManageAll from "./pages/ManageAll"



function App() {

  const {user , checkAuth , checkingAuth} = useUserStore();

  const {getCartItems} = useCartStore()

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  useEffect(()=>{
    if(!user) return
       getCartItems()
  },[getCartItems , user])

  if(checkingAuth) return <LoadingSpinner/>

  return (
    <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
    {/* Background gradient */}
   



    <div className='absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,223,186,0.4)_0%,rgba(184,134,11,0.3)_45%,rgba(34,34,34,0.8)_100%)]' />
      </div>
    </div>

      <div className='relative z-50 pt-20'>

     
    <Navbar/>
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/signup" element={!user ? <SignUpPage/> :<Navigate to='/'/>}/>
      <Route path="/login" element={!user ?  <LoginPage/>:<Navigate to='/'/> }/>
      <Route path="/secret-dashboard" element={user?.role ==="admin" ?  <AdminPage/> :<Navigate to='/'/> } />
      <Route path="/category/:category" element={<CategoryPage/> } />
      <Route path="/cart" element={user ? <CartPage/> : <Navigate to='/login'/> } />
      <Route path="/purchase-success" element={user ? <PurchaseSuccessPage/> : <Navigate to="/login"/>}/>
      <Route path="/purchase-cancel" element={user ? <PurchaseCancelPage/> : <Navigate to="/login"/>}/>
      <Route path="/contact" element={<Contact/> } />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/vendor-signup" element={<VendorSignupPage />} />
      <Route path="/manage" element={<ManageAll />} />


      {/* ADMIN ANALYTICS PAGES */}
 <Route path='/admin' element={user?.role === "admin" ? <OverviewPage /> : <Navigate to='/' />} />
  <Route path='/admin/products' element={user?.role === "admin" ? <ProductsPage /> : <Navigate to='/' />} />
  <Route path='/admin/users' element={user?.role === "admin" ? <UsersPage /> : <Navigate to='/' />} />
  <Route path='/admin/vendors' element={user?.role === "admin" ? <VendorsPage /> : <Navigate to='/' />} />
  <Route path='/admin/sales' element={user?.role === "admin" ? <SalesPage /> : <Navigate to='/' />} />
  <Route path='/admin/orders' element={user?.role === "admin" ? <OrdersPage /> : <Navigate to='/' />} />
  <Route path='/admin/analytics' element={user?.role === "admin" ? <AnalyticsPage /> : <Navigate to='/' />} />
  <Route path='/admin/settings' element={user?.role === "admin" ? <SettingsPage /> : <Navigate to='/' />} />

      


    </Routes>
    
            <Chatbot />
       
    <Footer />
  </div>
  <Toaster/>
  
  </div>
  )
}

export default App
