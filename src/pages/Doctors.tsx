import React, { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import DoctorsCard from "./DoctorsCard";

interface Doctors {
  hospital: string;
  location: string;
  name: string;
  specialisation: string;
}

function DoctorList() {
  const [doctors, setDoctors] = useState<Doctors[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const doctorsCollection = collection(getFirestore(), "Doctors");
  const q = query(doctorsCollection);

  function getDoctors() {
    setLoading(true);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items: Doctors[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;

        const doctor: Doctors = {
          hospital: data.hospital,
          location: data.location,
          name: data.name,
          specialisation: data.specialisation,
        };
        items.push(doctor);
      });

      setDoctors(items);

      setLoading(false);
    });
    return unsubscribe;
  }

  useEffect(() => {
    const unsubscribe = getDoctors();
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="doctors-container">
        <div className="doctor-header-container">
          <div className="header-wrapper">
            <h1 className="doctor-heading"> Know Your Doctor </h1>
          </div>
      <div style={{border: "1px solid black"}}>
      {doctors.map((doctor) => (
            <DoctorsCard
              key={doctor.name}
              hospital={doctor.hospital}
              location={doctor.location}
              specialisation={doctor.specialisation}
              name={doctor.name}
              
            />
          ))}
      </div>
        </div>
      </div>
    </>
  );
}

export default DoctorList;
