function count(){var countdown=document.querySelector(".h1");
setTimeout(()=>{ countdown.innerText="10"
    setTimeout(()=>{ countdown.innerText="9"
      setTimeout(()=>{ countdown.innerText="8"
        setTimeout(()=>{ countdown.innerText="7"
         setTimeout(()=>{ countdown.innerText="6"
          setTimeout(()=>{ countdown.innerText="5"
           setTimeout(()=>{ countdown.innerText="4"
            setTimeout(()=>{ countdown.innerText="3"
             setTimeout(()=>{ countdown.innerText="2"
              setTimeout(()=>{ countdown.innerText="1"
               setTimeout(()=>{ countdown.innerHTML=`<img src="https://i.pinimg.com/originals/23/b9/d4/23b9d4c1f3fa7bfa0217549364445f4f.gif">`
                 
               },1000)
              },1000) 
             },1000)  
            },1000)
           },1000) 
          },1000)
         },1000)  
        },1000)
      },1000) 
    },1000)
  },1000);


};