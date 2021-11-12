import react from "react";
import './Film.css'

const Film = (props) => {
    return <div className="film">
        <img src={props.gambar} alt={props.judul} />
        <p className="judul">{props.judul}</p>
        <p className="rating">{props.rating}</p>
    </div>
}

export default Film;