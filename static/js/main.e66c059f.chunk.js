(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(8),c=t.n(n),s=(t(15),function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light static-top"},r.a.createElement("div",{id:"navbar",className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#navbar"},r.a.createElement("h1",{style:{fontWeight:"bold",color:"black",fontSize:"2em",fontFamily:"Electrolize"},data:"WebSVF"},"Web-SVF")),r.a.createElement("a",{className:"btn btn-primary",href:"#header-top"},"Sign Up")))}),m=t(3),i=(t(17),{apiKey:"AIzaSyC8Yufy9Z69MaeXbnmFLX8SOu51ZpyWkTA",authDomain:"web-test-email.firebaseapp.com",databaseURL:"https://web-test-email.firebaseio.com",projectId:"web-test-email",storageBucket:"web-test-email.appspot.com",messagingSenderId:"709401871584",appId:"1:709401871584:web:a9a1108f3530e3b9c67c85"}),o=function(){var e=Object(l.useRef)(),a=Object(l.useRef)();return Object(l.useEffect)((function(){m.initializeApp(i);var t=m.database().ref("signup-email");e.current.addEventListener("submit",(function l(r){r.preventDefault(),function(e){t.push().set({email:e})}((n="header-email",document.getElementById(n).value)),e.current.reset(),a.current.style.display="block";var n;return setTimeout((function(){window.open("https://websvf.top/","_blank")}),5e3),setTimeout((function(){a.current.style.display="none"}),3e4),function(){e.current.removeEventListener("submit",l)}}))}),[]),r.a.createElement("header",{id:"header-top",className:"masthead text-white text-center"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-12 mx-auto"},r.a.createElement("h1",{className:"mb-5 masthead-heading"},r.a.createElement("div",{className:"title"},"Web-SVF:"),"Online Code Analysis Platform powered by",r.a.createElement("br",null),r.a.createElement("a",{className:"link",href:"https://github.com/SVF-tools/SVF",target:"_blank",rel:"noopener noreferrer"},"SVF-Tools"),r.a.createElement("br",null),r.a.createElement("br",null),"Sign Up to stay updated on the latest develepments")),r.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},r.a.createElement("form",{id:"signupform",ref:e},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12 col-md-9 mb-2 mb-md-0"},r.a.createElement("input",{type:"email",id:"header-email",className:"form-control form-control-lg",placeholder:"Enter your email...",required:!0})),r.a.createElement("div",{className:"col-12 col-md-3"},r.a.createElement("button",{type:"submit",className:"btn btn-block btn-lg btn-primary"},"Sign Up!"))))),r.a.createElement("div",{id:"alertsignup",ref:a,className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},r.a.createElement("div",{className:"alert mt-1"},r.a.createElement("span",{className:"closebtn",onClick:function(){a.current.style.display="none"}},"\xd7"),r.a.createElement("br",null),r.a.createElement("p",null,"Email added to Mailing List."),r.a.createElement("p",null,"Demo website is opening in a new tab...",r.a.createElement("br",null),"If the demo page does not open automatically after 5 seconds,"," ",r.a.createElement("a",{href:"https://websvf.top",target:"_blank",rel:"noopener noreferrer"},"click here")),r.a.createElement("p",{className:"highlight"},"Password:"),r.a.createElement("p",{className:"password"},"Vincent_2020"))))))},u=function(e){var a=e.children;return r.a.createElement("div",{id:"myCarousel",className:"carousel slide carousel-fade","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},a),r.a.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))},d=function(e){var a=e.heading,t=e.subHeading,l=e.desc,n=e.extDesc,c=e.image,s=e.active;return r.a.createElement("div",{className:"carousel-item ".concat(s)},r.a.createElement("div",{className:"mask flex-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-7 col-12 order-md-1 order-2"},r.a.createElement("h4",null,a," ",r.a.createElement("br",null),t),r.a.createElement("p",null,l," ",r.a.createElement("br",null),n),r.a.createElement("a",{href:"https://github.com/SVF-tools/WebSVF",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-fw"}),"Find Out More")),r.a.createElement("div",{className:"col-md-5 col-12 order-md-2 order-1"},r.a.createElement("img",{src:"img/".concat(c),className:"mx-auto",alt:"slide"}))))))},E=t(9),g=function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(o,null),r.a.createElement(u,null,E.carousel.map((function(e){return r.a.createElement(d,{heading:e.heading,subHeading:e.subHeading,desc:e.description,extDesc:e.extendedDescription,image:e.image,active:e.active})}))),r.a.createElement("section",{className:"features-icons bg-light text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-4"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"far fa-file-code m-auto text-primary"})),r.a.createElement("h3",null,"C++ Project Support"),r.a.createElement("p",{className:"lead mb-0"},"Upload you C++ project onto our online code editor and compile and run it on our secured server"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-4"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fas fa-project-diagram m-auto text-primary"})),r.a.createElement("h3",null,"Visualize your Data in 3D"),r.a.createElement("p",{className:"lead mb-0"},"In a single click Web-SVF can compile your project and visualize as a 3D Forced graph with interacable nodes within our editor"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"features-icons-item mx-auto mb-0 mb-lg-4"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fas fa-bug m-auto text-primary"})),r.a.createElement("h3",null,"Bug Analysis"),r.a.createElement("p",{className:"lead mb-0"},"One click can analyse you project for bugs and potential points of failure, highlighting them in the 3D forced graph as well as generate a detailed Bug Report.")))))),r.a.createElement("section",{className:"install-banner"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fas fa-server m-auto icon"})),r.a.createElement("br",null),r.a.createElement("h1",null,"Setup your own local instance of"),r.a.createElement("h1",{className:"highlight"},"Web-SVF"),r.a.createElement("h2",null,"in a few simple steps:")),r.a.createElement("section",{className:"showcase"},r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-5 order-lg-1 my-auto showcase-text"},r.a.createElement("div",{className:"features-icons text-center"},r.a.createElement("div",{className:"features-icons-item mx-auto"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fab fa-ubuntu m-auto text-primary"}))),r.a.createElement("h2",null,"Setup and Test WebSVF"),r.a.createElement("p",{className:"lead mb-0"},"Get started with setting up WebSVF and using it with a sample C Project."))),r.a.createElement("div",{className:"col-lg-7 order-lg-2 text-white showcase-img embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"Setup and Test WebSVF",src:"https://www.youtube.com/embed/ArzYCh7vOU0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-5 order-lg-2 my-auto showcase-text"},r.a.createElement("div",{className:"features-icons text-center"},r.a.createElement("div",{className:"features-icons-item mx-auto"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fas fa-cogs m-auto text-primary"}))),r.a.createElement("h2",null,"WebSVF-frontend User Guide"),r.a.createElement("p",{className:"lead mb-0"},"An overview of the WebSVF-frontend and WebSVF-frontend-server and how to use them to get started with WebSVF."))),r.a.createElement("div",{className:"col-lg-7 order-lg-1 text-white showcase-img embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"WebSVF-frontend User Guide",src:"https://www.youtube.com/embed/ybl9vLaBeE8",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-5 order-lg-1 my-auto showcase-text"},r.a.createElement("div",{className:"features-icons text-center"},r.a.createElement("div",{className:"features-icons-item mx-auto"},r.a.createElement("div",{className:"features-icons-icon d-flex"},r.a.createElement("i",{className:"fas fa-laptop-code m-auto text-primary"}))),r.a.createElement("h2",null,"WebSVF-codemap-extension User Guide"),r.a.createElement("p",{className:"lead mb-0"},"A step by step guide taking you through the WebSVF's codemap-extension and all of its features."))),r.a.createElement("div",{className:"col-lg-7 order-lg-2 text-white showcase-img embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"WebSVF-codemap-extension User Guide",src:"https://www.youtube.com/embed/3f2VE1nvC0I",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))),r.a.createElement("section",{className:"testimonials text-center bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"mb-5"},"This project would not have been possible without our core contributors..."),r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-4"},r.a.createElement("a",{href:"https://github.com/spcidealacm/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Tianyang_Guan.jpg",alt:""})),r.a.createElement("h5",null,"Tianyang Guan"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-4"},r.a.createElement("a",{href:"https://github.com/akshatsinghkaushik",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Akshat_Kaushik.jpg",alt:""})),r.a.createElement("h5",null,"Akshat Kaushik"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-0"},r.a.createElement("a",{href:"https://github.com/ZichengQu",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Zicheng_Qu.jpg",alt:""})),r.a.createElement("h5",null,"Zicheng Qu"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-0"},r.a.createElement("a",{href:"https://github.com/JIACHENLIU09",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Jiachen_Liu.jpg",alt:""})),r.a.createElement("h5",null,"Jiachen Liu"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney"))))),r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-4"},r.a.createElement("a",{href:"https://github.com/sthprashant",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Prashant_Shrestha.jpg",alt:""})),r.a.createElement("h5",null,"Prashant Shrestha"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-4"},r.a.createElement("a",{href:"https://github.com/zexiliudai",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Lee.jpg",alt:""})),r.a.createElement("h5",null,"Lee"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-0"},r.a.createElement("a",{href:"https://github.com/winoooops",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Wei.jpg",alt:""})),r.a.createElement("h5",null,"Wei"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-0"},r.a.createElement("a",{href:"https://github.com/yukinsnow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Zeren_Yu.jpg",alt:""})),r.a.createElement("h5",null,"Zeren Yu"),r.a.createElement("p",{className:"font-weight-light mb-0"},r.a.createElement("strong",null,"Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-6"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-0"},r.a.createElement("a",{href:"http://helloqirun.github.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Qirun-Zhang.jpg",alt:""})),r.a.createElement("h5",null,"Dr Qirun Zhang"),r.a.createElement("p",{className:"font-weight-light mb-0"},"Project Supervisor ",r.a.createElement("br",null),r.a.createElement("strong",null,"Assistant Professor",r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.gatech.edu/",target:"_blank",rel:"noopener noreferrer"},"Georgia Institute of Technology"))))),r.a.createElement("div",{className:"col-xl-6"},r.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-xl-4"},r.a.createElement("a",{href:"https://yuleisui.github.io/"},r.a.createElement("img",{className:"img-fluid rounded-circle mb-3",src:"img/Yulei-Sui.jpg",alt:""})),r.a.createElement("h5",null,"Dr Yulei Sui"),r.a.createElement("p",{className:"font-weight-light mb-0"},"Project Supervisor ",r.a.createElement("br",null),r.a.createElement("strong",null,"Senior Lecturer ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.uts.edu.au/",target:"_blank",rel:"noopener noreferrer"},"University of Technology Sydney")))))))),r.a.createElement("section",{className:"call-to-action text-white text-center"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-9 mx-auto"},r.a.createElement("h2",{className:"mb-4"},"Ready to get started? Sign up now!")),r.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12 col-md-9 mb-2 mb-md-0"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter your email..."})),r.a.createElement("div",{className:"col-12 col-md-3"},r.a.createElement("button",{type:"submit",className:"btn btn-block btn-lg btn-primary"},"Sign up!")))))))),r.a.createElement("footer",{className:"footer bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-left my-auto"},r.a.createElement("ul",{className:"list-inline mb-2"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#navbar"},"About")),r.a.createElement("li",{className:"list-inline-item"},"\u22c5"),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#navbar"},"Contact")),r.a.createElement("li",{className:"list-inline-item"},"\u22c5"),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#navbar"},"Terms of Use")),r.a.createElement("li",{className:"list-inline-item"},"\u22c5"),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"#navbar"},"Privacy Policy"))),r.a.createElement("p",{id:"site-yr",className:"text-muted small mb-4 mb-lg-0"},"\xa9 SVF-Tools . All Rights Reserved.")),r.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-right my-auto"},r.a.createElement("ul",{className:"list-inline mb-0"},r.a.createElement("li",{className:"list-inline-item mr-3"},r.a.createElement("a",{href:"#navbar"},r.a.createElement("i",{className:"fas fa-cloud-upload-alt fa-2x fa-fw"}))),r.a.createElement("li",{className:"list-inline-item mr-3"},r.a.createElement("a",{href:"https://github.com/SVF-tools/WebSVF",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x fa-fw"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://github.com/SVF-tools/WebSVF/fork",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-code-branch fa-2x fa-fw"})))))))))};c.a.render(r.a.createElement(g,null),document.querySelector("#root"))},9:function(e){e.exports=JSON.parse('{"carousel":[{"heading":"Code Anywhere","subHeading":"with our Online Code Editor","description":"Our online code editor powered by VSCode Online allows you to work on your projects anywhere.","extendedDescription":"Hosted on scalable AWS Servers means you can compile and computer faster than even your local machine.","image":"vscode_online_carousel.png","active":"active"},{"heading":"Visualize Your Projects","subHeading":"as 3D Forced Graphs","description":"Dive into code analysis with ease using our React powered 3D Forced Graph Analysis","extendedDescription":"Every file including external libraries are represented as nodes clustered in groups following the project heirarchy","image":"Forced-Graph_carousel.png","active":""},{"heading":"Deep Bug Search","subHeading":"Using SVF\'s Code Analysis","description":"With the click of a button, analyse your entire project for compile and runtime errors","extendedDescription":"as well as highlight potential points of failure within indvidual files","image":"bug_carousel_alt_2_480.png","active":""}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.e66c059f.chunk.js.map