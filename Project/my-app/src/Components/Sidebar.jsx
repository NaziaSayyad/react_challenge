import React from 'react'

function Sidebar() {
  return (
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  {/* <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a> */}
  {/* Sidebar */}
  <div className="sidebar">
    
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
         <li> <p style={{color: "white"}}> Home </p> </li>
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i />
            <p>
             Home
             
            </p>
          </a>
         
        </li>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>


  )
}

export default Sidebar
