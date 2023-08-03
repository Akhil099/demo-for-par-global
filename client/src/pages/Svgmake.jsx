import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
import stats from '../assets/imges/stats.svg';

const styles = {
    border : '2px solid black'
}


export default function Svgmake(){
    return (
    <div className="flex flex-col justify-between w-full h-screen">
        <NavBarMain />
        <div className='img-container' style={styles}>
            <img src={stats} alt='stats'/>
        </div>
        <Footer />
    </div>
    );
}
