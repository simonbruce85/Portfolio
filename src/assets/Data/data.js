import toDoList from "../../assets/toDoList.png"
import cryptoTrack from "../../assets/cryptoTrack.png"
import animalHospital from "../../assets/animalHospital.png"
import netflixClone from "../../assets/netflixClone.png"
import GBE from "../../assets/GBE.png"


export default  [
        {
            "id": "0",
            "name": "Animal Hospital Record",
            "description": "Full-Stack Web Application used by an animal hospital to register patients' and owners' information and relevant data. Back-end and Front-end hosted on AWS using elastic beanstalk and RDS",
            "techs": ["React", "Spring Boot", "Postgres", "AWS"],
            "img": animalHospital,
            "github": "https://github.com/simonbruce85/kaninosca",
            "demo": "http://kaninoscaenv-env.eba-3cwbfzxq.us-east-2.elasticbeanstalk.com/"
        },
        {
            "id": "1",
            "name": "Netflix Clone",
            "description": "Netflix clone application using Firebase to integrate authentication and save information about each individual user in firebase",
            "techs": ["React", "Firebase", "Movie Api"],
            "img": netflixClone,
            "github": "https://github.com/simonbruce85/netflix-clone",
            "demo": "https://netflix-clone-sime.netlify.app/"
        },
        {
            "id": "2",
            "name": "To-do List",
            "description": "To-do List application based on firebase interactiont to add, modify and delete tasks",
            "techs": ["React", "Firebase", "Tailwind"],
            "img": toDoList,
            "github":"https://github.com/simonbruce85/TodoFirebase",
            "demo": "https://simons-to-do-list.netlify.app/"
        },{
            "id": "3",
            "name": "Growing Beyond Earth",
            "description": "Growing Beyond Earth Innovation Award winners in the NASA sponsored contest ''Growing Beyond Earth'' as the FIU team",
            "techs": ["Arduino", "Fusion 360", "Hardware"],
            "img": GBE,
            "github":"/",
            "demo":"https://makeprojects.com/project/fiu-autonomous-farmer---year-3-collegiate-entry"
        },
        {
            "id": "4",
            "name": "Crypto Price Tracker",
            "description": "Website oriented to track the price of thousands of cryptocurrencies using CoinGecko API",
            "techs": ["React", "CoinGecko API", "Tailwind"],
            "img": cryptoTrack,
            "github":"https://github.com/simonbruce85/cryptoAPI",
            "demo": "https://crypto-price-api.netlify.app"
        }
    ]