let msg = document.getElementById("demo");
let time = 10;

setTimeout(()=>{
    msg.innerText = time--;
    setTimeout(()=>{
        msg.innerText = time--;
      setTimeout(()=>{
          msg.innerText = time--;
          setTimeout(()=>{
            msg.innerText = time--;
            setTimeout(()=>{
                msg.innerText = time--;
                setTimeout(()=>{
                    msg.innerText = time--;
                    setTimeout(()=>{
                        msg.innerText = time--;
                        setTimeout(()=>{
                            msg.innerText = time--;
                            setTimeout(()=>{
                                msg.innerText = time--;
                                setTimeout(()=>{
                                    msg.innerText = time--;
                                    setTimeout(()=>{
                                        msg.innerText = time--;
                                        document.getElementById("demo").innerHTML = "Happy Independence Day"
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
},1000)

