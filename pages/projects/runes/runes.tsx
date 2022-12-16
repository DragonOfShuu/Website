import { useCallback, useEffect, useState } from 'react';
import styles from '../../../styles/projects/Runes.module.css';
import { convertToRune } from './runetables';
import copyText from '../../../components/utils/copyToClipboard';

export default function Runes() {
    const [ToRune, SetToRune] = useState(true);
    
    const [Input, SetInput] = useState("");
    const [Output, setOutput] = useState("");

    function switchText() {
        let outputText: string = Output;
        let inputText: string = Input;

        SetInput(outputText);
        setOutput(inputText);
    }

    function clearText() {
        SetInput("");
        setOutput("");
    }
    const convertToRuneUI = useCallback(
      () => {
        let converted: string = convertToRune(Input);

        setOutput( converted );
        copyText(converted)
      },
      [Input, setOutput],
    )
    
    // function convertToRuneUI() {
    //     console.log("conversion")
    //     let converted: string = convertToRune(Input);

    //     setOutput( converted );
    //     copyText(converted).then(() =>
    //         console.log("Successful copy!")
    //     ).catch((err) =>
    //         console.log(`There was error. \n${err}`)
    //     );
    // }

    // function convertFromRuneUI() {
    //     let convertable = Input;
    //     // copyText(Output);
    // }

    const convertFromRuneUI = useCallback(
      () => {
        let convertable = Input;
        setOutput(convertable);
      },
      [Input, setOutput],
    )
    

    useEffect(() => {
        function keyDownHandler(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                event.preventDefault();

                (ToRune ? convertToRuneUI : convertFromRuneUI)();
            }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        // When the componenet is dismounted
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [Input, Output, ToRune, convertFromRuneUI, convertToRuneUI]);

    return (
        <main className="main">
            <h1 className="title">Runes <span >Translation</span></h1>

            <div className={styles.translations}>
                <button onClick={() => SetToRune(!ToRune)}>
                    {
                        ToRune ? "Rune Mode" : "Decrypt Mode"
                    }
                </button>
                <textarea 
                    className={styles.input} 
                    placeholder='Input...'
                    onChange={(event) => SetInput(event.target.value)}
                    value={Input} />

                <div className={styles.executionButtons}>
                    <button onClick={ToRune ? convertToRuneUI : convertFromRuneUI}>Execute</button>
                    <button onClick={switchText}>Switch</button>
                    <button onClick={clearText}>Clear</button>
                </div>

                <textarea 
                    className={styles.output} 
                    placeholder='Output...' 
                    onChange={(event) => setOutput(event.target.value)}
                    value={Output}
                    readOnly />
                <p>Decryption not included currently</p>
            </div>
        </main>
    );
}