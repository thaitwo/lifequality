(this.webpackJsonpplanet=this.webpackJsonpplanet||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(45),r=t.n(i),c=t(15),s=t(14),o=t(25),u=t(6),m=t(7),d=t(9),E=t(8),h=t(21),v=t(10);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(t,!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N={city:"",suggestions:[]},g=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state=f({},N),t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=this;this.setState(Object(o.a)({},e.target.name,e.target.value)),fetch("https://api.teleport.org/api/cities/?search=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){a.setState({suggestions:e._embedded["city:search-results"]})}))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleSuggestionSelect",value:function(e){var a=this.state.suggestions.find((function(a){return e===a.matching_full_name}))._links["city:item"].href.split("geonameid:")[1].split("/")[0];this.setState(f({},N)),this.props.history.push("".concat("/city","/").concat(a))}},{key:"renderSuggestions",value:function(){var e=this,a=this.state,t=a.city,n=a.suggestions;if(n&&""!==t)return n.slice(0,10).map((function(a,t){var n=a.matching_full_name;return l.a.createElement("li",{key:t,onClick:function(){return e.handleSuggestionSelect(n)}},n)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"search-input",name:"city",onChange:this.handleChange,value:this.state.city}),l.a.createElement("ul",{className:"search-suggestions"},this.renderSuggestions()))}}]),a}(l.a.Component),b=Object(s.e)(g),S=function(){return l.a.createElement("div",{className:"topnav-container"},l.a.createElement("div",{className:"topnav-content"},l.a.createElement(c.b,{to:"/",className:"topnav-logo"},l.a.createElement("h2",null,"Life Quality")),l.a.createElement(b,null),l.a.createElement("ul",{className:"topnav-menu"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"},"About")))))},y=function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},"About"),l.a.createElement("p",{className:"text-body"},"You can search cities around the world and see the life quality measurements for that city."))},A=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome to Life Quality"))},I=t(50),O=t(12),T=t.n(O),x=t(48),D=t.n(x),k=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={categories:[],scores:[]},t.chart=null,t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){if(e.scores!==this.props.scores){var a={title:{text:void 0},chart:{renderTo:"uaScoresChart",type:"bar"},xAxis:{categories:this.props.scores.map((function(e){return e.name})),lineWidth:0},yAxis:{title:{text:null},gridLineWidth:0,visible:!1},plotOptions:{series:{pointPadding:0}},series:[{borderRadius:4,data:this.props.scores.map((function(e){return parseInt(e.score_out_of_10)})),color:"#66BB6A",pointWidth:20,showInLegend:!1}],credits:{enabled:!1}};this.chart=new T.a.chart(a)}}},{key:"renderSummary",value:function(){var e=this.props.summary;if(e)return D()(e)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},"Life Quality"),l.a.createElement("div",{className:"ua-scores-container"},l.a.createElement("div",{className:"ua-scores-summary"},this.renderSummary()),l.a.createElement("div",{id:"uaScoresChart",style:L})))}}]),a}(l.a.Component),L={height:"600px",width:"400px"},P=k,j=t(20),_=t.n(j),R={chart:{renderTo:"uaSalariesChart",type:"columnrange",inverted:!0},accessibility:{description:"A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius."},title:{text:null},xAxis:{categories:null},yAxis:{title:{text:null}},tooltip:{valuePrefix:"$",valueSuffix:"K"},plotOptions:{columnrange:{dataLabels:{enabled:!0,format:"{y}K"}}},legend:{enabled:!1},series:[{name:"Salary",data:null,borderRadius:4,pointWidth:18}],credits:{enabled:!1}};_()(T.a);var C=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={jobTitles:null},t.chart=null,t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){if(e.salaries!==this.props.salaries){var a=this.props.salaries.map((function(e){return e.job.title})),t=this.props.salaries.map((function(e){return[Math.round(parseInt(e.salary_percentiles.percentile_25)/1e3),Math.round(parseInt(e.salary_percentiles.percentile_75)/1e3)]}));R.xAxis.categories=a,R.series[0].data=t,this.chart=new T.a.chart(R)}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},"Salaries"),l.a.createElement("p",{className:"text-body"},"Ranges are from 25th to 75th percentiles."),l.a.createElement("div",{id:"uaSalariesChart",style:w}))}}]),a}(l.a.Component),w={height:"1200px",width:"100%"},M=C,G=t(49),z=t(2),H=t(3),U=function(e,a){return e.some((function(e){return e.id===a}))},B=function(e){return Math.round(1.8*e+32)};_()(T.a),G(T.a);var Y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={avgDayLength:0},t.chart=null,t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"renderData",value:function(){var e=this.props.data;if(e){var a="",t=U(e,"WEATHER-AV-NUMBER-RAINY-DAYS"),n=(U(e,"WEATHER-AV-POSSIBILITY-SUNSHINE"),e.find((function(e){return"WEATHER-TYPE"===e.id}))),i=e.find((function(e){return"WEATHER-AV-DAY-LENGTH"===e.id})),r=e.find((function(e){return"WEATHER-AVERAGE-HIGH"===e.id})),c=e.find((function(e){return"WEATHER-AVERAGE-LOW"===e.id})),s=t?e.find((function(e){return"WEATHER-AV-NUMBER-RAINY-DAYS"===e.id})):"";return t&&(a=l.a.createElement("div",null,l.a.createElement("p",{className:"text-subheader"},"Average Rainy Days Per Year"),l.a.createElement("div",{className:"climate-iconData-wrapper"},l.a.createElement(z.a,{className:"icon-rain iconSize-medium",icon:H.e}),l.a.createElement("div",{className:"text-header"},s.float_value)))),l.a.createElement("div",null,l.a.createElement("div",{className:"climate-weatherType"},l.a.createElement("p",{className:"text-subheader"},n.label),l.a.createElement("div",null,n.string_value)),l.a.createElement("div",{className:"climate-data-wrapper"},l.a.createElement("div",null,l.a.createElement("p",{className:"text-subheader"},i.label),l.a.createElement("div",{className:"climate-iconData-wrapper"},l.a.createElement(z.a,{className:"icon-sun iconSize-medium",icon:H.j}),l.a.createElement("div",{className:"text-header"},i.float_value))),a,l.a.createElement("div",null,l.a.createElement("p",{className:"text-subheader"},"Average High Temperature"),l.a.createElement("div",{className:"climate-iconData-wrapper"},l.a.createElement(z.a,{className:"icon-tempHigh iconSize-medium",icon:H.l}),l.a.createElement("div",{className:"text-header"},B(Number(r.string_value)),"\xb0F"))),l.a.createElement("div",null,l.a.createElement("p",{className:"text-subheader"},"Average Low Temperature"),l.a.createElement("div",{className:"climate-iconData-wrapper"},l.a.createElement(z.a,{className:"icon-tempLow iconSize-medium",icon:H.m}),l.a.createElement("div",{className:"text-header"},B(Number(c.string_value)),"\xb0F")))))}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},this.props.label),this.renderData())}}]),a}(l.a.Component),F=[l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-red"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.a})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-brown"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.c})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-tan"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.h})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-blue"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.n})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-purple"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.i})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-yellow"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.b})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-teal"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.d})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-green"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.f})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-amber"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.k})),l.a.createElement("div",{className:"icon-stackCircle is-small iconStack-orange"},l.a.createElement(z.a,{className:"iconSize-small",icon:H.o}))],W=function(e){function a(e){return Object(u.a)(this,a),Object(d.a)(this,Object(E.a)(a).call(this,e))}return Object(v.a)(a,e),Object(m.a)(a,[{key:"renderData",value:function(){var e=this.props.data;if(e)return e.slice(1).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("div",{className:"costLiving-iconData-wrapper"},F[a],l.a.createElement("div",null,e.label)),l.a.createElement("div",{className:"costLiving-cost"},"$",e.currency_dollar_value.toFixed(2)))}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},this.props.label),l.a.createElement("div",{className:"text-subheader"},"Daily / Monthly Expenses"),l.a.createElement("ul",{className:"costLiving-wrapper"},this.renderData()))}}]),a}(l.a.Component),K=function(e){var a=e.label,t=e.data,n=t?t.find((function(e){return"STARTUP-JOBS-AVAILABLE"===e.id})):"",i=t?t.find((function(e){return"STARTUP-SALARIES-DETAIL"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},a),l.a.createElement("div",null,l.a.createElement("div",{className:"text-subheader"},n.label),l.a.createElement("div",null,n.int_value)),l.a.createElement("div",null,l.a.createElement("div",{className:"text-subheader"},i.label),l.a.createElement("div",null,i.currency_dollar_value)))},V=function(e){var a=e.label,t=e.data,n=t?t.find((function(e){return"PISA-DETAIL-HAPPINESS"===e.id})):"",i=(t&&t.find((function(e){return"PISA-RANKING"===e.id})),t?t.find((function(e){return"PISA-DETAIL-MATH-MEAN-SCORES"===e.id})):""),r=t?t.find((function(e){return"PISA-DETAIL-READING-MEAN-SCORES"===e.id})):"",c=t?t.find((function(e){return"PISA-DETAIL-SCIENCE-MEAN-SCORES"===e.id})):"",s=t?t.find((function(e){return"UNIVERSITIES-BEST-RANKED-NAME"===e.id})):"",o=t?t.find((function(e){return"UNIVERSITIES-BEST-RANKED-RANK"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},a),l.a.createElement("div",{className:"education-wrapper"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"text-subheader"},"Percent of Happy High School Students"),l.a.createElement("div",{className:"education-happinessPercent"},l.a.createElement("div",{className:"text-header"},parseFloat(100*n.percent_value).toFixed(0),"%"))),l.a.createElement("div",{className:"block"},l.a.createElement("div",{className:"text-subheader"},"Best University & Ranking"),l.a.createElement("div",{className:"education-bestUni-wrapper card fill-black"},l.a.createElement("div",{className:"text-subheader no-margin-bottom"},"#",o.int_value),l.a.createElement("div",{className:"text-subheader no-margin-bottom"},s.string_value)))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"text-subheader"},"Average PISA Scores (High School)"),l.a.createElement("p",null,"The Program for International Student Assessment (PISA) is an international assessment that measures 15-year-old students' reading, mathematics, and science literacy every three years. Scores are reported on a scale from 0 to 1,000."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://nces.ed.gov/surveys/pisa/",target:"_blank"},"Learn more about PISA")),l.a.createElement("ul",{className:"education-pisaScore-list"},l.a.createElement("li",null,l.a.createElement("h4",{className:"is-emphasized is-sublte"},"Subject"),l.a.createElement("h4",{className:"is-emphasized is-sublte"},"PISA Score")),l.a.createElement("li",null,l.a.createElement("h4",{className:"education-subject"},"Math"),l.a.createElement("p",{className:"is-emphasized"},Math.round(i.float_value).toFixed(0))),l.a.createElement("li",null,l.a.createElement("h4",{className:"education-subject"},"Reading"),l.a.createElement("p",{className:"is-emphasized"},Math.round(r.float_value).toFixed(0))),l.a.createElement("li",null,l.a.createElement("h4",{className:"education-subject"},"Science"),l.a.createElement("p",{className:"is-emphasized"},Math.round(c.float_value).toFixed(0))))))))},J=function(e){e.label;var a=e.data,t=a?a.find((function(e){return"APARTMENT-RENT-LARGE"===e.id})):"",n=a?a.find((function(e){return"APARTMENT-RENT-MEDIUM"===e.id})):"",i=a?a.find((function(e){return"APARTMENT-RENT-SMALL"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-subheader"},"Housing Costs"),l.a.createElement("ul",{className:"housing-cards-wrapper"},l.a.createElement("li",null,l.a.createElement("div",{className:"icon-stack-circle is-large fill-blue"},l.a.createElement(z.a,{className:"icon-home iconSize-large",icon:H.g})),l.a.createElement("div",null,l.a.createElement("div",{className:"housing-price"},"$",t.currency_dollar_value),l.a.createElement("div",{className:"housing-description"},t.label))),l.a.createElement("li",null,l.a.createElement("div",{className:"icon-stack-circle is-medium fill-blue"},l.a.createElement(z.a,{className:"icon-home iconSize-medium",icon:H.g})),l.a.createElement("div",null,l.a.createElement("div",{className:"housing-price"},"$",n.currency_dollar_value),l.a.createElement("div",{className:"housing-description"},n.label))),l.a.createElement("li",null,l.a.createElement("div",{className:"icon-stack-circle is-small fill-blue"},l.a.createElement(z.a,{className:"icon-home iconSize-small",icon:H.g})),l.a.createElement("div",null,l.a.createElement("div",{className:"housing-price"},"$",i.currency_dollar_value),l.a.createElement("div",{className:"housing-description"},i.label)))))},$=function(e){var a=e.label,t=e.data,n=t?t.find((function(e){return"GUN-DEATH-RATE"===e.id})):"",i=t?t.find((function(e){return"GUN-OWNERSHIP"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},a),l.a.createElement("div",{className:"safety-cards-wrapper"},l.a.createElement("div",{className:"safety-gunDeaths"},l.a.createElement("div",null,l.a.createElement("div",{className:"text-subheader no-margin-bottom"},"Gun-Related Deaths"),l.a.createElement("p",null,"Per 100K People / Year")),l.a.createElement("div",{className:"text-header"},parseFloat(n.int_value).toFixed(1))),l.a.createElement("div",{className:"safety-gunOwnage"},l.a.createElement("div",{className:"text-subheader no-margin-bottom"},"Guns Per 100 People"),l.a.createElement("div",{className:"text-header"},parseFloat(i.int_value).toFixed(1)))))},q=function(e){var a=e.data,t=a?a.find((function(e){return"LGBT-DETAIL-HOMOSEXUALITY"===e.id})):"",n=a?a.find((function(e){return"LGBT-DETAIL-ADOPTION"===e.id})):"",i=a?a.find((function(e){return"LGBT-DETAIL-DISCRIMINATION"===e.id})):"",r=a?a.find((function(e){return"LGBT-DETAIL-CHANGING-GENDER"===e.id})):"",c=a?a.find((function(e){return"LGBT-DETAIL-DONATING-BLOOD"===e.id})):"",s=a?a.find((function(e){return"LGBT-DETAIL-MARRIAGE"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},"LGBT Rights"),l.a.createElement("ul",{className:"lgbt-list"},l.a.createElement("li",null,l.a.createElement("div",null,"Homosexuality"),l.a.createElement("div",{className:"is-emphasized"},t.string_value)),l.a.createElement("li",null,l.a.createElement("div",null,"Marriage"),l.a.createElement("div",{className:"is-emphasized"},s.string_value)),l.a.createElement("li",null,l.a.createElement("div",null,"Adoption"),l.a.createElement("div",{className:"is-emphasized"},n.string_value)),l.a.createElement("li",null,l.a.createElement("div",null,"Discrimination"),l.a.createElement("div",{className:"is-emphasized"},i.string_value)),l.a.createElement("li",null,l.a.createElement("div",null,"Gender Change"),l.a.createElement("div",{className:"is-emphasized"},r.string_value)),l.a.createElement("li",null,l.a.createElement("div",null,"Blood Donation"),l.a.createElement("div",{className:"is-emphasized"},c.string_value))))},Q=function(e){var a=e.data,t=e.population,n=e.language,i=a?a.find((function(e){return"ELDERLY-PEOPLE"===e.id})):"",r=a?a.find((function(e){return"LIFE-EXPECTANCY"===e.id})):"",c=a?a.find((function(e){return"MEDIAN-AGE"===e.id})):"",s=(a&&a.find((function(e){return"UNEMPLOYMENT-RATE"===e.id})),t?t.find((function(e){return"POPULATION-SIZE"===e.id})):""),o=t?t.find((function(e){return"POPULATION-UA-DENSITY"===e.id})):"",u=n?n.find((function(e){return"SPOKEN-LANGUAGES"===e.id})):"",m=n?n.find((function(e){return"ENGLISH-SKILLS-DETAIL"===e.id})):"";return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-header"},"People"),l.a.createElement("div",{className:"people-list"},l.a.createElement("div",null,l.a.createElement("h4",null,(1e6*s.float_value).toString()),l.a.createElement("p",null,"Population")),l.a.createElement("div",null,l.a.createElement("h4",null,Math.round(o.float_value).toString()),l.a.createElement("div",null,l.a.createElement("p",null,"Population Density"),l.a.createElement("span",{className:"text-caption"},"People Per Square Kilometer"))),l.a.createElement("div",null,l.a.createElement("h4",null,Math.round(1e4*i.percent_value).toString(),"%"),l.a.createElement("p",null,"Elderly People (65+)")),l.a.createElement("div",null,l.a.createElement("h4",null,r.float_value," yrs"),l.a.createElement("p",null,"Life Expectancy at Birth")),l.a.createElement("div",null,l.a.createElement("h4",null,c.float_value),l.a.createElement("p",null,"Median Age")),l.a.createElement("div",null,l.a.createElement("h4",null,u.string_value),l.a.createElement("p",null,"Spoken Language")),l.a.createElement("div",null,l.a.createElement("h4",null,m.int_value),l.a.createElement("p",null,"English Proficiency"))))},X=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={cityId:t.props.match.params.cityId,cityData:{},uaSummary:"",uaScores:[],uaSalaries:[],climate:{},costOfLiving:{},jobMarket:{},education:{},housing:{},safety:{},lgbt:{},people:{},uaPopulation:{},language:{}},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,a){a.cityId!==this.state.cityId&&this.fetchData()}},{key:"fetchData",value:function(){var e=this,a=this.state.cityId;fetch("https://api.teleport.org/api/cities/geonameid:".concat(a)).then((function(e){return e.json()})).then((function(a){var t=a._links["city:urban_area"].href;return e.setState({cityData:a}),Promise.all([fetch("".concat(t,"scores")),fetch("".concat(t,"salaries")),fetch("".concat(t,"details"))])})).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(a){var t=Object(I.a)(a,3),n=t[0],l=t[1],i=t[2],r=i.categories;console.log(r);var c=r.find((function(e){return"CLIMATE"===e.id})),s=r.find((function(e){return"COST-OF-LIVING"===e.id})),o=r.find((function(e){return"JOB-MARKET"===e.id})),u=r.find((function(e){return"EDUCATION"===e.id})),m=r.find((function(e){return"HOUSING"===e.id})),d=r.find((function(e){return"SAFETY"===e.id})),E=r.find((function(e){return"MINORITIES"===e.id})),h=r.find((function(e){return"INTERNAL"===e.id})),v=r.find((function(e){return"CITY-SIZE"===e.id})),p=r.find((function(e){return"LANGUAGE"===e.id}));e.setState({uaSummary:n.summary,uaScores:n.categories,uaSalaries:l.salaries,uaDetails:i.categories,climate:c,costOfLiving:s,jobMarket:o,education:u,housing:m,safety:d,lgbt:E,people:h,uaPopulation:v,language:p})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"section"},l.a.createElement(Z,{name:this.state.cityData.full_name,population:this.state.cityData.population})),l.a.createElement("div",{className:"section"},l.a.createElement(P,{summary:this.state.uaSummary,scores:this.state.uaScores})),l.a.createElement("div",{className:"bg-black"},l.a.createElement("div",{className:"section"},l.a.createElement(Y,{label:this.state.climate.label,data:this.state.climate.data}))),l.a.createElement("div",{className:"section"},l.a.createElement(W,{label:this.state.costOfLiving.label,data:this.state.costOfLiving.data}),l.a.createElement(J,{label:this.state.housing.label,data:this.state.housing.data})),l.a.createElement("div",{className:"bg-black"},l.a.createElement("div",{className:"section"},l.a.createElement(K,{label:this.state.jobMarket.label,data:this.state.jobMarket.data}))),l.a.createElement("div",{className:"section"},l.a.createElement(V,{label:this.state.education.label,data:this.state.education.data})),l.a.createElement("div",{className:"bg-blue"},l.a.createElement("div",{className:"section"},l.a.createElement($,{label:this.state.safety.label,data:this.state.safety.data}))),l.a.createElement("div",{className:"section"},l.a.createElement(q,{data:this.state.lgbt.data})),l.a.createElement("div",{className:"bg-orange"},l.a.createElement("div",{className:"section"},l.a.createElement(Q,{data:this.state.people.data,population:this.state.uaPopulation.data,language:this.state.language.data}))),l.a.createElement("div",{className:"section"},l.a.createElement(M,{salaries:this.state.uaSalaries})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.match.params.cityId!==a.cityId?{cityId:e.match.params.cityId,cityData:{}}:null}}]),a}(l.a.Component),Z=function(e){var a=e.name,t=e.population;return l.a.createElement("div",null,l.a.createElement("p",{className:"text-header"},a),l.a.createElement("p",{className:"text-subheader"},"Population: ",t))},ee=Object(s.e)(X),ae=function(){return l.a.createElement(c.a,null,l.a.createElement(S,null),l.a.createElement("div",{className:"app-container"},l.a.createElement(s.a,{exact:!0,path:"/lifequality/",component:A}),l.a.createElement(s.a,{path:"/lifequality/about",component:y}),l.a.createElement(s.a,{path:"/lifequality"+"".concat("/city","/:cityId"),component:ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(105);r.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,a,t){e.exports=t(106)},84:function(e,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.2ba594d2.chunk.js.map