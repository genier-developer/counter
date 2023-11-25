import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";
import {Input} from "./components/Input/Input";
import {TextBlock} from "./components/TextBlock/TextBlock";

function App() {
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(0);
    const [num, setNum] = useState(0);

    const decrease = () => {
        if (num - 1 >= startValue) {
            setNum(num - 1);
        }
    }
    const increase = () => {
        if (num + 1 <= endValue) {
            setNum(num + 1);
        }
    }
    const reset = () => {
        setNum(startValue);
    }

    const onMinChange = (value: string) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue)) {
            setStartValue(numericValue);
        }
    }
    const onMaxChange = (value: string) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue)) {
            setEndValue(numericValue);
        }
    }

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        let endValueAsString = localStorage.getItem('endValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
        if (endValueAsString) {
            let newEndValue = JSON.parse(endValueAsString)
            setEndValue(newEndValue)
        }
    }, [])

    const setToLocalHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('endValue', JSON.stringify(endValue))
        setNum(startValue)
    }

    const clearLocalHandler = () => {
        localStorage.clear()
        setStartValue(0)
        setEndValue(0)
        setNum(0)
    }

    return (
        <div className={'App'}>
            <div className='container'>
                <div className={'inner'}>
                    <div className={'setting-container'}>

                        <div className={'sectionName'}>Settings</div>

                        <div className={'wrapper'}>
                            <TextBlock className={'TextBlock'} text={'Start value'}></TextBlock>
                            <Input value={startValue} className={'Input'} type={'text'} callBack={onMinChange}/>
                        </div>

                        <div className={'wrapper'}>
                            <TextBlock className={'TextBlock'} text={'End value'}></TextBlock>
                            <Input value={endValue} className={'Input'} type={'text'} callBack={onMaxChange}/>
                        </div>
                        
                        <div className={'btn-wrapper'}>
                            <Button name={'Set'} callBack={setToLocalHandler} className={'ButtonReset'}/>
                            <Button name={'Reset'} callBack={clearLocalHandler} className={'ButtonReset'}/>
                        </div>

                    </div>

                    <div className={'counter'}>
                        <div className={'sectionName'}>Result</div>
                        <div className={'counterContainer'}>
                            <Button
                                name={'-'}
                                className={num <= startValue ? 'ButtonErrorDecrease' : 'Button'}
                                disabled={num <= startValue}
                                callBack={decrease}/>

                            <Display isError={num !== 0 ? num >= endValue || num < startValue : false} name={num}/>

                            <Button
                                name={'+'}
                                className={num >= endValue ? 'ButtonErrorIncrease' : 'Button'}
                                disabled={num >= endValue}
                                callBack={increase}/>
                        </div>

                        <div className={'set-btn-wrapper'}>
                            <Button name={'Reset'} className={'ButtonReset'} callBack={reset}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
