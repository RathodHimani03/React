import { useState } from "react";
import classes from './UserInput.module.css'

const UserInput = (props) => {

    const initialInput = {
        "current-savings": 10000,
        "yearly-contribution": 1200,
        "expected-return": 7,
        duration: 10,


    }

    const [userInput, setUserInput] = useState(initialInput)


    //submitform
    const submitHandler = (e) => {
        e.preventDefault()
        props.onCalculate(userInput)
    }

    //for reset 
    const resetHandler = () => {
        setUserInput(initialInput)
    }

    //for changes in input
    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value
            }
        })
    }


    return (

        <div>
            <form className={classes.form} onClick={submitHandler}>
                <div className={classes["input-group"]}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input 
                        onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                         type="number" id="current-savings"
                         value={userInput["current-savings"]} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)} 
                        type="number" id="yearly-contribution" 
                        value={userInput["yearly-contribution"]}/>
                    </p>
                </div>
                <div className={classes["input-group"]}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
                         type="number" id="expected-return"
                         value={userInput["expected-return"]} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input onChange={(event) => inputChangeHandler("duration", event.target.value)}
                         type="number" id="duration"
                         value={userInput["duration"]} />
                    </p>
                </div>
                <p className="actions">
                    <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                        Reset
                    </button>
                    <button type="submit" className={classes.button}>
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );



};


export default UserInput;