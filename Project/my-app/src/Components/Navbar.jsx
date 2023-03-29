import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import  "./navbar.css";
import { Tooltip } from '@chakra-ui/react'
function Navbar({image}) {
  return (
  <>
    <div  className="main-header navbar navbar-expand-md navbar-light navbar-white"
    // className='Navbar'
    style={{fontFamily: "araial-black", fontWeight:"bold"}}
    >
  <div className="container">
      <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
      alt="Chipher-logo" className="brand-image img-circle elevation-3" 
     
      />
      <Heading>CipherSchools </Heading>
   
      <button className="navbar-toggler order-1" type="button"
       data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
      {/* Left navbar links */}
    
      <ul className="navbar-nav">
      <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"> Browse </a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><a href="#" className="dropdown-item"> Web Development  </a></li>
            <li><a href="#" className="dropdown-item"> App Developement </a></li>
            <li><a href="#" className="dropdown-item"> Game  </a></li>
            <li><a href="#" className="dropdown-item"> Programming</a></li>
            <li><a href="#" className="dropdown-item">Data Structures   </a></li>
            <li><a href="#" className="dropdown-item"> Data Science  </a></li>
            <li><a href="#" className="dropdown-item"> Other   </a></li>
            <li className="dropdown-divider" />
           
          </ul>
        </li>
      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-0 ml-md-3">
        <div className="input-group input-group-sm">
          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
    {/* Right navbar links */}
    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
      {/* Messages Dropdown Menu */}
     
      {/* Notifications Dropdown Menu */}
     <Tooltip  fontSize='sm' hasArrow label='Notification' >
     <li style={{fontSize: "20px", fontWeight:"bold",hover: "0"}} className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge"> 0 </span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
       </div>
      </li>
     </Tooltip>
     <li>
     <div className="nav-item">
        <div> 
         <Tooltip  fontSize='sm' hasArrow label='Profile'>
         <Img 
          cursor={'pointer'} mt='10px'
          w={'25px'} ml='35%'border='1px solid' borderRadius={'50%'}
           src=""
         />
         </Tooltip>
      </div>
     
        </div>
     </li>
   
     <li>
     <div className="nav-item">
        <Box  ml={'15%'} marginTop={'35%'}> 
         <Tooltip  fontSize='sm' hasArrow label='CphirePoint 0'>
         <Img 
          cursor={'pointer'}
          w={'30px'} 
          // h="10px"
          mt='10px' 
          ml={'75%'} 
           src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
         />
         </Tooltip>
      </Box>
     
        </div>
     </li>
    </ul>
  
  </div>
</div>
</>

           
  )
}

export default Navbar
