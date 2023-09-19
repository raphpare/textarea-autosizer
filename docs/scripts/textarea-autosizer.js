var u=(s,t,r)=>{if(!t.has(s))throw TypeError("Cannot "+r)};var e=(s,t,r)=>(u(s,t,"read from private field"),r?r.call(s):t.get(s)),a=(s,t,r)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,r)},m=(s,t,r,o)=>(u(s,t,"write to private field"),o?o.call(s,r):t.set(s,r),r);var d=(s,t,r)=>(u(s,t,"access private method"),r);var i,n,h,l,p,x=class{constructor(){a(this,l);a(this,i,null);a(this,n,null);a(this,h,void 0);m(this,h,d(this,l,p).bind(this)),typeof window!="undefined"&&window.Math===Math&&typeof window.ResizeObserver!="undefined"&&m(this,n,new ResizeObserver(e(this,h)))}set(t,r){return m(this,i,t),this.updateOptions(r),e(this,i).addEventListener("input",e(this,h)),e(this,n)?e(this,n).observe(e(this,i)):window.addEventListener("resize",e(this,h)),this}updateOptions(t){t.minHeight&&(e(this,i).style.minHeight=`${t.minHeight}px`),t.maxHeight&&(e(this,i).style.maxHeight=`${t.maxHeight}px`),d(this,l,p).call(this)}remove(){return e(this,i).removeEventListener("input",e(this,h)),e(this,n)?e(this,n).unobserve(e(this,i)):window.removeEventListener("resize",e(this,h)),e(this,i).style.removeProperty("height"),e(this,i).style.removeProperty("min-height"),e(this,i).style.removeProperty("max-height"),e(this,i).style.removeProperty("overflow-y"),this}};i=new WeakMap,n=new WeakMap,h=new WeakMap,l=new WeakSet,p=function(){if(!e(this,i)||e(this,i).tagName!=="TEXTAREA")return;e(this,i).style.overflowY="hidden",e(this,i).style.height="0";let t=window.getComputedStyle(e(this,i)),r=e(this,i).scrollHeight+parseInt(t.height,10)-e(this,i).clientHeight;if(r<0)return;let o=parseInt(t.maxHeight,10);o&&r>=o&&(e(this,i).style.overflowY="auto"),e(this,i).style.height=`${r}px`};var g=(s,t)=>new x().set(s,t);export{x as TextareaAutosizer,g as setTextareaAutosizer};
//# sourceMappingURL=textarea-autosizer.js.map
