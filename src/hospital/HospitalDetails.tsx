

import React from "react";
import HospitalCard from "./Card";
import { CSVLink } from "react-csv";
import "./hospitaldetails.css";

type Props = {
  name: string;
  status: string;
  // userRatings: string;
  rating: string;
};

const HospitalDetails: React.FC<Props> = ({
  name,
  status,
  // userRatings,
  rating,
}: Props) => {
  const hospitalData = [
    {
      Name: name,
      Status: status,
      // "User Ratings": userRatings,
      Rating: rating,
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: `Check out the details of ${name}`,
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div id="hospital_card_details_container">
      {hospitalData?.map((_hospital: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <HospitalCard
              key={index}
              name={_hospital.name}
              status={_hospital.business_status}
              // userRatings={_hospital.user_ratings_total}
              rating={_hospital.rating}
            />
            <CSVLink data={hospitalData} filename={`${name}_details.csv`}>
              Download CSV
            </CSVLink>
            <button onClick={handleShare}>Share</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HospitalDetails;




