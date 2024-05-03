// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

//p 태그 뒤에 ; 를 쓰는지여부
import { useState } from "react";
//import { App } from '../App';  이걸로 더 가져올 수 두 개의 컴포넌트를 가져올 수 있는 거 

export default function Hello(){
//   return  (
  
    
//     //p 태그와 div 태그 \뒤에 세미클론은 jsx에서 사용하지 x 
//     // 중괄호안에는 객체를 쓴다?
//     // div 태그 밖에 꼭 중괄호를 적어야 하는 건가?
//     <div style={{
//             color : "red",
//             borderRight : "2px solid #000",
//             marginBottom : "30px"
//           }}>
//         <p> hello</p>
//         <World />
//     </div>
//         );
//   }
// }

const [name, setName] = useState("Mike"); // eslint-disable-next-line
// showName 함수 정의
const showName = () => {
    console.log("Name");
  };
  
  // showAge 함수 정의
  const showAge = (age) => {
    console.log("Age:", age);
  };
// 기본 함수 정의 
  function showText(txt){
    console.log(txt);
  }
return(
    <div>
        <h1> Hello</h1>
        <button onClick={showName} >showName</button>
        
        <button onClick ={()=>
        {showAge(10);}}>showAge</button>
        <input type ="text"
        onChange={e => {
            const txt = e.target.value;
            showText(txt);
        }}/>
    </div>
); }
//onchange 함수와 안에 들어있는 e.target.value 더알기 
//button 에 대해서서 알 게 됨, onclick 쓰고 함수 {} 중괄호 안에 작성하고
//태그 밖에는 버튼 이름 적는 것 

//function statement 
// function sum(a,b){
//   return a+b;
// }
// console.log(sum(10,20));

// const multiply = (a,b) => {
//   return a*b;
// }
// console.log(multiply (10,20));
//arrow function statement 