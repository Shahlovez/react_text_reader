import React from 'react'
// import Speech from "./components/Speech";
import Typewriter from 'typewriter-effect';



class Banner extends React.Component {

  render() {
    return (
  <header class="header">



  <div class="header__text-box">
    <h1 >
Speech Synthesis App
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
 </div>
</header>
    )
}
}
export default Banner;




