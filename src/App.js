import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import UserProfile from './pages/userProfile';
import MyBooks from './pages/myBooks';
import Bookmarks from './pages/bookmarks';
import RefundRequests from './pages/refundRequests';
import RefundPolicies from './pages/refundPolicies';
import Search from './pages/search';
import Detail5thIllust from './pages/book_details/detail5thIllust';
import Detail9thIllust from './pages/book_details/detail9thIllust';
import DetailCnEdition from './pages/book_details/detailCnEdition';
import DetailJavaGraphical from './pages/book_details/detailJavaGraphical';
import Login from './pages/login';
import Register from './pages/register';
import Reading5thIllust from './pages/book_reading/reading5thIllust.js';
import Reading9thIllust from './pages/book_reading/reading9thIllust.js';
import ReadingJavaGraphical from './pages/book_reading/readingJavaGraphical';
import Purchase9thIllust from './pages/purchase/purchase9thIllust.js';
import PurchaseCnEdition from './pages/purchase/purchaseCnEdition.js';
import Refund5thIllust from './pages/refund/refund5thIllust';
import RefundJavaGraphical from './pages/refund/refundJavaGraphical';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/myBooks" element={<MyBooks />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/refundRequests" element={<RefundRequests />} />
        <Route path="/refundpolicies" element={<RefundPolicies />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/detail5thIllust" element={<Detail5thIllust/>} />
        <Route path="/detail9thIllust" element={<Detail9thIllust/>} />
        <Route path="/detailCnEdition" element={<DetailCnEdition/>} />
        <Route path="/detailJavaGraphical" element={<DetailJavaGraphical/>} />
        <Route path="/reading5thIllust" element={<Reading5thIllust/>} />
        <Route path="/reading9thIllust" element={<Reading9thIllust/>} />
        <Route path="/readingJavaGraphical" element={<ReadingJavaGraphical/>} />
        <Route path="/purchase9thIllust" element={<Purchase9thIllust/>} />
        <Route path="/purchaseCnEdition" element={<PurchaseCnEdition/>} />
        <Route path="/refundJavaGraphical" element={<RefundJavaGraphical/>} />
        <Route path="/refund5thIllust" element={<Refund5thIllust/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
