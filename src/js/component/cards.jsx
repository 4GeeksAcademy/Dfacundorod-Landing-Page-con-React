import React from "react";
import PropType from 'prop-types';
let articles = [
    {src:'https://picsum.photos/seed/picsum/300/300', alt:'loremPhoto', title:'Card Title 1', text:`
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsa tenetur nostrum aspernatur aperiam voluptatem id quaerat.`,labelButton:'Find Out More 1', buttonHref:'#'},
    {src:'https://picsum.photos/seed/picsum/300/300', alt:'loremPhoto', title:'Card Title 2', text:`
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsa tenetur nostrum aspernatur aperiam voluptatem id quaerat.`,labelButton:'Find Out More 2', buttonHref:'#'},
    {src:'https://picsum.photos/seed/picsum/300/300', alt:'loremPhoto', title:'Card Title 3', text:`
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsa tenetur nostrum aspernatur aperiam voluptatem id quaerat.`,labelButton:'Find Out More 3', buttonHref:'#'},
    {src:'https://picsum.photos/seed/picsum/300/300', alt:'loremPhoto', title:'Card Title 4', text:`
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsa tenetur nostrum aspernatur aperiam voluptatem id quaerat.`,labelButton:'Find Out More 4', buttonHref:'#'},
    ]
const individualCard = articles.map((card, index)=>{
    return (
            <div key={index} className="card mx-1">
                <img src={card.src} className="card-img-top" alt={card.alt}/>
                <div className="card-body d-flex flex-column mx-auto text-center p-0 pt-2">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <div className="card-footer bg-light">
                    <a href={card.buttonHref} className="btn btn-primary">{card.labelButton}</a>
                    </div>

                </div>
            </div>
        )
})
export const Cards = ()=>{
    return(
        <div className="container d-flex justify-content-around">
            {individualCard}
        </div>
)}