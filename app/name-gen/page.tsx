'use client'

import { useState, useEffect } from 'react'
import { getRandomFemaleNames } from "./female-names"
import { getRandomMaleNames } from "./male-names"

export default function NameGenPage(){

    const [maleName, setMaleName] = useState(getRandomMaleNames())
    const [femaleName, setFemaleName] = useState(getRandomFemaleNames())
    const [toggleValue, setToggleValue] = useState(false)

    useEffect(() => {
        function updateNames(){
            setMaleName(getRandomMaleNames())
            setFemaleName(getRandomFemaleNames())
        }
        updateNames()
    },[toggleValue])


    return(
        <div>
            <h1>Male</h1>
            <p>{maleName}</p>

            <h1>Female</h1>
            <p>{femaleName}</p>

            <button onClick={() => setToggleValue(!toggleValue)}>
                Generate
            </button>
        </div>
    )
}