import "./hospital.css";
import { useNavigate } from "react-router-dom";






type Props = {
  name: any;
  status: any;
  userRatings: any;
  rating: any;
  // photo: any;
  // photo_reference: any;
};

export default function HospitalCard({
  name,
  status,
  userRatings,
  rating,
  // photo,
  // photo_reference,
}: Props) {
  const navigate = useNavigate();
  return (
    
    <div className="hospital_card">
      <h1>{name}</h1>
      <h2>{status}</h2>
      <h3>{userRatings}</h3>
      <h4>{rating}</h4>
      {/* <img src={photo} alt={photo_reference} /> */}
      <button onClick={
        () => {
          navigate ("/HospitalDetails")
          console.log({ name, status, userRatings, rating })
        }
      } className="hospital-card-buttons">Details</button>
    </div>
  );
}


