// import React, { useState, useEffect } from "react";
// import { getFirestore } from "firebase/firestore";
// import {
//   collection,
//   query,
//   onSnapshot,
//   DocumentData,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import DoctorsCard from "./DoctorsCard";

// interface Doctors {
//   hospital: string;
//   location: string;
//   name: string;
//   specialisation: string;
// }

// function DoctorList() {
//   const [doctors, setDoctors] = useState<Doctors[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const doctorsCollection = collection(getFirestore(), "Doctors");
//   const q = query(doctorsCollection);

//   function getDoctors() {
//     setLoading(true);
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const items: Doctors[] = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data() as DocumentData;

//         const doctor: Doctors = {
//           hospital: data.hospital,
//           location: data.location,
//           name: data.name,
//           specialisation: data.specialisation,
//         };
//         items.push(doctor);
//       });

//       setDoctors(items);

//       setLoading(false);
//     });
//     return unsubscribe;
//   }

//   useEffect(() => {
//     const unsubscribe = getDoctors();
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <>
//       <div className="doctors-container">
//         <div className="doctor-header-container">
//           <div className="header-wrapper">
//             <h1 className="doctor-heading"> Know Your Doctor </h1>
//           </div>
//       <div style={{border: "1px solid black"}}>
//       {doctors.map((doctor) => (
//             <DoctorsCard
//               key={doctor.name}
//               hospital={doctor.hospital}
//               location={doctor.location}
//               specialisation={doctor.specialisation}
//               name={doctor.name}

//             />
//           ))}
//       </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DoctorList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DoctorsCard from "./DoctorsCard";
// import "firebase/app";
// import { FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [nextTokens, setNextTokens] = useState<any[]>([]);
//   const [nextState, setNextState] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);

//   const [pageUrl] = useState<string[]>([
//     "https://localhost:8080/maps/api/place/textsearch/json?query=doctors=health&location=1.3521,103.8198&radius=10000",
//     "http://localhost:8080/maps/api/place/next?nextpage=",
//   ]);

// useEffect(() => {
//   const getDoctors = async () => {
//     setLoading(true);
//     const res = await axios.get(pageUrl[0]);
//     setDoctors(res.data.results);
//     setNextTokens(res.data.next_page_token);
//     setLoading(false);
//   };
//   getDoctors();

// }, [pageUrl]);

// };

// export default Doctors;

import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorsCard from "./DoctorsCard";
import "firebase/app";
import { FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./doctordetails.css"

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextTokens, setNextTokens] = useState<any[]>([]);
  const [nextState, setNextState] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [pageUrl] = useState<string[]>([
    "http://localhost:8080/api/maps/place?latitude=6.468137&longitude=3.638487&radius=30000",
    "http://localhost:8080/api/maps/place/next?nextpage=",
  ]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(pageUrl[0])
      .then((res) => {
        console.log(res.data.results);
        setDoctors(res.data.results);
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
  }, []);

  return (
    <div className="doctors-container">
      {loading ? (
        <div className="loader"> Loading... </div>
      ) : (
        <div className="doctors-grid">
          {doctors?.map((doctor: any, index: number) => (
            <DoctorsCard
              key={index}
              name={doctor.name}
              address={doctor.formatted_address}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;
