import React, { Component } from "react"
import SwapiService from "../../services/SwapiService"
import ThreeScene from '../../threejs/ThreeScene';
import ErrorBoundry from "../error-boundry"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import isMobile from "../ismobile"
import "./app.css"

export default class App extends Component {

  state = { page: "people" }

  changePage = (page) => this.setState({ page })

  componentDidMount() {
    ThreeScene(this.scene, isMobile())
  }

  render() {
    return (
      <>
        <div className="three-scene" ref={element => this.scene = element} />
        <main className="app">
          <Header page={this.state.page} changePage={this.changePage} />
          <ErrorBoundry>
            <Random />
          </ErrorBoundry>
          <Page page={this.state.page} />
        </main>
      </>
    )
  }
}
