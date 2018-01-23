import React, { Component } from 'react'
// import Modal from '../module/ModalMods'
import Picker from 'react-mobile-picker'

class Home extends Component {
  state = {
    valueGroups: {
      title: '0',
      firstName: '0'
    },
    optionGroups: {
      title: [],
      firstName: []
    }
  }

  componentDidMount() {
    let amountLoan = []
    for (let amount = 250; amount < 2510 && amount > 240; amount += 50) {
      amountLoan.push('$ ' + amount)
    }
    let dayLoan = []
    for (let day = 1; day < 31; day++) {
      dayLoan.push(day + ' days')
    }

    this.setState({
      valueGroups: {
        title: 1,
        firstName: 100
      },
      optionGroups: {
        title: amountLoan,
        firstName: dayLoan
      }
    })
  }

  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }))
  }
  render() {
    const { optionGroups, valueGroups } = this.state
    return (
      <div>
        <Picker optionGroups={optionGroups} valueGroups={valueGroups} onChange={this.handleChange} />
      </div>
    )
  }
}
export default Home
