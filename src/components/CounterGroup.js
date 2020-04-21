import React, {Component} from 'react';
import Counter from "./Counter";
import {INIT_COUNTERS_SIZE} from "../constants/constants.js";

class CounterGroup extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
        this.state = {
            size: INIT_COUNTERS_SIZE,
            sum: 0
        };
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event){
        const value = event.target.value;
        this.setState({
            size: value.length > 0 ? parseInt(value) : 0,

        })
    }

    onCalculate(changeNumber){
        this.setState((prevState)=>{
            return {
                sum: prevState.sum + changeNumber
            };
        });
    }


    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <form>
                    <fieldset>
                        <label htmlFor="number">Generate </label>
                        <input
                            name={"number"}
                            placeholder={"input number here..."}
                            onChange={this.onChange}
                            value={this.state.number}
                        />
                        <span> Counters</span>
                        <p>
                            Sum : <mark>{this.state.sum}</mark>
                        </p>
                    </fieldset>
                </form>
                {counters.map((value) => (
                    <Counter
                        key={value}
                        number={this.state.number}
                        onCalculate={this.onCalculate}
                    />
                ))}
            </div>
        );
    }


}

export default CounterGroup;