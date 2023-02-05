import { useState, useRef} from 'react';
import Header from './components/Header';
import UIButton from './UIKIT/UIButton';
import UIDropDown from './UIKIT/UIDropDown';
import UIInput from './UIKIT/UIInput';
import Main from './components/Main';
import BrocardvLine from './components/BrocardvLine';
import Slider from './components/Slider/Slider';
import Stages from './components/Stages';
import Statistics from './components/Statistics';
import Reviews from './components/Reviews';
import Availability from './components/Availability';
import Сontacts from './components/Сontacts'
import Request from './components/Request';
import Maps from './components/Maps';
import Footer from './components/Footer';
import MobileNav from "./components/mobileNav";

const cars = ['Toyota', 'Mitsubishi', 'Nissan'];
function App() {

    const mainRef = useRef(null)
    const catalogRef = useRef(null)
    const staticRef = useRef(null)
    const auctionRef = useRef(null)
    const contactRef = useRef(null)
    const comandRef = useRef(null)



    const [value, setValue] = useState<string>('');

    const [selectedCar, setSelectedCar] = useState<string>('');
    console.log(value);
    return (
        <div className="App">
            <Header mainRef={mainRef} catalogRef={catalogRef} staticRef={staticRef} auctionRef={auctionRef} contactRef={contactRef} comandRef={comandRef}/>
            <Main mainRef={mainRef} />
            <BrocardvLine />
            <Slider catalogRef={catalogRef}/>
            <Stages/>
            <Statistics staticRef={staticRef}/>
            <Reviews/>
            <Availability auctionRef={auctionRef}/>
            <Сontacts contactRef={contactRef}/>
            <Request/>
            <Maps comandRef={comandRef}/>
            <Footer mainRef={mainRef} catalogRef={catalogRef} staticRef={staticRef} auctionRef={auctionRef} contactRef={contactRef} comandRef={comandRef}/>
        </div>
    );
}

export default App;
