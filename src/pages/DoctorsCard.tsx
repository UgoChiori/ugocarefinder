import React from 'react'

type Props = {
    hospital: string;
    location: string;
    name: string;
    specialisation: string;
}

const DoctorsCard = ({ hospital, location, name, specialisation }: Props) => {
    return (
        <div>
            <h1>{hospital}</h1>
            <h2>{location}</h2>
            <h3>{name}</h3>
            <h4>{specialisation}</h4>
        </div>
    )
}

export default DoctorsCard