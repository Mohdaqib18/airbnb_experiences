import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js";

export default function App(){
 const experiences = Data.map(exp =>{
    return < Card
     key = {exp.id}
    title = {exp.title}
    price = {exp.price}
    coverImg =  {exp.coverImg}
    reviewCount = {exp.stats.reviewCount}
    rating = {exp.stats.rating}
    location = {exp.location}
    openSpots={exp.openSpots} />
  
 })


    return(
        <div>
            <Navbar  />
            <Hero />
            <section className="cards-list">
            {experiences}
            </section>
        </div>
    )
}


// {
//     id: 1,
//     title: "Life Lessons with Katie Zaferes",
//     description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
//     price: 136,
//     coverImg: "katie-zaferes.png",
//     stats: {
//         rating: 5.0,
//         reviewCount: 6
//     },
//     location: "Online",
//     openSpots: 0,
// }