// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Home as HomeIcon, Mail as ContactIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import {useCartStore} from "../stores/useCartStore"
// const Navbar = () => {
//   const {user,logout} = useUserStore();
//   const isAdmin = user?.role === "admin";

//   const {cart} = useCartStore(); 

//   return (
//     <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
//     <div className='container mx-auto px-4 py-3'>
//       <div className='flex flex-wrap justify-between items-center'>
// 	  <Link to='/' className='text-3xl font-bold text-yellow-400 hover:text-yellow-300 items-center space-x-2 flex transition-all duration-300'>
//     Bharat Coin Bazaar
// </Link>


//         <nav className='flex flex-wrap items-center gap-4'>
//           <Link to={"/"} className='text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out'>
//             Home
//           </Link>
//           {user && (
// 							<Link
// 								to={"/cart"}
// 								className='relative group text-gray-300 hover:text-yellow-400 transition duration-300 
// 							ease-in-out'
// 							>
// 								<ShoppingCart className='inline-block mr-1 group-hover:text-yellow-400' size={20} />
// 								<span className='hidden sm:inline'>Cart</span>
								
// 									{cart.length >0 &&<span
// 										className='absolute -top-2 -left-2 bg-blue-500 text-white rounded-full px-2 py-0.5 
// 									text-xs group-hover:text-yellow-400 transition duration-300 ease-in-out'
// 									>
// 										{cart.length}
                    
										
// 									</span>}
								
// 							</Link>
// 						)}

//             {isAdmin && (
// 							<Link
// 								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
// 								 transition duration-300 ease-in-out flex items-center'
// 								to={"/secret-dashboard"}
// 							>
// 								<Lock className='inline-block mr-1' size={18} />
// 								<span className='hidden sm:inline'>Dashboard</span>
// 							</Link>
// 						)}

//             {user ? (
// 							<button
// 								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 						rounded-md flex items-center transition duration-300 ease-in-out'
								
// 						onClick={logout}	>


// 								<LogOut size={18} />
// 								<span className='hidden sm:inline ml-2'>Log Out</span>
// 							</button>
// 						) : (
// 							<>
// 								<Link
// 									to={"/signup"}
// 									className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out'
// 								>
                  
// 									<UserPlus className='mr-2' size={18} />
// 									Sign Up
// 								</Link>
// 								<Link
// 									to={"/login"}
// 									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out'
// 								>
// 									<LogIn className='mr-2' size={18} />
// 									Login
// 								</Link>
// 							</>
// 						)}


//           </nav>
// 				</div>
// 			</div>
// 		</header>
    
//   )
// }

// export default Navbar




// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Home as HomeIcon, Mail as ContactIcon } from "lucide-react"; 
// import { Link } from "react-router-dom"; 
// import { useUserStore } from "../stores/useUserStore"; 
// import { useCartStore } from "../stores/useCartStore"; 

// const Navbar = () => { 
//   const { user, logout } = useUserStore(); 
//   const isAdmin = user?.role === "admin"; 

//   const { cart } = useCartStore(); 

//   return ( 
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800"> 
//       <div className="container mx-auto px-4 py-3"> 
//         <div className="flex flex-wrap justify-between items-center"> 
//           <Link to="/" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 items-center space-x-2 flex transition-all duration-300"> 
//             <HomeIcon className="w-8 h-8 mr-2" /> {/* Lucide Home Icon */}
//             PROJECT TITLE 
//           </Link> 

//           <nav className="flex flex-wrap items-center gap-4"> 
//             <Link to="/" className="flex items-center text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"> 
//               {/* <HomeIcon className="mr-2" size={18} /> Home icon from Lucide React */}
//               Home 
//             </Link> 

//             {user && ( 
//               <Link 
//                 to="/cart" 
//                 className="relative group text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out" 
//               > 
//                 <ShoppingCart className="inline-block mr-1 group-hover:text-yellow-400" size={20} /> 
//                 <span className="hidden sm:inline">Cart</span> 
//                 {cart.length > 0 && ( 
//                   <span className="absolute -top-2 -left-2 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:text-yellow-400 transition duration-300 ease-in-out"> 
//                     {cart.length} 
//                   </span> 
//                 )} 
//               </Link> 
//             )}

//             {isAdmin && ( 
//               <Link 
//                 className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" 
//                 to="/secret-dashboard" 
//               > 
//                 <Lock className="inline-block mr-1" size={18} /> 
//                 <span className="hidden sm:inline">Dashboard</span> 
//               </Link> 
//             )}

//             {/* Contact link with icon */}
//             <Link 
//               to="/contact" 
//               className="flex items-center text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out" 
//             > 
//               {/* <ContactIcon className="w-6 h-6 mr-2" /> Lucide Contact Icon */}
//               Contact 
//             </Link> 

//             {user ? ( 
//               <button 
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out" 
//                 onClick={logout} 
//               > 
//                 <LogOut size={18} /> 
//                 <span className="hidden sm:inline ml-2">Log Out</span> 
//               </button> 
//             ) : ( 
//               <> 
//                 <Link 
//                   to="/signup" 
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out" 
//                 > 
//                   <UserPlus className="mr-2" size={18} /> 
//                   Sign Up 
//                 </Link> 
//                 <Link 
//                   to="/login" 
//                   className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out" 
//                 > 
//                   <LogIn className="mr-2" size={18} /> 
//                   Login 
//                 </Link> 
//               </> 
//             )} 
//           </nav> 
//         </div> 
//       </div> 
//     </header> 
//   ); 
// };

// export default Navbar;




// Navbar.jsx
import React, { useEffect, useRef } from "react";
import {
 Users, Truck, DollarSign, Settings,
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Home as HomeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";


const Navbar = () => {
  const { user, logout } = useUserStore();
  const iscustomer = user?.role === "customer";
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  const navRef = useRef(null);
  const activeElRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    // create active element
    const activeElement = document.createElement("div");
    activeElement.classList.add("active-element");
    activeElRef.current = activeElement;
    navElement.appendChild(activeElement);

    const getOffsetLeft = (element) => {
      const elementRect = element.getBoundingClientRect();
      return (
        elementRect.left -
        navElement.getBoundingClientRect().left +
        (elementRect.width - activeElement.offsetWidth) / 2
      );
    };

    // find all clickable nav items (Links and buttons inside our nav)
    const items = Array.from(
      navElement.querySelectorAll("a, button")
    ).filter((el) => el.closest("nav")); // ensure inside nav

    // default active: first visible nav item (you can change logic)
    const setInitialActive = () => {
      const initial = items.find((it) => it.textContent.trim().toLowerCase() === "home") || items[0];
      if (initial) {
        const parent = initial.closest("li") || initial;
        // mark using data-active to avoid fragility with other classes
        items.forEach((it) => it.classList.remove("nav-item-active"));
        initial.classList.add("nav-item-active");
        gsap.set(activeElement, { x: getOffsetLeft(initial) });
        gsap.to(activeElement, { "--active-element-show": "1", duration: 0.2 });
      }
    };

    const onFontsReady = () => {
      setInitialActive();
    };

    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fontsReady.then(onFontsReady).catch(onFontsReady);

    // createSVG used inside animation
    const createSVG = (element) => {
      element.innerHTML = `
    <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
      <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
      <defs>
        <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0270ffff"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="strike">
      <svg viewBox="0 0 114 12" preserveAspectRatio="none">
        <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
          <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        </g>
      </svg>
    </div>
  `;
    };

    // click handler logic mimics original behaviour
    const handlers = items.map((button, index) => {
      const handler = () => {
        const active = items.find((it) => it.classList.contains("nav-item-active"));
        const oldIndex = active ? items.indexOf(active) : 0;

        if (
          index === oldIndex ||
          navElement.classList.contains("before") ||
          navElement.classList.contains("after")
        ) {
          return;
        }

        const x = getOffsetLeft(button);
        const direction = index > oldIndex ? "after" : "before";
        const spacing = Math.abs(x - getOffsetLeft(active || button));

        navElement.classList.add(direction);
        if (active) active.classList.remove("nav-item-active");
        button.classList.add("nav-item-active");

        gsap.set(activeElement, {
          rotateY: direction === "before" ? "180deg" : "0deg",
        });

        gsap.to(activeElement, {
          keyframes: [
            {
              "--active-element-width": `${spacing > navElement.offsetWidth - 60 ? navElement.offsetWidth - 60 : spacing}px`,
              duration: 0.3,
              ease: "none",
              onStart: () => {
                createSVG(activeElement);
                gsap.to(activeElement, { "--active-element-opacity": 1, duration: 0.1 });
              },
            },
            {
              "--active-element-scale-x": "0",
              "--active-element-scale-y": ".25",
              "--active-element-width": "0px",
              duration: 0.3,
              onStart: () => {
                gsap.to(activeElement, { "--active-element-mask-position": "40%", duration: 0.5 });
                gsap.to(activeElement, { "--active-element-opacity": 0, delay: 0.45, duration: 0.25 });
              },
              onComplete: () => {
                activeElement.innerHTML = "";
                navElement.classList.remove("before", "after");
                activeElement.removeAttribute("style");
                gsap.set(activeElement, { x: getOffsetLeft(button), "--active-element-show": "1" });
              },
            },
          ],
        });

        gsap.to(activeElement, { x, "--active-element-strike-x": "-50%", duration: 0.6, ease: "none" });
      };

      button.addEventListener("click", handler);
      return { button, handler };
    });

    // clean up
    return () => {
      handlers.forEach(({ button, handler }) => button.removeEventListener("click", handler));
      if (activeElement && navElement.contains(activeElement)) navElement.removeChild(activeElement);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      {/* Styles scoped inside component for the active-element animation */}
      <style>{`
        /* minimal resets so component looks as intended */
        .active-element {
          --active-element-scale-x: 1;
          --active-element-scale-y: 1;
          --active-element-show: 0;
          --active-element-opacity: 0;
          --active-element-width: 0px;
          --active-element-strike-x: 0%;
          --active-element-mask-position: 0%;
          position: absolute;
          left: 0;
          top: 46px; /* tweak per your header height */
          height: 3px;
          width: 36px;
          border-radius: 2px;
          background-color: #fff;
          opacity: var(--active-element-show);
          pointer-events: none;
        }
        .active-element > svg, .active-element .strike {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: var(--active-element-opacity);
          width: var(--active-element-width);
          mix-blend-mode: multiply;
        }
        .active-element > svg { display: block; overflow: visible; height: 5px; filter: blur(0.5px); }
        .active-element .strike { padding: 24px 0; -webkit-mask-image: linear-gradient(to right, transparent calc(0% + var(--active-element-mask-position)), black calc(15% + var(--active-element-mask-position)), black 80%, transparent); mask-image: linear-gradient(to right, transparent calc(0% + var(--active-element-mask-position)), black calc(15% + var(--active-element-mask-position)), black 80%, transparent); }
        .active-element .strike svg { display: block; overflow: visible; height: 12px; width: calc(var(--active-element-width) * 2); transform: translate(var(--active-element-strike-x), 30%) scale(var(--active-element-scale-x), var(--active-element-scale-y)); }
        .nav-item-active { color: #00fffc !important; } /* highlight active link */
      `}</style>

      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 items-center space-x-2 flex transition-all duration-300">
            <HomeIcon className="w-8 h-8 mr-2" />
            PROJECT TITLE
          </Link>

          <nav ref={navRef} className="flex flex-wrap items-center gap-4 relative">
            {!isAdmin  && (
            <Link to="/" className="flex items-center text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out">
              Home
            </Link>
            )}

            {iscustomer   && (
              <Link to="/cart" className="relative group text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out">
                <ShoppingCart className="inline-block mr-1 group-hover:text-yellow-400" size={20} />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:text-yellow-400 transition duration-300 ease-in-out">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/secret-dashboard">
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {isAdmin && (
              <Link className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin">
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            )}

                        {/* {isAdmin && (
              <Link className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin/products">
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Products</span>
              </Link>
            )} */}
                        {isAdmin && (
              <Link className="bg-sky-600 hover:bg-sky-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin/users">
                <Users className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Users</span>
              </Link>
            )}
                        {isAdmin && (
              <Link className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin/vendors">
                <Truck className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Vendors</span>
              </Link>
            )}
                        {isAdmin && (
              <Link className="bg-amber-600 hover:bg-amber-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin/sales">
                <DollarSign className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Sales</span>
              </Link>
            )}
                        {isAdmin && (
              <Link className="bg-slate-600 hover:bg-slate-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to="/admin/settings">
                <Settings className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Settings</span>
              </Link>
            )}
            





            {!isAdmin  && (
            <Link to="/contact" className="flex items-center text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out">
              Contact
            </Link>
            )}

            {user ? (
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out" onClick={logout}>
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link to="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out">
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link to="/login" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out">
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
