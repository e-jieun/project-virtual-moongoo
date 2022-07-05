const sellerPage = {
  root: document.getElementById('root'),
  // 이전 버튼, 셀러 아이디가 있는 컨테이너
  sellerCon: document.getElementById('seller-con'),
  sellerId: document.getElementById('seller-id'),
  // 입점링크 컨테이너
  storeCon: document.getElementById('store-con'),
  divider: document.getElementsByClassName('divider'),
  // 링크 스티커 모양 컨테이너
  linkCon: document.getElementById('link-con'),
  newsCon: document.getElementById('news-con'),
  newsItem: document.getElementsByClassName('news-item')
}

class setStyle{
  constructor(width, height, display, align, justify, position){
    this.style = {
      width: width,
      height: height,
      display: display,
      align: align,
      justify: justify,
      position: position
    }
  }
}

function borderBk(elem){
  elem.style.border = `1px solid #000`;
}

function makeElem(elem, contents=''){
  return `<${elem}>${contents}</${elem}>`
}

const variable = {
  inherit: 'inherit',
  hun: 100,
  center: 'center'
}

// *root
const rootStyle = new setStyle('100vw', '100vh', 'grid', 'center', 'center');
sellerPage.root.setAttribute('style',`width: ${rootStyle.style.width}; height: ${rootStyle.style.height}; display: ${rootStyle.style.display}; grid-template-rows: 1.5fr 1fr 2fr;align-items: ${rootStyle.style.align}; justify-content: ${rootStyle.style.justify};`);
console.log(sellerPage.root);

// *최상단 컨테이너: 이전 버튼, 판매자 아이디
const sellerConStyle = new setStyle('inherit', '100%', 'grid', variable.center, variable.center);
sellerPage.sellerCon.setAttribute('style',`width: ${sellerConStyle.style.width}; height: ${sellerConStyle.style.height}; grid-template-rows: 1fr 3fr; align-items: ${sellerConStyle.style.align}; justify-content: ${sellerConStyle.style.justify};`);

// *seller-id
const sellerIdStyle = new setStyle('inherit', '20vmax','flex', variable.center, variable.center);
sellerPage.sellerId.setAttribute('style',`width: ${sellerIdStyle.style.width}; height: ${sellerIdStyle.style.height}; display: ${sellerIdStyle.style.display}; align-items: ${sellerIdStyle.style.align}; justify-content: ${sellerIdStyle.style.justify};`);
borderBk(sellerPage.sellerId);

// *seller-id > div*2
let sellerIdChildStr = '';
var childContentsArr = [`<img>`, `${makeElem('p', 'MARKET.')}${makeElem('p', '수키도키')}`];
for(let i = 0; i < 2; i++){
  sellerIdChildStr += makeElem('div', childContentsArr[i]);
}
console.log(sellerIdChildStr);
sellerPage.sellerId.innerHTML = `<div>${sellerIdChildStr}</div>`;

// *sellerIdChild parentElem
const sellerIdChildParentStyle = new setStyle('40vmax', '100%', 'flex', variable.center, 'space-around');
const sellerIdChildParent = sellerPage.sellerId.firstElementChild;
sellerIdChildParent.setAttribute('style',`display: ${sellerIdChildParentStyle.style.display}; width: ${sellerIdChildParentStyle.style.width}; height: ${sellerIdChildParentStyle.style.height}; align-items: ${sellerIdChildParentStyle.style.align}; justify-content: ${sellerIdChildParentStyle.style.justify}; border-radius: 20px;`);
borderBk(sellerIdChildParent);

// *sellerIdChild
const sellerIdChildStyle = new setStyle('15vmax', '15vmax', 'flex', variable.center, variable.center);
const sellerIdChild = Array.from(sellerPage.sellerId.firstElementChild.children);
sellerIdChild.map((elem, index) => {
  elem.setAttribute('style',`width: ${sellerIdChildStyle.style.width}; height: ${sellerIdChildStyle.style.height}; display: ${sellerIdChildStyle.style.display}; flex-direction: column; align-items:${sellerIdChildStyle.style.align}; justify-content: ${sellerIdChildStyle.style.justify};`);

  // *elem[0]
  if(index === sellerIdChild.length-sellerIdChild.length){
    borderBk(elem);
    elem.firstElementChild.setAttribute('src','/img/seller-id.png');
    elem.firstElementChild.setAttribute('style',`width: ${sellerIdChildStyle.style.width}; height: ${sellerIdChildStyle.style.height};`);
  }
})




