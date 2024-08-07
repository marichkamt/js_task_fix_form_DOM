function e(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()}!function(t){t.forEach(function(t){var n=document.createElement("label");n.className="field-label",n.htmlFor=t.id,n.textContent=e(t.name),t.placeholder=e(t.name),t.parentNode.insertBefore(n,t)})}(document.querySelectorAll("input"));
//# sourceMappingURL=index.2f9000bf.js.map
