"use client";

import React, { useEffect, useState } from "react";

// 👉 Apni Web3Forms access key yahan daalo (https://web3forms.com se milti hai)
// Ya .env.local me: NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx
// const ACCESS_KEY =
//     process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
const ACCESS_KEY = "428ae924-7540-4cfd-b560-ea7da6daa37d"; // Web3Forms access key (form is key ke email par aayega)

const POPUP_DELAY = 16000; // 10 seconds

const ContactPopup = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error" | null
    const [submitted, setSubmitted] = useState(false);

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

    // Popup band hone ke har 10 second baad dobara khulega
    // (form submit ho gaya to dobara nahi aayega)
    useEffect(() => {
        if (open || submitted) return;

        const timer = setTimeout(() => setOpen(true), POPUP_DELAY);

        return () => clearTimeout(timer);
    }, [open, submitted]);

    // Popup open ho to background scroll band + ESC se close
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.target;
        const fd = new FormData(form);

        const payload = {
            access_key: ACCESS_KEY,
            subject: "New Goa Tour Enquiry",
            from_name: "Website Contact Popup",
            name: fd.get("name"),
            email: fd.get("email"),
            phone: fd.get("phone"),
            trip_date: fd.get("date"),
            persons: fd.get("persons"),
            tour_package: fd.getAll("tourPackage").join(", "),
            activities: fd.getAll("activities").join(", "),
            message: fd.get("message"),
            botcheck: fd.get("botcheck") || "",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });
            const json = await res.json();

            if (json.success) {
                setStatus("success");
                setSubmitted(true);
                form.reset();
                setTimeout(() => setOpen(false), 2500);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
            <div
                className="popup-box"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="popup-close"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                >
                    &times;
                </button>

                <div className="section-title">
                    <span className="sub-title">Contact Us</span>
                    <h2>Send Message Anytime</h2>
                </div>

                <form id="contact-popup-form" onSubmit={handleSubmit}>
                    {/* Honeypot (spam protection) */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="contact-form-grid">
                        <div className="form-group">
                            <label htmlFor="cp-name">
                                Name <span>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="cp-name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cp-email">
                                Email <span>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="cp-email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cp-phone">
                                Phone No <span>*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="cp-phone"
                                placeholder="Phone Number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cp-date">Trip Tentative Date</label>
                            <input type="date" name="date" id="cp-date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cp-persons">No. of Persons</label>
                            <input
                                type="number"
                                name="persons"
                                id="cp-persons"
                                placeholder="No. of Persons"
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="group-title">Tour Package Type</label>
                        <div className="checkbox-options">
                            {tourPackages.map((item, index) => (
                                <label key={index} className="checkbox-item">
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

                    <div className="form-group checkbox-group">
                        <label className="group-title">
                            Activities Want To Do?
                        </label>
                        <div className="checkbox-options">
                            {activities.map((item, index) => (
                                <label key={index} className="checkbox-item">
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

                    <div className="form-group message-group">
                        <label htmlFor="cp-message">Message</label>
                        <textarea
                            name="message"
                            id="cp-message"
                            placeholder="Your Message"
                            rows={4}
                        ></textarea>
                    </div>

                    {status === "success" && (
                        <p className="msg success">
                            Thank you! Your enquiry has been submitted.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="msg error">
                            Something went wrong. Please try again.
                        </p>
                    )}

                    <div className="submit-area">
                        <button
                            type="submit"
                            className="theme-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit Message"}
                        </button>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    background: rgba(0, 0, 0, 0.65);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    animation: fadeIn 0.3s ease;
                }

                .popup-box {
                    position: relative;
                    background: #123f49;
                    color: #ffffff;
                    width: 100%;
                    max-width: 850px;
                    max-height: 92vh;
                    overflow-y: auto;
                    border-radius: 24px;
                    padding: 40px 36px 32px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    animation: slideUp 0.35s ease;
                }

                .popup-close {
                    position: absolute;
                    top: 14px;
                    right: 18px;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    background: transparent;
                    color: #ffffff;
                    font-size: 26px;
                    line-height: 1;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .popup-close:hover {
                    background: #00bde8;
                    border-color: #00bde8;
                    color: #123f49;
                }

                .section-title {
                    margin-bottom: 28px;
                }

                .sub-title {
                    display: block;
                    font-size: 16px;
                    font-style: italic;
                    font-weight: 500;
                    margin-bottom: 10px;
                }

                .section-title h2 {
                    font-size: 38px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin: 0;
                    color: #ffffff;
                }

                .contact-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 24px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .form-group label {
                    color: #ffffff;
                    font-size: 15px;
                    margin-bottom: 8px;
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
                    padding: 14px 20px;
                    color: #ffffff;
                    font-size: 15px;
                    outline: none;
                    transition: border-color 0.3s ease;
                    box-sizing: border-box;
                }

                .form-group input:not([type="checkbox"]) {
                    height: 54px;
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
                    margin-bottom: 22px;
                }

                .group-title {
                    font-size: 16px !important;
                    font-weight: 500;
                    margin-bottom: 12px !important;
                }

                .checkbox-options {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px 20px;
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

                .form-group textarea {
                    min-height: 120px;
                    resize: vertical;
                    border-radius: 22px;
                }

                .msg {
                    margin: 16px 0 0;
                    font-size: 15px;
                    font-weight: 500;
                }

                .msg.success {
                    color: #7dffb0;
                }

                .msg.error {
                    color: #ff8f8f;
                }

                .submit-area {
                    margin-top: 24px;
                }

                .theme-btn {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 178px;
                    padding: 16px 28px;
                    background: transparent;
                    border: 1px solid #00bde8;
                    border-radius: 50px;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .theme-btn:hover:not(:disabled) {
                    background: #00bde8;
                    color: #123f49;
                }

                .theme-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                    .popup-box {
                        padding: 36px 22px 26px;
                    }

                    .section-title h2 {
                        font-size: 28px;
                    }

                    .contact-form-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .theme-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPopup;