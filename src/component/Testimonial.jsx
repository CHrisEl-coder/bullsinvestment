import React, {useState, useEffect} from 'react'
import data from '../data'
import '../index.css'

export default function Testimonial() {
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
        let Testimonial = setInterval(() => {
            setIndex(index + 1)
        }, 8000)

       return () => {
        clearInterval(Testimonial)
    } 

    }, [index])

    
  return (
    <>
    <section className='reviews'>
        {people.map((item, indexPeople) => {
            const {id, image, name, review, city} = item 
            let position = 'nextSlide'
            if (indexPeople === index) {
                position = 'activeSlide'
            }

            if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                position = 'lastSlide'
            }

            return (
                <div className={position} key={id}>
                    <img src={image} alt={name}/>
                    <p className='rev'>{review}</p>
                    <p className='name'>{name}</p>
                    <p className='state'>{city}</p>
                </div> 
               
                    
            )
        })}
    </section>
    </>
  )
}
