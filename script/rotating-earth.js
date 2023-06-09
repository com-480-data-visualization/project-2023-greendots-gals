async function* _canvas(DOM,width,height,d3,sphere,land,borders,countries,$0,tilt,Versor,mutableCountryInfo)
{
  const context = DOM.context2d(width, height);
  const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, height - 10]], sphere);
  const path = d3.geoPath(projection, context);
  const canvas = context.canvas;
  let consumptionType = 'consTotal';

  function getColor(consPer, consTotal) {
    if (consumptionType === 'consPer') {
        if (consPer < 1000) { return "#ebfaef80"; 
      } else if (consPer < 2000) { return "#c2efce80";
      } else if (consPer < 5000) { return "#9ae5ae80";
      } else if (consPer < 10000) { return "#71da8d80";
      } else if (consPer < 20000) { return "#2fb65380";
      } else if (consPer < 50000) { return "#258e4180";
      } else if (consPer < 200000){ return "#1a652e80";
      } else { return "#00080";
      } 
    } else if (consumptionType === 'consTotal') {
        if (consTotal < 100) { return "#ebfaef80";
      } else if (consTotal < 500) { return "#c2efce80";
      } else if (consTotal < 1000) { return "#9ae5ae80";
      } else if (consTotal < 2500) { return "#71da8d80";
      } else if (consTotal < 5000) { return "#2fb65380";
      } else if (consTotal < 10000) {return "#258e4180";
      } else if (consTotal < 50000) {return "#1a652e80";
      } else { return "#00080";
      } 
    }
  }

  function updateCountries() {
    for (const country of countries) {
      const consPer = country.properties.cons_per;
      const consTotal = country.properties.cons_total;
      const fillColor = getColor(consPer, consTotal);
      country.properties.fillColor = fillColor;
    }
  }

  function render(country, arc) {
    context.clearRect(0, 0, width, height);
    updateCountries();
    //const fillColor = getColor(consPer, consTotal);
    for (const country of countries) {
      context.beginPath(), path(country), context.fillStyle = country.properties.fillColor, context.fill();
    }
    //context.beginPath(), path(land), context.fillStyle = "#ccc", context.fill();
    //context.beginPath(), path(country), context.fillStyle = country.properties.fillColor, context.fill();
    //context.beginPath(), path(country), context.fillStyle = "#f00", context.fill();
    context.beginPath(), path(borders), context.strokeStyle = "#fff", context.lineWidth = 0.5, context.stroke();
    context.beginPath(), path(sphere), context.strokeStyle = "#000", context.lineWidth = 1, context.stroke();
    context.beginPath(), path(arc), context.stroke();
    return context.canvas;
  
  }
  
  let p1, p2 = [0, 0], r1, r2 = [0, 0, 0];
  for (const country of countries) {
    const consPer = country.properties.cons_per;
    const consTotal = country.properties.cons_total;
    const fillColor = getColor(consPer, consTotal);
    country.properties.fillColor = fillColor;

    mutableCountryInfo.value = `${country.properties.name}, total energy consumption in 2019 is ${consTotal} twh.`;

    $0.value = country.properties.name;
    yield render(country);

    p1 = p2, p2 = d3.geoCentroid(country);
    r1 = r2, r2 = [-p2[0], tilt - p2[1], 0];
    const ip = d3.geoInterpolate(p1, p2);
    const iv = Versor.interpolateAngles(r1, r2);

    await d3.transition()
        .duration(2000)
        .tween("render", () => t => {
          projection.rotate(iv(t));
          render(country, {type: "LineString", coordinates: [p1, ip(t)]});
        })
      .transition()
        .tween("render", () => t => {
          render(country, {type: "LineString", coordinates: [ip(t), p2]});
        })
      .end();
  }

}


function _Versor(){return(
class Versor {
  static fromAngles([l, p, g]) {
    l *= Math.PI / 360;
    p *= Math.PI / 360;
    g *= Math.PI / 360;
    const sl = Math.sin(l), cl = Math.cos(l);
    const sp = Math.sin(p), cp = Math.cos(p);
    const sg = Math.sin(g), cg = Math.cos(g);
    return [
      cl * cp * cg + sl * sp * sg,
      sl * cp * cg - cl * sp * sg,
      cl * sp * cg + sl * cp * sg,
      cl * cp * sg - sl * sp * cg
    ];
  }
  static toAngles([a, b, c, d]) {
    return [
      Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180 / Math.PI,
      Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180 / Math.PI,
      Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180 / Math.PI
    ];
  }
  static interpolateAngles(a, b) {
    const i = Versor.interpolate(Versor.fromAngles(a), Versor.fromAngles(b));
    return t => Versor.toAngles(i(t));
  }
  static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
    a2 -= a1, b2 -= b1, c2 -= c1, d2 -= d1;
    const x = new Array(4);
    return t => {
      const l = Math.hypot(x[0] = a1 + a2 * t, x[1] = b1 + b2 * t, x[2] = c1 + c2 * t, x[3] = d1 + d2 * t);
      x[0] /= l, x[1] /= l, x[2] /= l, x[3] /= l;
      return x;
    };
  }
  static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
    let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2;
    if (dot < 0) a2 = -a2, b2 = -b2, c2 = -c2, d2 = -d2, dot = -dot;
    if (dot > 0.9995) return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]); 
    const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)));
    const x = new Array(4);
    const l = Math.hypot(a2 -= a1 * dot, b2 -= b1 * dot, c2 -= c1 * dot, d2 -= d1 * dot);
    a2 /= l, b2 /= l, c2 /= l, d2 /= l;
    return t => {
      const theta = theta0 * t;
      const s = Math.sin(theta);
      const c = Math.cos(theta);
      x[0] = a1 * c + a2 * s;
      x[1] = b1 * c + b2 * s;
      x[2] = c1 * c + c2 * s;
      x[3] = d1 * c + d2 * s;
      return x;
    };
  }
}
)}

function _name(){return(
""
)}

function _height(width){return(
Math.min(width, 720)
)}

function _tilt(){return(
20
)}

function _sphere(){return(
{type: "Sphere"}
)}

function _countries(topojson,world){return(
topojson.feature(world, world.objects.countries).features
)}

function _borders(topojson,world){return(
topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
)}

function _land(topojson,world){return(
topojson.feature(world, world.objects.land)
)}

function _world(d3){return(
d3.json("./data/countries-110m.json")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _d3(require){return(
require("d3@6")
)}

function _countryInfo() {
  return (
      ""
  )
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("canvas")).define("canvas", ["DOM","width","height","d3","sphere","land","borders","countries","mutable name","tilt","Versor", "mutable countryInfo"], _canvas);
  main.variable(observer("Versor")).define("Versor", _Versor);

  main.define("initial name", _name);
  main.variable(observer("mutable name")).define("mutable name", ["Mutable", "initial name"], (M, _) => new M(_));
  main.variable(observer("name")).define("name", ["mutable name"], _ => _.generator);

  main.define("initial countryInfo", _countryInfo);
  main.variable(observer("mutable countryInfo")).define("mutable countryInfo", ["Mutable", "initial countryInfo"], (M, _) => new M(_));
  main.variable(observer("countryInfo")).define("countryInfo", ["mutable countryInfo"], _ => _.generator);

  main.variable(observer("height")).define("height", ["width"], _height);
  main.variable(observer("tilt")).define("tilt", _tilt);
  main.variable(observer("sphere")).define("sphere", _sphere);
  main.variable(observer("countries")).define("countries", ["topojson","world"], _countries);
  main.variable(observer("borders")).define("borders", ["topojson","world"], _borders);
  main.variable(observer("land")).define("land", ["topojson","world"], _land);
  main.variable(observer("world")).define("world", ["d3"], _world);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
