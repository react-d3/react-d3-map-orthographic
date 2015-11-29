"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react'

import {
  Polygon,
  Sphere,
  Mesh,
  Graticule
} from 'react-d3-map-core'

import topojson from 'topojson'
import World from './data/world-50m'

export default class OrthographicControllerMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      projection,
      geoPath,
      cWidth,
      cHeight
    } = this.props;

    var dataCountries = topojson.mesh(World, World.objects.countries, function(a, b) { return a !== b; });
    var dataLand = topojson.feature(World, World.objects.land);

    var oceanStyle = {
      fill: 'url(#ocean)'
    }

    var hlStyle = {
      fill: 'url(#highlight)'
    }

    var shadeStyle = {
      fill: 'url(#shade)'
    }

    var haloStyle = {
      fill: 'url(#halo)'
    }

    return (
      <g>
        <defs>
          <radialGradient
            id= {'ocean'}
            cx= {'75%'}
            cy= {'25%'}
          >
            <stop
              offset= {'5%'}
              stopColor= {'#e6e6f4'}
              >
            </stop>
            <stop
              offset= {'100%'}
              stopColor= {'#a2abb3'}
              >
            </stop>
          </radialGradient>
        </defs>
        <defs>
          <radialGradient
            id= {'highlight'}
            cx= {'75%'}
            cy= {'25%'}
          >
            <stop
              offset= {'5%'}
              stopColor= {'#ffd'}
              stopOpacity= {.6}
              >
            </stop>
            <stop
              offset= {'100%'}
              stopColor= {'#ba9'}
              stopOpacity= {.2}
              >
            </stop>
          </radialGradient>
        </defs>
        <defs>
          <radialGradient
            id= {'shade'}
            cx= {'50%'}
            cy= {'45%'}
          >
            <stop
              offset= {'50%'}
              stopColor= {'#a2abb3'}
              stopOpacity= {0}
              >
            </stop>
            <stop
              offset= {'100%'}
              stopColor= {'#57616b'}
              stopOpacity= {.3}
              >
            </stop>
          </radialGradient>
        </defs>
        <defs>
          <radialGradient
            id= {'halo'}
            cx= {'50%'}
            cy= {'50%'}
          >
            <stop
              offset= {'85%'}
              stopColor= {'#FFF'}
              stopOpacity= {1}
              >
            </stop>
            <stop
              offset= {'100%'}
              stopColor= {'#FFF'}
              stopOpacity= {0}
              >
            </stop>
          </radialGradient>
        </defs>
        <ellipse
          cx= {cWidth / 2}
          cy= {cHeight / 2}
          rx= {projection.scale() + 20}
          ry= {projection.scale() + 20}
          style= {haloStyle}
          >
        </ellipse>
        <circle
          cx= {cWidth / 2}
          cy= {cHeight / 2}
          r = {projection.scale()}
          style = {oceanStyle}
          >
        </circle>
        <circle
          cx= {cWidth / 2}
          cy= {cHeight / 2}
          r = {projection.scale()}
          style = {hlStyle}
          >
        </circle>
        <circle
          cx= {cWidth / 2}
          cy= {cHeight / 2}
          r = {projection.scale()}
          style = {shadeStyle}
          >
        </circle>
        <Polygon
          geoPath= {geoPath}
          data= {dataLand}
          polygonClass= {'react-d3-map-mobile__land'}
        />
        {this.props.children}
      </g>
    )

  }
}
