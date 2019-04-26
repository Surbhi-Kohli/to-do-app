(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(A,e,t){A.exports=t(19)},17:function(A,e,t){},18:function(A,e,t){},19:function(A,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),E=t(4),r=t.n(E),o=(t(17),t(2)),i=t(1),l=t(5),Q=t(6),s=t(9),c=t(7),u=t(10),C=t(8),I=t.n(C),d=(t(18),function(A){function e(A){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(c.a)(e).call(this,A))).state={newItem:"",list:[]},t}return Object(u.a)(e,A),Object(Q.a)(e,[{key:"componentDidMount",value:function(){this.refreshStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"refreshStateWithLocalStorage",value:function(){for(var A in this.state)if(localStorage.hasOwnProperty(A)){var e=localStorage.getItem(A);try{e=JSON.parse(e),this.setState(Object(i.a)({},A,e))}catch(t){this.setState(Object(i.a)({},A,e))}}}},{key:"saveStateToLocalStorage",value:function(){for(var A in this.state)console.log("key in saveToLocalStorage is "+A),localStorage.setItem(A,JSON.stringify(this.state[A]))}},{key:"updateInput",value:function(A,e){this.setState(Object(i.a)({},A,e))}},{key:"addItem",value:function(){console.log("newItem in state is "+this.state.newItem);var A={id:1+Math.random(),value:this.state.newItem.slice()},e=Object(o.a)(this.state.list);e.push(A),this.setState({list:e,newItem:""})}},{key:"itemUpdate",value:function(A,e){for(var t=Object(o.a)(this.state.list),n=0;n<t.length;n++)t[n].id===e&&(t[n].value=A);this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(A){var e=Object(o.a)(this.state.list).filter(function(e){return e.id!==A});this.setState({list:e})}},{key:"render",value:function(){var A=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Notes")),a.a.createElement("div",{style:{padding:50,textAlign:"center",maxWidth:400,margin:"auto"}},"Add a new note",a.a.createElement("br",null),a.a.createElement("input",{type:"text",placeholder:"Type text here",value:this.state.newItem,onChange:function(e){return A.updateInput("newItem",e.target.value)}}),a.a.createElement("button",{onClick:function(){return A.addItem()},disabled:!this.state.newItem.length},"+ Add"),a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("ul",null,this.state.list.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("textarea",{className:"text",value:e.value,onChange:function(t){return A.itemUpdate(t.target.value,e.id)}}),a.a.createElement("div",{style:{display:"flex",flexFlow:"row"}},a.a.createElement("div",{style:{flex:"1"}}),a.a.createElement("img",{className:"iClass",src:I.a,alt:"del",onClick:function(){return A.deleteItem(e.id)}})))})))))}}]),e}(n.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(A,e){navigator.serviceWorker.register(A).then(function(A){A.onupdatefound=function(){var t=A.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(A)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(A)))})}}).catch(function(A){console.error("Error during service worker registration:",A)})}r.a.render(a.a.createElement(d,null),document.getElementById("root")),function(A){if("serviceWorker"in navigator){if(new URL("/todo-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/todo-app","/service-worker.js");f?(function(A,e){fetch(A).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(A){A.unregister().then(function(){window.location.reload()})}):v(A,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,A),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(e,A)})}}()},8:function(A,e){A.exports="data:image/png;base64,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N2gc5ZXrVoPOkIZ6zgzyzpXLHC4LKOdETsBDdDtAImo50C3gKRKKuTKkkNZi772l+5ufkYsqPvumF7cwpSxpJxoVtC9JCXiT4dWk4zzVwwOepdNiTgk4/eN/cSdPb2W96WcNhOQcDT+7yfO7mW8oPEdQznCu8AZfbGhPe/ZvhGU/f3vWP69mziQu+8kM+IcuxGU/XRAAARAAAXwvwL5JoMu+KBDg3QDo8i4CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAAxIwAgACAAIAAgQAjEZ6bYNdMbb7SrUkpmPAIoEKDrU1vq2jWtvuz5u8KcZIdxa440aVrTkTXjOoRZ6q7ny+o1rb1uy1NdEcBRAbJea/uq0u57w6iUMPP0V5VOz0wIo9TQv3xVqe21LARwToDZTVfXei051ErfqLq6UtU3Qv4gefPqSk2zEMAhAZLWXFds362hlXqg8dpKjQ+EVunWsusmtToBARwR4M0g1T5LC6XS6LbrK7WNDqVS2mdBJrUGAZwQ4Jmg5UpjrVfqXR+sUn1v65ViS4NO6mkEsF+APq3B6023Xmp38Eq7rVeaHrxSax8EsF2AjTr1ajtarTRBb2oTrFbqWKtTaSMC2C1Arm7BOVZLletVKrf8q0R3UgMQwGYB/l234C6LlXrqz62nxVK7dCsVIYDNAnyiW7Atw1qlufpzm2utUkabbqUDCGCvAElCxVHWSq3Vr7TWWqVR+pVaYhHAVgG6CxUfs1Zqu36l7dYqPSZM6mYEsFWAwULFedZKVepXqrRWaZ4wqQEIYKsAw4WKhdZKHdWvdNRapUJhUoMRAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ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"}},[[11,1,2]]]);
//# sourceMappingURL=main.c52dd92b.chunk.js.map