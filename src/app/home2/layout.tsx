import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import ContactPopup from '../Components/Contactpop';

const layout = ({ children }) => {
    return (
        <div className='main-page-area3'>
           <Header1></Header1>
            {children}
            <ContactPopup/>
            <Footer1></Footer1>
        </div>
    );
};

export default layout;