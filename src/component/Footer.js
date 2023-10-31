import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="container teacher_card d-flex">
        <div>
          <h3 className="fw-bold mb-4">Teachers join our team.</h3>
          <h6>
            We are always looking for good teachers. Send us your details <br />
            along with you CV and we'll get in touch with you.
          </h6>
          <button className="join_btn mt-4">Join us</button>
        </div>

        <div>
          <img
            src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/08/join_team.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="footercontainer">
        <div className="footercontent">
          <div className="company effect">
            <h5>Company Info</h5>
            <h5>Company Info</h5>
            <h5>Company Info</h5>
            <p>Stay upto date on latest trends</p>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input_email"
            />
            <button className="subscribe_btn mt-3 mb-5">subscribe</button>
            <h5>Follow us</h5>
            <p>© ISB Edtech FZE - 2022, All rights reserved.</p>
          </div>
          <div className="contact effect">
            <h5>Accepted Cards</h5>
          </div>
          <div className="adress effect">
            <h5>Company Info</h5>
            <p>About us</p>
            <p>
              Head Office: ISB Edtech <br /> FZE,Business Center,Sharjah
              <br />
              Publishing City Free Zone,
              <br /> Sharjah, United Arab Emirates
            </p>
            <p>Phone: +971 56 116 9470</p>
            <p>Whatsapp: +971 56 116 9470</p>
            <p>Email: support@roboclasses.com</p>
          </div>
          <div className="support_effect effect">
            <h5>Support</h5>
            <p>Contact us</p>
            <p>Refund / cancellation policy</p>
            <p>Shipping policy</p>
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
