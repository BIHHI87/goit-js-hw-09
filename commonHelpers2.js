import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),n=a.querySelector('input[name="email"]'),o=a.querySelector('textarea[name="message"]');function r(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function l(){const t=localStorage.getItem("feedback-form-state");t&&(Object.assign(e,JSON.parse(t)),n.value=e.email,o.value=e.message)}function m(){return e.email.trim()===""||e.message.trim()===""?(alert("Fill please all fields"),!1):!0}function i(t){t.preventDefault(),m()&&(console.log(e),localStorage.removeItem("feedback-form-state"),Object.keys(e).forEach(s=>{e[s]=""}),n.value="",o.value="")}n.addEventListener("input",t=>{e.email=t.target.value,r()});o.addEventListener("input",t=>{e.message=t.target.value,r()});a.addEventListener("submit",i);document.addEventListener("DOMContentLoaded",l);
//# sourceMappingURL=commonHelpers2.js.map
