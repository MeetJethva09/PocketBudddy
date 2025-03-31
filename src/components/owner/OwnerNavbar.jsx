import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const OwnerNavbar = () => {  
    // const navigate  = useNavigate();

  // const logOutHandler = () =>{
  //     localStorage.clear();
  //     navigate("/signin")
  // }




  return (
//     <nav className="app-header navbar navbar-expand bg-body">
//   {/*begin::Container*/}
//   <div className="container-fluid">
//     {/*begin::Start Navbar Links*/}
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           data-lte-toggle="sidebar"
//           href="#"
//           role="button"
//         >
//           <i className="bi bi-list" />
//         </a>
//       </li>
//       <li className="nav-item d-none d-md-block">
//         <Link to="/rest" className="nav-link">
//           Home
//         </Link>
//       </li>
//       <li className="nav-item d-none d-md-block">
//         <Link href="#" className="nav-link">
//           Contact
//         </Link>
//       </li>
//       <li className="nav-item d-none d-md-block">
//         {/* <Link to="/logout" className="nav-link" style={{color:"red"}}>
//           Logout
//         </Link> */}
        
//       </li>
//     </ul>
   
//     <ul className="navbar-nav ms-auto">
//       {/*begin::Navbar Search*/}
//       <li className="nav-item">
//         <a
//           className="nav-link"
//           data-widget="navbar-search"
//           href="#"
//           role="button"
//         >
//           <i className="bi bi-search" />
//         </a>
//       </li>
    
//       <li className="nav-item dropdown">
//         <a className="nav-link" data-bs-toggle="dropdown" href="#">
//           <i className="bi bi-chat-text" />
//           {/* <span className="navbar-badge badge text-bg-danger">3</span> */}
//         </a>
//         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//           <a href="#" className="dropdown-item">
           
//             <div className="d-flex">
//               <div className="flex-shrink-0">
//                 <img
//                   src="../../dist/assets/img/user1-128x128.jpg"
//                   alt="User Avatar"
//                   className="img-size-50 rounded-circle me-3"
//                 />
//               </div>
//               <div className="flex-grow-1">
//                 <h3 className="dropdown-item-title">
//                   Brad Diesel
//                   <span className="float-end fs-7 text-danger">
//                     <i className="bi bi-star-fill" />
//                   </span>
//                 </h3>
//                 <p className="fs-7">Call me whenever you can...</p>
//                 <p className="fs-7 text-secondary">
//                   <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                 </p>
//               </div>
//             </div>
           
//           </a>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item">
//             {/*begin::Message*/}
//             <div className="d-flex">
//               <div className="flex-shrink-0">
//                 <img
//                   src="../../dist/assets/img/user8-128x128.jpg"
//                   alt="User Avatar"
//                   className="img-size-50 rounded-circle me-3"
//                 />
//               </div>
//               <div className="flex-grow-1">
//                 <h3 className="dropdown-item-title">
//                   John Pierce
//                   <span className="float-end fs-7 text-secondary">
//                     <i className="bi bi-star-fill" />
//                   </span>
//                 </h3>
//                 <p className="fs-7">I got your message bro</p>
//                 <p className="fs-7 text-secondary">
//                   <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                 </p>
//               </div>
//             </div>
           
//           </a>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item">
//             {/*begin::Message*/}
//             <div className="d-flex">
//               <div className="flex-shrink-0">
//                 <img
//                   src="../../dist/assets/img/user3-128x128.jpg"
//                   alt="User Avatar"
//                   className="img-size-50 rounded-circle me-3"
//                 />
//               </div>
//               <div className="flex-grow-1">
//                 <h3 className="dropdown-item-title">
//                   Nora Silvester
//                   <span className="float-end fs-7 text-warning">
//                     <i className="bi bi-star-fill" />
//                   </span>
//                 </h3>
//                 <p className="fs-7">The subject goes here</p>
//                 <p className="fs-7 text-secondary">
//                   <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
//                 </p>
//               </div>
//             </div>
          
//           </a>
//           {/* <div className="dropdown-divider" /> */}
//           <a href="#" className="dropdown-item dropdown-footer">
//             See All Messages
//           </a>
//         </div>
//       </li>
//       {/*end::Messages Dropdown Menu*/}
//       {/*begin::Notifications Dropdown Menu*/}
//       {/* <li className="nav-item dropdown">
//         <a className="nav-link" data-bs-toggle="dropdown" href="#">
//           <i className="bi bi-bell-fill" />
//           <span className="navbar-badge badge text-bg-warning">15</span>
//         </a>
//         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//           <span className="dropdown-item dropdown-header">
//             15 Notifications
//           </span>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item">
//             <i className="bi bi-envelope me-2" /> 4 new messages
//             <span className="float-end text-secondary fs-7">3 mins</span>
//           </a>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item">
//             <i className="bi bi-people-fill me-2" /> 8 friend requests
//             <span className="float-end text-secondary fs-7">12 hours</span>
//           </a>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item">
//             <i className="bi bi-file-earmark-fill me-2" /> 3 new reports
//             <span className="float-end text-secondary fs-7">2 days</span>
//           </a>
//           <div className="dropdown-divider" />
//           <a href="#" className="dropdown-item dropdown-footer">
//             {" "}
//             See All Notifications{" "}
//           </a>
//         </div>
//       </li> */}
//       {/*end::Notifications Dropdown Menu*/}
//       {/*begin::Fullscreen Toggle*/}
//       {/* <li className="nav-item">
//         <a className="nav-link" href="#" data-lte-toggle="fullscreen">
//           <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
//           <i
//             data-lte-icon="minimize"
//             className="bi bi-fullscreen-exit"
//             style={{ display: "none" }}
//           />
//         </a>
//       </li> */}
//       {/*end::Fullscreen Toggle*/}
      
//       {/* <li className="nav-item dropdown user-menu">
//         <a
//           href="#"
//           className="nav-link dropdown-toggle"
//           data-bs-toggle="dropdown"
//         >
//           <img
//             src="../../dist/assets/img/user2-160x160.jpg"
//             className="user-image rounded-circle shadow"
//             alt="User Image"
//           />
//           <span className="d-none d-md-inline">Alexander Pierce</span>
//         </a>
       
//         <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end"> */}
          
//           {/* <li className="user-header text-bg-primary">
//             <img
//               src="../../dist/assets/img/user2-160x160.jpg"
//               className="rounded-circle shadow"
//               alt="User Image"
//             />
//             <p>
//               Alexander Pierce - Web Developer
//               <small>Member since Nov. 2023</small>
//             </p>
//           </li>
//           */}
      
//           {/* <li className="user-body">
            
//             <div className="row">
//               <div className="col-4 text-center">
//                 <a href="#">Followers</a>
//               </div>
//               <div className="col-4 text-center">
//                 <a href="#">Sales</a>
//               </div>
//               <div className="col-4 text-center">
//                 <a href="#">Friends</a>
//               </div>
//             </div>
       
//           </li> */}
         
//           {/* <li className="user-footer">
//             <a href="#" className="btn btn-default btn-flat">
//               Profile
//             </a>
//             <a href="#" className="btn btn-default btn-flat float-end">
//               Sign out
//             </a>
//           </li> */}
      
//         {/* </ul>
        
//       </li> */}
     
//     </ul>
//     <button style={{borderRadius:"4px" , backgroundColor:"white",
//       border:"2px solid red",marginBottom:"5px",marginRight:"5px" }} onClick={()=>{logOutHandler()}}>Logout</button>
//     {/*end::End Navbar Links*/}
//   </div>
//   {/*end::Container*/}
// </nav>
<header className="p-2 text-bg-dark" style={{width:"85%"}}>
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          className="bi me-2"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 text-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-white">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2a mb-2">
          Login
        </button>
        <button type="button" className="btn btn-warning mb-2">
          Sign-up
        </button>
      </div>
    </div>
  </div>
  {/* <Outlet/> */}
</header>
   

  )
}
