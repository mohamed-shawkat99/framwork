import React from 'react'
import './footer.css';
export default function Footer() {
    return <>
    <footer className='footer text-center overflow-hidden'>
    <div className="container">
        <div className="row p-5">
            <div className="col-md-4  text-light">
                <h5 className=' fs-2'>Location</h5>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4  text-light">
                <h5 className=' fs-2'>AROUND THE WEB</h5>
                <i _ngcontent-kex-c21="" class="fa-brands fa-facebook fs-4 mx-1 px-1 py-3 icon"></i>
                <i _ngcontent-kex-c21="" class="fa-brands fa-twitter fs-4  mx-1 px-1 py-3 icon"></i>
                <i _ngcontent-kex-c21="" class="fa-brands fa-linkedin-in fs-4 mx-1 px-1 py-3 icon"></i>
                <i _ngcontent-kex-c21="" class="fa-solid fa-globe mx-1 px-1 py-3  fs-4 icon"></i>

            </div>
            <div className="col-md-4  text-light">
                <h5 className=' fs-2'>ABOUT FREELANCER</h5>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p> 
            </div>
        </div>
    </div>
    <div className='footerMark p-2'>
    <p className='  text-light '>Copyright © Your Website 2021</p>
    </div>
    </footer>
    </>

}

