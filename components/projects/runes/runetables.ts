const runes: string[] = [
    "ᚨ",
    "ᛒ",
    "ᚲ",
    "ᛞ",
    "ᛖ",
    "ᚠ",
    "ᚷ",
    "ᚺ",
    "ᛁ",
    "ᛃ",
    "ᛚ",
    "ᛗ",
    "ᚾ",
    "ᛟ",
    "ᚴ",
    "ᛈ",
    "ᚱ",
    "ᛋ",
    "ᛏ",
    "ᚢ",
    "ᚹ",
    "ᛉ",
    "ᛇ"
]

const chars: string[][] = [
    ["a"],  
    ["b"],
    ["c"],
    ["d"],
    ["e"],
    ["f"],
    ["g"],
    ["h"],
    ["i"],
    ["j"],
    ["l"],
    ["m"],
    ["n"],
    ["o"],
    ["k", "o"],
    ["p"],
    ["r"],
    ["s"],
    ["t"],
    ["u", "v"],
    ["w"],
    ["x", "z"],
    ["y", "æ"]
]

const runes2: string[] = [
    "ᚦ"
]

const chars2: string[][] = [
    ["th"]
]

const replace2In2D = (item: string, twoDim: string[][], returnChars: string[]): string | null => {
    for (let i = 0; i < twoDim.length; i++ ) {
        for (let f = 0; f < twoDim[i].length; f++) {
            let element2: string = twoDim[i][f];

            if (item === element2) {
                return returnChars[i];
            }

        }
    };
    return null;
}

const convertToRune = (text: String): string => {
    text = text.toLowerCase();
    let newText: string = "";

    for (let i = 0; i < text.length; i++) {
        const item: string = text[i];
        let newCharacter: string | null;

        // Try to find and replace 2 characters to one    
        newCharacter = replace2In2D((item + text[i+1]), chars2, runes2);
        if (newCharacter != undefined) {
            newText += newCharacter;
            i++;
            continue;
        }
        
        // Find and replace 1 character to 1
        newCharacter = replace2In2D(item, chars, runes);
        // console.log(newCharacter)
        if (newCharacter != undefined) {
            newText += newCharacter;
            continue;
        }

        // If can't find the character, just apply it
        // to the translation.
        newText += item;
    }

    return newText;
}

export { convertToRune };