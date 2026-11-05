// // import Image from 'next/image';
// // import React from 'react';
// // import ContactUs from '../ContactUs';

// // const Contact = () => {
// //     return (
// //         <div>
            
// //          <section className="contact-us-section fix section-padding">
// //             <div className="container">
// //                 <div className="row">
// //                     <div className="col-xl-4 col-lg-6 col-md-6">
// //                         <div className="contact-us-main">
// //                             <div className="contact-box-items">
// //                                 <div className="icon">
// //                                     <Image src="/assets/img/icon/18.svg" alt="img" width={70} height={70}   />
// //                                 </div>
// //                                 <div className="content">
// //                                     <h3>
// //                                         Our Address
// //                                     </h3>
// //                                     <p>
// //                                         2464 Royal Ln. Mesa, New Jersey 45463.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-xl-4 col-lg-6 col-md-6">
// //                         <div className="contact-us-main style-2">
// //                             <div className="contact-box-items">
// //                                 <div className="icon">
// //                                     <Image src="/assets/img/icon/19.svg" alt="img" width={70} height={70}   />
// //                                 </div>
// //                                 <div className="content">
// //                                     <h3>
// //                                         <a href="mailto:info@tripco.com">info@tripco.com</a>
// //                                     </h3>
// //                                     <p>
// //                                         Email us anytime for anykind <br/> ofquety.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="col-xl-4 col-lg-6 col-md-6">
// //                         <div className="contact-us-main">
// //                             <div className="contact-box-items">
// //                                 <div className="icon">
// //                                     <Image src="/assets/img/icon/20.svg" alt="img" width={70} height={70}   />
// //                                 </div>
// //                                 <div className="content">
// //                                     <h3>
// //                                         <a href="tel:Hot+208-666-0112">Hot:+208-666-0112</a>
// //                                     </h3>
// //                                     <p>
// //                                         Call us any kind suppor,we will wait for it.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //          </section>           

// //           <section className="contact-us-section-2 section-bg-2 fix">
// //             <div className="container">
// //                 <div className="contact-us-wrapper">
// //                     <div className="row g-4">
// //                         {/* <div className="col-lg-6">
// //                             <div className="contact-us-contact">
// //                                 <div className="section-title">
// //                                     <span className="sub-title text-white wow fadeInUp">
// //                                         Contact us
// //                                     </span>
// //                                     <h2 className=" text-white wow fadeInUp wow" data-wow-delay=".2s">
// //                                         Send Message Anytime
// //                                     </h2>
// //                                 </div>
// //                                 <div className="comment-form-wrap">
// //                                     <form action="#" id="contact-form" method="POST">
// //                                         <div className="row g-4">
// //                                             <div className="col-lg-6">
// //                                                 <div className="form-clt">
// //                                                     <input type="text" name="name" id="name" placeholder="Your Name" />
// //                                                 </div>
// //                                             </div>
// //                                             <div className="col-lg-6">
// //                                                 <div className="form-clt">
// //                                                     <input type="text" name="email" id="email4" placeholder="Your Email" />
// //                                                 </div>
// //                                             </div>
// //                                             <div className="col-lg-12">
// //                                                 <div className="form-clt">
// //                                                    <input type="text" name="subject" id="name" placeholder="Subject" />
// //                                                 </div>
// //                                             </div>
// //                                             <div className="col-lg-12">
// //                                                 <div className="form-clt">
// //                                                     <textarea name="message" id="message" placeholder="Your Message"></textarea>
// //                                                 </div>
// //                                             </div>
// //                                             <div className="col-lg-6">
// //                                                 <button type="submit" className="theme-btn">
// //                                                     Submit Massage
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         </div> */}
// //                         <div className="col-lg-6">
// //                         <ContactUs/>
// //                         </div>
                        


// //                         <div className="col-lg-6">
// //                             <div className="map-area">
// //                                 <div className="google-map">
// //                                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"loading="lazy"></iframe>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //          </section>           
// //         </div>
// //     );
// // };

// // export default Contact;





// "use client";

// import Image from 'next/image';
// import React from 'react';
// import ContactUs from '../ContactUs';

// const Contact = () => {
//     return (
//         <div>

//             {/* Contact Information Section */}
//             <section className="contact-us-section fix section-padding">
//                 <div className="container">
//                     <div className="row">

//                         {/* Address */}
//                         <div className="col-xl-4 col-lg-6 col-md-6">
//                             <div className="contact-us-main">
//                                 <div className="contact-box-items">
//                                     <div className="icon">
//                                         <Image
//                                             src="/assets/img/icon/18.svg"
//                                             alt="Address"
//                                             width={70}
//                                             height={70}
//                                         />
//                                     </div>

//                                     <div className="content">
//                                         <h3>Our Address</h3>
//                                         <p>
//                                         Holiday beach street, Khobra Vaddo, Calangute, Goa 403516
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div className="col-xl-4 col-lg-6 col-md-6">
//                             <div className="contact-us-main style-2">
//                                 <div className="contact-box-items">
//                                     <div className="icon">
//                                         <Image
//                                             src="/assets/img/icon/19.svg"
//                                             alt="Email"
//                                             width={70}
//                                             height={70}
//                                         />
//                                     </div>

//                                     <div className="content">
//                                         <h3>
//                                             <a href="mailto:info@tripco.com">
//                                                 info@tripco.com
//                                             </a>
//                                         </h3>

//                                         <p>
//                                             Email us anytime for any kind
//                                             of query.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Phone */}
//                         <div className="col-xl-4 col-lg-6 col-md-6">
//                             <div className="contact-us-main">
//                                 <div className="contact-box-items">
//                                     <div className="icon">
//                                         <Image
//                                             src="/assets/img/icon/20.svg"
//                                             alt="Phone"
//                                             width={70}
//                                             height={70}
//                                         />
//                                     </div>

//                                     <div className="content">
//                                         <h3>
//                                             <a href="tel:+2086660112">
//                                                 Hot: +208-666-0112
//                                             </a>
//                                         </h3>

//                                         <p>
//                                             Call us for any kind of support.
//                                             We will be happy to help.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//             {/* Contact Form + Map Section */}
//             <section className="contact-us-section-2 fix">

//                 <div className="contact-layout">

//                     {/* Left Side - Contact Form */}
//                     <div className="contact-form-side">

//                         <div className="contact-form-inner">
//                             <ContactUs />
//                         </div>

//                     </div>

//                     {/* Right Side - Google Map */}
//                     <div className="contact-map-side">

//                         <div className="google-map">

//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
//                                 loading="lazy"
//                                 title="Our Location"
//                                 allowFullScreen
//                                 referrerPolicy="no-referrer-when-downgrade"
//                             />

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/* Component CSS */}
//             <style jsx>{`
//                 .contact-layout {
//                     display: grid;
//                     grid-template-columns: 1fr 1fr;
//                     align-items: stretch;
//                     gap:25px;
//                     width:1320px;
//                     margin:auto;
//                     padding:0 0 120px 0;
//                 }

//                 /* Background only on left side */
//                 .contact-form-side {
//                     background: #123f49;
//                     width: 100%;
//                     min-width: 0;
//                     padding: 60px 30px;
//                 }

//                 .contact-form-inner {
//                     max-width: 650px;
//                     margin: 0 auto;
//                 }

//                 /* Right side map */
//                 .contact-map-side {
//                     width: 100%;
//                     min-width: 0;
//                     background: transparent;
//                 }

//                 .google-map {
//                     width: 100%;
//                     height: 100%;
//                     min-height: 600px;
//                 }

//                 .google-map iframe {
//                     width: 100%;
//                     height: 100%;
//                     min-height: 600px;
//                     border: 0;
//                     display: block;
//                 }

//                 @media (max-width: 991px) {
//                     .contact-layout {
//                         grid-template-columns: 1fr;
//                     }

//                     .contact-form-side {
//                         padding: 50px 25px;
//                     }

//                     .google-map,
//                     .google-map iframe {
//                         min-height: 400px;
//                     }
//                 }

//                 @media (max-width: 575px) {
//                     .contact-form-side {
//                         padding: 40px 15px;
//                     }

//                     .google-map,
//                     .google-map iframe {
//                         min-height: 350px;
//                     }
//                 }
//             `}</style>

//         </div>
//     );
// };

// export default Contact;


"use client";

import Image from 'next/image';
import React from 'react';
import ContactUs from '../ContactUs';

const Contact = () => {
    return (
        <div>

            {/* Contact Information Section */}
            <section className="contact-us-section fix section-padding">
                <div className="container">
                    <div className="row">

                        {/* Address */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image
                                            src="/assets/img/icon/18.svg"
                                            alt="Address"
                                            width={70}
                                            height={70}
                                        />
                                    </div>

                                    <div className="content">
                                        <h3>Our Address</h3>
                                        <p>
                                            Holiday beach street, Khobra Vaddo, Calangute, Goa 403516
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main style-2">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image
                                            src="/assets/img/icon/19.svg"
                                            alt="Email"
                                            width={70}
                                            height={70}
                                        />
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <a href="mailto:info@tripco.com">
                                                goa@tripco.com
                                            </a>
                                        </h3>

                                        <p>
                                            Email us anytime for any kind of query.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image
                                            src="/assets/img/icon/20.svg"
                                            alt="Phone"
                                            width={70}
                                            height={70}
                                        />
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <a href="tel:+91 ######">
                                                Hot: +91 #######
                                            </a>
                                        </h3>

                                        <p>
                                            Call us for any kind of support.
                                            We will be happy to help.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Contact Form + Map Section */}
            <section className="contact-us-section-2 fix">

                <div className="contact-layout">

                    {/* Left Side - Contact Form */}
                    <div className="contact-form-side">
                        <div className="contact-form-inner">
                            <ContactUs />
                        </div>
                    </div>

                    {/* Right Side - Google Map */}
                    <div className="contact-map-side">
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                                loading="lazy"
                                title="Our Location"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                </div>

            </section>

            {/* Component CSS */}
            <style jsx>{`
                .contact-us-section-2 {
                    width: 100%;
                    overflow-x: hidden;
                }

                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: stretch;
                    gap: 25px;
                    width: 100%;
                    max-width: 1320px;
                    margin: 0 auto;
                    padding: 0 15px 120px;
                    box-sizing: border-box;
                }

                /* Background only on left side */
                .contact-form-side {
                    background: #123f49;
                    width: 100%;
                    min-width: 0;
                    padding: 60px 30px;
                    box-sizing: border-box;
                }

                .contact-form-inner {
                    width: 100%;
                    max-width: 650px;
                    margin: 0 auto;
                }

                /* Right side map */
                .contact-map-side {
                    width: 100%;
                    min-width: 0;
                    background: transparent;
                }

                .google-map {
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                }

                .google-map iframe {
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                    border: 0;
                    display: block;
                }

                /* Tablet */
                @media (max-width: 991px) {
                    .contact-layout {
                        grid-template-columns: 1fr;
                        padding-bottom: 80px;
                    }

                    .contact-form-side {
                        padding: 50px 25px;
                    }

                    .google-map,
                    .google-map iframe {
                        min-height: 400px;
                    }
                }

                /* Mobile */
                @media (max-width: 575px) {
                    .contact-layout {
                        gap: 20px;
                        padding: 0 12px 60px;
                    }

                    .contact-form-side {
                        padding: 35px 18px;
                    }

                    .google-map,
                    .google-map iframe {
                        min-height: 350px;
                    }
                }
            `}</style>

        </div>
    );
};

export default Contact;