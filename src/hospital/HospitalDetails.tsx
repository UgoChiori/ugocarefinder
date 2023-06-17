// // HOSPITAL DETAILS PAGE
// import React from "react";
// import HospitalCard from "./Card";

// type Props = {
//   name: string;
//   status: string;
//   userRatings: string;
//   rating: string;
//   // photo: any;
//   // photo_reference: any;
// };

// const HospitalDetails: React.FC<Props> = ({
//   name,
//   status,
//   userRatings,
//   rating,
// }: Props) => {
//   return (
//     <div>
//       <HospitalCard
//         name={name}
//         status={status}
//         userRatings={userRatings}
//         rating={rating}
//       />
//     </div>
//   );
// };

// export default HospitalDetails;



// import React from "react";
// import HospitalCard from "./Card";
// import { CSVLink } from "react-csv";

// type Props = {
//   name: string;
//   status: string;
//   userRatings: string;
//   rating: string;
// };

// const HospitalDetails: React.FC<Props> = ({
//   name,
//   status,
//   userRatings,
//   rating,
// }: Props) => {
//   const hospitalData = [
//     {
//       Name: name,
//       Status: status,
//       "User Ratings": userRatings,
//       Rating: rating,
//     },
//   ];

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: name,
//         text: `Check out the details of ${name}`,
//         url: window.location.href,
//       });
//     } else {
//       alert("Sharing is not supported on this device.");
//     }
//   };

//   return (
//     <div>
//       <HospitalCard
//         name={name}
//         status={status}
//         userRatings={userRatings}
//         rating={rating}
//       />
//       <CSVLink data={hospitalData} filename={`${name}_details.csv`}>
//         Download CSV
//       </CSVLink>
//       <button onClick={handleShare}>Share</button>
//     </div>
//   );
// };

// export default HospitalDetails;

// import React, { useState, useEffect } from "react";
// import HospitalCard from "./Card";
// import { CSVLink } from "react-csv";

// type Props = {
//   name: string;
//   status: string;
//   userRatings: string;
//   rating: string;
// };

// const HospitalDetails: React.FC<Props> = ({
//   name,
//   status,
//   userRatings,
//   rating,
// }: Props) => {
//   const hospitalData = [
//     {
//       Name: name,
//       Status: status,
//       "User Ratings": userRatings,
//       Rating: rating,
//     },
//   ];

//   const [canShare, setCanShare] = useState(false);

//   useEffect(() => {
//     setCanShare(!!navigator.share);
//   }, []);

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: name,
//         text: `Check out the details of ${name}`,
//         url: window.location.href,
//       });
//     } else {
//       alert("Sharing is not supported on this device.");
//     }
//   };

//   return (
//     <div>
//       <HospitalCard
//         name={name}
//         status={status}
//         userRatings={userRatings}
//         rating={rating}
//       />
//       <CSVLink data={hospitalData} filename={`${name}_details.csv`}>
//         Download CSV
//       </CSVLink>
//       {canShare && <button style={{border: "1px solid green"}} onClick={handleShare}>Share</button>}
//     </div>
//   );
// };

// export default HospitalDetails;



import React from "react";
import classNames from "classnames";
import "./hospitaldetails.css";

type Props = {
  name: string;
  status: string;
  userRatings: string;
  rating: string;
};

const HospitalCard: React.FC<Props> = ({
  name,
  status,
  userRatings,
  rating,
}: Props) => {
  const containerClass = classNames("hospital-details-container");

  return (
    <div className={containerClass}>
      <h2>{name}</h2>
      <p className="status">{status}</p>
      <p className="user-ratings">User Ratings: {userRatings}</p>
      <p className="rating">Rating: {rating}</p>
    </div>
  );
};

export default HospitalCard;