const local = navigator.language || navigator.userLanguage;

class LocaleContent extends HTMLElement {
  constructor() {
    super();
    this.label = this.getAttribute('label');
    this.updateLocalized();
    return this;
  }

  updateLocalized = () => {
    const label = content[this.label] ? content[this.label] : '';
    this.innerHTML = label;
  }
}

window.addEventListener('load', () => {
  window.customElements.define('app-content', LocaleContent);
  let content = {};
  changeLanguage('en-US');
  navSelect()
}, false);

const changeLanguage = (lang) => {
  // update locale specific content
  const sc = document.getElementById("locales");
  const hd = document.getElementsByTagName('body')[0];
  const parent = sc.parentNode;
  parent.removeChild(sc);

  const newSc = document.createElement('script');
  newSc.src = `src/locale/${lang}/index.js`;
  newSc.id = `locales`;
  parent.appendChild(newSc);

  newSc.addEventListener('load', () => {
    const labelsCont = document.querySelectorAll('app-content');
    for (let label of labelsCont) {
      label.updateLocalized();
    }
  }, false);

  // update locale specific styles
  const csslink = document.getElementById("localeFont");
  const cssParent = csslink.parentNode;
  cssParent.removeChild(csslink);
  const newCssLink = document.createElement('link');
  newCssLink.rel = 'stylesheet';
  newCssLink.id = 'localeFont';
  newCssLink.href = `src/css/${lang}/font.css`;
  newCssLink.type = 'text/css';
  newCssLink.charset = 'utf-8';
  cssParent.appendChild(newCssLink);

}

const navSelect = () => {
  const nv = document.querySelector("#topNav");
  const chi = nv.querySelectorAll('a');
  for (let i of chi) {
    chi[0].classList.add('selected');
    i.addEventListener('click', (e) => {
      removeClasses(chi);
      e.target.classList.add('selected');
    })
  }

  const removeClasses = (chi) => {
    for (let i of chi) {
      i.classList.remove('selected');
    }
  }
}