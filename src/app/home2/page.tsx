import React from 'react';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';
import Form1 from '../Components/Form/Form1';
import Destination3 from '../Components/Destination/Destination3';
import About3 from '../Components/About/About3';
import DealOffers2 from '../Components/DealOffers/DealOffers2';
import Brand2 from '../Components/Brand/Brand2';
import Counter2 from '../Components/Counter/Counter2';
import FeaturedFlight from '../Components/FeaturedFlight/FeaturedFlight';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Cta4 from '../Components/Cta/Cta4';
import Faq1 from '../Components/Faq/Faq1';
import Counter3 from '../Components/Counter/Counter3';
import Blog3 from '../Components/Blog/Blog3';
import Instagram2 from '../Components/Instagram/Instagram2';
import WhyChooseUs from '../Components/Whychooseus';
import ThingsToDoSlider from '../Components/Thingstodoingoa';
import TrustStrip from '../Components/Truststrip';
import GoaSections from '../Components/GoaHighlights';
import TourPackagesSlider from '../Components/Tourpackagesslider';

const page = () => {
    return (
        <div>
            <HeroBanner3/>
<Form1 />  
            <TourPackagesSlider/>

            <About3/>
                        <Destination3/>

            <DealOffers2/>
            {/* <Brand2/>
            <Counter2/>
            <FeaturedFlight/> */}
            <WhyChooseUs/>
            <ThingsToDoSlider/>
            <Testimonial3/>
            <TrustStrip/>
            {/* <Cta4/> */}
            <Faq1/>
            <Counter3/>
             <Blog3/>
             <GoaSections/>
             
            {/* <Instagram2/>           */}
        </div>
    );
};

export default page;