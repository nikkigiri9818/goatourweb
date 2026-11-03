"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

// Numbers client ki site se liye hain. Jab client asli numbers de (jaise kitne travellers ghumaye), yahin badal dena.
const Counter3 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
<section className="counter-section-2 fix">
            <div className="container-fluid">
                <div className="counter-wrapper-2 bg-cover" data-background="/assets/img/counter-bg.png">
                    <div className="counter-image">
                        <Image src="/assets/img/goa/waterfallimges.jpg" alt="Dudhsagar waterfall in Goa" width={397} height={200}   />
                    </div>
                    <div className="counter-items-2 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="counter-content">
                            <h2><span className="count">10</span>+</h2>
                            <p>Years Of Experience</p>
                        </div>
                    </div>
                    <div className="counter-items-2 wow fadeInUp wow" data-wow-delay=".4s">
                        <div className="counter-content">
                            <h2><span className="count">2</span>.3k+</h2>
                            <p>Guest Reviews</p>
                        </div>
                    </div>
                    <div className="counter-items-2 wow fadeInUp wow" data-wow-delay=".6s">
                        <div className="counter-content">
                            <h2><span className="count">6</span></h2>
                            <p>Tour Packages</p>
                        </div>
                    </div>
                    <div className="counter-items-2 style-2 wow fadeInUp wow" data-wow-delay=".8s">
                        <div className="counter-content">
                            <h2><span className="count">6</span></h2>
                            <p>Adventure Activities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter3;