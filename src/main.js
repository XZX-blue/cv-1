
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人XXX
那么先展示一下我的前端功底；
首先我们需要一个div*/
#div1 {
    position: fixed;
    left:50%;
    transform: translateX(-50%);
    top: 0;
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%
    );
  }
  /*添加阴阳珠*/
  #div1::before {
    position: absolute;
    content: "";
    display: block;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%
    );
    border: none;
  }
  #div1::after {
    position: absolute;
    content: "";
    display: block;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 1) 25%
    );
    border: none;
  }
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#html {
  word-break: break-all;
}

@media (max-width:500px) {
    #html{
        overflow: auto;
        height:50vh;
    }
    #div1 {
      position: relative;
        top: 0;
        right: 0;
    }
    #div1Wrapper{
        height:50vh; 
    }
}
  
`;
let string2='';           
let n = 0;

let step = ()=>{

    setTimeout(() =>{   
       
        if( string[n] ==="\n"){
            //如果是回车就不照搬
            string2 +="<br>";
        }else if(string[n] ===" "){
            string2 +="&nbsp;";
        }
        else{ 
            //如果不是回车就照搬
            string2 += string[n]
            }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        //自动滚动条
        window.scrollTo(0,9999);
        html.scrollTo(0,9999);
            if( n < string.length-1){
                n = n+1;
               step();
            }
       

    },4)
}

step();