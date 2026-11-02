"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {title:'How do I book a Goa tour package?', content:'You can book on WhatsApp, by calling our sales number, or by emailing us with the minimum booking amount. Bookings can be made up to 180 days before your trip.'},
        {title:'How does payment work?', content:'An advance amount confirms your booking. A Book Now, Pay Later option is also available, so ask us when you enquire.'},
        {title:'Can I customize my Goa itinerary?', content:'Yes. Tell us your dates and budget and we will shape the plan for your honeymoon, family holiday or group of friends. You can add North and South Goa sightseeing, water sports, scuba diving, a cruise party or a Dudhsagar trip.'},
        {title:'What is your cancellation policy?', content:'Cancellation terms vary by package, so check the terms on your package page before you pay. Sea activities are non-refundable, and in bad weather you can move the activity to another date. In genuine cases a trip voucher may be offered if you ask at least 48 hours before the trip.'},
        {title:'What happens after I book?', content:'You get a confirmation by email or WhatsApp with your invoice and booking reference. Our coordinators are available on call and chat for any help before and during your trip.'},

      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);    

    return (
        <section className="faq-section section-padding pt-0 fix">
            <div className="left-shape float-bob-y">
                 <Image src="/assets/img/tree-shape-2.png" alt="img" width={221} height={241}   />
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Goa Trip Questions
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <p className="mt-3 mt-mb-0 wow fadeInUp wow" data-wow-delay=".5s">
                                    Planning a Goa holiday brings a lot of questions. We handle hotels, transport and sightseeing, so here are quick answers on booking, payment, customizing your plan and cancellations. For anything else, message us any time.
                                </p>
                                <ul className="faq-list wow fadeInUp wow" data-wow-delay=".7s">
                                    <li>
                                         <Image src="/assets/img/icon/15.svg" alt="img" width={14} height={12}   />
                                        24/7 support on call and chat
                                    </li>
                                    <li>
                                         <Image src="/assets/img/icon/15.svg" alt="img" width={14} height={12}   />
                                        Hotels, cabs and sightseeing in one plan
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-items">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {faqContent.map((item, index) => (
                                        <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`}  data-wow-delay=".1s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                {item.title}
                                                </button>
                                            </h5>
                                            <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                {item.content}
                                                </div>
                                            </div>
                                        </div>
                                        ))}
   

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;