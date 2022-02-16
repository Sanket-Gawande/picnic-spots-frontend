import React from 'react'
import Card from './partials/Card'
import { useParams } from 'react-router-dom'
const User_places = () => {
    const cards = [
        {
            name:'Pimpalgaon reserviour wadad',
            author: "Sanket Gawande",
            postedon : new Date().toDateString(),
            thumbnail : '/img/dam.jpg',
         
            
        },
        {
            name:'Bhamda gadh mahadev mandir , Wadad',
            author: "Pragati Gawande",
            postedon : new Date().toDateString(),
            thumbnail : '/img/mahadeva.jpg',
           
            
        },
        {
            name:'Bhamda gadh mahadev mandir , Wadad',
            author: "Pragati Gawande",
            postedon : new Date().toDateString(),
            thumbnail : '/img/mahadeva.jpg',
           
            
        },
        {
            name:'Bhamda gadh mahadev mandir , Wadad',
            author: "Pragati Gawande",
            postedon : new Date().toDateString(),
            thumbnail : '/img/mahadeva.jpg',
           
            
        },
        {
            name:'Pimpalgaon reserviour wadad',
            author: "Sanket Gawande",
            postedon : new Date().toDateString(),
            thumbnail : '/img/dam.jpg',
           

        }
    ]

    const params = useParams();

    return (
        <section className='card-section'>
                <h4 className='card-section_heading'>Showing places for user id {params.userid}</h4>
                <div className='div-flex'>

                {
                    cards.map(data => {
                        const id = Math.random().toString(36).substring(2,10)
                        data.id = id;
                        return <Card data={data}  key={data.id}/> 
                    })
                }
                </div>
            </section>
    )
}

export default User_places
