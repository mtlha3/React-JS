import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const [btnText, setBtnText] = useState('Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Dark Mode');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Light Mode');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-5">
      <div className="accordion" id="accordionExample">
        <details className="border border-gray-200 mb-2" style={myStyle}>
          <summary className="py-4 px-5 text-lg font-medium cursor-pointer" style={myStyle}>
            Accordion Item #1
          </summary>
          <div className="accordion-body py-4 px-5" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </details>

        <details className="border border-gray-200 mb-2" style={myStyle}>
          <summary className="py-4 px-5 text-lg font-medium cursor-pointer" style={myStyle}>
            Accordion Item #2
          </summary>
          <div className="accordion-body py-4 px-5" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </details>

        <details className="border border-gray-200 mb-2" style={myStyle}>
          <summary className="py-4 px-5 text-lg font-medium cursor-pointer" style={myStyle}>
            Accordion Item #3
          </summary>
          <div className="accordion-body py-4 px-5" style={myStyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </details>
      </div>
      <button className="bg-blue-400 rounded-md w-24 h-10 mt-4" onClick={toggleStyle}>
        {btnText}
      </button>
    </div>
  );
}
