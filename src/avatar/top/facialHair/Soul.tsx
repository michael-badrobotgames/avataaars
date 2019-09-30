import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'

export default class Goatee extends React.Component {
  static optionValue = 'Soul'

  private mask1 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')

  render () {
    const { mask1, path1 } = this
    return (
      <g
        id='Facial-Hair/Soul'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='d="M74.9987743,109.723371 C74.9987743,115 74.9987743,115 83.9999331,115 C93.0010919,115 93.577188,115 93.577188,109.723371 C93.577188,104.446742 89.4491427,95.5190691 83.9999331,95.5190691 C78.5507235,95.5190691 74.9987743,104.446742 74.9987743,109.723371 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id='Soul'
          fill='#331B0C'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <Colors maskID={mask1} />
      </g>
    )
  }
}

