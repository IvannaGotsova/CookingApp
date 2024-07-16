import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import breakfast from './db/breakfast.json'

function BreakfastDetails () {

    const { id } = useParams();
    const [breakfastDetails, setBreakfastDetails] = useState();

    async function loadBreakfastDetails (jsonBreakfast) {
        const resultdetails = await fetch(jsonBreakfast);
        return resultdetails;
      }
    
    loadBreakfastDetails(breakfast)
      
    
    return (
        <></>
    )

}

export default BreakfastDetails