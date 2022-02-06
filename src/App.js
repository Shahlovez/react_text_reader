import React, {Component} from 'react';
import Speech from "./components/Speech";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card";
import Banner from "./components/Banner";



const dataBannar = [

{title: "Cover page", url:"https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"},

]

const dataEmotions = [
    { id: 0,
    message: "Happy",
    url:"https://images.unsplash.com/photo-1498674202614-ac0172c6c61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
  
    { id: 1,
    message: "Sad",
    url:"https://images.unsplash.com/photo-1512981548919-4a460438cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkJTIwY2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},

    {id: 2,
    message: "Excited",
    url:"https://images.unsplash.com/photo-1566513875272-0e184c92b77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjaXRlZCUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
   
    { id: 3,
      message: "Scared",
      url:"https://images.unsplash.com/photo-1483193722442-5422d99849bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
   
    { id: 5,
     message: "Hungry",
      url:"https://images.unsplash.com/flagged/photo-1579632993381-847f6a71a3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVhdGluZyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
   
    { id: 6,
      message: "Cold",
        url: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},

  ]

const dataActions = [
  {id: 7,
   message: "Let's play outside",
      url:"https://media.istockphoto.com/photos/you-can-do-it-picture-id1284279233?b=1&k=20&m=1284279233&s=170667a&w=0&h=1mxpsNzaY5LimFN0_CkMsgjoF7d1zhKVuX_xo7DE5JI="},
  {id: 8,
    message: "I want to go home!",
    url:"https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
  {id: 9,
    message: "I want to go to grandma's",
    url: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhbmRwYXJlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
  {id: 10,
    message: "Let's take a bike",
    url: "https://images.unsplash.com/photo-1618542651917-aa50444c8465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJpZGUlMjBhJTIwYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
   {id: 11,
    message:"I want to listen to music",
    url:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
   {url:"https://media.istockphoto.com/photos/boxes-with-clothes-for-donation-in-home-interior-picture-id1321296846?b=1&k=20&m=1321296846&s=170667a&w=0&h=CZq1VC0HkUIF0-bikwYoWlzwpQVzkZ_BlrVS-3_OlV8="},
]

const dataRandom = [
{url:"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
{url: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
{url:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2xlZXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
{url:"https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
{url:"https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bnVtYmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
{url:"https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnRoZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
]


export default class App extends Component {
  render() {
    return (
      <>  
 
      <Banner data={dataBannar}/>
       <Speech /> 
      <Card title="Emotions" data={dataEmotions}/>
      <Card title="Actions" data={dataActions}/>
      <Card title="Random photos" data={dataRandom}/>

      </>
    )
  }
}
