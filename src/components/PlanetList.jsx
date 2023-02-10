import React from 'react'
import { planets } from '../data/data'
import Planet from './Planet'

function PlanetList() {

  return (
    planets.map((item) => {
      return (
        <ul className="planets-list" key={item}>
          <Planet planet={item} />
        </ul>
      )
    })
  )
}

export default PlanetList