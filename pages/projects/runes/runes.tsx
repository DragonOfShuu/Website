import { useEffect, useState } from 'react';
import styles from '../../../styles/projects/Runes.module.css';
import { convertToRune } from './runetables';
import copyText from '../../../components/utils/copyToClipboard';

export default function runes() {
    const [toRune, setToRune] = useState(true);

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    function switchText() {
        let outputText: string = output;
        let inputText: string = input;

        setInput(outputText);
        setOutput(inputText);
    }

    function clearText() {
        setInput("");
        setOutput("");
    }

    function convertToRuneUI() {
        console.log("conversion")
        let converted: string = convertToRune(input);

        setOutput( converted );
        copyText(converted).then(() =>
            console.log("Successful copy!")
        ).catch((err) =>
            console.log(`There was error. \n${err}`)
        );
    }

    function convertFromRuneUI() {
        let convertable = input;
        // copyText(output);
    }

    useEffect(() => {
        function keyDownHandler(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                event.preventDefault();

                (toRune ? convertToRuneUI : convertFromRuneUI)();
            }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        // When the componenet is dismounted
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [input, output]);

    return (
        <main className="main">
            <h1 className="title">Runes <span >Translation</span></h1>

            <div className={styles.translations}>
                <button onClick={() => setToRune(!toRune)}>
                    {
                        toRune ? "Rune Mode" : "Decrypt Mode"
                    }
                </button>
                <textarea 
                    className={styles.input} 
                    placeholder='Input...'
                    onChange={(event) => setInput(event.target.value)}
                    value={input} />

                <div className={styles.executionButtons}>
                    <button onClick={toRune ? convertToRuneUI : convertFromRuneUI}>Execute</button>
                    <button onClick={switchText}>Switch</button>
                    <button onClick={clearText}>Clear</button>
                </div>

                <textarea 
                    className={styles.output} 
                    placeholder='Output...' 
                    onChange={(event) => setOutput(event.target.value)}
                    value={output}
                    readOnly />
                <p>Decryption not included currently</p>
            </div>
        </main>
    );
}