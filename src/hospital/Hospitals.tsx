import React, { useState, useEffect } from "react";
import axios from "axios";
import HospitalCard from "./Card";
import "./hospital.css";
import { AiOutlineSearch } from "react-icons/ai";
import firebase, { auth } from "../firebase";
// import {auth} from "firebase/app";
import "firebase/app";
import { FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
import MapContainer from "../pages/MapContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hospitals: React.FC = () => {
  const [testHospitals, setTestHospitals] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextTokens, setNextTokens] = useState<any[]>([]);
  const [nextState, setNextState] = useState<boolean>(false);
  const [pageUrl] = useState<string[]>([
    "http://localhost:8080/api/maps/place?latitude=6.468137&longitude=3.638487&radius=30000",
    "http://localhost:8080/api/maps/place/next?nextpage=",
  ]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // Added loading state
  // const [radius, setRadius] = useState<number>(30000);

  // const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setRadius(parseInt(e.target.value));
  // };

  // SHARE VIA WHATSAPP
  const handleShare = () => {
    const hospitalData = testHospitals
      .map((hospital) => hospital.name)
      .join("\n");
    const message = `Check out these hospitals: \n${hospitalData}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  //   const handleShareEmail = () => {
  //     const hospitalData = testHospitals.map((hospital) => hospital.name).join("\n");
  //     const shareBody = `Check out these hospitals: \n${hospitalData}`;

  // const user = firebase.auth().currentUser;
  // if (user) {
  //   user
  //     .sendEmailVerification()
  //     .then(() => {
  //       alert("Email sent!");
  //     })
  //     .catch((error: { message: any }) => {
  //      console.error("Error sending email verification", error);
  //     });
  //   } else {
  //     alert("You need to be logged in to share via email");
  // }
  //   }

  // GENERATE SHAREABLE LINK
  const handleGenerateLink = () => {
    const hospitalData = testHospitals
      .map((hospital) => hospital.name)
      .join("\n");
    const shareBody = `Check out these hospitals: \n${hospitalData}`;

    const user = auth.currentUser;
    if (user) {
      const link = `${window.location.href}?share=${encodeURIComponent(
        shareBody
      )}`;
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard");
    } else {
      alert("You need to be logged in to generate a shareable link");
    }
  };

  // SEARCH HOSPITALS
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setTestHospitals([]);
      setLoading(true);
      axios
        .get(pageUrl[0])
        .then((res) => {
          console.log(res.data.results);
          setTestHospitals(res.data.results);
          if (res.data.next_page_token) {
            setNextState(true);
          }
          const nextPage = { page: 2, token: res.data.next_page_token };
          setNextTokens([...nextTokens, nextPage]);
          console.log(typeof res.data.results[0].name);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  function nextPage(page: any) {
    if (page) {
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    setLoading(true); // Start loading
    axios
      .get(pageUrl[0])
      .then((res) => {
        console.log(res.data.results);
        setTestHospitals(res.data.results);
        if (res.data.next_page_token) {
          setNextState(true);
        }
        const nextPage = { page: 2, token: res.data.next_page_token };
        setNextTokens([...nextTokens, nextPage]);
        console.log(typeof res.data.results[0].name);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, []);

  useEffect(() => {
    let pageToCall: string | undefined;
    if (currentPage === 1) {
      setLoading(true); // Start loading
      axios
        .get(pageUrl[0])
        .then((res) => {
          console.log(res.data.results);
          setTestHospitals(res.data.results);
          if (res.data.next_page_token) {
            setNextState(true);
          }
          const nextPage = { page: 2, token: res.data.next_page_token };
          setNextTokens([...nextTokens, nextPage]);
          console.log(typeof res.data.results[0].name);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    } else if (currentPage > 1) {
      nextTokens.map((page) => {
        if (page.page === currentPage) {
          pageToCall = page.token;
        }
      });
      setLoading(true); // Start loading
      axios
        .get(`${pageUrl[1]}${pageToCall}`)
        .then((res) => {
          // console.log(res.data.results);
          setTestHospitals(res.data.results);
          if (res.data.next_page_token) {
            const nextPage = {
              page: currentPage + 1,
              token: res.data.next_page_token,
            };
            setNextTokens([...nextTokens, nextPage]);
          }
          if (res.data.next_page_token) {
            setNextState(true);
          } else {
            setNextState(false);
          }
          console.log(typeof res.data.results[0].name);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    }
  }, [currentPage]);

  useEffect(() => {
    const filteredHospitals = testHospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTestHospitals(filteredHospitals);
  }, [searchQuery]);

  return (
    <div>
      <div className="container">
        <div id="careheader_input">
          <AiOutlineSearch className="careheader_input_icon" />
          <input
            type="text"
            placeholder="Search for hospitals"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="hospital-cover">
        {loading ? (
          <div className="loader">Loading...</div> // Show loading state
        ) : (
          <div className="carousel">
          <Carousel
           showStatus={false} 
           showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={1000}
           >
          
            {testHospitals?.map((_hospital: any, index: number) => {
              // const photoReference = _hospital.photos?.[0]?.photo_reference; // Added a conditional check
              return (
                <div key={index}>
                  <HospitalCard
                    // key={index}
                    // photo={photoReference}
                    name={_hospital.name}
                    status={_hospital.business_status}
                    // userRatings={_hospital.user_ratings_total}
                    rating={_hospital.rating}
                    // photo_reference={undefined}
                  />
                </div>
              );
            })}
          </Carousel>
          </div>
        )}
      </div>
      <div className="pagination-buttons">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            nextPage(false);
          }}
        >
          Prev
        </button>
        <button
          disabled={!nextState}
          onClick={() => {
            nextPage(true);
          }}
        >
          Next
        </button>
        {/* ADD THE SHARE BUTTONS */}
        <FaWhatsapp
          className="share-button"
          onClick={() => {
            handleShare();
          }}
        />
        {/* <FaEnvelope
          className="share-button"
          onClick={() => {
            handleShareEmail();
          }}
        /> */}
        <FaLink
          className="share-button"
          onClick={() => {
            handleGenerateLink();
          }}
        />
      </div>
      <MapContainer hospitals={testHospitals} />
    </div>
  );
};

export default Hospitals;
