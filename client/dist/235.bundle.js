(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[235],{2379:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(7294),a=n.n(r),l=n(6546);const i=function(e){var t={height:"100%",width:"".concat(e.ratingBreakdown,"%"),backgroundColor:"#4d4d4d"};return a().createElement("div",{style:{whiteSpace:"nowrap"}},a().createElement("div",{style:{display:"inline-block",paddingRight:"10px",textDecoration:"underline"}},e.ratingStar," star:"),a().createElement("div",{style:{display:"inline-block",height:"7px",width:"80%",backgroundColor:"#e4e5e9",border:"solid 1px #e4e5e9"}},a().createElement("div",{style:t})))};var s=n(3750);const o=function(e){var t={height:"10px",width:"10px",paddingLeft:"".concat(100*Number(Number(e.scale)/5).toFixed(2),"%"),inlineAlign:"top"};return a().createElement("div",{style:{height:"80px",width:"100%",marginBottom:"20px",marginTop:"20px"}},a().createElement("div",null,e.character),a().createElement("div",{style:{height:"8px",width:"100%",backgroundColor:"#e4e5e9",marginTop:"10px",marginBottom:"10px"}},a().createElement("div",null,a().createElement(s.Ejc,{style:t}))),a().createElement("div",{style:{width:"100%",fontSize:"16px"}},a().createElement("div",{style:{float:"left"}},e.range[0]),a().createElement("div",{style:{float:"right"}},e.range[4])))};var c=n(9669),u=n.n(c);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=a().createContext({});function h(e){var t=m((0,r.useState)([]),2),n=t[0],l=t[1],i=m((0,r.useState)({characteristicsRange:{Size:["Too small","1/2 a size too small","Perfect","1/2 a size too big","Too big"],Width:["Too narrow","Slightly narrow","Perfect","Slightly wide","Too wide"],Comfort:["Uncomfortable","Slightly uncomfortable","OK","comfortable","Perfect"],Quality:["Poor","Below average","What I expected","Pretty great","Perfect"],Length:["Runs short","Runs slightly short","Perfect","Runs slightly long","Runs long"],Fit:["Runs tight","Runs slightly tight","Perfect","Runs slightly long","Runs long"]}}),2),s=i[0],o=i[1];return a().createElement(p.Provider,{value:{reviewList:n,setReviewList:l,reviewMeta:s,setReviewMeta:o}},e.children)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=function(e){var t=e.productId,n=(0,r.useContext)(p);return(0,r.useEffect)((function(){u().get("/reviews/".concat(t,"/meta")).then((function(e){e.data.reveiwTotal=Number(e.data.recommended.true||"0")+Number(e.data.recommended.false||"0"),e.data.avgRating=parseFloat((1*Number(e.data.ratings[1]||"0")+2*Number(e.data.ratings[2]||"0")+3*Number(e.data.ratings[3]||"0")+4*Number(e.data.ratings[4]||"0")+5*Number(e.data.ratings[5]||"0"))/e.data.reveiwTotal).toFixed(1),e.data.recommended=Math.round(Number(e.data.recommended.true)/e.data.reveiwTotal*100),e.data.ratingBreakdown=[Math.round(Number(e.data.ratings[5]||"0")/e.data.reveiwTotal*100),Math.round(Number(e.data.ratings[4]||"0")/e.data.reveiwTotal*100),Math.round(Number(e.data.ratings[3])/e.data.reveiwTotal*100),Math.round(Number(e.data.ratings[2]||"0")/e.data.reveiwTotal*100),Math.round(Number(e.data.ratings[1]||"0")/e.data.reveiwTotal*100)],n.setReviewMeta(f(f({},n.reviewMeta),e.data))}))}),[]),a().createElement("div",null,a().createElement("h2",{className:"list-title"},"RATINGS & REVIEWS"),a().createElement("div",{style:{whiteSpace:"nowrap"}},a().createElement("h1",{style:{display:"inline-block",fontWeight:"bold"}}," ",n.reviewMeta.avgRating," "),a().createElement("div",{style:{display:"inline-block",verticalAlign:"top",padding:"20px"}},a().createElement(l.Z,{rating:n.reviewMeta.avgRating}))),a().createElement("div",null,n.reviewMeta.recommended,"% of reviewer recommand this product"),a().createElement("br",null),a().createElement("div",null,a().createElement("div",{style:{lineHeight:"2.3",padding:"0px"}},a().createElement("div",null,n.reviewMeta.ratingBreakdown?n.reviewMeta.ratingBreakdown.map((function(e,t){return a().createElement(i,{ratingBreakdown:e,key:t,ratingStar:5-t})})):null))),a().createElement("br",null),a().createElement("div",null,n.reviewMeta.characteristics?Object.keys(n.reviewMeta.characteristics).map((function(e,t){return a().createElement(o,{character:e,scale:n.reviewMeta.characteristics[e].value,range:n.reviewMeta.characteristicsRange[e],key:t})})):null))};var v=n(381),b=n.n(v);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const k=function(e){var t=e.darkMode,n=e.review,i=w((0,r.useState)(n.helpfulness),2),s=i[0],o=i[1],c=w((0,r.useState)(!0),2),m=c[0],d=c[1],p={height:"auto",width:"auto",lineHeight:"1.8",display:m?"block":"none",marginTop:"20px"},h={display:"inline-block",textDecoration:"underline",marginLeft:"5px",border:"transparent",backgroundColor:"transparent",fontSize:"16px"},j={display:"inline-block",textDecoration:"underline",marginLeft:"5px",border:"transparent",backgroundColor:"transparent",fontSize:"16px",color:"white"},f=b()(n.date).format("LL");return a().createElement("div",{style:p},a().createElement("div",{style:{whiteSpace:"nowrap",marginTop:"10px"}},a().createElement("div",{style:{display:"inline-block"}},a().createElement(l.Z,{rating:n.rating})),a().createElement("p",{style:{float:"right",fontSize:"16px",display:"inline-block",fontStyle:"italic",margin:"0px"}},n.reviewer_name,", ",f)),a().createElement("p",{style:{fontSize:"16px",fontWeight:"bold",marginTop:"15px"}},n.summary),a().createElement("p",{style:{overflowWrap:"break-word"}},n.body),n.recommend?a().createElement("div",{style:{marginTop:"5px"}},"✔ I recomand this product"):null,n.photos?a().createElement("div",null,n.photos.map((function(e,t){return a().createElement("img",{src:e.url,key:t,style:{height:"60px",margin:"10px"}})}))):null,n.response?a().createElement("p",{style:{backgroundColor:"lightGrey",padding:"10px",paddingLeft:"20px"}},"Response:",a().createElement("br",null),n.response):null,a().createElement("div",{style:{whiteSpace:"nowrap",marginTop:"10px"}},a().createElement("p",{style:{display:"inline-block"}},"Helpful? "),a().createElement("button",{style:t?j:h,onClick:function(){null===localStorage.getItem(n.review_id)&&u().put("/reviews/".concat(n.review_id,"/helpful")).then((function(){o(s+1),localStorage.setItem(n.review_id,!0)}))}},"Yes"),a().createElement("p",{style:{display:"inline-block",marginLeft:"5px"}},"(",s,")   │"),a().createElement("button",{style:t?j:h,value:n.review_id,onClick:function(){u().put("/reviews/".concat(n.review_id,"/report")).then((function(){d(!1)}))}},"Report ")),a().createElement("hr",{style:{marginTop:"10px",orderBottomWidth:"1px",color:"#D8E1D5"}}))},x=function(e){var t=e.darkMode,n=(0,r.useContext)(p);return a().createElement("div",{style:{height:"auto",width:"100%"}},a().createElement("div",null,n.reviewList.map((function(e,n){return a().createElement(k,{review:e,key:n,darkMode:t})}))))};var S=n(8193);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const R=function(e){var t,n=e.updateStarRating,l=z((0,r.useState)(null),2),i=l[0],s=l[1],o=z((0,r.useState)(null),2),c=o[0],u=o[1],m={position:"absolute",top:0,left:0,width:"1px",height:"1px",clip:"rect(1px, 1px, 1px, 1px)"};return a().createElement("div",null,(t=Array(5),function(e){if(Array.isArray(e))return M(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||O(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,t){var r=t+1;return a().createElement("label",{key:t},a().createElement("input",{type:"radio",name:"rating",style:m,value:r,onClick:function(){return function(e){s(e),n(e)}(r)},onMouseOver:function(){return u(r)},onMouseOut:function(){return u(null)}}),a().createElement(S.pHD,{className:"star",color:r<=(c||i)?"black":"#e4e5e9",size:30,onMouseEnter:function(){return u(r)},onMouseLeave:function(){return u(null)}}))})),a().createElement("span",null,i?{1:"Poor",2:"Fair",3:"Average",4:"Good",5:"Great"}[i]:null))};var A=n(8406);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const D=function(e){var t=e.setShowAddReview,n=(e.productTitle,e.productId),l=e.darkMode,i=I((0,r.useState)(null),2),s=i[0],o=i[1],c=I((0,r.useState)(""),2),m=c[0],d=c[1],h=I((0,r.useState)(""),2),j=h[0],f=h[1],y=I((0,r.useState)(""),2),g=y[0],v=y[1],b=I((0,r.useState)(""),2),w=b[0],E=b[1],k=I((0,r.useState)(!0),2),x=k[0],z=k[1],O=I((0,r.useState)({}),2),M=O[0],N=O[1],P=I((0,r.useState)([]),2),D=P[0],L=P[1],W=I((0,r.useState)([]),2),B=W[0],_=W[1],F=(0,r.useContext)(p),U={width:"95%",padding:"10px",border:"solid grey 1px",fontSize:"16px",display:"block",fontFamily:"sans-serif"},Z=function(e){var t=e.target.name,n=e.target.value;N(C(C({},M),{},T({},t,Number(n))))};return a().createElement("div",{className:"popup-box"},a().createElement("div",{className:l?"popup-inner-dark":"popup-inner-box"},a().createElement(S.SV5,{className:"review-buttons",style:{float:"right",marginRight:"20px"},color:"grey",size:30,onClick:function(){return t(!1)}}),a().createElement("form",{onSubmit:function(e){var r={rating:s,summary:m,body:j,photos:B,name:g,email:w,recommend:x,product_id:n,characteristics:M},a=function(e){for(var t=[],n=0,r=["rating","recommend","name","email"];n<r.length;n++){var a=r[n];null!==e[a]&&""!==e[a]&&0!==e[a].length||t.push("Missing ".concat(a," in the review."))}return Object.keys(e.characteristics).length!=Object.keys(F.reviewMeta.characteristics).length&&t.push("Missing fields under characteristics."),e.summary.length>60&&t.push("Should have less than 60 characters in summary."),e.body.length>1e3&&t.push("Should have less than 1000 characters in the review body."),e.body.length<50&&t.push("Should have more than 50 characters in the review body."),e.name.length>60&&t.push("Should have less than 60 characters in nickname."),e.email&&(-1===e.email.indexOf("@")||e.email.length<=5||-1===e.email.indexOf("."))&&t.push("Should enter valid email address."),t}(r);L(a),0===a.length&&(u()({method:"post",url:"/reviews",headers:{"Content-Type":"application/json"},data:JSON.stringify(r)}).then((function(e){alert("Successfully submit the review!")})).catch((function(e){alert("Failed to submit the review.")})),t(!1)),e.preventDefault()}},a().createElement("div",{style:{height:"30px"}},a().createElement(R,{updateStarRating:o})),a().createElement("br",null),a().createElement("div",{style:{whiteSpace:"nowrap"}},a().createElement("div",{style:{display:"inline-block",marginRight:"5px"}},"Do you recommend this product? *"),a().createElement("br",null),a().createElement("div",{style:{display:"inline-block"}},a().createElement("input",{type:"radio",value:"true",name:"YN",onChange:function(){z(!0)},checked:!0})," Yes",a().createElement("input",{type:"radio",value:"false",name:"YN",onChange:function(){z(!1)}})," No")),a().createElement("br",null),a().createElement("div",{style:{whiteSpace:"nowrap"}},"Characteristics: *",a().createElement("table",null,a().createElement("tbody",null,F.reviewMeta.characteristics?Object.keys(F.reviewMeta.characteristics).map((function(e,t){return a().createElement("tr",{key:t},a().createElement("td",{style:{display:"inline-block",marginRight:"5px",fontWeight:"bold"}},e,":"),[1,2,3,4,5].map((function(t,n){return a().createElement("td",{key:n},a().createElement("input",{type:"radio",value:t,name:F.reviewMeta.characteristics[e].id,onChange:Z}),F.reviewMeta.characteristicsRange[e][n])})))})):null))),a().createElement("div",null,a().createElement("p",null,"Summary:"),a().createElement("input",{style:U,type:"text",placeholder:"Example: Best purchase ever!",value:m,name:"summary",onChange:function(e){d(e.target.value)}}),a().createElement("small",null,"Up to 60 characters")),a().createElement("div",null,a().createElement("p",null,"Review Body: *"),a().createElement("textarea",{style:U,placeholder:"Why did you like the product or not?",value:j,name:"body",onChange:function(e){return f(e.target.value)}}),a().createElement("small",null,j.length>=50?"Minimum reached":"Minimum required characters left: "+(50-j.length))),a().createElement("div",null,a().createElement("p",null,"Add Photos:"),a().createElement("input",{onChange:function(e){var t=e.target.files,n=t.length,r=[];n>5&&(n=5);for(var a=0;a<n;a++){var l=URL.createObjectURL(t[a]);r.push(l)}_(r)},type:"file",name:"upload image",multiple:!0}),B&&B.map((function(e,t){return a().createElement("img",{style:{height:"40px",margin:"5px"},key:t,src:e})}))),a().createElement("p",null),a().createElement("div",null,a().createElement("p",null,"Nickname: *"),a().createElement("input",{style:U,type:"text",placeholder:"Nick Name",value:g,name:"nickName",onChange:function(e){return v(e.target.value)}})),a().createElement("small",null,"For privacy reasons, do not use your full name or email address."),a().createElement("div",null,a().createElement("p",null,"Email: *"),a().createElement("input",{style:U,type:"text",placeholder:"Email",value:w,name:"email",onChange:function(e){return E(e.target.value)}}),a().createElement("small",null,"For authentication reasons, you will not be emailed.")),a().createElement("br",null),a().createElement("div",null,D.length>0?a().createElement("div",{style:{color:"red"}},"You must enter the following:",a().createElement("ul",null,D.map((function(e,t){return a().createElement("li",{key:t},e)}))),a().createElement("br",null)):null),a().createElement(A.Z,{eventName:"A Review is submitted",module:"Reviews"},a().createElement("input",{style:l?{height:"50px",fontSize:"16px",fontWeight:"bold",width:"200px",padding:"10px",background:"#2a2c29",color:"#f3f3f3",border:"1px solid #808080"}:{height:"50px",fontSize:"16px",fontWeight:"bold",width:"200px",padding:"10px",background:"none"},type:"submit",value:"Submit Review"})))))};function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const B=function(e){var t=e.productId,n=e.productName,l=e.darkMode,i={height:"60px",width:"200px",marginLeft:"20px",margin:"10px",padding:"10px",fontSize:"16px",fontWeight:"bold",background:"none",border:"1px solid #808080"},s={height:"60px",width:"200px",marginLeft:"20px",margin:"10px",padding:"10px",fontSize:"16px",fontWeight:"bold",background:"#2a2c29",color:"#f3f3f3",border:"1px solid #808080"},o={fontSize:"16px",fontWeight:"bold",border:"transparent",backgroundColor:"transparent",textDecoration:"underline"},c={fontSize:"16px",fontWeight:"bold",border:"transparent",backgroundColor:"transparent",textDecoration:"underline",color:"white"},m=L((0,r.useState)(1),2),d=m[0],h=m[1],j=L((0,r.useState)("revelent"),2),f=j[0],y=j[1],g=L((0,r.useState)(!1),2),v=g[0],b=g[1],w=(0,r.useContext)(p);(0,r.useEffect)((function(){E(d,f,(function(e){w.setReviewList(e.data.results),h(1)}))}),[]);var E=function(e,n,r){u().get("/reviews/".concat(t,"?page=").concat(e,"&sort=").concat(n)).then((function(e){r(e)}))};return a().createElement("div",{style:{padding:"10px",marginTop:"75px"}},a().createElement("div",{style:{margin:"10px",fontSize:"16px",fontWeight:"bold",whiteSpace:"nowrap"}},a().createElement("div",{style:{display:"inline-block"}},w.reviewMeta.reveiwTotal," reviews, sorted by  "),a().createElement("div",{style:{display:"inline-block"}},a().createElement("select",{style:l?c:o,name:"sortBy",id:"casortByrs",onChange:function(e){var t=e.target.value;E(1,t,(function(e){w.setReviewList(e.data.results),h(1),y(t)}))}},a().createElement("option",{style:l?c:o,value:"revelent"},"Revelent"),a().createElement("option",{style:l?c:o,value:"helpful"},"Helpful"),a().createElement("option",{style:l?c:o,value:"newest"},"Newest")))),a().createElement("br",null),a().createElement("div",{style:{marginLeft:"10px"}},a().createElement(x,{darkMode:l})),a().createElement("br",null),a().createElement(A.Z,{eventName:"More Review for ".concat(n," is clicked"),module:"Reviews"},a().createElement("button",{style:l?s:i,onClick:function(){E(d+1,f,(function(e){w.setReviewList(w.reviewList.concat(e.data.results)),h(d+1)}))}},"MORE REVIEWS")),a().createElement(A.Z,{eventName:"Add a Review for ".concat(n," is clicked"),module:"Reviews"},a().createElement("button",{style:l?s:i,onClick:function(){b((function(e){return!e}))}},"ADD A REVIEW +")),a().createElement("br",null),v?a().createElement(D,{darkMode:l,setShowAddReview:b,productTitle:n,productId:t}):"")},_=function(e){var t=e.productId,n=e.productName,r=e.darkMode;return a().createElement("div",{className:"reviews-container"},a().createElement(h,null,a().createElement("div",{style:{fontFamily:"sans-serif",marginTop:"40px",height:"auto"}},a().createElement("div",{id:"leftbar"},a().createElement("div",null,a().createElement(g,{productId:t}))),a().createElement("div",{id:"rightbar"},a().createElement(B,{darkMode:r,productId:t,productName:n})))))}},6546:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),a=n.n(r),l=n(6738);const i=function(e){return"".concat(e.rating/5*100,"%"),a().createElement(l.N.Consumer,null,(function(t){return a().createElement("div",{className:"star-ratings",style:t?{width:"80px",WebkitTextStroke:"1px #999",color:"#1f1e1e"}:{width:"80px"}},a().createElement("div",{className:"fill-ratings",style:t?{width:"".concat(e.rating/5*100,"%"),color:"white"}:{width:"".concat(e.rating/5*100,"%")}},a().createElement("span",null,"★★★★★")),a().createElement("div",{className:"empty-ratings"},a().createElement("span",null,"★★★★★")))}))}},6700:(e,t,n)=>{var r={"./af":2786,"./af 2":9259,"./af 2.js":9259,"./af.js":2786,"./ar":867,"./ar 2":4049,"./ar 2.js":4049,"./ar-dz":4130,"./ar-dz 2":971,"./ar-dz 2.js":971,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw 2":4308,"./ar-kw 2.js":4308,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly 2":9275,"./ar-ly 2.js":9275,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma 2":1002,"./ar-ma 2.js":1002,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa 2":6532,"./ar-sa 2.js":6532,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn 2":6310,"./ar-tn 2.js":6310,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az 2":2414,"./az 2.js":2414,"./az.js":1083,"./be":9808,"./be 2":4161,"./be 2.js":4161,"./be.js":9808,"./bg":8338,"./bg 2":8228,"./bg 2.js":8228,"./bg.js":8338,"./bm":7438,"./bm 2":4507,"./bm 2.js":4507,"./bm.js":7438,"./bn":8905,"./bn 2":1357,"./bn 2.js":1357,"./bn-bd":6225,"./bn-bd 2":884,"./bn-bd 2.js":884,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo 2":6430,"./bo 2.js":6430,"./bo.js":1560,"./br":1278,"./br 2":210,"./br 2.js":210,"./br.js":1278,"./bs":622,"./bs 2":6029,"./bs 2.js":6029,"./bs.js":622,"./ca":2468,"./ca 2":6895,"./ca 2.js":6895,"./ca.js":2468,"./cs":5822,"./cs 2":9299,"./cs 2.js":9299,"./cs.js":5822,"./cv":877,"./cv 2":9758,"./cv 2.js":9758,"./cv.js":877,"./cy":7373,"./cy 2":1622,"./cy 2.js":1622,"./cy.js":7373,"./da":4780,"./da 2":1388,"./da 2.js":1388,"./da.js":4780,"./de":9740,"./de 2":6114,"./de 2.js":6114,"./de-at":217,"./de-at 2":2088,"./de-at 2.js":2088,"./de-at.js":217,"./de-ch":894,"./de-ch 2":533,"./de-ch 2.js":533,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv 2":247,"./dv 2.js":247,"./dv.js":5300,"./el":837,"./el 2":9780,"./el 2.js":9780,"./el.js":837,"./en-au":8348,"./en-au 2":8409,"./en-au 2.js":8409,"./en-au.js":8348,"./en-ca":7925,"./en-ca 2":3535,"./en-ca 2.js":3535,"./en-ca.js":7925,"./en-gb":2243,"./en-gb 2":618,"./en-gb 2.js":618,"./en-gb.js":2243,"./en-ie":6436,"./en-ie 2":8122,"./en-ie 2.js":8122,"./en-ie.js":6436,"./en-il":7207,"./en-il 2":9218,"./en-il 2.js":9218,"./en-il.js":7207,"./en-in":4175,"./en-in 2":5276,"./en-in 2.js":5276,"./en-in.js":4175,"./en-nz":6319,"./en-nz 2":2064,"./en-nz 2.js":2064,"./en-nz.js":6319,"./en-sg":1662,"./en-sg 2":934,"./en-sg 2.js":934,"./en-sg.js":1662,"./eo":2915,"./eo 2":5418,"./eo 2.js":5418,"./eo.js":2915,"./es":7093,"./es 2":5023,"./es 2.js":5023,"./es-do":5251,"./es-do 2":4836,"./es-do 2.js":4836,"./es-do.js":5251,"./es-mx":6112,"./es-mx 2":7029,"./es-mx 2.js":7029,"./es-mx.js":6112,"./es-us":1146,"./es-us 2":3589,"./es-us 2.js":3589,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et 2":3682,"./et 2.js":3682,"./et.js":5603,"./eu":7763,"./eu 2":566,"./eu 2.js":566,"./eu.js":7763,"./fa":6959,"./fa 2":9826,"./fa 2.js":9826,"./fa.js":6959,"./fi":1897,"./fi 2":1054,"./fi 2.js":1054,"./fi.js":1897,"./fil":2549,"./fil 2":7370,"./fil 2.js":7370,"./fil.js":2549,"./fo":4694,"./fo 2":2312,"./fo 2.js":2312,"./fo.js":4694,"./fr":4470,"./fr 2":2777,"./fr 2.js":2777,"./fr-ca":3049,"./fr-ca 2":4013,"./fr-ca 2.js":4013,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch 2":9605,"./fr-ch 2.js":9605,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy 2":2819,"./fy 2.js":2819,"./fy.js":5044,"./ga":9295,"./ga 2":8893,"./ga 2.js":8893,"./ga.js":9295,"./gd":2101,"./gd 2":2890,"./gd 2.js":2890,"./gd.js":2101,"./gl":8794,"./gl 2":6061,"./gl 2.js":6061,"./gl.js":8794,"./gom-deva":7884,"./gom-deva 2":814,"./gom-deva 2.js":814,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn 2":3292,"./gom-latn 2.js":3292,"./gom-latn.js":3168,"./gu":5349,"./gu 2":8630,"./gu 2.js":8630,"./gu.js":5349,"./he":4206,"./he 2":75,"./he 2.js":75,"./he.js":4206,"./hi":94,"./hi 2":633,"./hi 2.js":633,"./hi.js":94,"./hr":316,"./hr 2":7532,"./hr 2.js":7532,"./hr.js":316,"./hu":2138,"./hu 2":1809,"./hu 2.js":1809,"./hu.js":2138,"./hy-am":1423,"./hy-am 2":1573,"./hy-am 2.js":1573,"./hy-am.js":1423,"./id":2781,"./id 2":4822,"./id 2.js":4822,"./id.js":2781,"./is":135,"./is 2":5845,"./is 2.js":5845,"./is.js":135,"./it":626,"./it 2":2659,"./it 2.js":2659,"./it-ch":150,"./it-ch 2":9882,"./it-ch 2.js":9882,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja 2":8834,"./ja 2.js":8834,"./ja.js":9183,"./jv":4286,"./jv 2":3230,"./jv 2.js":3230,"./jv.js":4286,"./ka":2105,"./ka 2":2156,"./ka 2.js":2156,"./ka.js":2105,"./kk":7772,"./kk 2":6851,"./kk 2.js":6851,"./kk.js":7772,"./km":8758,"./km 2":8318,"./km 2.js":8318,"./km.js":8758,"./kn":9282,"./kn 2":7991,"./kn 2.js":7991,"./kn.js":9282,"./ko":3730,"./ko 2":3427,"./ko 2.js":3427,"./ko.js":3730,"./ku":1408,"./ku 2":2948,"./ku 2.js":2948,"./ku.js":1408,"./ky":3291,"./ky 2":5950,"./ky 2.js":5950,"./ky.js":3291,"./lb":6841,"./lb 2":5062,"./lb 2.js":5062,"./lb.js":6841,"./lo":5466,"./lo 2":2810,"./lo 2.js":2810,"./lo.js":5466,"./lt":7010,"./lt 2":4925,"./lt 2.js":4925,"./lt.js":7010,"./lv":7595,"./lv 2":1770,"./lv 2.js":1770,"./lv.js":7595,"./me":9861,"./me 2":4122,"./me 2.js":4122,"./me.js":9861,"./mi":5493,"./mi 2":9004,"./mi 2.js":9004,"./mi.js":5493,"./mk":5966,"./mk 2":4664,"./mk 2.js":4664,"./mk.js":5966,"./ml":7341,"./ml 2":4558,"./ml 2.js":4558,"./ml.js":7341,"./mn":5115,"./mn 2":2450,"./mn 2.js":2450,"./mn.js":5115,"./mr":370,"./mr 2":3699,"./mr 2.js":3699,"./mr.js":370,"./ms":9847,"./ms 2":1608,"./ms 2.js":1608,"./ms-my":1237,"./ms-my 2":979,"./ms-my 2.js":979,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt 2":8210,"./mt 2.js":8210,"./mt.js":2126,"./my":6165,"./my 2":6516,"./my 2.js":6516,"./my.js":6165,"./nb":4924,"./nb 2":1850,"./nb 2.js":1850,"./nb.js":4924,"./ne":6744,"./ne 2":3860,"./ne 2.js":3860,"./ne.js":6744,"./nl":3901,"./nl 2":9189,"./nl 2.js":9189,"./nl-be":9814,"./nl-be 2":2582,"./nl-be 2.js":2582,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn 2":6509,"./nn 2.js":6509,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc 2":4334,"./oc-lnc 2.js":4334,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in 2":9453,"./pa-in 2.js":9453,"./pa-in.js":5858,"./pl":4495,"./pl 2":106,"./pl 2.js":106,"./pl.js":4495,"./pt":9520,"./pt 2":24,"./pt 2.js":24,"./pt-br":7971,"./pt-br 2":499,"./pt-br 2.js":499,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro 2":5662,"./ro 2.js":5662,"./ro.js":6459,"./ru":238,"./ru 2":6341,"./ru 2.js":6341,"./ru.js":238,"./sd":950,"./sd 2":6602,"./sd 2.js":6602,"./sd.js":950,"./se":490,"./se 2":3365,"./se 2.js":3365,"./se.js":490,"./si":124,"./si 2":8331,"./si 2.js":8331,"./si.js":124,"./sk":4249,"./sk 2":4207,"./sk 2.js":4207,"./sk.js":4249,"./sl":4985,"./sl 2":8883,"./sl 2.js":8883,"./sl.js":4985,"./sq":1104,"./sq 2":2290,"./sq 2.js":2290,"./sq.js":1104,"./sr":9131,"./sr 2":4728,"./sr 2.js":4728,"./sr-cyrl":9915,"./sr-cyrl 2":717,"./sr-cyrl 2.js":717,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss 2":4014,"./ss 2.js":4014,"./ss.js":5893,"./sv":8760,"./sv 2":2909,"./sv 2.js":2909,"./sv.js":8760,"./sw":1172,"./sw 2":209,"./sw 2.js":209,"./sw.js":1172,"./ta":7333,"./ta 2":7609,"./ta 2.js":7609,"./ta.js":7333,"./te":3110,"./te 2":5065,"./te 2.js":5065,"./te.js":3110,"./tet":2095,"./tet 2":6065,"./tet 2.js":6065,"./tet.js":2095,"./tg":7321,"./tg 2":6761,"./tg 2.js":6761,"./tg.js":7321,"./th":9041,"./th 2":2103,"./th 2.js":2103,"./th.js":9041,"./tk":9005,"./tk 2":6988,"./tk 2.js":6988,"./tk.js":9005,"./tl-ph":5768,"./tl-ph 2":6808,"./tl-ph 2.js":6808,"./tl-ph.js":5768,"./tlh":9444,"./tlh 2":2640,"./tlh 2.js":2640,"./tlh.js":9444,"./tr":2397,"./tr 2":4056,"./tr 2.js":4056,"./tr.js":2397,"./tzl":8254,"./tzl 2":9767,"./tzl 2.js":9767,"./tzl.js":8254,"./tzm":1106,"./tzm 2":2094,"./tzm 2.js":2094,"./tzm-latn":699,"./tzm-latn 2":7790,"./tzm-latn 2.js":7790,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn 2":5232,"./ug-cn 2.js":5232,"./ug-cn.js":9288,"./uk":7691,"./uk 2":4741,"./uk 2.js":4741,"./uk.js":7691,"./ur":3795,"./ur 2":7802,"./ur 2.js":7802,"./ur.js":3795,"./uz":6791,"./uz 2":1926,"./uz 2.js":1926,"./uz-latn":588,"./uz-latn 2":5280,"./uz-latn 2.js":5280,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi 2":5068,"./vi 2.js":5068,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo 2":7047,"./x-pseudo 2.js":7047,"./x-pseudo.js":4378,"./yo":5805,"./yo 2":7650,"./yo 2.js":7650,"./yo.js":5805,"./zh-cn":3839,"./zh-cn 2":7920,"./zh-cn 2.js":7920,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk 2":8618,"./zh-hk 2.js":8618,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo 2":2349,"./zh-mo 2.js":2349,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw 2":1511,"./zh-tw 2.js":1511,"./zh-tw.js":4152};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=6700}}]);