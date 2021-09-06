import style from './App.module.scss'
import { Component } from 'react'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalInput: '0.00',
      tipPercentage: '00',
      isTotal: true,
      tipResult: '0.00',
      totalResult: '0.00',
    }
  }

  handleClick = ({ target: { name, value } }) => {
    if (this.state[name] === '0.00' || this.state[name] === '00') {
      this.setState({
        [name]: value,
      })
    } else {
      this.setState((prevState) => ({
        [name]: prevState[name] + value,
      }))
    }
  }

  inputToggle = () => {
    this.setState({ isTotal: !this.state.isTotal })
  }

  handleReset = () => {
    this.setState({
      totalInput: '0.00',
      tipPercentage: '00',
      isTotal: true,
      tipResult: '0.00',
      totalResult: '0.00',
    })
  }

  handleCalculate = () => {
    const { totalInput, tipPercentage } = this.state
    const tipPercentagePlusOne = tipPercentage * 0.01 + 1
    const newBill = Number((totalInput * tipPercentagePlusOne).toFixed(2))
    const newTotal = Math.ceil(newBill)
    this.setState({
      tipResult: (newTotal - totalInput).toFixed(2),
      totalResult: newTotal.toFixed(2),
    })
  }

  render() {
    return (
      <div className={style.CalcContainer}>
        <h1>RoundUp Tip Calculator</h1>
        {/*bill and tip input view*/}
        <section onClick={this.inputToggle} className={style.InputContainer}>
          {/*bill total view*/}
          <div className={style.Input}>
            <h3>Bill</h3>
            <div
              className={`${style.TotalAndTipContainer} ${
                this.state.isTotal && style.Highlight
              }`}
            >
              ${this.state.totalInput}
            </div>
          </div>
          {/*tip percentage view*/}
          <div className={style.Input}>
            <h3>Tip Percentage</h3>
            <div
              className={`${style.TotalAndTipContainer} ${
                !this.state.isTotal && style.Highlight
              }`}
            >
              {this.state.tipPercentage}%
            </div>
          </div>
        </section>

        {/*Bill total input buttons*/}
        {this.state.isTotal && (
          <section className={style.TotalInputContainer}>
            <div className={style.ButtonContainer}>
              <Button
                name={'totalInput'}
                value={7}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={8}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={9}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={4}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={5}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={6}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={1}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={2}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={3}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={0}
                onClick={this.handleClick}
              />
              <Button
                name={'totalInput'}
                value={'.'}
                onClick={this.handleClick}
              />
            </div>
          </section>
        )}

        {/*Tip Percentage input buttons*/}
        {!this.state.isTotal && (
          <section className={style.TipPercentageContainer}>
            <div className={style.ButtonContainer}>
              <Button
                name={'tipPercentage'}
                value={7}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={8}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={9}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={4}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={5}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={6}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={1}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={2}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={3}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={0}
                onClick={this.handleClick}
              />
              <Button
                name={'tipPercentage'}
                value={'.'}
                onClick={this.handleClick}
              />
            </div>
          </section>
        )}

        <section className={style.ResetAndCalculateButtons}>
          {/*Reset Button*/}
          <Button name={'reset'} value={'Reset'} onClick={this.handleReset} />

          {/*Calculate Button*/}
          <Button
            name={'calculate'}
            value={'='}
            onClick={this.handleCalculate}
          />
        </section>

        {/*tip needed and new total view*/}
        <section className={style.DisplayContainer}>
          <div className={style.NewInfo}>
            <h3>Tip</h3>${this.state.tipResult}
          </div>
          <div className={style.NewInfo}>
            <h3>RoundUp Total</h3>${this.state.totalResult}
          </div>
        </section>
      </div>
    )
  }
}

export default App
