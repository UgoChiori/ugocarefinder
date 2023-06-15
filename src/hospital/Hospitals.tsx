// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HospitalCard from "./Card";
// import "./hospital.css";

// interface Hospital {
//   name: string;
//   business_status: string;
//   user_ratings_total: number;
//   rating: number;
// }

// const Hospitals: React.FC = () => {
//   const [testHospitals, setTestHospitals] = useState<Hospital[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [nextTokens, setNextTokens] = useState<any[]>([]);
//   const [nextState, setNextState] = useState(false);
//   const [pageUrl, setPageUrl] = useState<string[]>([
//     "http://localhost:8080/api/maps/place?latitude=6.468137&longitude=3.638487&radius=30000",
//     "http://localhost:8080/api/maps/place/next?nextpage=",
//   ]);

//   function nextPage(page: any) {
//     if (page) {
//       setCurrentPage(currentPage + 1);
//       return;
//     }
//     setCurrentPage(currentPage - 1);
//   }

//   useEffect(() => {
//     axios
//       .get(pageUrl[0])
//       .then((res) => {
//         console.log(res.data.results);
//         setTestHospitals(res.data.results);
//         if (res.data.next_page_token) {
//           setNextState(true);
//         }
//         const nextPage = { page: 2, token: res.data.next_page_token };
//         setNextTokens([...nextTokens, nextPage]);
//         console.log(typeof res.data.results[0].name);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     let pageToCall;
//     if (currentPage === 1) {
//       axios
//         .get(pageUrl[0])
//         .then((res) => {
//           console.log(res.data.results);
//           setTestHospitals(res.data.results);
//           if (res.data.next_page_token) {
//             setNextState(true);
//           }
//           const nextPage = { page: 2, token: res.data.next_page_token };
//           setNextTokens([...nextTokens, nextPage]);
//           console.log(typeof res.data.results[0].name);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else if (currentPage > 1) {
//       nextTokens.map((page) => {
//         if (page.page === currentPage) {
//           pageToCall = page.token;
//         }
//       });
//       axios
//         .get(`${pageUrl[1]}${pageToCall}`)
//         .then((res) => {
//           // console.log(res.data.results);
//           setTestHospitals(res.data.results);
//           if (res.data.next_page_token) {
//             const nextPage = {
//               page: currentPage + 1,
//               token: res.data.next_page_token,
//             };
//             setNextTokens([...nextTokens, nextPage]);
//           }
//           if (res.data.next_page_token) {
//             setNextState(true);
//           } else {
//             setNextState(false);
//           }
//           console.log(typeof res.data.results[0].name);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [currentPage]);

//   return (
//     <div>
//       <div className="hospital-cover">
//         <div className="hospitals-grid">
//           {testHospitals?.map((_hospital, index) => {
//             return (
//               <HospitalCard
//                 key={index}
//                 name={_hospital.name}
//                 status={_hospital.business_status}
//                 userRatings={_hospital.user_ratings_total}
//                 rating={_hospital.rating}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <div className="pagination-buttons">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => {
//             nextPage(false);
//           }}
//         >
//           Prev
//         </button>
//         <button
//           disabled={!nextState}
//           onClick={() => {
//             nextPage(true);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hospitals;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HospitalCard from "./Card";
// import "./hospital.css";

// const Hospitals: React.FC = () => {
//   const [testHospitals, setTestHospitals] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [nextTokens, setNextTokens] = useState<any[]>([]);
//   const [nextState, setNextState] = useState(false);
//   const [pageUrl, setPageUrl] = useState<string[]>([
//     "http://localhost:8080/api/maps/place?latitude=6.468137&longitude=3.638487&radius=30000",
//     "http://localhost:8080/api/maps/place/next?nextpage=",
//   ]);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   function nextPage(page: any) {
//     if (page) {
//       setCurrentPage(currentPage + 1);
//       return;
//     }
//     setCurrentPage(currentPage - 1);
//   }

//   useEffect(() => {
//     axios
//       .get(pageUrl[0])
//       .then((res) => {
//         console.log(res.data.results);
//         setTestHospitals(res.data.results);
//         if (res.data.next_page_token) {
//           setNextState(true);
//         }
//         const nextPage = { page: 2, token: res.data.next_page_token };
//         setNextTokens([...nextTokens, nextPage]);
//         console.log(typeof res.data.results[0].name);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     let pageToCall;
//     if (currentPage === 1) {
//       axios
//         .get(pageUrl[0])
//         .then((res) => {
//           console.log(res.data.results);
//           setTestHospitals(res.data.results);
//           if (res.data.next_page_token) {
//             setNextState(true);
//           }
//           const nextPage = { page: 2, token: res.data.next_page_token };
//           setNextTokens([...nextTokens, nextPage]);
//           console.log(typeof res.data.results[0].name);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else if (currentPage > 1) {
//       nextTokens.map((page) => {
//         if (page.page === currentPage) {
//           pageToCall = page.token;
//         }
//       });
//       axios
//         .get(`${pageUrl[1]}${pageToCall}`)
//         .then((res) => {
//           // console.log(res.data.results);
//           setTestHospitals(res.data.results);
//           if (res.data.next_page_token) {
//             const nextPage = {
//               page: currentPage + 1,
//               token: res.data.next_page_token,
//             };
//             setNextTokens([...nextTokens, nextPage]);
//           }
//           if (res.data.next_page_token) {
//             setNextState(true);
//           } else {
//             setNextState(false);
//           }
//           console.log(typeof res.data.results[0].name);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [currentPage]);

//   useEffect(() => {
//     const filteredHospitals = testHospitals.filter((hospital) =>
//       hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setTestHospitals(filteredHospitals);
//   }, [searchQuery]);

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           className="search-input"
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search hospitals..."
//         />
//       </div>
//       <div>
//         <h1 className="hospitals-heading">Hospitals near you.</h1>
//         <div className="hospital-cover">
//           <div className="hospitals-grid">
//             {testHospitals?.map((_hospital, index) => {
//               return (
//                 <HospitalCard
//                   key={index}
//                   name={_hospital.name}
//                   status={_hospital.business_status}
//                   userRatings={_hospital.user_ratings_total}
//                   rating={_hospital.rating}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <div className="pagination-buttons">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => {
//               nextPage(false);
//             }}
//           >
//             Prev
//           </button>
//           <button
//             disabled={!nextState}
//             onClick={() => {
//               nextPage(true);
//             }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hospitals;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HospitalCard from "./Card";
import "./hospital.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hospitals: React.FC = () => {
  const [testHospitals, setTestHospitals] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextTokens, setNextTokens] = useState<any[]>([]);
  const [nextState, setNextState] = useState<boolean>(false);
  const [pageUrl, setPageUrl] = useState<string[]>([
    "http://localhost:8080/api/maps/place?latitude=6.468137&longitude=3.638487&radius=30000",
    "http://localhost:8080/api/maps/place/next?nextpage=",
  ]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  function nextPage(page: any) {
    if (page) {
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
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
      });
  }, []);

  useEffect(() => {
    let pageToCall: string | undefined;
    if (currentPage === 1) {
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
        });
    } else if (currentPage > 1) {
      nextTokens.map((page) => {
        if (page.page === currentPage) {
          pageToCall = page.token;
        }
      });
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
        <div className="careheader_input">
          <AiOutlineSearch className="careheader_input_icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Hospitals..."
            className="careheader_input_element"
          />
        </div>
      </div>

      {/* <div className="hospital-cover">
        <div className="hospitals-grid">
          {testHospitals?.map((_hospital: any, index: number) => {
            return (
              <HospitalCard
                key={index}
                photo={_hospital.photos[0].photo_reference}
                name={_hospital.name}
                status={_hospital.business_status}
                userRatings={_hospital.user_ratings_total}
                rating={_hospital.rating} photo_reference={undefined}              />
            );
          })}
        </div>
      </div> */}
      <div className="hospital-cover">
        <div className="hospitals-grid">
          {testHospitals?.map((_hospital: any, index: number) => {
            const photoReference = _hospital.photos?.[0]?.photo_reference; // Added a conditional check
            return (
              <HospitalCard
                key={index}
                photo={photoReference}
                name={_hospital.name}
                status={_hospital.business_status}
                userRatings={_hospital.user_ratings_total}
                rating={_hospital.rating}
                photo_reference={undefined}
              />
            );
          })}
        </div>
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
      </div>
    </div>
  );
};

export default Hospitals;
