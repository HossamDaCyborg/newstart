for(let i =0; i<3 ;i++){

    let upper = document.querySelector(`#ont${i+1}`);
    let lower = document.querySelector(`#ont${i+4}`);
    

    let upCard=document.querySelector(`#c${i+1}`);
    let downCard=document.querySelector(`#c${i+4}`);

    //i ran out of names

    let wide = (window.innerWidth)/6;
    let high = (window.innerHeight)/4
    
    upper.addEventListener('mousemove',(mou)=>{
        let x =wide - (mou.pageX-((i/3)*(window.innerWidth)) );
        let y = high -(mou.pageY);
        upCard.style.transform =`rotateY(${x/10}deg) rotateX(${y/10}deg)`;
        upCard.style.transition='none'
        

    })
    upper.addEventListener('mouseleave',()=>{
        upCard.style.transform='rotateX(0deg) rotateY(0deg)';
        upCard.style.transition='all .8s ease'
    })
    
    lower.addEventListener('mouseleave',()=>{
        downCard.style.transform='rotateX(0deg) rotateY(0deg)';
        downCard.style.transition='all .8s ease';
    })
    lower.addEventListener('mousemove',(mou)=>{
        let x =wide - (mou.pageX-((i/3)*window.innerWidth));
        let y = high -(mou.pageY-(window.innerHeight/2));
        downCard.style.transform =`rotateY(${x/10}deg) rotateX(${y/10}deg)`;
        downCard.style.transition='none';
    
    })

    
}