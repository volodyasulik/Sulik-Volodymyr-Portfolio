const Lengvich = {
  name: {
    ru: "Сулик Владимир",
    ua: "Сулік Володимир",
    en: "Sulik Volodymyr",
  },
  profession: {
    ru: "Фронтенд разработчик",
    ua: "Фронтенд розробник",
    en: "Front-end developer",
  },
  title: {
    ru: "Навыки:",
    ua: "Навички:",
    en: "Skills:",
  },
  "title-about-me": {
    ru: "Обо мне:",
    ua: "Про мене:",
    en: "Sulik Volodymyr",
  },
  text: {
    ru: `Ставлю цель присоединиться к дружеской и профессиональной команде, где смогу
        развивать и приумножать свои навыки разработки JavaScript и
        React.js для достижения командных целей!`,
    ua: `Ставлю ціль приєднатися до дружньої та професійної команди,де зможу
        розвивати та примножувати свої навички розробки JavaScript й
        React.js для досягнення командних цілей!`,
    en: `I aim to join a friendly and professional team where I can
         develop and multiply my JavaScript and React.js development skills to achieve team goals!`,
  },
  "education-title": {
    ru: "Образование:",
    ua: "Ocвіта:",
    en: "Education:",
  },
  junior: {
    ru: `Современный JavaScript - с Нуля до Junior Специалиста<br />(от
            Youra Allakhverdov)`,
    ua: ` Сучасний JavaScript - з Нуля до Junior Спеціаліста<br />(від
            YouRa Allakhverdov)`,
    en: `Modern JavaScript - from Zero to Junior Specialist<br />(from
        YouRa Allakhverdov)`,
  },
  "80-task": {
    ru: `JavaScript - Полный Курс по JavaScript<br />(от Bogdan
            Stashchuk )`,
    ua: `JavaScript - Повний Курс по JavaScript<br />(від Bogdan
            Stashchuk )`,
    en: `JavaScript - Complete JavaScript Course<br />(by Bogdan
        Stashchuk)`,
  },
  react: {
    ru: `Современный React - из Нуля до Профессионала<br />(от YouRa
            Allakhverdov)`,
    ua: `Сучасний React - з Нуля до Професіонала<br />(від YouRa
            Allakhverdov)`,
    en: `Modern React - from Zero to Professional<br />(from YouRa
        Allahverdov),`,
  },
  "experience-title": {
    ru: "Релевантный опыт:",
    ua: "Релевантний досвід:",
    en: " Relevant experience:",
  },
  "expirience-work-kitchen": {
    ru: `Japanese kitchen – это тестовый проект симулятора Японского
    ресторана.<br />
    Технологии: JavaScript, React.js, React Redux, HTML, CSS, FireBase.`,
    ua: `Japanese kitchen - Це тестовий проект симулятору Японського
    ресторану.<br />
    Технології:JavaScript,React.js,React Redux,HTML,CSS,FireBase.`,
    en: `Japanese kitchen - This is a test project of the Japanese kitchen simulator
    restaurant.<br />
    Technologies: JavaScript, React.js, React Redux, HTML, CSS, FireBase.`,
  },
  "expirience-work-jokes": {
    ru: `Jokes - Простой сайт с возможностью создавать новые шутки и
    пересмотреть уже существующие с комментариями под ними.<br />
    Технологии: JavaScript, React.js, React Router, React Redux, HTML, CSS`,
    ua: `Jokes - Простий сайт з можливістю створювати нові жарти та
    перегядати уже існуючі з коментарями під ними.<br />
    Технології:JavaScript,React.js,React Router,React Redux,HTML,CSS`,
    en: `
    Jokes - A simple site with the ability to create new jokes and
        to recall already existing ones with comments under them.<br />
        Technologies: JavaScript, React.js, React Router, React Redux, HTML, CSS`,
  },
  "expirience-work-BankApp": {
    ru: `Bank App - это тестовый проект простого симулятора банковского.
    приложения.<br />Технологии: HTML, CSS, JavaScript`,
    ua: `Bank App - Це тестовий проекет простого симулятора банківської
    додатку.<br />Технології:HTML,CSS,JavaScript`,
    en: `
    Bank App - This is a test project of a simple bank
        application.<br />Technologies: HTML, CSS, JavaScript`,
  },
  BankApp: {
    ru: "Bank App на GitHub",
    ua: "Bank App на GitHub",
    en: "Jokes on GitHub",
  },
  kitchen: {
    ru: "Japanese kitchen на GitHub",
    ua: "Japanese kitchen на GitHub",
    en: "Jokes on GitHub",
  },
  jokes: {
    ru: "Jokes на GitHub",
    ua: "Jokes на GitHub",
    en: "Jokes on GitHub",
  },
};

const select = document.querySelector(".secect-lengvich");
const allLang = ["ru", "en", "ua"];

const changeURLLanguage = () => {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
};

select.addEventListener("change", changeURLLanguage);

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  for (let key in Lengvich) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = Lengvich[key][hash];
    }
  }
}

changeLanguage();
