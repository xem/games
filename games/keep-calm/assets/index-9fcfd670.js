import"https://cdn.jsdelivr.net/gh/aframevr/aframe@ef03254934395d6a0a3cd093a8d37bb90790d24e/dist/aframe-master.min.js";const e=e=>e.target.object3D,t=e=>e.el,a=e=>e.data,r=(e,a,r)=>t(e).addEventListener(a,r),n=(e,t)=>AFRAME.registerComponent(e,{...t,init(){this.system?.register(this.el),t.init?.call(this)},remove(){this.system?.deregister(this.el)}});let o=[],s=e=>o.push(e);n("frame",{tick(e,t){for(let a of o)a(e,t)}});let i=e=>new THREE.MeshStandardMaterial(e),l=(...e)=>new THREE.InstancedMesh(...e),d=(...e)=>new THREE.Mesh(...e),c=(e=0,t=0,a)=>d(new THREE.PlaneGeometry(e,t),i(a)),h=(e,t)=>e.getObjectByName(t),p=THREE;n("raycasted",{init(){let e=a(this);e.lastPoint=new p.Vector3(-9999),r(this,"raycaster-intersected",(t=>e.raycaster=t.detail.el)),r(this,"raycaster-intersected-cleared",(()=>e.raycaster=void 0))},tick(){let e=a(this),{lastPoint:r}=e,n=t(this),o=e.raycaster?.components.raycaster.getIntersection(n);if(!o)return;let{point:s}=o;s.x===r.x&&s.y===r.y&&s.z===r.z||(n.emit("intersection",{...o,hand:e.raycaster?.components["laser-controls"]?.data.hand}),e.lastPoint=s)}});let m="#7BD5F5",u="tan",f=(e,t,a)=>{let r=document.createElement(e);for(let n in t)y(r,n,t[n]);for(let n in a)g(r,n,a[n]);return r},y=(e,t,a)=>e.setAttribute(t,a),g=(e,t,a)=>e.addEventListener(t,a),{random:b}=Math,E=new p.Matrix4,w=new p.Vector3;new p.Quaternion,new p.Vector3;let M=new p.Object3D,x=e=>new THREE.CatmullRomCurve3(e),T=(e,t,a)=>e.push(w.set(t,0,a).clone()),v=e=>{let t=[],a=.4*e,r=0;T(t,a,r),a+=.5*e,T(t,a,r);for(let l=0;l<10;l++)a+=Math.random()*e,r=2*(Math.random()-.5),T(t,a,r);let n=x(t),o=x(n.getPoints(500)),s=new THREE.TubeGeometry(o,100,.02,6,!1),i=new THREE.MeshStandardMaterial({color:"#B0BEC5",roughness:1});return{smoothPath:o,mesh:d(s,i)}},R=[v(-1),v(1)],H=e=>{let t=[];return{current:e,set(e){this.current=e;for(let a of t)a(e)},update(e){e(this.current);for(let a of t)a(this.current)},subscribe(e){t.push(e),e(this.current)}}},A=H(localStorage.getItem("state")??"screen"),C=H(100),P=H(!1),L=H(!1);H(new THREE.Vector3);let D=H(new THREE.Vector3),S=500,j=new Uint8Array(S),B=new Float32Array(3e3),F=new Float32Array(3e3),I=new Float32Array(S),z=new Float32Array(S),O=(e=.1,t=.1,a=.1,r=0,n=0,o=0,s)=>{let d=l(new p.BoxGeometry(e,t,a).translate(r,n,o),i({color:s}),S);return d.frustumCulled=!1,d},U=e=>e.getBoundingClientRect(),k=c(.4,.4,{color:"#fff"});k.position.set(0,1,0),k.rotation.x=-Math.PI/4;let _=f("div");document.body.append(_),_.className="absolute -top-full -left-full px-24 py-24",A.subscribe((e=>{if(k.visible=!1,k.clear(),"intro"===e)_.innerHTML="\n<div class='h-[900px] w-[1100px] text-5xl'>\n  <p class='text-6xl'>Hail, my Liege.\n  <p class='mt-0 mb-16'>Thou art The King - if perchance you forgot again today.\n  <p>I must apprise thee that your chosen people are envied\n  <p class='mt-0 mb-16'>for being, well, chosen.\n  <p>Please muster thy utmost valor to defend them,\n  <p class='mt-0 mb-16'>they're all really good chaps once you get past the smell.\n  <p>Sincerely, thy most humble and abasing subject,\n  <p>Humphrey Bumblebuns, XO\n</div>";else{if("tutorial"!==e)return;_.innerHTML="\n<div class='h-[900px] w-[1100px] text-5xl'>\n  <p>Pull the trigger on thy divine scepter to fire lasers. Hallowed by thy aim.\n  <p>Lobby thy royal orb at foes, and they shall surely bend the knee before the might of thy five megaton explosions.\n</div>\n"}let t=(e=>{let t=document.createRange(),a=U(e),r=f("canvas");r.width=a.width,r.height=a.height;let n=r.getContext("2d"),o=(e,r)=>{if(e.nodeType===Node.TEXT_NODE){t.selectNode(e);let o=U(t);((e,t,a,r)=>{n.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`,n.textBaseline="top",n.fillStyle=e.color,n.fillText(r,t,a+.1*(0|e.fontSize))})(r,o.left-a.left-.5,o.top-a.top-.5,e.nodeValue.trim())}else r=window.getComputedStyle(e);for(let t of e.childNodes)o(t,r)};return o(e,{}),r})(_),a=new p.CanvasTexture(t);a.anisotropy=4;let r=c(.4,.4,{map:a,transparent:!0});r.position.z=.001,k.add(r),k.visible=!0}));let V,G=f("a-scene",{frame:"",reflection:"",fog:`far:5;color:${m}`,shadow:"type:pcfsoft",renderer:"antialias:true;colorManagement:true;highRefreshRate:true;physicallyCorrectLights:true;toneMapping:ACESFilmic"},{loaded(e){V=e.target.renderer,V.xr.setFoveation(1),(e=>{let t=l(new THREE.ConeGeometry(.15,.5,4,1,!0),i({color:"#388E3C"}),1e3);for(let a=0;a<1e3;a++){let[e,r]=(e=>{let t=2*Math.PI*b();return[e*Math.cos(t),e*Math.sin(t)]})(2*Math.sqrt(b())+2),n=b()+.3;t.setMatrixAt(a,E.makeTranslation(w.set(e,.25*n,r)).scale(w.set(b()+.3,n,b()+.3)))}e.add(t)})(N),(e=>{let t=.01,a=.005,r=.0175,n=[O(t,t,t,0,.04,0,u),O(.02,.03,.004,0,.02,0,"brown"),O(a,r,a,-.012,.025,0,u),O(a,r,a,.012,.025,0,u)];for(let s=0;s<S;s+=1)j[s]=1,I[s]=5e3,z[s]=s/200%1;e.add(...n),A.subscribe((e=>{"intro"===e&&(setInterval((()=>{for(let e=0;e<S;e+=1)if(I[e]>=5e3){j[e]=0,I[e]=0,z[e]=0;break}}),500),setInterval((()=>{o<.001&&(o+=1e-4)}),500))}));let o=5e-4;s(((e,t)=>{for(let a=0,r=0;a<S;a++,r+=6){let s=j[a];if(0===s){z[a]+=o,z[a]>1&&(C.set(C.current-1),z[a]=0);let t=z[a];R[a%2].smoothPath.getPointAt(1-t,M.position),R[a%2].smoothPath.getPointAt(1-(t+.01)%1,w),M.position.y=Math.sin(e/50)/300+.015,M.lookAt(w.x,.03,w.z),P.current&&D.current.distanceToSquared(M.position)<=.005&&(j[a]=1,F[r]=.1*(Math.random()-.5),F[r+1]=.1*Math.random(),F[r+2]=.1*(Math.random()-.5),F[r+3]=.1*(Math.random()-.5),F[r+4]=.1*(Math.random()-.5),F[r+5]=.1*(Math.random()-.5),B[r]=M.position.x,B[r+1]=M.position.y,B[r+2]=M.position.z,B[r+3]=M.rotation.x,B[r+4]=M.rotation.y,B[r+5]=M.rotation.z)}else 1===s&&(I[a]+=t,B[r]+=F[r],B[r+1]+=F[r+1],B[r+2]+=F[r+2],B[r+3]+=F[r+3],B[r+4]+=F[r+4],B[r+5]+=F[r+5],M.position.set(B[r],B[r+1],B[r+2]),M.rotation.set(B[r+3],B[r+4],B[r+5]));M.updateMatrix();for(let e of n)e.setMatrixAt(a,M.matrix)}for(let a of n)a.instanceMatrix.needsUpdate=!0}))})(N),(e=>{e.add(k)})(N),(e=>{e.add(R[0].mesh,R[1].mesh)})(N),(e=>{let t=new THREE.DirectionalLight("#fff",2);e.add(t),t.position.set(1,2,1);let{shadow:a}=t;a.bias=1e-5,a.mapSize.set(2048,2048),a.normalBias=.02,a.map=null,a.needsUpdate=!0;let{camera:r}=a;r.left=r.bottom=-5,r.right=r.top=5,r.matrixAutoUpdate=!0})(N)},"enter-vr"(){return A.set("intro")}}),N=G.object3D,X=f("a-entity",{visible:!1,"laser-controls":"hand:left;model:false",raycaster:"enabled:false;lineOpacity:0"},{triggerdown(){L.set(!0)},triggerup(){L.set(!1)}}),$=f("a-entity",{visible:!1,"laser-controls":"hand:right;model:false",raycaster:"objects:.collidable;lineOpacity:0;autoRefresh:false;interval:30"},{triggerdown(){P.set(!0)},triggerup(){P.set(!1)}});G.append(X,$),y(X,"visible",!0),y($,"visible",!0);const q=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,10).translate(0,5.35,0).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial),K=new THREE.Mesh(new THREE.IcosahedronGeometry(.06,2),new THREE.MeshBasicMaterial);P.subscribe((e=>q.visible=K.visible=e)),G.append(f("a-gltf-model",{src:"castle-prod-transformed.glb"},{"model-loaded"(t){let a=h(e(t),"scepter"),r=h(e(t),"orb");$.object3D.add(a,q),X.object3D.add(r),N.add(K),N.traverse((e=>{const t=e;t.castShadow=t.isMesh||t.isLight&&!t.isAmbientLight&&!t.isRectAreaLight,t.receiveShadow=t.isMesh})),N.traverse((e=>{e.updateMatrix()}))}})),s((()=>{if(P.current){let e=Math.random()+.5-.5;q.scale.set(e,e,1),K.scale.setScalar(e),K.position.copy(D.current)}})),THREE.Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!1,THREE.Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!1,G.append(f("a-sky",{color:m})),G.append(f("a-light",{type:"ambient",color:"#445451"})),G.append(f("a-camera",{position:"0 0.5 1.8","look-controls-enabled":!1}));let W=f("a-text",{value:"Castle health: 100%",width:"2",height:"1",position:"-0.5 1 -1",rotation:"0 0 0"});G.append(W),C.subscribe((e=>y(W,"value",`Castle health: ${e.toFixed(1)}%`))),G.append(f("a-cylinder",{radius:30,height:.01,color:"#18A558",class:"collidable",raycasted:""},{intersection(e){D.update((t=>t.copy(e.detail.point)))}}));let Q=f("h1",{class:"z-10 fixed text-white text-9xl text-center w-full"});Q.innerHTML="<q>Keep Calm</q>";let J=f("h2",{class:"z-10 m-0 fixed bottom-5 right-24 text-3xl text-white"});J.innerHTML="xr"in navigator?"Begin thy reign →":"Thy majesty must procure a magical VR crown",document.body.append(Q,J,G);
