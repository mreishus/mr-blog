(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(t,e,a){"use strict";a.r(e);a(18),a(35),a(37),a(17);var A=a(0),n=a.n(A),r=a(89),o=a(199),i=a.n(o),l=a(207),s=a(195),c=function(){l.data;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,"Matthew Reishus.")))},p=a(196),u=a(197);a.d(e,"pageQuery",function(){return d});var m=function(t){var e,a;function A(){return t.apply(this,arguments)||this}a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=A.prototype;return o.componentDidMount=function(){var t,e;(t="MathJax",void 0===e&&(e=300),new Promise(function(a,A){var n=0;!function r(o){setTimeout(function(){return n+=o,void 0!==window[t]?a():n>=1e3*e?A({message:"Timeout"}):void r(2*o)},o)}(30)})).then(function(){top.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0,skipTags:["script","noscript","style","textarea","pre"],TeX:{equationNumbers:{autoNumber:"AMS"},extensions:["AMSmath.js","AMSsymbols.js"]}}})}),null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},o.componentDidUpdate=function(){null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},o.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,A=a.previous,o=a.next;return n.a.createElement(p.a,{location:this.props.location,title:e},n.a.createElement(u.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),n.a.createElement(i.a,null,n.a.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML",async:!0})),n.a.createElement("h1",{style:{marginTop:Object(s.a)(1),marginBottom:0}},t.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1)})},t.frontmatter.date),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),n.a.createElement(c,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,A&&n.a.createElement(r.Link,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),n.a.createElement("li",null,o&&n.a.createElement(r.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},A}(n.a.Component),d=(e.default=m,"3654438753")},195:function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return o});var A=a(200),n=new(a.n(A).a)({title:"My Theme",baseFontSize:"15px",baseLineHeight:1.6,scaleRatioOLD:1.7333,scaleRatio:2,headerFontFamily:["Libre Baskerville","Georgia","serif"],bodyFontFamily:["Libre Baskerville","Georgia","serif"],headerColor:"hsla(0,0%,0%,0.87)",bodyColor:"hsla(0,0%,0%,0.78)",headerWeight:400,bodyWeight:400,boldWeight:"bold",googleFonts:[{name:"Libre Baskerville",styles:["400","700"]}]});var r=n.rhythm,o=n.scale},196:function(t,e,a){"use strict";a(18);var A=a(0),n=a.n(A),r=a(89),o=a(195);a(189);var i=function(){return n.a.createElement("nav",null,n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement(r.Link,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(r.Link,{to:"/about"},"About"))))},l=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t,e=this.props,a=e.location,A=e.title,l=e.children;return t="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},n.a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(28),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,n.a.createElement(i,null),t),n.a.createElement("main",null,l),n.a.createElement("footer",null,"© ",(new Date).getFullYear()))},A}(n.a.Component);e.a=l},197:function(t,e,a){"use strict";var A=a(198),n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(199),s=a.n(l);function c(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,i=A.data.site,l=e||i.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},e.a=c},198:function(t){t.exports={data:{site:{siteMetadata:{title:"MatthewReishus.com",description:"Personal blog site.",author:"Matthew Reishus"}}}}},207:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Matthew Reishus",social:{twitter:""}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0d69f044a5e3fc0f825e.js.map