(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return m});var a=n(9),r=n.n(a),i=n(0),o=n.n(i),l=n(178),s=n(179),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))},e}(o.a.Component);e.default=c;var m="3108381546"},177:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var a=n(182),r=new(n.n(a).a)({title:"My Theme",baseFontSize:"15px",baseLineHeight:1.6,scaleRatioOLD:1.7333,scaleRatio:2,headerFontFamily:["Libre Baskerville","Georgia","serif"],bodyFontFamily:["Libre Baskerville","Georgia","serif"],headerColor:"hsla(0,0%,0%,0.87)",bodyColor:"hsla(0,0%,0%,0.78)",headerWeight:400,bodyWeight:400,boldWeight:"bold",googleFonts:[{name:"Libre Baskerville",styles:["400","700"]}]});var i=r.rhythm,o=r.scale},178:function(t,e,n){"use strict";n(32);var a=n(9),r=n.n(a),i=n(0),o=n.n(i),l=n(66),s=n(177),c=(n(171),function(){return o.a.createElement("nav",null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/about"},"About"))))}),m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(28),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("header",null,o.a.createElement(c,null),t),o.a.createElement("main",null,r),o.a.createElement("footer",null,"© ",(new Date).getFullYear()))},e}(o.a.Component);e.a=m},179:function(t,e,n){"use strict";var a=n(180),r=n(0),i=n.n(r),o=n(1),l=n.n(o),s=n(181),c=n.n(s);function m(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,l=a.data.site,s=e||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=m},180:function(t){t.exports={data:{site:{siteMetadata:{title:"MatthewReishus.com",description:"Personal blog site.",author:"Matthew Reishus"}}}}}}]);
//# sourceMappingURL=component---src-templates-page-js-6ceaf907e0a5a507e92a.js.map