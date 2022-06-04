import React, { useEffect, useState} from "react";
import '../components/Artikelside.scss'
import billede from '../img/ingenbillede.jpg'


export const Artikelside = (props) => {

    const API_URL = "https://prod-mfe-server.herokuapp.com"

    const [article, setArticle] = useState([]);
    
    const pathName = window.location.pathname;
    
    useEffect(() => {
        async function getOneArticle() {
            const temp_id = pathName
            const url = `${API_URL}/api/articles${temp_id}`;
            const response = await fetch(url);
            const data = await response.json();
            setArticle(data)
        }
        getOneArticle()
    }, []);


    return (
    <div className="artikelside">
        <div className="artikelside__container">
        <h1 className="artikelside__titel">{article.titel}</h1>
        <h3>{article.undertitel}</h3>
        <img src={billede} className="article_img"></img>
        <p>{article.journalist}</p>
        <p>{article.tekst}</p>
        </div>
    </div>
    );  
}
