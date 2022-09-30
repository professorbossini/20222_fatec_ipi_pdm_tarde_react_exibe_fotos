import { Card } from 'primereact/card'
import Busca from './Busca'
import React from 'react'
import env from 'react-dotenv'
import { createClient } from 'pexels'
export default class App extends React.Component {
  
  pexelsClient = null
  
  state = {
    pics: []
  }

  onBuscaRealizada = (termo) => {
    console.log(termo)
    this.pexelsClient.photos.search({query: termo})
    .then(res => this.setState({pics: res.photos}))
  }

  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  render(){
    return (
      // .grid.justify-content-center.m-auto.w-9.border-round.border-1.border-400
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12 md:col-8">
          <Card>
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </Card>
        </div>
        <div className="col-12 md:col-8">
          {
            this.state.pics.map((pic, key) => (
              <div key={pic.id}>
                <img src={pic.src.small} alt={pic.alt} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

// export default App