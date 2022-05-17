import React, { useEffect, useState} from "react";
import '../components/Artikelside.scss'

export const Artikelside = (props) => {

    const API_URL = "http://localhost:8084"

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
        <div className="squareArt">
            <div className="content">
                Billede
            </div>
        </div>
        <p>{article.journalist}</p>
        <p>{article.tekst}</p>
        </div>
    </div>
    );  
}
