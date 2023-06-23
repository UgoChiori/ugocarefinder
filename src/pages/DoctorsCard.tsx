// import React from 'react'

// type Props = {
//     hospital: string;
//     location: string;
//     name: string;
//     specialisation: string;
// }

// const DoctorsCard = ({ hospital, location, name, specialisation }: Props) => {
//     return (
//         <div>
//             <h1>{hospital}</h1>
//             <h2>{location}</h2>
//             <h3>{name}</h3>
//             <h4>{specialisation}</h4>
//         </div>
//     )
// }

// export default DoctorsCard

import React from "react";
import { useNavigate } from "react-router-dom"

type Props = {
    name: any,
    address: any,

}

const DoctorsCard = ({ name, address }: Props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>{name}</h1>
            <h2>{address}</h2>
            <button onClick={() => {
                navigate("/DoctorDetails");
                console.log({ name, address });
            }}>Details</button>
        </div>
    )
}

export default DoctorsCard