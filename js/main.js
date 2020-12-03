import { TextAnalizer} from './components/text-analizer/TextAnalizer.js';

const textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
let text = '';


submit.addEventListener('click', e => {
    // sustabdo defoltini elgsena/ivyki
    e.preventDefault();
    text = textarea.value; // istrauk is tuo elementa duomenis (kas buvo irasyta, ir jinai sedi text kintamajame)

    const analizatorius = new TextAnalizer(text);
    analizatorius.addLanguage('lt');
    
    const letterCount = analizatorius.letterCount();

    console.log('Raidziu kiekis:', letterCount);
})


