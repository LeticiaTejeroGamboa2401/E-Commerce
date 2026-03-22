import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroCarousel from './components/HeroCarousel';
import ProductSection from './components/ProductSection';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <div className="pt-30 flex-1">
                <HeroCarousel/>
            </div>
            <div className="pt-90 flex-1">
                <ProductSection/>
            </div>
            <Footer/>
        </div>
    );
}
