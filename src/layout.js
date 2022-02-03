import Card from "./components/challenge_card/challenge_card";
import Topbar from "./components/topbar/topbar";
import "./layout.css";
import { useEffect, useState } from "react";




const Layout = () => {
    var objects = [
        {title:"Webapp",disc:"Web app challenge", image:"https://freesvg.org/img/riggedanimation-character-8.png",link: "https://google.com"},
        {title:"Fighter",disc:"Iot app challenge Easy", image:"https://freesvg.org/img/1338526046.png", link: "https://google.com"},
        {title:"Controller",disc:"Operational tech", image:"https://freesvg.org/img/xox-Watia-girl.png", link: "https://google.com"},
        {title:"Andro-war",disc:"Mobile app challenge", image:"https://freesvg.org/img/BeautyNo23.png", link: "https://nmap.org"},
    ];

    const [data, setData] = useState();


    async function fetchData() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Abhinivesh27/flutter-api-integrations/main/data.json');
            const data = await response.json();
            
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        // setData(data);
    }
    

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
        <Topbar />
        <div className="layout" >
            {
                data?.map((obj) => (
                    <Card className="Card" title={obj.title} disc={obj.disc} image={obj.image} link={obj.link}/>
                ))
            }
        </div>
        </>
    );
}

export default Layout;
