const listItems = document.querySelector('.list__items');


//  json파일에서 원하는 데이터를 가져와 데이터를 보여주고 업데이트 해주기
fetchClothes()
.then(data=>{
    showClothes(data);
    updateClothes(data);
})
.catch(console.log);


//  json에서 원하는 데이터를 가져오는 함수
function fetchClothes(){
   return fetch("data/clothes.json")  /* 파일 경로나 url */
    .then(respone=>respone.json())
    .then(json=>json.clothes)
}


//  데이터를 보여주는 함수
function showClothes(data){
    listItems.innerHTML='';
        data.forEach(item => {
            const li= makeList(item);
             listItems.appendChild(li);
         })
 
}

//  데이터를 업데이트해 추출해주는 함수
function updateClothes(data){
    const logo =document.querySelector('.logo');
    const division =document.querySelector('.division');

    logo.addEventListener('click',()=>showClothes(data));
    division.addEventListener('click',event=>onBtnClick(event,data));
        
}


//  버튼을 눌렀을때 조건에 맞는 요소들을 추출해 새롭게 보여주는 함수
function onBtnClick(event,data){
    const target= event.target;
    const key = target.dataset.key; 
    const value = target.dataset.value; 
        if(target===null || target===event.currentTarget){
            return;
        }
    
        listItems.innerHTML='';
        const filterd= data.filter(item=>item[key]===value);
        showClothes(filterd);

}



//  li 요소를 만드는 함수

function makeList(item){
    const li =document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML=`
       <img class="item__thumbnail" src="${item.image}"/>
       <span class="item__description">${item.gender} ${item.size}</span> 
    `;
    return li;
}


