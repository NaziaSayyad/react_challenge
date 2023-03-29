import { Button, FormControl, FormLabel, Heading, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import {AiFillCopyrightCircle, AiFillHome, AiOutlineFlag} from "react-icons/ai";
import {FcReading} from "react-icons/fc";
import{GrCompass} from "react-icons/gr";
import{RiUserFollowFill} from "react-icons/ri";
import {RxDiscordLogo} from "react-icons/rx";
import {MdFeedback} from "react-icons/md";
import {RiLoginCircleLine} from "react-icons/ri";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null);
  
  return (
   <aside
    style={{backgroundColor:"black", fontWeight:"bold", marginTop:"4.6%", hover:"none"}}  
   className="main-sidebar sidebar-dark-primary elevation-4"
   >
  
  {/* Sidebar */}
  <div className="sidebar">
    
    <nav  >
      <ul 
      className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" 
      role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
       
        <li className="nav-header">EXAMPLES</li>
        
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> <AiFillHome  /></p>
            <p>
             Home 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> 
          <FcReading />
          </p>
            <p>
            Courses
            </p>
          </a>
        </li> 
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px", backgroundColor:"white"}}> <GrCompass   /> </p>
            <p>
             Trending 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> <RiUserFollowFill /> </p>
            <p>
             Following
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> <RxDiscordLogo />  </p>
            <p>
             Discord 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}>  <AiFillCopyrightCircle /> </p>
            <p>
            Creator Acess 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> <MdFeedback /> </p>
            <p>
           Sending FeedBack 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> <AiOutlineFlag />  </p>
            <p>
              Tour 
            </p>
          </a>
        </li>
      
        {/* This one is completed  */}
     
      </ul>
     <p style={{backgroundColor: "white", height:"1px"}}> _____________________ </p>
     <ul 
      className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" 
      role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
       
        <li className="nav-header">  Populrar Channels </li>
        
        <li  className="nav-item" >
          <a href="../kanban.html" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}>   
          <img width={'25px'}
           src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
      alt="Chipher-logo" className="brand-image img-circle elevation-3" 
     
      /> </p>
            <p>
             Cipher Scool 
            </p>
          </a>
        </li>
        <li  className="nav-item" >
          <a href="" style={{display:"flex", gap:"5px"}} className="nav-link" >
          <p style={{marginTop:"5px"}}> 
           <RiLoginCircleLine />
          </p>
              <Button onClick={onOpen}> Login </Button>
          </a>
        </li> 
      
      
        {/* This one is completed  */}
     
      </ul>
    </nav>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>


  )
}

export default Sidebar
