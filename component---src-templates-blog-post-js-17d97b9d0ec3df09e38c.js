(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(t,e,a){"use strict";a.r(e);a(32);var A=a(9),n=a.n(A),i=(a(184),a(44),a(45),a(0)),r=a.n(i),o=a(66),l=a(181),s=a.n(l),c=a(190),p=a(177),u=function(){c.data;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(p.a)(2.5)}},r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,"Matthew Reishus.")))},m=a(178),d=a(179);a.d(e,"pageQuery",function(){return h});var E=function(t){function e(){return t.apply(this,arguments)||this}n()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t,e;(t="MathJax",void 0===e&&(e=300),new Promise(function(a,A){var n=0;!function i(r){setTimeout(function(){return n+=r,void 0!==window[t]?a():n>=1e3*e?A({message:"Timeout"}):void i(2*r)},r)}(30)})).then(function(){top.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0,skipTags:["script","noscript","style","textarea","pre"],TeX:{equationNumbers:{autoNumber:"AMS"},extensions:["AMSmath.js","AMSsymbols.js"]}}})}),null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},a.componentDidUpdate=function(){null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},a.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,A=a.previous,n=a.next;return r.a.createElement(m.a,{location:this.props.location,title:e},r.a.createElement(d.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement(s.a,null,r.a.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML",async:!0})),r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement(u,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,A&&r.a.createElement(o.Link,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(o.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},e}(r.a.Component),h=(e.default=E,"3654438753")},177:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r});var A=a(182),n=new(a.n(A).a)({title:"My Theme",baseFontSize:"15px",baseLineHeight:1.6,scaleRatioOLD:1.7333,scaleRatio:2,headerFontFamily:["Libre Baskerville","Georgia","serif"],bodyFontFamily:["Libre Baskerville","Georgia","serif"],headerColor:"hsla(0,0%,0%,0.87)",bodyColor:"hsla(0,0%,0%,0.78)",headerWeight:400,bodyWeight:400,boldWeight:"bold",googleFonts:[{name:"Libre Baskerville",styles:["400","700"]}]});var i=n.rhythm,r=n.scale},178:function(t,e,a){"use strict";a(32);var A=a(9),n=a.n(A),i=a(0),r=a.n(i),o=a(66),l=a(177),s=(a(171),function(){return r.a.createElement("nav",null,r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/about"},"About"))))}),c=function(t){function e(){return t.apply(this,arguments)||this}return n()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,A=e.title,n=e.children;return t="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(28),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},r.a.createElement("header",null,r.a.createElement(s,null),t),r.a.createElement("main",null,n),r.a.createElement("footer",null,"© ",(new Date).getFullYear()))},e}(r.a.Component);e.a=c},179:function(t,e,a){"use strict";var A=a(180),n=a(0),i=a.n(n),r=a(1),o=a.n(r),l=a(181),s=a.n(l);function c(t){var e=t.description,a=t.lang,n=t.meta,r=t.title,o=A.data.site,l=e||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=c},180:function(t){t.exports={data:{site:{siteMetadata:{title:"MatthewReishus.com",description:"Personal blog site.",author:"Matthew Reishus"}}}}},184:function(t,e,a){var A=a(13).f,n=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in n||a(12)&&A(n,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},190:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Matthew Reishus",social:{twitter:""}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-17d97b9d0ec3df09e38c.js.map