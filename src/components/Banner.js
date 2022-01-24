import React from 'react'

import Typewriter from 'typewriter-effect';


class Banner extends React.Component {

  render() {
    return (
  <header class="header">



  <div class="header__text-box">
    <h1 >
   Speech Text Reader
    </h1>
    <p> 
      <Typewriter
    options={{
strings: ['Giving Voice to Unheard'],
autoStart: true,
loop: true,
}}
onInit={(typewriter) => {
typewriter.typeString()
  .callFunction(() => {
    console.log('String typed out!');
  })
  .pauseFor(1000)
  .deleteAll()
  .callFunction(() => {
    console.log('All strings were deleted');
  })
  .start();
}}
/>
</p>

    <div className="header__text-box-inputContainer">
      <input placeholder="Type your text here"/>
      <div className="header__text-box-inputContainer-imgConatiner">
        <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
      </div>
      </div>
      <div>


      
    </div>
  </div>
</header>
    )
}
}
export default Banner;


































//         render() {
//             return (
    
//           <div class="header__text-box">
//             <h1 >
//             Giving Voice to Unheard
//             </h1>
//             <p> 
//               <Typewriter
//             options={{
//         strings: [' Making Life more Enjoyable', ' Spreading Happiness through Communication'],
//         autoStart: true,
//         loop: true,
//       }}
//       onInit={(typewriter) => {
//         typewriter.typeString()
//           .callFunction(() => {
//             console.log('String typed out!');
//           })
//           .pauseFor(1000)
//           .deleteAll()
//           .callFunction(() => {
//             console.log('All strings were deleted');
//           })
//           .start();
//       }}
//     />
//     </p>
    
//             <div className="header__text-box-inputContainer">
//               <input placeholder="What would You like to Say?"/>
//               <div className="header__text-box-inputContainer-imgContainer">
//               </div>
//               </div>
//               <div>
                   
//                 </div>
//             </div>
       
      
//             )
//         }
//     }
    

// export default Banner;


