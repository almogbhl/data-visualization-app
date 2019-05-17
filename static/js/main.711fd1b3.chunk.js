(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,r,o){e.exports=o(255)},119:function(e,r,o){},255:function(e,r,o){"use strict";o.r(r);var t=o(2),a=o.n(t),s=o(106),n=(o(119),o(54)),c=o.n(n),i=o(107),p=o(108),l=o(109),u=o(112),d=o(110),h=o(113),m=o(111),y=o.n(m),f=o(55),g=function(e){function r(){var e,o;Object(p.a)(this,r);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(o=Object(u.a)(this,(e=Object(d.a)(r)).call.apply(e,[this].concat(a)))).state={graph:null,options:null,studentsData:null},o.calcAverage=function(){f.map(function(e){var r,o,t=[];e.scores.map(function(e){t.push(e.score)}),r=t.reduce(function(e,r){return e+r},0),o=parseInt(r/e.scores.length),e.average=o}),o.setState({studentsData:f})},o.createGraph=function(){return{nodes:[],edges:[]}},o.createBaseNodes=function(){var e=o.createGraph();return e.nodes.push({id:1,label:"grades",color:{border:"#fff",background:"rgba(241, 196, 15,1)"}},{id:2,label:"failed",color:{border:"#fff",background:"rgba(234, 32, 39,.4)"}},{id:3,label:"passed",color:{border:"#fff",background:"rgba(76, 209, 55,.4)"}}),e.edges.push({from:1,to:2},{from:1,to:3}),e},o.setGraphOptions=function(){return{layout:{hierarchical:!1},edges:{font:{color:"#fff",strokeColor:"#000",align:"middle"},dashes:!0,length:180},nodes:{color:{border:"#BFEDF7",background:"rgba(255,255,255,0.3)",highlight:{border:"#44C4D2",background:"#246478"}},font:{color:"#FFF",size:16,face:"Inconsolata",align:"center"},shape:"circle"}}},o.manipulateData=function(){var e=o.createBaseNodes(),r=o.setGraphOptions(),t=o.state.studentsData,a=4,s=4,n=4;t.map(function(r){if(r._id>=0){var o=r.scores,t={id:a,label:r.name},c={id:++a,label:"".concat(r.average)};e.nodes.push(t),e.nodes.push(c),a++,o.length&&o.map(function(o){var t=parseInt(o.score),c={from:s,to:a,label:"".concat(o.type)},i={id:a,label:"".concat(t),color:{border:"#BFEDF7",background:"transparent",highlight:{border:"#44C4D2",background:"#246478"}}},p={from:a,to:n=s+1,label:"average"},l={from:n,to:2,label:"hasFailed"},u={from:n,to:3,label:"hasPassed"};e.nodes.push(i),e.edges.push(c),e.edges.push(p),r.average<=56?e.edges.push(l):e.edges.push(u),a++}),s=a}}),o.setState({options:r,graph:e})},o}return Object(h.a)(r,e),Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.calcAverage();case 2:this.manipulateData();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null!==this.state.graph?a.a.createElement("div",null,a.a.createElement(y.a,{graph:this.state.graph,options:this.state.options,style:{height:"100vh",width:"100vw",overflow:"hidden",background:"linear-gradient(#000116, #002538)"}})):"Loading"}}]),r}(t.Component);var b=function(){return a.a.createElement("div",null,a.a.createElement("h1",{style:{position:"fixed",fontSize:"40px",color:"white"}},"optimization test - temp"),a.a.createElement(g,null))};Object(s.render)(a.a.createElement("div",null,a.a.createElement(b,null)),document.getElementById("root"))},55:function(e){e.exports=[{_id:0,name:"aimee Zank",scores:[{score:1.463179736705023,type:"exam"},{score:11.78273309957772,type:"quiz"},{score:35.8740349954354,type:"homework"}]},{_id:1,name:"Aurelia Menendez",scores:[{score:60.06045071030959,type:"exam"},{score:52.79790691903873,type:"quiz"},{score:71.76133439165544,type:"homework"}]},{_id:2,name:"Corliss Zuk",scores:[{score:67.03077096065002,type:"exam"},{score:6.301851677835235,type:"quiz"},{score:66.28344683278382,type:"homework"}]},{_id:3,name:"Bao Ziglar",scores:[{score:71.64343899778332,type:"exam"},{score:24.80221293650313,type:"quiz"},{score:42.26147058804812,type:"homework"}]},{_id:4,name:"Zachary Langlais",scores:[{score:78.68385091304332,type:"exam"},{score:90.2963101368042,type:"quiz"},{score:34.41620148042529,type:"homework"}]},{_id:5,name:"Wilburn Spiess",scores:[{score:44.87186330181261,type:"exam"},{score:25.72395114668016,type:"quiz"},{score:63.42288310628662,type:"homework"}]},{_id:6,name:"Jenette Flanders",scores:[{score:37.32285459166097,type:"exam"},{score:28.32634976913737,type:"quiz"},{score:81.57115318686338,type:"homework"}]},{_id:7,name:"Salena Olmos",scores:[{score:90.37826509157176,type:"exam"},{score:42.48780666956811,type:"quiz"},{score:96.52986171633331,type:"homework"}]},{_id:8,name:"Daphne Zheng",scores:[{score:22.13583712862635,type:"exam"},{score:14.63969941335069,type:"quiz"},{score:75.94123677556644,type:"homework"}]},{_id:9,name:"Sanda Ryba",scores:[{score:97.00509953654694,type:"exam"},{score:97.80449632538915,type:"quiz"},{score:25.27368532432955,type:"homework"}]},{_id:10,name:"Denisha Cast",scores:[{score:45.61876862259409,type:"exam"},{score:98.35723209418343,type:"quiz"},{score:55.90835657173456,type:"homework"}]},{_id:11,name:"Marcus Blohm",scores:[{score:78.42617835651868,type:"exam"},{score:82.58372817930675,type:"quiz"},{score:87.49924733328717,type:"homework"}]},{_id:12,name:"Quincy Danaher",scores:[{score:54.29841278520669,type:"exam"},{score:85.61270164694737,type:"quiz"},{score:80.40732356118075,type:"homework"}]}]}},[[114,1,2]]]);
//# sourceMappingURL=main.711fd1b3.chunk.js.map