import react from "react";
import './Container.css';
import Judul from './Judul';
import ListFilm from './ListFilm';

const Container = () => {
    return <div className="Container">
        <Judul/>
        <ListFilm/>
    </div>
}

export default Container;