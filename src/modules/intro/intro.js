import {
  extendString,
  changeString,
  repeatActions
} from '../../assets/js/functions.js';

import {
  ChangingString
} from '../../assets/js/plagins/myPlagins/changingString.js';

(function showChangingString() {
  const stringsWrapperElems = Array.from(document.querySelectorAll('.js-intro__changing-string-wrapper'));

  const changingStrings = stringsWrapperElems
    .map(elem => new ChangingString({
      stringsWrapperElem: elem,
      blinkingChar: '|',
      blinkingInterval: 320,
    }));
  //console.log('strWrElems', stringsWrapperElems);
  changingStrings.forEach(changeString => changeString.start());
  //console.log(stringsWrapperElems);

}());

//showChangingStrings();
//containers.forEach(function (container) {
//  container.extendString = extendString;
//  container.changeString = changeString;
//
//  let currentElem = container.firstChild;
//
//  let counter = 0;
//
//  let repeat = setTimeout(function animateString() {
//    //currentElem.classList.add('intro__extending-string_visible');
//    //currentElem.classList.remove('intro__extending-string_hidden');
//    container.extendString(currentElem);
//    //currentElem.classList.remove('intro__extending-string_visible');
//    //currentElem.classList.add('intro__extending-string_hidden');
//    //console.log(currentElem);
//    container.changeString();
//  }, 2000);
//
//  //container.repeatActions = repeatActions;
//  //container.repeatActions(extendString, changeString);
//  /*
//  let tic = setTimeout(function timer() {
//    changeString(num);
//    num++;
//    //tic = setTimeout(timer, 2000);
//  }, 2000);
//  */
//  //setInterval(changeString(container + 1), 2000);
//  //console.log("after timer");
//  //item.extendString();
//});