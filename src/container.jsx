"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var topojson = require('topojson');

var MapOrthographic = require('../../lib/index').MapOrthographic;

var css= require('./css/polygon.css');

// Example
(function() {
  var width = 1000;
  var height = 800;
  var scale = (1 << 13);
  var center = [-73.95, 40.7];
  var data = {geometry: {coordinates: [[[-74.0479, 40.8820], [-73.9067, 40.8820], [-73.9067, 40.6829], [-74.0479, 40.6829], [-74.0479, 40.8820]]], type: "Polygon"}, id: 999999, properties:{"text": "hi, this is a polygon!"}, type: "Feature"};
  var popupContent = function(d) { return d.properties.text; }

  ReactDOM.render(
    <MapOrthographic
      width= {width}
      height= {height}
      scale= {scale}
      center= {center}
      data= {data}
      popupContent= {popupContent}
    />
  , document.getElementById('blank-container')
  )

})()
