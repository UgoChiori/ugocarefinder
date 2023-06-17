import React from "react";
import "./home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import carefinder1 from "../photos/carefinder1.jpg";


const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="careheader_container">
      <div className="careheader_wrapper">
        <div className="careheader_head">
          <h1 className="careheader_heading">
            Search Your <span className="careheader_heading_span">Care</span>{" "}
            Provider
          </h1>
          {/* add image */}
          <img src={carefinder1} alt="doctor giving woman injection" className="carephoto"/>
          <p className="heading_para">Lorem ipsum dolor</p>
          <div className="careheader_input">
            <AiOutlineSearch className="careheader_input_icon" />
            <input
              type="text"
              placeholder="Search"
              className="careheader_input_element"
            />
          </div>
        </div>
        <div className="careheader_select">
         
          <div className="careheader_item">
            <MdOutlineTipsAndUpdates className="careheader_select_icon" />
            <p onClick={
              () => {
                navigate ("/HealthTips")
              }
            } >Health Tips</p>
          </div>
          <div className="careheader_item">
            <GiDoctorFace className="careheader_select_icon" />
            <p>Doctor</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;