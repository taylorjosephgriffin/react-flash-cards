import React from 'react'
import Form from './form.js'
import Nav from './nav-bar.js'
import CardList from './card.js'
import {NoCards} from './card.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const cardJSON = window.localStorage.getItem('cards')
    this.state = {
      cards: JSON.parse(cardJSON) || [],
      path: window.location.hash.replace(/#/g, '')
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  renderView() {
    switch (this.state.path) {
      case 'create-card':
        return <Form handleSubmit={this.handleSubmit} />
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const card = {}
    const createForm = new FormData(event.target)

    if (createForm.get('question') === '' || createForm.get('answer') === '') {
      return null
    }
    else {
      card.id = this.state.cards.length + 1
      card.question = createForm.get('question')
      card.answer = createForm.get('answer')
      this.state.cards.push(card)
      event.target.reset()
      window.location.hash = 'card-list'
    }
  }

  componentDidMount() {
    window.addEventListener("hashchange", event => {
      this.setState({
        path: window.location.hash.replace(/#/g, '')
      })
    }, false)
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('cards', JSON.stringify(this.state['cards']))
    })
  }

  render() {
    return (
      <div>
        <Nav />
        {this.renderView()}
        { this.state.cards.length === 0 ? <NoCards card={this.state.cards} /> : <CardList card={this.state.cards} /> }
      </div>
    )
  }
}
