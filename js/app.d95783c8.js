(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dna-rnam-prettifier/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"primary",variant:"light"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("DNA Prettifier")])],1),a("div",{staticClass:"nmsWallpaper mb-5",class:[t.$bindParallax]}),a("div",{staticClass:"container-fluid"},[a("p",[t._v(" Use this tool to prettify DNA, convert DNA to RNAm and remove spaces from it! ")]),a("h3",{staticClass:"text-dark d-block mb-4"},[t._v("Input data")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],staticClass:"form-control w-100 mb-3 dna-box",attrs:{rows:"10"},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),a("form",{staticClass:"mb-3",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.prettify(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("span",{staticClass:"d-block mb-2"},[t._v("Total number of rows per columns:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.totalRows,expression:"form.totalRows"}],staticClass:"form-control",attrs:{type:"textbox"},domProps:{value:t.form.totalRows},on:{input:function(e){e.target.composing||t.$set(t.form,"totalRows",e.target.value)}}})]),a("div",{staticClass:"col-sm-4"},[a("span",{staticClass:"d-block mb-2"},[t._v("Total cell length:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cellLength,expression:"form.cellLength"}],staticClass:"form-control",attrs:{type:"textbox"},domProps:{value:t.form.cellLength},on:{input:function(e){e.target.composing||t.$set(t.form,"cellLength",e.target.value)}}})]),t._m(0)])]),a("div",{staticClass:"d-block mb-4"}),a("h3",{staticClass:"text-dark d-block mb-4"},[t._v("Prettified output")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.prettifiedOutput,expression:"prettifiedOutput"}],staticClass:"form-control w-100 mb-3 dna-box",attrs:{rows:"10",readonly:""},domProps:{value:t.prettifiedOutput},on:{input:function(e){e.target.composing||(t.prettifiedOutput=e.target.value)}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger mr-3",attrs:{disabled:!t.prettifiedOutput||!t.prettifiedOutput.length},on:{click:t.dnaToRna}},[t._v(" "+t._s(t.form.isRna?"RNAm to DNA":"DNA to RNAm")+" ")]),a("button",{staticClass:"btn btn-success mr-3",attrs:{disabled:!t.$canCsv||!t.prettifiedOutput||!t.prettifiedOutput.length},on:{click:t.downloadCsv}},[t._v(" Download CSV ")]),a("button",{staticClass:"btn btn-dark",attrs:{disabled:!t.prettifiedOutput||!t.prettifiedOutput.length},on:{click:t.downloadTxt}},[t._v(" Download TXT ")])]),a("h3",{staticClass:"text-dark d-block mb-4"},[t._v("Ribosomal translation")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.mutationInput,expression:"form.mutationInput"}],staticClass:"form-control w-100 mb-3 dna-box",attrs:{rows:"10"},domProps:{value:t.form.mutationInput},on:{input:function(e){e.target.composing||t.$set(t.form,"mutationInput",e.target.value)}}}),a("div",{staticClass:"text-right w-100"},[a("button",{staticClass:"btn btn-primary mr-3",on:{click:t.findMutation}},[t._v(" Find mutations ")]),a("button",{staticClass:"btn btn-dark",attrs:{disabled:!t.outMutation||!t.outMutation.length},on:{click:t.downloadMutationTxt}},[t._v(" Download TXT ")])]),a("div",{staticClass:"mb-5 d-block w-100 mb-3"}),a("span",{staticClass:"text-primary mb-3 d-block"},[t._v("Disclaimer")]),a("small",{staticClass:"text-muted d-block mb-3"},[t._v(' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ')])]),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4 d-flex justify-content-center align-items-end"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v(" Prettify! ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 text-dark d-block text-center border-top",staticStyle:{padding:"1rem"}},[a("img",{staticClass:"rounded-circle mr-3",staticStyle:{"max-height":"60px"},attrs:{src:"https://avatars2.githubusercontent.com/u/520683?s=460&u=4c84240f1443770a9df9096cf2965862a2a2f279&v=4"}}),a("span",[t._v("Developed with ❤️ by Brayan Iribe. "),a("a",{attrs:{href:"https://github.com/BrayanIribe"}},[t._v("Visit me on GitHub!")])])])}],o=(a("99af"),a("caad6"),a("c975"),a("a15b"),a("d81d"),a("ac1f"),a("2532"),a("466d"),a("38cf"),a("5319"),a("1276"),a("498a"),a("b85c")),s=a("53ca"),l=a("5530"),u=a("d4ec"),c=a("bee2"),d=function(){function t(e){Object(u["a"])(this,t);var a=Object(l["a"])({header:null,delimiter:",",ln:"\n"},e),n=a.header,r=a.delimiter,i=a.ln;this.delimiter=r,this.ln=i,this.buffer=[],null!==n&&n.length&&this.push(n)}return Object(c["a"])(t,[{key:"push",value:function(t){if("object"!==Object(s["a"])(t)||!t.length)throw new Error("Data pushed is not valid. Are you sure is a 1D array?");this.buffer.push(t)}},{key:"generate",value:function(){var t,e="",a=Object(o["a"])(this.buffer);try{for(a.s();!(t=a.n()).done;){var n=t.value;null===n&&(n="NULL"),e+='"'+n.join('"'.concat(this.delimiter,'"'))+'"'+this.ln}}catch(r){a.e(r)}finally{a.f()}return e}}]),t}(),p=d,f=a("aeb1"),m=a.n(f),h={name:"App",components:{},data:function(){return{bottom:!1,english:!0,inputData:"",prettifiedOutput:"",form:{cellLength:10,totalRows:5,isRna:!1,mutationInput:""},outMutation:""}},computed:{$bindParallax:function(){return this.bottom?"bottom":""},$canCsv:function(){return this.form.cellLength>0&&this.form.totalRows>0}},methods:{dnaToRna:function(){this.form.isRna?this.prettifiedOutput=this.prettifiedOutput.replace(/[U]/g,"T").trim():this.prettifiedOutput=this.prettifiedOutput.replace(/[T]/g,"U").trim(),this.form.isRna=!this.form.isRna},downloadCsv:function(){if(this.$canCsv){for(var t=this.prettifiedOutput.replaceAll("  "," ").split("\n"),e=t[0].split(" "),a=0;a<e.length;a++)e[a]="Column ".concat(a+1);e[e.length-1]="Total nucleotide";var n,r=new p({header:e}),i=Object(o["a"])(t);try{for(i.s();!(n=i.n()).done;){var s=n.value,l=s.split(" ");r.push(l)}}catch(d){i.e(d)}finally{i.f()}var u=this.prettifiedOutput.toUpperCase().replace(/[^A-Za-z]/g,"").trim().length,c=this.form.isRna?"rna":"dna";m()(r.generate(),"".concat(c,"-").concat((new Date).getTime(),"-").concat(u,".csv"))}},downloadTxt:function(){var t=this.prettifiedOutput;if(t&&t.length){var e=this.inputData.toUpperCase().replace(/[^A-Za-z]/g,"").trim().length,a=this.form.isRna?"rna":"dna";m()(t,"".concat(a,"-").concat((new Date).getTime(),"-").concat(e,".txt"))}else alert("Error: No data to download!")},downloadMutationTxt:function(){var t=this.outMutation;if(t&&t.length){var e=t.toUpperCase().replace(/[^A-Za-z]/g,"").trim().length,a=this.form.isRna?"rna":"dna";m()(t,"".concat(a,"-").concat((new Date).getTime(),"-").concat(e,".txt"))}else alert("Error: No data to download!")},prettify:function(){var t=this.inputData.toUpperCase().replace(/[^A-Za-z]/g,"").trim(),e=this.form.cellLength,a=this.form.totalRows,n=Math.round(t.length/e);if(this.form.isRna=this.inputData.includes("T"),e<=0||a<=0)this.prettifiedOutput=t;else{for(var r=[],i=0,o=0,s=0,l=0;i<3*n;i++){if(i%a===0&&i>0&&(r.push(" ".concat(o,"\n")),s++,l=0),i*e>=t.length)break;var u=t.substr(i*e,e);o+=u.length,u.length<e&&(u+=" ".repeat(e-u.length)),r.push(u),l++}var c=a-l-1;if(console.log({idx:l,total_cells:n,totalRows:s,cells_per_row:a,leading_cells:c}),c>0)for(var d=0;d<=c+1;d++){if(d===c+1){r.push(" ".concat(o));break}r.push("".concat(" ".repeat(e)))}this.prettifiedOutput=r.join(" ").split("\n").map((function(t,e){return e>0&&(t=t.substr(1)),t})).join("\n")}},findMutation:function(){var t=this.form.mutationInput.replace(/[^A-Za-z]/g,"").toUpperCase();this.form.isRna=t.includes("T");var e="AUG",a=["UAA","UAG","UGA"],n=t,r="",i=0;while(i<999){var s=n.indexOf(e,0);if(-1===s){r+=n;break}var l,u=n.substr(s).match(/.{1,3}/g).join(","),c="",d=[],p=Object(o["a"])(a);try{for(p.s();!(l=p.n()).done;){c=l.value;var f=u.indexOf(c);-1!==f&&d.push({end:c,end_idx:f})}}catch(g){p.e(g)}finally{p.f()}for(var m={end:"???",end_idx:999999},h=0;h<d.length;h++)d[h].end_idx<m.end_idx&&(m=d[h]);if(r+=n.substr(0,s),999999===m.end_idx)break;var b="["+u.substr(0,m.end_idx)+"".concat(m.end,"],");r+=b;var v=u.substr(m.end_idx+m.end.length).split(",").join("");n=v,i++}this.form.mutationInput=r,this.outMutation=r}},created:function(){var t=this;document.title="DNA Prettifier",setTimeout((function(){t.bottom=!0}),100)}},b=h,v=(a("034f"),a("2877")),g=Object(v["a"])(b,r,i,!1,null,null,null),O=g.exports,T=a("b1e0"),R=a("5f5b");a("f9e3"),a("2dd8"),a("6f8d"),a("77ed");n["default"].config.productionTip=!1,n["default"].use(T["a"]),n["default"].use(R["a"]),new n["default"]({render:function(t){return t(O)}}).$mount("#app")},"6f8d":function(t,e,a){},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.d95783c8.js.map