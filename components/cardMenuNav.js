// import { useState } from 'react';
// import React from 'react';
// import BarajaJS from 'react-baraja-js';
// import Image from 'next/image';
// // import 'baraja-js/dist/css/baraja.css';

// const imgPath = ['public/club.png','public/spade.png','public/hearts.png','public/diamond.png']

// const cards = [
//     {
//       imageSrc: 'public/club.png',
//       title: 'card 1',
//       details: 'this is card 1'
//     },
//     {
//       imageSrc: 'public/spade.png',
//       title: 'card 2',
//       details: 'this is card 2'
//     },
//     {
//       imageSrc: 'public/hearts.png',
//       title: 'card 3',
//       details: 'this is card 3'
//     },
//     {
//       imageSrc: 'public/diamond.png',
//       title: 'card 4',
//       details: 'this is card 4'
//     },
  
//     // add more cards ...
//   ]

// function CardMenuNav() {
//     const [flipoutParams, setFlipoutParams] = useState({})
//     const fanFlip = () => {
//         setFlipoutParams({
//             direction: 'right',
//             easing: 'ease-out',
//             origin: {
//                 x: 25,
//                 y: 100
//             },
//             speed: 500,
//             range: 90,
//             center: true
//         })
//     }
//     return ( 

//         <React.Fragment>
//         <BarajaJS fan={fan}>
//           {cards.map(({imageSrc, title, details}, index) => {
//             return (
//               <React.Fragment key={index}>
//                 <Image src={imageSrc} alt={title} />
//                 <h4>{title}</h4>
//                 <p>{details}</p>
//               </React.Fragment>
//             );
//           })}
//         </BarajaJS>

//         <button id="fan-button" onClick={() => this.fanEvent()}>Fan right</button>
//       </React.Fragment>
//         // <>
//         //     <Baraja>

//         //     </Baraja>
//         // </>    
//     );
// }

// export default CardMenuNav;

