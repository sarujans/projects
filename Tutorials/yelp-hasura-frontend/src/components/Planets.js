import React from "react"
import {useQuery, gql} from '@apollo/client';


// here do we describe the GQL query string
const PLANETS = gql`
{
    planets {
      id
      name
      cuisine
    }
  }
`;

export default function Planets(){
    const {loading, error, data} = useQuery(PLANETS);

    if (loading) return <p>Loading..</p>
    if (error) return <p>Error</p>;

    return data.planets.map(({id,name,cuisine}) => (
        <div key={id}>
            <p>{name} | {cuisine} </p>
        </div>
    ))
}