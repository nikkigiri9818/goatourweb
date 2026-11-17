"use client";

import React, { useState } from "react";

// ---- Web3Forms access key (form is key ke email par aayega) ----
const ACCESS_KEY = "428ae924-7540-4cfd-b560-ea7da6daa37d";
const BRAND = "Goa Holiday Tours";

const ContactUs = () => {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [error, setError] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // chhupa hua field: sirf bots bharte hain
        if (formData.get("botcheck")) return;

        setStatus("sending");
        setError("");

        const payload = {
            access_key: ACCESS_KEY,
            subject: `New Goa trip enquiry from ${formData.get("name")}`,
            from_name: `${BRAND} Website`,
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            trip_date: formData.get("date") || "Not given",
            persons: formData.get("persons") || "Not given",
            tour_package_type: formData.getAll("tourPackage").join(", ") || "Not selected",
            activities: formData.getAll("activities").join(", ") || "Not selected",
            message: formData.get("message") || "-",
            source: "Contact page form",
            page_url: window.location.href,
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (data.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setError("Network problem. Please check your internet and try again.");
        }
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
                                        pattern="[0-9+\s\-]{10,15}"
                                        title="Enter a valid phone number"
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

                            {/* chhupa hua field: sirf bots bharte hain */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hp-field"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {/* Submit */}
                            <div className="submit-area">

                                <button
                                    type="submit"
                                    className="theme-btn"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Submit Message"}
                                </button>

                                {status === "success" && (
                                    <p className="form-msg success">
                                        Thank you! Your enquiry has been submitted. Our team will contact you shortly.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="form-msg error">{error}</p>
                                )}

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            {/* CSS */}
            <style jsx>{`
                .contact-section {
                    background: #123f49;
                    padding: 30px 20px;
                    /* width: 100%; */
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

                .hp-field {
                    position: absolute;
                    left: -9999px;
                    width: 1px;
                    height: 1px;
                    opacity: 0;
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

                .theme-btn:disabled {
                    opacity: 0.7;
                    cursor: wait;
                }

                .form-msg {
                    margin: 18px 0 0;
                    padding: 14px 18px;
                    border-radius: 16px;
                    font-size: 15px;
                    line-height: 1.6;
                }

                .form-msg.success {
                    color: #d9fbff;
                    background: rgba(0, 189, 232, 0.18);
                    border: 1px solid rgba(0, 189, 232, 0.5);
                }

                .form-msg.error {
                    color: #ffd7d2;
                    background: rgba(224, 82, 77, 0.22);
                    border: 1px solid rgba(224, 82, 77, 0.5);
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