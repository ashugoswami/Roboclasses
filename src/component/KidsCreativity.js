import React from "react";
import "../styles/kidscreative.css";
import Rating from "@mui/material/Rating";

const KidsCreativity = () => {
  const data = [
    {
      id: "1",
      name: "LEGO SPIKE PRIME 1",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero libero quod praesentium sint accusantium aspernatur placeat iusto commodi pariatur, obcaecati atque ea perferendis inventore?",
    },
    {
      id: "2",
      name: "LEGO SPIKE PRIME 2",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero libero quod praesentium sint accusantium aspernatur placeat iusto commodi pariatur, obcaecati atque ea perferendis inventore? Lorem ipsum dolor sit amet. ",
    },
    {
      id: "3",
      name: "LEGO SPIKE PRIME 3",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero libero quod praesentium sint accusantium aspernatur placeat iusto commodi pariatur, obcaecati atque ea perferendis inventore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus. ",
    },
    {
      id: "4",
      name: "LEGO SPIKE PRIME 4",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero libero quod praesentium sint accusantium aspernatur placeat iusto commodi pariatur, obcaecati atque ea perferendis inventore?",
    },
  ];
  return (
    <>
      <div className="kids_mainbox">
        <div className="container">
          <h2 className="fw-bold">Kids Creativity</h2>
          <p>Creative projects done by some of our kids</p>
          <div className="vedio-cards">
            {data.map((item, i) => {
              return (
                <>
                  <div className="creative-box" key={i}>
                    <img
                      src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/11/arduino@2x.png"
                      alt="vedio"
                      height={192}
                    />
                    <h5 className="mt-3 fw-bold">{item.name}</h5>
                  </div>
                </>
              );
            })}
          </div>
          <div className="btn-seebox mt-5">
            <button className="see-allbtn">SEE ALL</button>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <h2 className="fw-bold">Parent's corner</h2>
        </div>
        <div className="d-flex justify-content-center">
          <p>What do parents have to say</p>
        </div>
        <div className="d-flex justify-content-center">
          {data.map((item, i) => {
            return (
              <>
                <div className="container parents_cards">
                  <div className="avatar" key={i}>
                    <div className="d-flex justify-content-center">
                      <img
                        src="https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/11/Sudar_testimonial-120x120.jpeg"
                        alt="avatar"
                      />
                    </div>
                    <p className="mt-4">{item.testimony}</p>
                    <h5 className="d-flex justify-content-center fw-bold">
                      Ryan's Mom
                    </h5>
                    <Rating
                      name="size-medium"
                      className="d-flex justify-content-center"
                      defaultValue={5}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="btn-seebox mt-5">
          <button className="see-allbtn">View ALL</button>
        </div>
      </div>
    </>
  );
};

export default KidsCreativity;
