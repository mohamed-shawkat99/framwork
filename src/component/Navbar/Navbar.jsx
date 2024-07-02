
import './Nav.css';
import { Link,  } from 'react-router-dom'
import Home from '../home/Home'
import $ from "jquery";
import { useEffect } from 'react';

export default function Navbar() {


  useEffect(() => {
$(window).scroll(() => {
  if (window.scrollY >-100) {
    $(".navbar").css("padding", "5px");
  }if(window.scrollY==0){
    $(".navbar").css("padding", "20px");
  } },);




  $('a').click(function() {
    $('a').removeClass('active');
    $(this).addClass('active');
  });

}, []); 
    return <>
    <nav id="navBar" className="fixed-top navbar  navbar-expand-lg">
      <div className="container">
        <h2 className="navbar-brand text-white fw-bolder fs-2" href="#">START FRAMEWORK</h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-medium text-uppercase m-2" to='home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-uppercase m-2" to="about"
                >about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium text-uppercase m-2" to="contact"
                >contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    
}