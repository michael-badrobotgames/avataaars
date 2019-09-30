import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class LongHairHank extends React.Component {
  static optionValue = 'LongHairHank'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, path1, path2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M127.746306,122.838428 C127.620929,86.449212 120.558835,61.5030694 106.560022,48 C83.4798088,25.737131 60.3385696,15.7356884 41.0968554,28.4612466 C21.8551411,41.1868049 40.1879496,72.7905844 28.1262876,110.56134 C25.3100873,119.380192 22.7799674,126.06877 20.535928,130.627074 C25.6449553,144.277648 35.9289393,155.401567 49,161.610951 L49,167.646091 C25.2192824,161.478945 1.0750272,150.099389 1,134 C0.914976702,115.014914 4.64323078,33.3120212 23.6432308,17 C33.0236763,8.9466302 48.6952966,0.550643437 73.0001685,1 C97.3050404,1.44935656 111.684769,9.74156817 122.516367,17 C138.360121,27.6171586 146.936642,66.4766439 147.00091,100.879518 C147.036152,120.509924 141.787661,146.299971 135.346428,147 C121.047752,148.55397 112.471716,164.424475 97.0000027,170.584776 L97,161.610951 C112.479675,154.257359 124.050482,140.011146 127.746306,122.838428 Z'
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Hank' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 19.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Combined-Shape' fill='#E6E6E6' xlinkHref={'#' + path2} />
              <HairColor maskID={mask2} />
            </g>
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}

