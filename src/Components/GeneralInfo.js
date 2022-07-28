import React from 'react'
import { Link } from 'react-router-dom'
export default function GeneralInfo(props) {

  return (
    <>
      <div className='Container  'style={{height:"550px" ,zIndex:"2",marginTop:"-50px"}}>


        <div  id="carouselExampleDark" className=" sticky-xl-top carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button " data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="10000">
              <img style={{ height: '550px', width: "auto", marginTop: "" }} src="https://images.unsplash.com/photo-1605256585681-455837661b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="d-block w-100 mx-10" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{fontWeight:"900" }}>Antoine de Saint-Exupéry</h5>
                <p style={{fontWeight:"600" }}>"A goal without a plan is just a wish."</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="20000">
              <img style={{ height: '550px', width: "auto", marginTop: "" }} src="https://images.wallpaperscraft.com/image/single/note_motivation_text_words_119310_1280x720.jpg" className="d-block w-100 mx-10" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5  style={{fontWeight:"900" }}>Believe In Yourself</h5>
                <p style={{fontWeight:"600" }}>“If you don't know where you are going,
you'll end up someplace else.”</p>
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="30000">
              <img style={{ height: '550px', width: "auto", marginTop: "" }} src="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 mx-10" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5  style={{fontWeight:"900" }}>Gloria Steinem</h5>
                <p style={{fontWeight:"800" }}>“Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form of planning.”</p>
              </div>
            </div>



          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* footer  */}
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className=" my-5">
        {/* <!-- Footer --> */}
        <footer 
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#3e4551" ,marginTop:"-50px", marginBottom:"-100px" , zIndex:"1" }}
        >
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!--Grid column--> */}
                <div className="col-lg-10 col-md-6 mb-4 mb-md-0 container">
                  <h5 className="text-uppercase align-items-center">Save Your Notes :</h5>

                  <p>
                  Life is unpredictable. The best thing about our life is the next minute surprises. We cannot predict future events. It is very important to be at the present moment to cherish the happiness in life. One should have an aim in his/her life. One can not be clueless on what he wants. We should be in the right direction and a goal plan to achieve our aim. We should not be contained by our small achievements. We must aim big and achieve our desired aim in our life. There is no point in regretting after missing the opportunity.
                  </p>
                </div>

              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}

            <hr className="mb-4" />

            {/* <!-- Section: CTA --> */}
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
             
                <Link className="btn btn-outline-light btn-rounded" to="/login" role="button">Sign Up</Link>
              </p>
            </section>
            {/* <!-- Section: CTA --> */}

            <hr className="mb-4" />

            {/* <!-- Section: Social media --> */}
            <section className="mb-4 text-center">
              {/* <!-- Facebook --> */}
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
                
              ><i className="fab fa-facebook-f"></i
              ></Link>

              {/* <!-- Twitter --> */}
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              ><i className="fab fa-twitter"></i
              ></Link>

              {/* <!-- Google --> */}
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              ><i className="fab fa-google"></i
              ></Link>

              {/* <!-- Instagram --> */}
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              ><i className="fab fa-instagram"></i
              ></Link>

             

              {/* <!-- Github --> */}
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              ><i className="fab fa-github"></i
              ></Link>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>


          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <Link className="text-white" to="#"
            >Asad Online Codding</Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </>
  )
}
