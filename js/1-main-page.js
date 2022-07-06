document.body.style.boxSizing = 'border-box';
// get #root
const root = document.getElementById('root');
console.dir(root);
// get .main-con
const mainCon = document.getElementsByClassName('main-con');
console.log(mainCon);

const itemCon1 = document.getElementById('item-con1');
console.dir(itemCon1);

const promotionCon = document.getElementById('promotion-con');
console.log(promotionCon);
console.log(promotionCon.style);

let hun = 100;
//promotion-con width 
promotionCon.style.width = `${hun}vw`;
promotionCon.style.position = 'relative';
promotionCon.style.top = '-100vh';

// promotion-con grid를 사용해서 2열로 배치해줌

// *태블릿 미디어 쿼리 사용한 부분
// !단위 붙여주면 안됨
if (window.innerWidth <= 800) {
  promotionCon.style.display = 'grid';
  promotionCon.style.gridTemplateColumns = '1fr';
} else {
  promotionCon.style.display = 'grid';
  promotionCon.style.gridTemplateColumns = '1fr 1fr';
  console.log('tablet');
}
// mainCon의 크기를 설정(최소값이나 최대값을)해주면 모양이 틀어지는 것을 방지할 수 있음
// !mainCon은 유사배열임
for (let i = 0; i < mainCon.length; i++) {
  mainCon[i].style.minHeight = '500px';
  mainCon[i].style.minWidth = '300px';
  console.log(mainCon[i].style);
}
console.log('여기입니다');
// mainCon의 구조
const promoCon = document.getElementById('promotion-con');
console.log(promoCon.style);
promoCon.style.height = '200vh';
console.dir(mainCon);
// mainCon의 자식요소 중 0번이 스티커 요소들을 담은 컨테이너
console.log(mainCon[0].children);
// 스티커 요소
console.log(mainCon[0].children[0].children);

// console.clear();
console.log(mainCon[0].children); //div, div.product-con
const stickerImg = Array.from(document.querySelectorAll('.display-none'));
console.log(stickerImg);

const productCon = Array.from(document.querySelectorAll('.product-con'));


stickerImg.forEach(elem => {
  elem.style.display = 'none';
  // todo: 부모 요소에 썸네일을 넣기로 해서 부모 요소에 썸네일에 이벤트 핸들러를 달아주면 될 것 같다
  const target = elem.parentElement;
  // *마우스오버되면 나타날 부분
  mouseover(elem, target);
  // *마우스아웃되면 사라질 부분
  mouseout(elem, target);
});

// ?psuedo 1.마우스 오버가 되면 스티커 부분이 나타난다 
function mouseover(elem, target){
  target.addEventListener('mouseover', (event)=>{
    // console.log(event.target);
    let imgAppear = target.firstElementChild;
    imgAppear.setAttribute('data-img','block');
    console.log(imgAppear); //img로 잘 선택이 된다
    // ?나타나도록 할 부분
    if(imgAppear.dataset.img === 'block'){
      console.log(imgAppear.dataset.img);
      imgAppear.style.display = 'block';
      imgAppear.dataset.img = 'none';
      // ?나머지는 사라지도록 할 부분
    }else{
      imgAppear.style.display = 'none';
      imgAppear.dataset.img = 'none';
    }
  })
}

// ?psuedo 2. 마우스 아웃이 되면 스티커 부분이 사라진다
function mouseout(elem, target){
  target.addEventListener('mouseout', (event)=>{
    // console.log(event.target);
    let imgAppear = target.firstElementChild;
    imgAppear.setAttribute('data-img','none');
    console.log(imgAppear); //img로 잘 선택이 된다
    // ?사라질 부분
    if(imgAppear.dataset.img === 'none'){
      imgAppear.style.display = 'none';
      imgAppear.dataset.img = 'block';
      console.log(imgAppear.dataset.img);
      // ?나머지는 적용되지 않도록 할 부분
    }else{
      imgAppear.style.display = 'none';
      imgAppear.dataset.img = 'block';
    }
  })
}

// *#item-con2
const itemCon2 = document.getElementById('item-con2');
// console.log(itemCon2);
const topBtn = itemCon2.firstElementChild;
console.log(topBtn);
// *topBtn 이벤트
topBtn.addEventListener('click', () => {
  console.log(window.location);
  window.location.href = '#top';
})
// console.clear();
const moreBtn = topBtn.nextElementSibling;
console.log(moreBtn);
// ?class main-con을 가져와서 그대로 붙여주면 좋을텐데...
const mainConInnerHtml = `
<div>
  <div>
  </div>
  <div>
  </div>
  <!-- css에서 display: none;인 부분 -->
  <div>
    <!-- 타원 스티커 item -->
    <img src="/img/oval-sticker.svg" alt="go!" class="display-none">
    <div>
      <div></div>
    </div>
  </div>
</div>
<div class="product-con">
  <div>이미지</div>
  <!-- 이름표 설명란 부분 -->
  <div>
    <div>RECIPE.</div>
    <div>프로모션 문구</div>
  </div>
</div>
`;
moreBtn.addEventListener('click', function(){
  console.log(mainCon);
  const createMainCon = document.createElement('div');
  createMainCon.className = 'main-con';
  createMainCon.innerHTML = mainConInnerHtml;
  promotionCon.appendChild(createMainCon);
  // console.log(promotionCon);
  console.log(promotionCon.children);
})

// todo: moreBtn을 누르면 늘어나는 상품 콘텐츠 만들어 주기