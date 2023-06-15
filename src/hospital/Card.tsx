import "./hospital.css"



type Props = {
  name: any;
  status: any;
  userRatings: any;
  rating: any;
  photo: any;
  photo_reference: any;
};

export default function HospitalCard({
  name,
  status,
  userRatings,
  rating,
  photo,
  photo_reference,
}: Props) {
  return (
    <div className="hospital_card">
      <h1>{name}</h1>
      <h2>{status}</h2>
      <h3>{userRatings}</h3>
      <h4>{rating}</h4>
      <img src={photo} alt={photo_reference} />
      <button className="hospital-card-buttons">details</button>
    </div>
  );
}
