import react from "react";
import { Component } from "react";
import Film from './Film';
import './ListFilm.css'

class ListFilm extends Component {
    render(){
        return <div className="ListFilm">
            <Film gambar="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_500x749.jpg?v=1573652543" judul="Avengers" rating="8.4"/>
            <Film gambar="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/092b7a0939b87a6501e200fba505518a_1c5315e0-7877-446b-a989-3a798250f27e_500x749.jpg?v=1573651531" judul="Harry Potter" rating="8.1"/>
            <Film gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZy_SNSJToYtP-8N0q09_abNXChvAssIqy4s5Ik1oKc0OH0Mw-6VdXPEA2F7zn9hhPiqM&usqp=CAU" judul="Weathering With You" rating="7.5"/>
            <Film gambar="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/kimetsu-no-yaiba-mugen-ressha-hen_9v84na75_500x749.jpg?v=1613747835" judul="Demon Slayer" rating="8.3"/>
            <Film gambar="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/parasite-24x36_500x749.jpg?v=1590609910" judul="Parasite" rating="8.6"/>
        </div>
    }
}

export default ListFilm;