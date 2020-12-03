class TextAnalizer {
    constructor(text) {
        // itraukia i atmenti objekta, kuri mes perduodam jam
        this.text = text;
        this.abc = {
            en: {
                lowercase : 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
            },
            lt: {
                lowercase : 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ',
            },
        };
        this.lowercaseEnabled = true;
        this.uppercaseEnabled = true;
        this.languages = [];
        this.finalAbc = '';

        this.addLanguage('en');
    }
    // metodas, skirtas i jau egzistijama sarasa itraukti nauja kalbu sarasa
    addLanguage(newLang) {
        if (this.abc[newLang]) {
            this.languages.push(newLang);

            let text = '';
            for(let lang of this.languages) {
                if (this.lowercaseEnabled) {
                    this.finalAbc += this.abc[lang].lowercase;
                }

                if (this.uppercaseEnabled) {
                    this.finalAbc += this.abc[lang].uppercase;
                }
            }
            this.finalAbc = text;
        }  else {
            console.error(`ERROR: norima ${newLang} kalba nerasta.`);
        }
    }

    letterCount() {
        // raidziu nerasta is pradziu
        let count = 0;

        for (let letter of this.text) {
            // ar abc'eleje ta raide yra
            if (this.abc.includes(letter)) {
                count++;
            }
        }

        return count;
    }
}

export { TextAnalizer }