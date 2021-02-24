import {
  //changeString,
  clearInnerHtml
} from "../../functions";

class ChangingString {
  constructor({
    stringsWrapperElem,
    blinkingChar,
    blinkingInterval
  }) {
    this.stringsWrapperElem = stringsWrapperElem;
    //console.log('start this.wrapper', this.stringsWrapperElem.firstChild, 'start wrapper: ', stringsWrapperElem);
    this.blinkingChar = blinkingChar;
    this.blinkingInterval = blinkingInterval;
    this.stringsArray = Array.from(stringsWrapperElem.children).map(stringElem => stringElem.textContent);
  }



  start() {
    this.createChangingStringElems();
    this.loopBlinking();
    this.loopChanging();
    //console.log(this.stringsListElem);
  }



  createChangingStringElems() {
    clearInnerHtml(this.stringsWrapperElem);

    const changingStringContainerElem = document.createElement('span');
    changingStringContainerElem.classList.add('changing-string');

    this.changingStringElem = document.createElement('span');
    this.changingStringElem.classList.add('changing-string__string');
    changingStringContainerElem.append(this.changingStringElem);

    if (this.blinkingChar) {
      this.blinkingCharElem = document.createElement('span');
      this.blinkingCharElem.classList.add('changing-string__blinking-char');
      this.blinkingCharElem.textContent = this.blinkingChar;
      changingStringContainerElem.append(this.blinkingCharElem);
    }

    this.stringsWrapperElem.append(changingStringContainerElem);


    //console.log('wrapper: ', this.stringsWrapperElem);
  };

  loopBlinking() {
    if (this.blinkingChar) setInterval(blink.bind(this), this.blinkingInterval);

    function blink() {
      this.blinkingCharElem.classList.toggle('changing-string__blinking-char_transparent');
    }
  }

  loopChanging() {
    let currentStringIndex = 0;

    const expandString = () => {
      const currentString = this.stringsArray[currentStringIndex];
      let currentSubstringLength = 1;

      const showLongerSubstring = () => {
        const substring = currentString.slice(0, currentSubstringLength);
        this.changingStringElem.textContent = substring;

        if (currentSubstringLength > currentString.length) {
          setTimeout(hideString, 3000, currentString);
          return;
        }

        currentSubstringLength++;
        setTimeout(showLongerSubstring, 170);
      };

      showLongerSubstring();
    };

    const hideString = (currString) => {
      let substringLength = currString.length - 1;
      const showShorterSubstring = () => {
        const substr = currString.slice(0, substringLength);
        //console.log('substr', substr);
        this.changingStringElem.textContent = substr;

        if (substringLength <= 0) {
          changeString();
          return;
        }

        substringLength--;
        setTimeout(showShorterSubstring, 35);
      };

      showShorterSubstring();
    };

    const changeString = () => {
      (currentStringIndex === (this.stringsArray.length - 1)) ? currentStringIndex = 0: ++currentStringIndex;

      setTimeout(expandString, 100);
    };

    expandString();
  }
}

export {
  ChangingString
};