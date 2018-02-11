import React              from 'react'
import { Route, Switch }  from 'react-router-dom'

import Header   from "@/app/components/templates/header"
import Footer   from "@/app/components/templates/footer"
import Home     from "@/app/components/templates/home"

require("@/app/assets/css/app.scss")

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}  />
            {/* <Route path="/contact"  component={Contact} /> */}
          </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App