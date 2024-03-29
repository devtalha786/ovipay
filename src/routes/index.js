import LandingPage from '../components/LandingPage/Index';
import BarPage from '../Pages/Charge/BarPage';
import InputForm from '../Pages/Charge/FieldsPage';
import ConfirmingForm from '../Pages/Charge/FieldsMarkPage';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Authentications from '../views/Authentications';
import ThirdPageLikeLogin from '../views/ThirdPageLikeLogin';
import CouponsHome from '../Pages/Coupons/Home';
import ConfirmationPayment from '../Pages/ShoppingPage/ConfirmationPayment';
import shoppingPage from '../Pages/ShoppingPage/Home';
import ShopFavourite from '../Pages/ShoppingPage/Favourite';
import ShoppingCart from '../Pages/ShoppingPage/Cart';
import ShippingDetails from '../Pages/ShoppingPage/ShippingDetails';
import ProductDetails from '../Pages/ShoppingPage/ProductDetails';
import GiftPage from '../Pages/Gift/Home';
import GiftFavourite from '../Pages/Gift/Favourite';
import GiftShipping from '../Pages/Gift/Shipping';
import GiftCart from '../Pages/Gift/Cart';
import GiftSearchProduct from '../Pages/Gift/SearchProduct';
import ListingPage from '../Pages/ListingPage/recent'
import ListingProductDetails from '../Pages/ListingPage/BookingDetail';
import Reviews from '../Pages/ListingPage/Reviews';
import Calender from '../Pages/ListingPage/Calender';
import Finalpayment from '../Pages/ListingPage/Finalpayment';
import PaymentMethod from '../Pages/ListingPage/PaymentMethod';
import Popular from '../Pages/ListingPage/Popular';
import Favourite from '../Pages/ListingPage/Favourite';
import Search from '../Pages/ListingPage/Search';
import heroSection from '../Pages/ListingPage/heroSection';
import recent from '../Pages/ListingPage/recent';
import BookingDetail from '../Pages/ListingPage/BookingDetail';



let routes = [
	{
		path: '/login',
		component: Login,
		layout: 'auth',
	},
	{
		path: '/signup',
		component: Signup,
		layout: 'auth',
	},
	{
		path: '/saved-login',
		component: ThirdPageLikeLogin,
		layout: 'auth',

	},
	{
		path: '/shopping/confirm-payment',
		component: ConfirmationPayment,
		layout: 'main',
	},
	{
		path: '/',
		component: LandingPage,
		layout: 'main',
	},
	{
		path: '/charge/bar-input',
		component: BarPage,
		layout: 'main',
	},
	{
		path: '/charge/input-form',
		component: InputForm,
		layout: 'main',
	},
	{
		path: '/charge/confirm-form',
		component: ConfirmingForm,
		layout: 'main',
	},
	{
		path: "/auth",
		component: Authentications,
		layout: "auth",
	},
	{
		path:"/my-coupon",
		component: CouponsHome,
		layout: "main",
	},
	{
		path:"/shopping-home",
		component: shoppingPage,
		layout: "main",
	},
	{
		path:"/shopping/favourte",
		component: ShopFavourite,
		layout: "main",
	},
	{
		path:"/shopping/mycart",
		component: ShoppingCart,
		layout: "main",
	},
	{
		path:"/shopping/delivery-details",
		component: ShippingDetails,
		layout: "main",
	},
	{
		path:"/shopping/product-details",
		component: ProductDetails,
		layout: "main",
	},

	{
		path:"/gift-home",
		component: GiftPage,
		layout: "main",
	},
	{
		path:"/gift/favourite",
		component: GiftFavourite,
		layout: "main",
	},
	{
		path:"/gift/mycart",
		component: GiftCart,
		layout: "main",
	},
	{
		path:"/gift/delivery-details",
		component: GiftShipping,
		layout: "main",
	},
	{
		path:"/gift/search-product",
		component: GiftSearchProduct,
		layout: "main",
	},


// hotel booking
	{
		path:"/booking/home",
		component: heroSection,
		layout: "main",
	},


	{
		path:"/listing/recently-viewed",
		component: recent,
		layout: "main",
	},
	{
		path:"/listing/popular",
		component: Popular,
		layout: "main",
	},
	{
		path:"/listing/Favourite",
		component: Favourite,
		layout: "main",
	},

	{
		path:"/listing/booking-detail",
		component: BookingDetail,
		layout: "main",
	},
	{
		path:"/listing/reviews",
		component: Reviews,
		layout: "main",
	},
	{
		path:"/listing/calender",
		component: Calender,
		layout: "main",
	},
	{
		path:"/listing/payment",
		component: Finalpayment,
		layout: "main",
	},
	{
		path:"/listing/payment-method",
		component: PaymentMethod,
		layout: "main",
	},
	
	
	{
		path:"/listing/search",
		component: Search,
		layout: "main",
	},
	
	


];
export default routes;