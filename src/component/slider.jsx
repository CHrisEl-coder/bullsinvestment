import React, {useState, useEffect} from 'react'
import data from '../data'

export default function slider() {
    const [people] = useState(data) 
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 8000)

       return () => {
        clearInterval(slider)
    } 

    }, [index])

    
  return (
    <>
    <div className='reviews'>
        {people.map((item, indexPeople) => {
            const {id, image, name, review, city} = item 

            return (
                <div>
                    <img src={image} alt={name}/>
                    <p className='rev'>{review}</p>
                    <p className='name'>{name}</p>
                    <p className='state'>{city}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}
