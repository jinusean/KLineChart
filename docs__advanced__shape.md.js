(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{dFNL:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),r=t("dEAq"),o=t("H1Ra"),c=i.a.memo((e=>{e.demos;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"shape"},i.a.createElement(r["AnchorLink"],{to:"#shape","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Shape"),i.a.createElement("h2",{id:"default-shape"},i.a.createElement(r["AnchorLink"],{to:"#default-shape","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Default shape"),i.a.createElement("p",null,i.a.createElement("code",null,"horizontalRayLine"),", ",i.a.createElement("code",null,"horizontalSegment"),", ",i.a.createElement("code",null,"horizontalStraightLine"),", ",i.a.createElement("code",null,"verticalRayLine"),", ",i.a.createElement("code",null,"verticalSegment"),", ",i.a.createElement("code",null,"verticalStraightLine"),", ",i.a.createElement("code",null,"rayLine"),", ",i.a.createElement("code",null,"segment"),", ",i.a.createElement("code",null,"horizontalSegment"),", ",i.a.createElement("code",null,"priceLine"),", ",i.a.createElement("code",null,"priceChannelLine"),", ",i.a.createElement("code",null,"parallelStraightLine"),", ",i.a.createElement("code",null,"fibonacciLine")),i.a.createElement("h2",{id:"shape-template"},i.a.createElement(r["AnchorLink"],{to:"#shape-template","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Shape template"),i.a.createElement("p",null,"Create a shape template, and then add it globally through ",i.a.createElement("code",null,"extension.addShapeTemplate"),", or add it for a single graph instance through the chart instance method ",i.a.createElement("code",null,"addShapeTemplate"),". Adding to the chart can be used like the built-in shape."),i.a.createElement("h3",{id:"property-description"},i.a.createElement(r["AnchorLink"],{to:"#property-description","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Property description"),i.a.createElement("h4",{id:"shape-information"},i.a.createElement(r["AnchorLink"],{to:"#shape-information","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Shape information"),i.a.createElement(o["a"],{code:"{\n  // Name, a required field, as the unique identifier of the shape\n  name:'xxx',\n\n  // How many steps are required to complete the drawing, the required fields\n  totalStep: 3,\n\n  // Check whether the mouse point is on the graph, it is a callback method, a required field\n  // key The key given when creating the data source\n  // type shape element type\n  // dataSource shape information\n  // eventCoordinate current mouse coordinate\n  // Need to return boolean value\n  checkEventCoordinateOnShape: ({ key, type, dataSource, eventCoordinate }) => {},\n\n  // Creating a shape data source is a callback method. It must be a field and needs to return shape data\n  // step current step\n  // points time price point information\n  // coordinates time price point corresponding axis information\n  // viewport size\n  // precision precision information, including price and quantity precision\n  // styles style\n  // xAxis x axis component\n  // yAxis y axis component\n  // data data\n  createShapeDataSource: ({ step, points, coordinates, viewport, precision, styles, xAxis, yAxis, data }) => {},\n\n  // Process the mouse movement operation during the drawing process, it can be defaulted, and the mouse operation is triggered during the drawing process\n  // step current step\n  // points graph time price point information\n  // movePoint time and price information corresponding to the move point\n  // xAxis x-axis component\n  // yAxis y axis component\n  performEventMoveForDrawing: ({ step, points, movePoint, xAxis, yAxis }) => {},\n\n  // Handle the mouse hold and move operation, it can be defaulted, the mouse is triggered during the movement process of holding down an operating point\n  // points graph time price point information\n  // pressPointIndex The index of the pressed point\n  // pressPoint time and price information corresponding to the press point\n  // xAxis x axis component\n  // yAxis y axis component\n  performEventPressedMove: ({ points, pressPointIndex, pressPoint, xAxis, yAxis }) => {},\n\n  // Extended drawing, default\n  // ctx canvas context\n  // dataSource shape data information\n  // styles chart style configuration\n  // viewport size\n  // precision precision information, including price and quantity precision\n  // xAxis x axis component\n  // yAxis y axis component\n  // data data\n  drawExtend: ({ ctx, dataSource, styles, viewport, precision, xAxis, yAxis, data }) => {}\n}",lang:"js"}),i.a.createElement("h4",{id:"method-createshapedatasource-return-value-sub-item-information"},i.a.createElement(r["AnchorLink"],{to:"#method-createshapedatasource-return-value-sub-item-information","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Method createShapeDataSource return value sub-item information"),i.a.createElement(o["a"],{code:"{\n  // key\n  key:'key'\n  // Type, currently supports 'line' | 'text' | 'continuous_line' | 'polygon' | 'arc', which is a necessary field\n  type:'line',\n  // Whether you want to draw, you can default, draw by default\n  isDraw: true,\n  // Whether to check whether it is on the graph, it can be defaulted, not checked by default\n  isCheck: true,\n  // Style\n  styles: {},\n  // Data array, when type is 'line', it is a two-dimensional array\n  dataSource: []\n}",lang:"js"}),i.a.createElement("h4",{id:"datasource-sub-item-information"},i.a.createElement(r["AnchorLink"],{to:"#datasource-sub-item-information","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"dataSource sub-item information"),i.a.createElement(o["a"],{code:"{\n  // x coordinate, required field\n  x: 123,\n  // y coordinate, necessary field\n  y: 123,\n  // radius, needed when type is 'arc'\n  radius: 5,\n  // Starting angle, required when type is 'arc'\n  startAngle: 0,\n  // End angle, required when type is 'arc'\n  endAngle: 180,\n  // text, required when type is 'text'\n  text: '',\n}",lang:"js"}),i.a.createElement("h2",{id:"example"},i.a.createElement(r["AnchorLink"],{to:"#example","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Example"),i.a.createElement("p",null,"Use a filled circle with a border to illustrate how to configure it."),i.a.createElement(o["a"],{code:"{\n  // name\n  name:'circle',\n\n  // It takes three steps to complete the drawing of a circle\n  totalStep: 3,\n\n  // Check if the event coordinate is on the circle border\n  checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {\n    const xDis = Math.abs(dataSource.x - eventCoordinate.x)\n    const yDis = Math.abs(dataSource.y - eventCoordinate.y)\n    const r = Math.sqrt(xDis * xDis + yDis * yDis)\n    return Math.abs(r - dataSource.radius) < 2;\n  },\n\n  // Create shape information\n  createShapeDataSource: ({ step, points, coordinates }) => {\n    if (coordinates.length === 2) {\n      const xDis = Math.abs(coordinates[0].x - coordinates[1].x)\n      const yDis = Math.abs(coordinates[0].y - coordinates[1].y)\n      const radius = Math.sqrt(xDis * xDis + yDis * yDis)\n      // A circle filled with a border is formed by a hollow circle and a solid circle\n      return [\n        // filled circle\n        {\n          type: 'arc',\n          isDraw: true,\n          // Filled circle, no need to check whether the mouse point is on the graph\n          isCheck: false,\n          // fill\n          styles: { style: 'fill' },\n          // point information\n          dataSource: [\n            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },\n          ]\n        },\n        // hollow circle\n        {\n          type:'arc',\n          isDraw: true,\n          // Need to check if it is on the border\n          isCheck: true,\n          // point information\n          dataSource: [\n            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },\n          ]\n        }\n      ]\n    }\n    return []\n  }\n}",lang:"js"})))}));n["default"]=e=>{var n=i.a.useContext(r["context"]),t=n.demos;return i.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),i.a.createElement(c,{demos:t})}}}]);