import React from 'react';

const Faq = () => {
    return (
        <div className='App justify-center mx-auto'>
            <h2 className='text-4xl text-black'>TOP FAQS</h2>
            
            <div className='text-black m-5 border-2 border-orange-700'>
                <div className="collapse m-2 border-2 border-black">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        Is it possible to earn a degree through <br /> the Study Point Online Learning program?
                    </div>
                    <div className="collapse-content">
                        <p>Study Point does not currently offer entire degree programs online. The Online Learning program is a set of lower division general education courses that can be applied to an associate or bachelor's degree. Transferring these credits to any institution of higher learning is possible after admission criteria are met at that institution and upon review of the requested transfer credits by the transferring-in institution’s registrar.</p>
                    </div>
                </div>
                <div className="collapse m-2 border-2 border-black">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        Will I get credit for this course?                </div>
                    <div className="collapse-content">
                        <p>Online Learning credit courses are comparable to on-campus courses and appear on your University of Minnesota Morris transcript in exactly the same manner as an on-campus course. You will receive University credit for these courses.</p>
                    </div>
                </div>
                <div className="collapse m-2 border-2 border-black">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        Will i get a certificate?
                    </div>
                    <div className="collapse-content">
                        <p>Well if you finish your purched course on time you will get your desired certificate.</p>
                    </div>
                </div>
                <div className="collapse m-2 border-2 border-black">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        How do I contact my course instructor?
                    </div>
                    <div className="collapse-content">
                        <p>Instructors stay in touch with their Online Learning students in a variety of ways, depending on the course design. Your instructor will explain the best way to reach him or her within the course home pages. You may communicate with your instructor through discussion groups, bulletin boards, chat rooms, assignment submissions, through email, or by telephone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;