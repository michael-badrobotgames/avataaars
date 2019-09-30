import * as React from 'react'

import Goatee from './Goatee'
import Soul from './Soul'
import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'

export default class FacialHair extends React.Component {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={Blank}>
        <Blank />
        <BeardMedium />
        <BeardLight />
        <Goatee />
        <Soul />
        <BeardMajestic />
        <MoustacheFancy />
        <MoustacheMagnum />
      </Selector>
    )
  }
}
