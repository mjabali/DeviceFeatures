(function(){function a(a,b,c){var d=b.getCollectionChange("value");if(null!=d&&d.isItemized()&&0==d.getCreatedKeys().length&&0==d.getDeletedKeys().length&&0==d.getDirtiedKeys().length&&0<d.getUpdatedKeys().length){b=a.getAttribute("value");if(void 0===b)return adf.mf.api.amx.AmxNodeChangeResult.REPLACE;for(var b=adf.mf.api.amx.createIterator(b),d=d.getUpdatedKeys(),e=d.length,g=0;g<e;++g){var h=d[g];if(b.setCurrentRowKey(h)){var k=a.getChildren(null,h);if(1!=k.length)return adf.mf.api.amx.AmxNodeChangeResult.REPLACE;
a.removeChild(k[0]);a.createStampedChildren(h,[null]);if(1!=a.getChildren(null,h).length)return adf.mf.api.amx.AmxNodeChangeResult.REPLACE}else return adf.mf.api.amx.AmxNodeChangeResult.REPLACE}return c}return adf.mf.api.amx.AmxNodeChangeResult.REPLACE}var b=adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"filmStripItem");b.prototype.render=function(a,b){var c=a.getAttribute("shortDesc"),d=a.getAttribute("styleClass"),g=a.getAttribute("inlineStyle"),h=a.getAttribute("text"),
k=document.createElement("div");k.title=c;c="amx-filmStrip-item";d&&(c=c+" "+d);e(a.getParent(),a.getStampKey())&&(c+=" adfmf-filmStripItem-selected");k.className=c;g&&k.setAttribute("style",g);d=document.createElement("div");g=a.renderDescendants();for(c=0;c<g.length;++c)d.appendChild(g[c]);k.appendChild(d);d.className="amx-filmStrip-item-content";h&&(d=document.createElement("div"),d.className="amx-filmStrip-item-text",d.textContent=h,k.appendChild(d));adf.mf.api.amx.addBubbleEventListener(k,"tap",
this._handleTap,{elementId:b,itemAmxNode:a});return k};b.prototype.updateChildren=function(a,b){return 0===b.getSize()?adf.mf.api.amx.AmxNodeChangeResult.NONE:adf.mf.api.amx.AmxNodeChangeResult.RERENDER};var c=function(a,b){var c=a.getVolatileState();null==c&&(c={});c.selectedRowKeys||(c.selectedRowKeys={});b=b.trim();c.selectedRowKeys[b]=b;a.setVolatileState(c)},d=function(a,b){var b=b.trim(),c=a.getVolatileState();null!=c&&c.selectedRowKeys&&(delete c.selectedRowKeys[b],a.setVolatileState(c))},
e=function(a,b){var c=a.getVolatileState();return null!=c&&c.selectedRowKeys&&c.selectedRowKeys[b]?!0:!1},g=function(a){var a=a.getVolatileState(),b=[];if(null!=a&&a.selectedRowKeys)for(var c in a.selectedRowKeys)b.push(c);return b},h=function(a){var b=a.getVolatileState();null!=b&&(delete b.selectedRowKeys,a.setVolatileState(b))};b.prototype._handleTap=function(a){a.stopPropagation();a.preventDefault();var b=document.getElementById(a.data.elementId),k=a.data.itemAmxNode,a=k.getParent();adf.mf.api.amx.validate(b,
function(){if(adf.mf.api.amx.acceptEvent()){var a=new adf.mf.api.amx.ActionEvent;adf.mf.api.amx.processAmxEvent(k,"action",void 0,void 0,a,null)}});if(adf.mf.api.amx.acceptEvent()){var m=a.getAttribute("selection");if("single"===m||"multiple"===m){var n=k.getStampKey(),o=g(a),s=e(a,n);if("single"===m){if(m=document.getElementById(a.getId()).querySelectorAll(".adfmf-filmStripItem-selected"))for(var D=0;D<m.length;D++)adf.mf.internal.amx.removeCSSClassName(m[D],"adfmf-filmStripItem-selected");h(a)}else!0===
s&&(adf.mf.internal.amx.removeCSSClassName(b,"adfmf-filmStripItem-selected"),d(a,n));!1===s&&(adf.mf.internal.amx.addCSSClassName(b,"adfmf-filmStripItem-selected"),c(a,n));b=g(a);b=new adf.mf.api.amx.SelectionEvent(o,b);adf.mf.api.amx.processAmxEvent(a,"selection",void 0,void 0,b)}}};b=adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"filmStrip");b.prototype.createChildrenNodes=function(a){var b=a.getAttribute("var"),c=a.getAttribute("value");if(null!=b&&void 0===c)return a.setState(adf.mf.api.amx.AmxNodeStates.INITIAL),
!0;if(c){b=adf.mf.api.amx.createIterator(c);b.getTotalCount()>b.getAvailableCount()&&(adf.mf.api.amx.showLoadingIndicator(),adf.mf.api.amx.bulkLoadProviders(c,0,-1,function(){try{var b=new adf.mf.api.amx.AmxNodeUpdateArguments;b.setAffectedAttribute(a,"value");adf.mf.api.amx.markNodeForUpdate(b)}finally{adf.mf.api.amx.hideLoadingIndicator()}},function(a,b){adf.mf.api.adf.logInfoResource("AMXInfoBundle",adf.mf.log.level.SEVERE,"createChildrenNodes","MSG_ITERATOR_FIRST_NEXT_ERROR",a,b);adf.mf.api.amx.hideLoadingIndicator()}));
for(;b.hasNext();)b.next(),a.createStampedChildren(b.getRowKey(),[null],null)}else{b=a.getTag().getChildren();for(c=0;c<b.length;c++){var d=b[c].buildAmxNode(a);a.addChild(d)}}a.setState(adf.mf.api.amx.AmxNodeStates.ABLE_TO_RENDER);return!0};b.prototype.visitChildren=function(a,b,c){var d=a.getAttribute("value");if(d){for(var d=adf.mf.api.amx.createIterator(d),e=a.getAttribute("var");d.hasNext();){var g=d.next();adf.mf.el.pushVariable(e,g);try{if(a.visitStampedChildren(d.getRowKey(),[null],null,b,
c))return!0}finally{adf.mf.el.popVariable(e)}}return!1}return a.visitStampedChildren(null,[null],null,b,c)};b.prototype.updateChildren=function(b,c){return c.hasChanged("value")?a(b,c,adf.mf.api.amx.AmxNodeChangeResult.RERENDER):c.hasChanged("valign")||c.hasChanged("halign")?adf.mf.api.amx.AmxNodeChangeResult.REFRESH:adf.mf.api.amx.AmxNodeChangeResult.RERENDER};b.prototype._createHandlers=function(a,b){var c=!1;"vertical"===a.getAttribute("orientation")&&(c=!0);var d={o:null,t:null},e=this;adf.mf.api.amx.addDragListener(b,
{start:function(a,c){a.stopPropagation();a.preventDefault();d.o={y:0+c.pageY,x:0+c.pageX};k(b.childNodes,!1);d.t=(new Date).getTime()},drag:function(g,h){if(null!=d.o&&(g.stopPropagation(),g.preventDefault(),150<(new Date).getTime()-d.t)){var k=0,k=c?h.pageY-d.o.y:h.pageX-d.o.x,n=0,o=e._getActivePage(a),s=e._getPages(a),s=s[s.length-1].p;if(0<o.p+k||o.p+k<s)n=0.7*k;m(b.childNodes,c,o.p+k-n)}},end:function(g,h){if(null!=d.o){g.stopPropagation();g.preventDefault();var m=(new Date).getTime()-d.t;k(b.childNodes,
!0);var n=0,n=c?h.pageY-d.o.y:h.pageX-d.o.x;if(0!==n){var o=null,s=null;if(150<m){for(var m=e._getActivePage(a),F=e._getPages(a),K=0;K<F.length;K++){var J=Math.abs(F[K].p-(m.p+n));if(null==o||o>J)o=J,s=F[K].i}e.setCurrentPageById(a,s)}else if(c&&Math.abs(h.pageY-d.o.y)>Math.abs(h.pageX-d.o.x)||!c&&Math.abs(h.pageY-d.o.y)<Math.abs(h.pageX-d.o.x))o=e.getCurrentPageIndex(a),n=-1*(n/Math.abs(n)),-1<o+n&&o+n<e.getPageCount(a)&&(o+=n),e.setCurrentPageByIndex(a,o)}d.o=null;d.t=null}}});adf.mf.api.amx.addBubbleEventListener(b,
"tap",this._handleTap,{amxNode:a})};b.prototype._handleTap=function(a){if(adf.mf.api.amx.acceptEvent()){var a=a.data.amxNode,b=a.getAttribute("selection");if("single"===b||"multiple"===b){var b=g(a),c=document.getElementById(a.getId()).querySelectorAll(".adfmf-filmStripItem-selected");if(c)for(var d=0;d<c.length;d++)adf.mf.internal.amx.removeCSSClassName(c[d],"adfmf-filmStripItem-selected");h(a);b=new adf.mf.api.amx.SelectionEvent(b,[]);adf.mf.api.amx.processAmxEvent(a,"selection",void 0,void 0,b)}}};
var k=function(a,b){for(var c=0;c<a.length;c++)!0===b?adf.mf.internal.amx.addCSSClassName(a[c],"animation"):!1===b&&adf.mf.internal.amx.removeCSSClassName(a[c],"animation")},m=function(a,b,c){for(var d=0;d<a.length;d++)a[d].style["-webkit-transform"]=b?"translateY("+c+"px)":"translateX("+c+"px)"};b.prototype._addPage=function(a,b,c){var d=a.getVolatileState();null==d&&(d={});d._pages?d._pages.push({p:b,i:c}):d._pages=[{p:b,i:c}];a.setVolatileState(d)};b.prototype._getPages=function(a){a=a.getVolatileState();
return null==a||!a._pages?[]:a._pages};b.prototype._clearPages=function(a){var b=a.getVolatileState();null!=b&&(delete b._pages,a.setVolatileState(b))};b.prototype._getActivePage=function(a){return this._getPages(a)[this.getCurrentPageIndex(a)]};b.prototype.getPageCount=function(a){return this._getPages(a).length};b.prototype.getCurrentPageId=function(a){return this._getActivePage(a).i};b.prototype.getCurrentPageIndex=function(a){return(a=o(a))?a:0};b.prototype.setCurrentPageByIndex=function(a,b){var c=
this._getPages(a);b?(b=Math.max(b,0),b=Math.min(b,c.length-1)):b=0;if(c[b]){var d=b,e=a.getClientState();null==e&&(e={});e._selectedPage=d;a.setClientState(e);if(d=document.getElementById(a.getId()+"_pageControl")){d=d.childNodes;for(e=0;e<d.length;e++)e!==b?adf.mf.internal.amx.removeCSSClassName(d[e],"selected"):adf.mf.internal.amx.addCSSClassName(d[e],"selected")}d=document.getElementById(a.getId()+"_pageContainer");e=a.getAttribute("orientation");m(d.childNodes,"vertical"===e,c[b].p)}};b.prototype.setCurrentPageById=
function(a,b){for(var c=this._getPages(a),d=0;d<c.length;d++)if(c[d].i===b){this.setCurrentPageByIndex(a,d);break}};var n=function(a,b,c){var d=document.createElement("div");d.id=a.getId()+"_pageControl";d.className="amx-filmStrip_pageControl position-"+c;b.appendChild(d)};b.prototype.render=function(a){var b=a.getAttribute("orientation"),d=a.getAttribute("valign"),e=a.getAttribute("halign"),g=a.getAttribute("styleClass"),k=a.getAttribute("inlineStyle"),m=a.getAttribute("shortDesc"),o=a.getAttribute("pageControlPosition");
h(a);var s=a.getAttribute("selection");if(!("single"!==s&&"multiple"!==s)&&(s=a.getAttribute("selectedRowKeys"))){"string"===typeof s?s=-1<s.indexOf(",")?s.split(","):-1<s.indexOf(" ")?s.split(" "):[s]:"number"===typeof s&&(s=[s]);for(s=adf.mf.api.amx.createIterator(s);s.hasNext();)c(a,s.next())}s=document.createElement("div");s.title=m;m="amx-filmStrip";g&&(m=m+" "+g);"vertical"===b&&(m+=" vertical");d&&(m=m+" valign-"+d);e&&(m=m+" halign-"+e);s.className=m;k&&s.setAttribute("style",k);e=!1;if("start"===
o&&"vertical"===b||"top"===o&&"vertical"!==b)n(a,s,o),e=!0;g=document.createElement("div");s.appendChild(g);d=document.createElement("div");d.id=a.getId()+"_pageContainer";d.className="amx-filmStrip_page-container";g.appendChild(d);!1===e&&("end"===o&&"vertical"===b||"bottom"===o&&"vertical"!==b)?n(a,s,o):"none"!==o&&!1===e&&n(a,s,"vertical"===b?"end":"bottom");this._createHandlers(a,d);b=document.createElement("div");b.className="amx-filmStrip_page";d.appendChild(b);if(o=a.getAttribute("value"))for(d=
adf.mf.api.amx.createIterator(o);d.hasNext();){d.next();e=a.renderDescendants(null,d.getRowKey());for(o=0;o<e.length;o++)b.appendChild(e[o])}else{a=a.renderDescendants();for(o=0;o<a.length;o++)b.appendChild(a[o])}return s};b.prototype.destroy=function(a,b){this._clearPages(b);adf.mf.api.amx.removeBubbleEventListener(a,"resize");adf.mf.internal.amx.containsCSSClassName(a,"amx-filmStrip-stretchItems")||adf.mf.api.amx.removeBubbleEventListener(window,"resize")};b.prototype.init=function(a,b){var c=this;
adf.mf.api.amx.addBubbleEventListener(a,"resize",function(a){return function(){c.postDisplay(this,a)}}(b),null);adf.mf.internal.amx.containsCSSClassName(a,"amx-filmStrip-stretchItems")||adf.mf.api.amx.addBubbleEventListener(window,"resize",function(a){return function(){window.setTimeout(function(){a.rerender()},0)}}(b),null)};b.prototype.postDisplay=function(a,b){var c;a:{for(c=a.parentNode;c;){if(c===document.body){c=!0;break a}c=c.parentNode}c=!1}if(c){var d=b.getAttribute("orientation"),e=document.getElementById(b.getId()+
"_pageContainer");c=e.querySelector(".amx-filmStrip_page");var g=adf.mf.internal.amx.containsCSSClassName(a,"amx-filmStrip-stretchItems");if(c){c.className="amx-filmStrip_page";var h=0,k=0;if(c.childNodes&&0!==c.childNodes.length){k=window.getComputedStyle(c.childNodes[0]);this._addPage(b,0,0);"vertical"===d?(h=a.clientHeight,k=c.childNodes[0].offsetHeight+parseFloat(k.marginTop)+parseFloat(k.marginBottom)):(h=e.clientWidth,k=c.childNodes[0].offsetWidth+parseFloat(k.marginLeft)+parseFloat(k.marginRight));
k=Math.min(k,h);k=Math.floor(h/k);if(isNaN(k)||!1===isFinite(k))k=1;var m=void 0;b.isAttributeDefined("itemsPerPage")?m=b.getAttribute("itemsPerPage"):b.isAttributeDefined("maxItemsOnPage")&&(m=b.getAttribute("maxItemsOnPage"));m&&(m=parseInt(m),k=g?m:Math.min(k,m));"vertical"===d?c.style.height=h+"px":c.style.width=h+"px";for(var g=null,n=Math.min(k,c.childNodes.length),m=0;m<n;m++)if(null===g&&adf.mf.internal.amx.containsCSSClassName(c.childNodes[m],"adfmf-filmStripItem-selected")){g=0;break}if(c.childNodes.length>
k)for(var n=c.childNodes.length/k-1,s=0;s<n;s++){var F=document.createElement("div");F.className="amx-filmStrip_page";"vertical"===d?F.style.height=h+"px":F.style.width=h+"px";this._addPage(b,-1*(s+1)*h,s+1);e.appendChild(F);for(m=0;m<k&&!(c.childNodes.length===k);m++){var K=c.childNodes[k];K&&(null===g&&adf.mf.internal.amx.containsCSSClassName(K,"adfmf-filmStripItem-selected")&&(g=s+1),c.removeChild(K),F.appendChild(K))}for(m=F.childNodes.length;m<k;m++)K=document.createElement("div"),K.className=
"amx-filmStripItem amx-empty",F.appendChild(K)}else for(m=c.childNodes.length;m<k;m++)K=document.createElement("div"),K.className="amx-filmStripItem amx-empty",c.appendChild(K);null===g&&(g=o(b));if(d=document.getElementById(b.getId()+"_pageControl")){adf.mf.api.amx.emptyHtmlElement(d);e=this.getPageCount(b);for(h=0;h<e;h++)m=d,n=this._createPageControlTapHandler(b,h,c.parentNode.childNodes),k=document.createElement("div"),k.className="amx-filmStrip_pageControlButton",adf.mf.api.amx.addBubbleEventListener(k,
"tap",n,null),m.appendChild(k),m=document.createElement("div"),m.className="amx-filmStrip_pageControlButton-chevron",k.appendChild(m)}this.setCurrentPageByIndex(b,g)}}}};b.prototype._createPageControlTapHandler=function(a,b,c){var d=this;return function(){k(c,!0);d.setCurrentPageByIndex(a,b)}};var o=function(a){a=a.getClientState();return null==a||!a._selectedPage?0:a._selectedPage};b.prototype.refresh=function(a,b){var c=document.getElementById(a.getId());b.hasChanged("valign")&&s(c,"valign",b.getOldValue("valign"),
a.getAttribute("valign"));b.hasChanged("halign")&&s(c,"halign",b.getOldValue("halign"),a.getAttribute("halign"))};var s=function(a,b,c,d){c&&adf.mf.internal.amx.removeCSSClassName(a,b+"-"+c);d&&adf.mf.internal.amx.addCSSClassName(a,b+"-"+d)}})();