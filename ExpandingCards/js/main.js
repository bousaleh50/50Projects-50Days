const images = [
    { src: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', caption: 'Explore The World'},
    { src: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', caption: 'Wild Forest'},
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', caption: 'Sunny Beach'},
    { src: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', caption: 'City on Winter'},
    { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', caption: 'Mountains - Clouds'}
  ]

  let cards=document.querySelectorAll(".card");
  let descritpion=document.querySelectorAll(".card>p");

  for(let i=0;i<cards.length;i++){
    cards[i].style.background="url("+images[i].src+")";
    cards[i].firstElementChild.innerHTML=images[i].caption;
  }

cards.forEach(card=>{
  
  if(card.classList.contains("active")){
    card.firstElementChild.style.display="block";
  }else{
    card.firstElementChild.style.display="none";
  }

  card.addEventListener("click",()=>{
    removeActiveClass();
    card.classList.add("active");
    card.firstElementChild.style.display="block";
  });
});

function removeActiveClass(){
  cards.forEach(card=>{
    card.classList.remove("active");
    card.firstElementChild.style.display="none";
  })
}

