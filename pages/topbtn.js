// import React, { useState, useEffect } from 'react';

// const Topbtn = () => {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const controlTopbtn = () => {
//     if (typeof window !== 'undefined') { 
//       if (window.scrollY > lastScrollY) { // if scroll down hide the Topbtn        setShow(false); 
//       } else { // if scroll up show the Topbtn        setShow(true);        }

//       // remember current page location to use in the next move      setLastScrollY(window.scrollY); 
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', controlTopbtn);

//       // cleanup functionreturn () => {
//         window.removeEventListener('scroll', controlTopbtn);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//         <nav className={`active ${show && 'hidden'}`}>
//         ....
//         </nav>
//   );
// };

// export default Topbtn;

