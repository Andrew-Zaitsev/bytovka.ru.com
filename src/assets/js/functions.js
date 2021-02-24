/*
const extendString = (item) => {
  const strings = item.children;
  let extendingString = strings[1];
  console.log(extendingString);
};
*/
function extendString(elem) {
  let initialStringValue = elem.textContent;
  let currentStringValue;

  elem.textContent = '';
  elem.style.display = 'inline';

  let index = 1;
  while (index <= initialStringValue.length) {
    (async () => {
      currentStringValue = initialStringValue.slice(0, index);
      console.log(index, currentStringValue);
      let pasteString = setTimeout(function applyTextValue() {
        elem.textContent = currentStringValue;
      }, 2000);
      index += 1;
    })();
  }
  console.log('init   ', initialStringValue);
  console.log('curr   ', currentStringValue);

  //const strings = this.children;
  //let currentExtendingString = strings[0];
  //console.log(currentExtendingString);
};

function changeString(i) {
  console.log('changeSrting');
  //console.log('this = ', this);
}

function repeatActions(...functions) {

  functions.forEach(function (func) {
    func.bind(this)(); // привязка this к функции и ее вызов

    //console.log(this);
  }, this);

  //console.log('repeat', this, functions);
}

function clearInnerHtml(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

export {
  extendString,
  changeString,
  repeatActions,
  clearInnerHtml
}