import React from "react";
import "../styles/student.css";

const Studentspeak = () => {
  return (
    <>
      <div className="student-box">
        <div className="speaker-box">
          <div>
            <h2 className="fw-bold">Student speaks</h2>
            <h6 className="fw-bold mt-4">Meera Al Khaldi</h6>
            <p>
              My name is Meera Al Khaldi-a UAE National- I am 7 years old. I
              attended wedo Lego
            </p>
            <p>
              program level one during my spring break 2022, and it was an
              interesting, creative and
            </p>
            <p>meaningful journey.</p>
            <p>
              I recommend all the children to utilize their vacation by
              attending such programs to
            </p>
            <p>support your creative thinking.</p>
            <p>
              I thank my teacher for providing me necessary guidance, challenges
              and materials.
            </p>
            <button className="courses-btn">Veiw courses</button>
          </div>
          <div>
            <img
              src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-17-at-1.51.48-PM-773x1024.jpeg"
              alt="student"
              className="mx-5"
              height={500}
            />
          </div>
        </div>
        <div className="second-st"></div>
      </div>
    </>
  );
};

export default Studentspeak;
