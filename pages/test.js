// import React from 'react';
// import BarajaJS from 'react-baraja-js'; // or '../dist/react-baraja-js';

// const cards = [
//   {
//     imageSrc: 'path/to/image1.png',
//     title: 'card 1',
//     details: 'this is card 1'
//   },
//   {
//     imageSrc: 'path/to/image2.png',
//     title: 'card 2',
//     details: 'this is card 2'
//   },
//   {
//     imageSrc: 'path/to/image3.png',
//     title: 'card 3',
//     details: 'this is card 3'
//   },
//   {
//     imageSrc: 'path/to/image4.png',
//     title: 'card 4',
//     details: 'this is card 4'
//   },

//   // add more cards ...
// ]

// export default class Demo extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       fan: {}
//     };
//   }

//   // Fan right
//   fanEvent() {
//     this.setState({
//       fan: {
//         direction: 'right',
//         easing: 'ease-out',
//         origin: {
//           x: 25,
//           y: 100
//         },
//         speed: 500,
//         range: 90,
//         center: true
//       }
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button id="fan-button" onClick={() => this.fanEvent()}>Fan right</button>
//       </React.Fragment>
//     );
//   }
// };