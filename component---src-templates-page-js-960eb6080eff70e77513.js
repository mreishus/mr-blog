(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return c});var n=a(0),r=a.n(n),o=a(197),i=a(198);var l=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title;return r.a.createElement(o.a,{location:this.props.location,title:e},r.a.createElement(i.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))},n}(r.a.Component);e.default=l;var c="3108381546"},196:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var n=a(201),r=new(a.n(n).a)({title:"My Theme",baseFontSize:"15px",baseLineHeight:1.6,scaleRatioOLD:1.7333,scaleRatio:2,headerFontFamily:["Libre Baskerville","Georgia","serif"],bodyFontFamily:["Libre Baskerville","Georgia","serif"],headerColor:"hsla(0,0%,0%,0.87)",bodyColor:"hsla(0,0%,0%,0.78)",headerWeight:400,bodyWeight:400,boldWeight:"bold",googleFonts:[{name:"Libre Baskerville",styles:["400","700"]}]});var o=r.rhythm,i=r.scale},197:function(t,e,a){"use strict";a(17);var n=a(0),r=a.n(n),o=a(89),i=a(196);a(190);var l=function(){return r.a.createElement("nav",null,r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/about"},"About"))))},c=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,c=e.children;return t="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(i.b)(1.5),{marginBottom:Object(i.a)(1.5),marginTop:0})},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(28),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("header",null,r.a.createElement(l,null),t),r.a.createElement("main",null,c),r.a.createElement("footer",null,"© ",(new Date).getFullYear()))},n}(r.a.Component);e.a=c},198:function(t,e,a){"use strict";var n=a(199),r=a(0),o=a.n(r),i=a(200),l=a.n(i);function c(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,c=n.data.site,s=e||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},199:function(t){t.exports={data:{site:{siteMetadata:{title:"MatthewReishus.com",description:"Personal blog site.",author:"Matthew Reishus"}}}}}}]);
//# sourceMappingURL=component---src-templates-page-js-960eb6080eff70e77513.js.map