import React, { useRef, useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { ContextProvider } from "../context"
import ThreeScene from '../../threejs/ThreeScene'
import ErrorBoundry from "../error-boundry"
import Header from "../header"
import Random from "../random"
import Page from "../page"
import "./app.css"

const App = () => {

  const scene = useRef(null)
  useEffect(() => ThreeScene(scene.current), [])

  return (
    <ContextProvider>
      <div className="three-scene" ref={scene} />
      <main className="app">

        <ErrorBoundry><Random /></ErrorBoundry>
        <Router basename='/'>
          <Header />
          <Route path="/:page?/:id?" component={Page}/>
          <Route exact path="/"><Redirect to="/people/" /></Route>
        </Router>

      </main>
    </ContextProvider>
  )
}
export default App
