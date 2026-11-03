"use client";

import React from "react";

const ContactUs = () => {
    const tourPackages = [
        "Couple Goa Tour Package",
        "Solo Goa trip",
        "Weekend Gateway Tour Goa",
        "Family Tour Package Goa",
        "Customise Goa Tour Package",
    ];

    const activities = [
        "Scuba Diving Goa",
        "Water Sports Goa",
        "Dudhsagar Waterfall",
        "Dinner Party on Cruise",
        "Bungy Jumping",
        "Flyboarding",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());

        console.log("Contact Form Data:", data);

        alert("Thank you! Your enquiry has been submitted.");
    };

    return (
        <section className="contact-section">
            <div className="contact-container">

                <div className="contact-us-contact">

                    <div className="section-title">
                        <span className="sub-title">
                            Contact Us
                        </span>

                        <h2>
                            Send Message Anytime
                        </h2>
                    </div>

                    <div className="comment-form-wrap">

                        <form
                            id="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="contact-form-grid">

                                {/* Name */}
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name <span>*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email <span>*</span>
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Phone No <span>*</span>
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>

                                {/* Tentative Date */}
                                <div className="form-group">
                                    <label htmlFor="date">
                                        Trip Tentative Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                    />
                                </div>

                                {/* Number of Persons */}
                                <div className="form-group">
                                    <label htmlFor="persons">
                                        No. of Persons
                                    </label>

                                    <input
                                        type="number"
                                        name="persons"
                                        id="persons"
                                        placeholder="No. of Persons"
                                        min="1"
                                    />
                                </div>

                            </div>

                            {/* Tour Package Type */}
                            <div className="form-group checkbox-group">

                                <label className="group-title">
                                    Tour Package Type
                                </label>

                                <div className="checkbox-options">

                                    {tourPackages.map((item, index) => (
                                        <label
                                            key={index}
                                            className="checkbox-item"
                                        >
                                            <input
                                                type="checkbox"
                                                name="tourPackage"
                                                value={item}
                                            />

                                            <span>{item}</span>
                                        </label>
                                    ))}

                                </div>

                            </div>

                            {/* Activities */}
                            <div className="form-group checkbox-group">

                                <label className="group-title">
                                    Activities Want To Do?
                                </label>

                                <div className="checkbox-options">

                                    {activities.map((item, index) => (
                                        <label
                                            key={index}
                                            className="checkbox-item"
                                        >
                                            <input
                                                type="checkbox"
                                                name="activities"
                                                value={item}
                                            />

                                            <span>{item}</span>
                                        </label>
                                    ))}

                                </div>

                            </div>

                            {/* Message */}
                            <div className="form-group message-group">

                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Your Message"
                                    rows={5}
                                ></textarea>

                            </div>

                            {/* Submit */}
                            <div className="submit-area">

                                <button
                                    type="submit"
                                    className="theme-btn"
                                >
                                    Submit Message
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            {/* CSS */}
            <style jsx>{`
                .contact-section {
                    background: #123f49;
                    padding: 100px 20px;
                    // width: 100%;
                    color: #ffffff;
                }

                .contact-container {
                    max-width: 850px;
                    width: 100%;
                    margin: 0 auto;
                }

                .section-title {
                    margin-bottom: 40px;
                }

                .sub-title {
                    display: block;
                    font-size: 16px;
                    font-style: italic;
                    font-weight: 500;
                    color: #ffffff;
                    margin-bottom: 12px;
                }

                .section-title h2 {
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #ffffff;
                    margin: 0;
                }

                .contact-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    margin-bottom: 30px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .form-group label {
                    color: #ffffff;
                    font-size: 15px;
                    margin-bottom: 10px;
                }

                .form-group label span {
                    color: #00bde8;
                }

                .form-group input:not([type="checkbox"]),
                .form-group textarea {
                    width: 100%;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    border-radius: 30px;
                    padding: 17px 20px;
                    color: #ffffff;
                    font-size: 15px;
                    outline: none;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                }

                .form-group input:not([type="checkbox"]) {
                    height: 62px;
                }

                .form-group input::placeholder,
                .form-group textarea::placeholder {
                    color: #ffffff;
                    opacity: 0.85;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: #00bde8;
                }

                .form-group input[type="date"] {
                    color-scheme: dark;
                }

                .checkbox-group {
                    margin-bottom: 28px;
                }

                .group-title {
                    font-size: 16px !important;
                    font-weight: 500;
                    margin-bottom: 15px !important;
                }

                .checkbox-options {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px 20px;
                }

                .checkbox-item {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 14px !important;
                    margin: 0 !important;
                }

                .checkbox-item input[type="checkbox"] {
                    width: 16px;
                    height: 16px;
                    accent-color: #00bde8;
                    cursor: pointer;
                    flex-shrink: 0;
                }

                .checkbox-item span {
                    color: #ffffff;
                }

                .message-group {
                    margin-top: 10px;
                }

                .form-group textarea {
                    min-height: 175px;
                    resize: vertical;
                    border-radius: 22px;
                }

                .submit-area {
                    margin-top: 30px;
                }

                .theme-btn {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 178px;
                    padding: 18px 28px;
                    background: transparent;
                    border: 1px solid #00bde8;
                    border-radius: 50px;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .theme-btn:hover {
                    background: #00bde8;
                    color: #123f49;
                }

                @media (max-width: 768px) {
                    .contact-section {
                        padding: 70px 20px;
                    }

                    .section-title h2 {
                        font-size: 36px;
                    }

                    .contact-form-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .checkbox-options {
                        gap: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .contact-section {
                        padding: 50px 15px;
                    }

                    .section-title h2 {
                        font-size: 30px;
                    }

                    .form-group input:not([type="checkbox"]) {
                        height: 55px;
                    }

                    .form-group input:not([type="checkbox"]),
                    .form-group textarea {
                        padding: 15px;
                    }

                    .theme-btn {
                        width: 100%;
                    }
                }
            `}</style>

        </section>
    );
};

export default ContactUs;