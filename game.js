var Yf=0,Au=1,Zf=2;var kd=1,$f=2,hi=3,Oi=0,en=1,tn=2,Yn=0,qs=1,Dn=2,Ru=3,Cu=4,Jf=5,is=100,Kf=101,Qf=102,jf=103,tp=104,ep=200,np=201,ip=202,sp=203,uc=204,dc=205,rp=206,ap=207,op=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,fc=0,pc=1,mc=2,Js=3,gc=4,xc=5,vc=6,_c=7,Hd=0,pp=1,mp=2,Fi=0,Nh=1,Fh=2,Oh=3,ca=4,gp=5,Bh=6,zh=7;var Vd=300,Ks=301,Qs=302,yc=303,Mc=304,$o=306,$r=1e3,rs=1001,Sc=1002,ln=1003,xp=1004;var Ra=1005;var qn=1006,Cl=1007;var as=1008;var mi=1009,Gd=1010,Wd=1011,Jr=1012,kh=1013,os=1014,yn=1015,bn=1016,Hh=1017,Vh=1018,js=1020,Xd=35902,qd=1021,Yd=1022,un=1023,Zd=1024,$d=1025,Ys=1026,tr=1027,Gh=1028,Wh=1029,Jd=1030,Xh=1031;var qh=1033,oo=33776,lo=33777,co=33778,ho=33779,bc=35840,Ec=35841,wc=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Fc=37814,Oc=37815,Bc=37816,zc=37817,kc=37818,Hc=37819,Vc=37820,Gc=37821,uo=36492,Wc=36494,Xc=36495,Kd=36283,qc=36284,Yc=36285,Zc=36286;var fo=2300,$c=2301,Pl=2302,Pu=2400,Iu=2401,Lu=2402;var vp=3200,_p=3201;var Qd=0,yp=1,Ui="",$e="srgb",hr="srgb-linear",Jo="linear",fe="srgb";var ws=7680;var Du=519,Mp=512,Sp=513,bp=514,jd=515,Ep=516,wp=517,Tp=518,Ap=519,Jc=35044;var Uu="300 es",di=2e3,po=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Il=Math.PI/180,Kc=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Rp(i,t){return(i%t+t)%t}function Ll(i,t,e){return(1-e)*i+e*t}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],U=s[2],T=s[5],R=s[8];return r[0]=a*x+o*y+l*U,r[3]=a*m+o*_+l*T,r[6]=a*p+o*v+l*R,r[1]=c*x+h*y+u*U,r[4]=c*m+h*_+u*T,r[7]=c*p+h*v+u*R,r[2]=d*x+f*y+g*U,r[5]=d*m+f*_+g*T,r[8]=d*p+f*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dl.makeScale(t,e)),this}rotate(t){return this.premultiply(Dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new Kt;function tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cp(){let i=mo("canvas");return i.style.display="block",i}var Nu={};function Gr(i){i in Nu||(Nu[i]=!0,console.warn(i))}function Pp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ip(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Jo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fu=[.64,.33,.3,.6,.15,.06],Ou=[.2126,.7152,.0722],Bu=[.3127,.329],zu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[hr]:{primaries:Fu,whitePoint:Bu,transfer:Jo,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:Fu,whitePoint:Bu,transfer:fe,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var Ts,Qc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=mo("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dp=0,go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ul(s[a].image)):r.push(Ul(s[a]))}else r=Ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Up=0,dn=class i extends Bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rs,s=rs,r=qn,a=as,o=un,l=mi,c=i.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=fi(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $r:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $r:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Vd;dn.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(f+1)/2,U=(p+1)/2,T=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return _>v&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends Bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let U=Math.sqrt(_),T=Math.atan2(U,p*y);m=Math.sin(m*T)/U,o=Math.sin(o*T)/U}let v=o*y;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new C,Hu=new Zn,gi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Pa.subVectors(this.max,Dr),As.subVectors(t.a,Dr),Rs.subVectors(t.b,Dr),Cs.subVectors(t.c,Dr),Ri.subVectors(Rs,As),Ci.subVectors(Cs,Rs),Ji.subVectors(As,Cs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ji.y,Ji.x,0];return!Fl(e,As,Rs,Cs,Pa)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,As,Rs,Cs,Pa))?!1:(Ia.crossVectors(Ri,Ci),e=[Ia.x,Ia.y,Ia.z],Fl(e,As,Rs,Cs,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ri=[new C,new C,new C,new C,new C,new C,new C,new C],Fn=new C,Ca=new gi,As=new C,Rs=new C,Cs=new C,Ri=new C,Ci=new C,Ji=new C,Dr=new C,Pa=new C,Ia=new C,Ki=new C;function Fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Np=new gi,Ur=new C,Ol=new C,xi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Ol)),this.expandByPoint(Ur.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new C,Bl=new C,La=new C,Pi=new C,zl=new C,Da=new C,kl=new C,Kr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bl.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Bl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(La),o=Pi.dot(this.direction),l=-Pi.dot(La),c=Pi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bl).addScaledVector(La,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){zl.subVectors(e,t),Da.subVectors(n,t),kl.crossVectors(zl,Da);let a=this.direction.dot(kl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);let l=o*this.direction.dot(Da.crossVectors(Pi,Da));if(l<0)return null;let c=o*this.direction.dot(zl.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(kl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Op)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ii.crossVectors(n,vn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ii.crossVectors(n,vn)),Ii.normalize(),Ua.crossVectors(vn,Ii),s[0]=Ii.x,s[4]=Ua.x,s[8]=vn.x,s[1]=Ii.y,s[5]=Ua.y,s[9]=vn.y,s[2]=Ii.z,s[6]=Ua.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],U=n[15],T=s[0],R=s[4],P=s[8],b=s[12],S=s[1],L=s[5],k=s[9],N=s[13],F=s[2],Y=s[6],G=s[10],tt=s[14],W=s[3],ct=s[7],dt=s[11],at=s[15];return r[0]=a*T+o*S+l*F+c*W,r[4]=a*R+o*L+l*Y+c*ct,r[8]=a*P+o*k+l*G+c*dt,r[12]=a*b+o*N+l*tt+c*at,r[1]=h*T+u*S+d*F+f*W,r[5]=h*R+u*L+d*Y+f*ct,r[9]=h*P+u*k+d*G+f*dt,r[13]=h*b+u*N+d*tt+f*at,r[2]=g*T+x*S+m*F+p*W,r[6]=g*R+x*L+m*Y+p*ct,r[10]=g*P+x*k+m*G+p*dt,r[14]=g*b+x*N+m*tt+p*at,r[3]=y*T+_*S+v*F+U*W,r[7]=y*R+_*L+v*Y+U*ct,r[11]=y*P+_*k+v*G+U*dt,r[15]=y*b+_*N+v*tt+U*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,U=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=e*y+n*_+s*v+r*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=y*R,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=_*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=v*R,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=U*R,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,_=l*h,v=l*u,U=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*U,s[1]=(f+v)*U,s[2]=(g-_)*U,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+_)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),a=Ps.set(s[4],s[5],s[6]).length(),o=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);let c=1/r,h=1/a,u=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=di){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===di)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===po)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=di){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===di)g=(a+r)*u,x=-2*u;else if(o===po)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new C,On=new le,Fp=new C(0,0,0),Op=new C(1,1,1),Ii=new C,Ua=new C,vn=new C,Vu=new le,Gu=new Zn,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bp=0,Wu=new C,Is=new Zn,oi=new le,Na=new C,Nr=new C,zp=new C,kp=new Zn,Xu=new C(1,0,0),qu=new C(0,1,0),Yu=new C(0,0,1),Zu={type:"added"},Hp={type:"removed"},Ls={type:"childadded",child:null},Hl={type:"childremoved",child:null},Re=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new $n,n=new Zn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Nr,Na,this.up):oi.lookAt(Na,Nr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(oi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new C,li=new C,Vl=new C,ci=new C,Ds=new C,Us=new C,$u=new C,Gl=new C,Wl=new C,Xl=new C,ql=new Me,Yl=new Me,Zl=new Me,Ni=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),li.subVectors(n,e),Vl.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(li),l=Bn.dot(Vl),c=li.dot(li),h=li.dot(Vl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),Zl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ql,r.x),a.addScaledVector(Yl,r.y),a.addScaledVector(Zl,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),li.subVectors(t,e),Bn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Us.subVectors(r,n),Gl.subVectors(t,n);let l=Ds.dot(Gl),c=Us.dot(Gl);if(l<=0&&c<=0)return e.copy(n);Wl.subVectors(t,s);let h=Ds.dot(Wl),u=Us.dot(Wl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ds,a);Xl.subVectors(t,r);let f=Ds.dot(Xl),g=Us.dot(Xl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Us,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $u.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector($u,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(Ds,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function $l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Rp(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$l(a,r,t+1/3),this.g=$l(a,r,t),this.b=$l(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ie.fromWorkingColorSpace(je.copy(this),t),Math.round(We(je.r*255,0,255))*65536+Math.round(We(je.g*255,0,255))*256+Math.round(We(je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=$e){ie.fromWorkingColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Fa);let n=Ll(Li.h,Fa.h,e),s=Ll(Li.s,Fa.s,e),r=Ll(Li.l,Fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Bt;Bt.NAMES=ef;var Vp=0,Jn=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=fi(),this.name="",this.blending=qs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xe=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new C,Oa=new et,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}};var _o=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gp=0,Ln=new le,Jl=new Re,Ns=new C,_n=new gi,Fr=new gi,Ge=new C,ce=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?yo:_o)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(_n.min,Fr.min),_n.expandByPoint(Ge),Ge.addVectors(_n.max,Fr.max),_n.expandByPoint(Ge)):(_n.expandByPoint(Fr.min),_n.expandByPoint(Fr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(t,c),Ge.add(Ns)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new et,f=new et,g=new et,x=new C,m=new C;function p(P,b,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(x),o[b].add(x),o[S].add(x),l[P].add(m),l[b].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){let S=y[P],L=S.start,k=S.count;for(let N=L,F=L+k;N<F;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new C,v=new C,U=new C,T=new C;function R(P){U.fromBufferAttribute(s,P),T.copy(U);let b=o[P];_.copy(b),_.sub(U.multiplyScalar(U.dot(b))).normalize(),v.crossVectors(T,b);let L=v.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,b=y.length;P<b;++P){let S=y[P],L=S.start,k=S.count;for(let N=L,F=L+k;N<F;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new le,Qi=new Kr,Ba=new xi,Ku=new C,za=new C,ka=new C,Ha=new C,Kl=new C,Va=new C,Qu=new C,Ga=new C,Ut=class extends Re{constructor(t=new ce,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kl.fromBufferAttribute(u,t),a?Va.addScaledVector(Kl,h):Va.addScaledVector(Kl.sub(e),h))}e.add(Va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Ba.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ba,Ku)===null||Qi.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(Ju.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,U=_;v<U;v+=3){let T=o.getX(v),R=o.getX(v+1),P=o.getX(v+2);s=Wa(this,p,t,n,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Wa(this,a,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,U=_;v<U;v+=3){let T=v,R=v+1,P=v+2;s=Wa(this,p,t,n,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=Wa(this,a,t,n,c,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wp(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Oi,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ga);return c<e.near||c>e.far?null:{distance:c,point:Ga.clone(),object:i}}function Wa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,za),i.getVertexPosition(l,ka),i.getVertexPosition(c,Ha);let h=Wp(i,t,e,n,za,ka,Ha,Qu);if(h){let u=new C;Ni.getBarycoord(Qu,za,ka,Ha,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,o,l,c,u,new et)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Ni.getNormal(za,ka,Ha,d.normal),h.face=d,h.barycoord=u}return h}var Ue=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(x,m,p,y,_,v,U,T,R,P,b){let S=v/R,L=U/P,k=v/2,N=U/2,F=T/2,Y=R+1,G=P+1,tt=0,W=0,ct=new C;for(let dt=0;dt<G;dt++){let at=dt*L-N;for(let Dt=0;Dt<Y;Dt++){let ht=Dt*S-k;ct[x]=ht*y,ct[m]=at*_,ct[p]=F,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[m]=0,ct[p]=T>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Dt/R),u.push(1-dt/P),tt+=1}}for(let dt=0;dt<P;dt++)for(let at=0;at<R;at++){let Dt=d+at+Y*dt,ht=d+at+Y*(dt+1),H=d+(at+1)+Y*(dt+1),J=d+(at+1)+Y*dt;l.push(Dt,ht,J),l.push(ht,H,J),W+=6}o.addGroup(f,W,b),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let s in n)t[s]=n[s]}return t}function Xp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Hi={clone:er,merge:an},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new C,ju=new et,td=new et,on=class extends Mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,ju,td),e.subVectors(td,ju)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Il*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fs=-90,Os=1,eh=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new on(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new on(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new on(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new on(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new on(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},So=class extends dn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nh=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ue(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Yn});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),o=e.minFilter;return e.minFilter===as&&(e.minFilter=qn),new eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ql=new C,Zp=new C,$p=new Kt,ui=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ql.subVectors(n,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ql),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$p.getNormalMatrix(t),s=this.coplanarPoint(Ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new xi,Xa=new C,Qr=class{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+y).normalize(),n[3].setComponents(l-a,d-h,m-g,v-y).normalize(),n[4].setComponents(l-o,d-u,m-x,v-_).normalize(),e===di)n[5].setComponents(l+o,d+u,m+x,v+_).normalize();else if(e===po)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nr=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+c*p,v=y+c*(p+1),U=y+1+c*(p+1),T=y+1+c*p;f.push(_,v,T),f.push(v,U,T)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Kp,alphahash_pars_fragment:Qp,alphamap_fragment:jp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:vm,color_vertex:_m,common:ym,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:$m,lights_fragment_begin:Jm,lights_fragment_maps:Km,lights_fragment_end:Qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:v0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:E0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:Z0,worldpos_vertex:$0,background_vert:J0,background_frag:K0,backgroundCube_vert:Q0,backgroundCube_frag:j0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:vg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},_t={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Wn={basic:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:an([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:an([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:an([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:an([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:an([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:an([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:an([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:an([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:an([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:an([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:an([_t.lights,_t.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Wn.physical={uniforms:an([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var qa={r:0,b:0,g:0},ts=new $n,Pg=new le;function Ig(i,t,e,n,s,r,a){let o=new Bt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1,v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),_=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===$o)?(h===void 0&&(h=new Ut(new Ue(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:er(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(_.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ts)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new nr(2,2),new Se({name:"BackgroundMaterial",uniforms:er(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(qa,nf(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:m}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,L,k,N,F){let Y=!1,G=u(N,k,L);r!==G&&(r=G,c(r.object)),Y=f(S,N,k,F),Y&&g(S,N,k,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(S,L,k,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,k){let N=k.wireframe===!0,F=n[S.id];F===void 0&&(F={},n[S.id]=F);let Y=F[L.id];Y===void 0&&(Y={},F[L.id]=Y);let G=Y[N];return G===void 0&&(G=d(l()),Y[N]=G),G}function d(S){let L=[],k=[],N=[];for(let F=0;F<e;F++)L[F]=0,k[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,L,k,N){let F=r.attributes,Y=L.attributes,G=0,tt=k.getAttributes();for(let W in tt)if(tt[W].location>=0){let dt=F[W],at=Y[W];if(at===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),dt===void 0||dt.attribute!==at||at&&dt.data!==at.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(S,L,k,N){let F={},Y=L.attributes,G=0,tt=k.getAttributes();for(let W in tt)if(tt[W].location>=0){let dt=Y[W];dt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));let at={};at.attribute=dt,dt&&dt.data&&(at.data=dt.data),F[W]=at,G++}r.attributes=F,r.attributesNum=G,r.index=N}function x(){let S=r.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){let k=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;k[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),F[S]!==L&&(i.vertexAttribDivisor(S,L),F[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let k=0,N=L.length;k<N;k++)L[k]!==S[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function _(S,L,k,N,F,Y,G){G===!0?i.vertexAttribIPointer(S,L,k,F,Y):i.vertexAttribPointer(S,L,k,N,F,Y)}function v(S,L,k,N){x();let F=N.attributes,Y=k.getAttributes(),G=L.defaultAttributeValues;for(let tt in Y){let W=Y[tt];if(W.location>=0){let ct=F[tt];if(ct===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){let dt=ct.normalized,at=ct.itemSize,Dt=t.get(ct);if(Dt===void 0)continue;let ht=Dt.buffer,H=Dt.type,J=Dt.bytesPerElement,yt=H===i.INT||H===i.UNSIGNED_INT||ct.gpuType===kh;if(ct.isInterleavedBufferAttribute){let lt=ct.data,ft=lt.stride,zt=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<W.locationSize;Ct++)p(W.location+Ct,lt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Ct=0;Ct<W.locationSize;Ct++)_(W.location+Ct,at/W.locationSize,H,dt,ft*J,(zt+at/W.locationSize*Ct)*J,yt)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let lt=0;lt<W.locationSize;lt++)_(W.location+lt,at/W.locationSize,H,dt,at*J,at/W.locationSize*lt*J,yt)}}else if(G!==void 0){let dt=G[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(W.location,dt);break;case 3:i.vertexAttrib3fv(W.location,dt);break;case 4:i.vertexAttrib4fv(W.location,dt);break;default:i.vertexAttrib1fv(W.location,dt)}}}}y()}function U(){P();for(let S in n){let L=n[S];for(let k in L){let N=L[k];for(let F in N)h(N[F].object),delete N[F];delete L[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let k in L){let N=L[k];for(let F in N)h(N[F].object),delete N[F];delete L[k]}delete n[S.id]}function R(S){for(let L in n){let k=n[L];if(k[S.id]===void 0)continue;let N=k[S.id];for(let F in N)h(N[F].object),delete N[F];delete k[S.id]}}function P(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Dg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==mi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:U,maxSamples:T}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ui,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,_,f);for(let U=0;U!==_;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Fg(i){let t=new WeakMap;function e(a,o){return o===yc?a.mapping=Ks:o===Mc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===yc||o===Mc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new nh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=class extends Mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ws=4,ed=[.125,.215,.35,.446,.526,.582],ss=20,jl=new ir,nd=new Bt,tc=null,ec=0,nc=0,ic=!1,ns=(1+Math.sqrt(5))/2,Bs=1/ns,id=[new C(-ns,Bs,0),new C(ns,Bs,0),new C(-Bs,0,ns),new C(Bs,0,ns),new C(0,ns,-Bs),new C(0,ns,Bs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,Ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:bn,format:un,colorSpace:hr,depthBuffer:!1},s=sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,jl)}_sceneToCubeUV(t,e,n,s){let o=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nd),h.toneMapping=Fi,h.autoClear=!1;let f=new Xe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ut(new Ue,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(nd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;Ya(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ks||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ya(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=id[(s-r-1)%id.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ut(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],y=0;for(let R=0;R<ss;++R){let P=R/x,b=Math.exp(-P*P/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],U=3*v*(s>_-Ws?s-_+Ws:0),T=4*(this._cubeSize-v);Ya(e,U,T,3*v,2*v),l.setRenderTarget(e),l.render(u,jl)}};function Og(i){let t=[],e=[],n=[],s=i,r=i-Ws+1+ed.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ws?l=ed[a-i+Ws-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,P=T>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(b,x*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];v.set(S,p*g*T)}let U=new ce;U.setAttribute("position",new Ae(y,x)),U.setAttribute("uv",new Ae(_,m)),U.setAttribute("faceIndex",new Ae(v,p)),t.push(U),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sd(i,t,e){let n=new Je(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bg(i,t,e){let n=new Float32Array(ss),s=new C(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function rd(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ad(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===yc||l===Mc,h=l===Ks||l===Qs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new sr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new sr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let U=y[_+0],T=y[_+1],R=y[_+2];d.push(U,T,T,R,R,U)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let U=_+0,T=_+1,R=_+2;d.push(U,T,T,R,R,U)}}else return;let m=new(tf(d)?yo:_o)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*U*4*u),R=new xo(T,v,U,u);R.type=yn,R.needsUpdate=!0;let P=_*4;for(let S=0;S<u;S++){let L=m[S],k=p[S],N=y[S],F=v*U*4*S;for(let Y=0;Y<L.count;Y++){let G=Y*P;f===!0&&(s.fromBufferAttribute(L,Y),T[F+G+0]=s.x,T[F+G+1]=s.y,T[F+G+2]=s.z,T[F+G+3]=0),g===!0&&(s.fromBufferAttribute(k,Y),T[F+G+4]=s.x,T[F+G+5]=s.y,T[F+G+6]=s.z,T[F+G+7]=0),x===!0&&(s.fromBufferAttribute(N,Y),T[F+G+8]=s.x,T[F+G+9]=s.y,T[F+G+10]=s.z,T[F+G+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new et(v,U)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var bo=class extends dn{constructor(t,e,n,s,r,a,o,l,c,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=os),n===void 0&&h===tr&&(n=js),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rf=new dn,od=new bo(1,1),af=new xo,of=new th,lf=new So,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),He(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;ud.set(n),i.uniformMatrix3fv(this.addr,!1,ud),He(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),He(e,n)}}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(od.compareFunction=jd,r=od):r=rf,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lf,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||af,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vx(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _x(i,t){i.uniform1iv(this.addr,t)}function yx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function bx(i,t){i.uniform1uiv(this.addr,t)}function Ex(i,t){i.uniform2uiv(this.addr,t)}function wx(i,t){i.uniform3uiv(this.addr,t)}function Tx(i,t){i.uniform4uiv(this.addr,t)}function Ax(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||rf,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||of,r[a])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lf,r[a])}function Px(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||af,r[a])}function Ix(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return Ex;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}var ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function fd(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),a=sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(e,c===void 0?new ih(o,i,t):new sh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new rh(o),fd(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Lx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dx=37297,Ux=0;function Nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var md=new Kt;function Fx(i){ie._getMatrix(md,ie.workingColorSpace,i);let t=`mat3( ${md.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Jo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nx(i.getShaderSource(t),a)}else return s}function Ox(i,t){let e=Fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(i,t){let e;switch(t){case Nh:e="Linear";break;case Fh:e="Reinhard";break;case Oh:e="Cineon";break;case ca:e="ACESFilmic";break;case Bh:e="AgX";break;case zh:e="Neutral";break;case gp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Za=new C;function zx(){ie.getLuminanceCoefficients(Za);let i=Za.x.toFixed(4),t=Za.y.toFixed(4),e=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Hx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function xd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(Gx,Xx)}var Wx=new Map;function Xx(i,t){let e=jt[t];if(e===void 0){let n=Wx.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(qx,Yx)}function Yx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function $x(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Qs:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qs&&(t="ENVMAP_MODE_REFRACTION"),t}function Kx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hd:t="ENVMAP_BLENDING_MULTIPLY";break;case pp:t="ENVMAP_BLENDING_MIX";break;case mp:t="ENVMAP_BLENDING_ADD";break}return t}function Qx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Zx(e),c=$x(e),h=Jx(e),u=Kx(e),d=Qx(e),f=kx(e),g=Hx(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Ox("linearToOutputTexel",e.outputColorSpace),zx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=ah(a),a=xd(a,e),a=vd(a,e),o=ah(o),o=xd(o,e),o=vd(o,e),a=_d(a),o=_d(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+a,v=y+p+o,U=pd(s,s.VERTEX_SHADER,_),T=pd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,U),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(U).trim(),F=s.getShaderInfoLog(T).trim(),Y=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,T);else{let tt=gd(s,U,"vertex"),W=gd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+tt+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||F==="")&&(G=!1);G&&(L.diagnostics={runnable:Y,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(U),s.deleteShader(T),P=new $s(s,x),b=Vx(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Dx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=T,this}var tv=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lh(t),e.set(t,n)),n}},lh=class{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}};function ev(i,t,e,n,s,r,a){let o=new vo,l=new oh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,k,N){let F=k.fog,Y=N.geometry,G=b.isMeshStandardMaterial?k.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),W=tt&&tt.mapping===$o?tt.image.height:null,ct=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=dt!==void 0?dt.length:0,Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let ht,H,J,yt;if(ct){let he=Wn[ct];ht=he.vertexShader,H=he.fragmentShader}else ht=b.vertexShader,H=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);let lt=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,Ht=!!b.map,Q=!!b.matcap,st=!!tt,D=!!b.aoMap,Lt=!!b.lightMap,rt=!!b.bumpMap,At=!!b.normalMap,pt=!!b.displacementMap,Pt=!!b.emissiveMap,ut=!!b.metalnessMap,A=!!b.roughnessMap,E=b.anisotropy>0,V=b.clearcoat>0,K=b.dispersion>0,nt=b.iridescence>0,$=b.sheen>0,Tt=b.transmission>0,xt=E&&!!b.anisotropyMap,St=V&&!!b.clearcoatMap,Jt=V&&!!b.clearcoatNormalMap,it=V&&!!b.clearcoatRoughnessMap,bt=nt&&!!b.iridescenceMap,Ot=nt&&!!b.iridescenceThicknessMap,kt=$&&!!b.sheenColorMap,Et=$&&!!b.sheenRoughnessMap,$t=!!b.specularMap,Yt=!!b.specularColorMap,xe=!!b.specularIntensityMap,O=Tt&&!!b.transmissionMap,vt=Tt&&!!b.thicknessMap,Z=!!b.gradientMap,j=!!b.alphaMap,wt=b.alphaTest>0,gt=!!b.alphaHash,Zt=!!b.extensions,Ee=Fi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let ze={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:H,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:hr,alphaToCoverage:!!b.alphaToCoverage,map:Ht,matcap:Q,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:Lt,bumpMap:rt,normalMap:At,displacementMap:d&&pt,emissiveMap:Pt,normalMapObjectSpace:At&&b.normalMapType===yp,normalMapTangentSpace:At&&b.normalMapType===Qd,metalnessMap:ut,roughnessMap:A,anisotropy:E,anisotropyMap:xt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:Jt,clearcoatRoughnessMap:it,dispersion:K,iridescence:nt,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:$,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:$t,specularColorMap:Yt,specularIntensityMap:xe,transmission:Tt,transmissionMap:O,thicknessMap:vt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===qs&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:wt,alphaHash:gt,combine:b.combine,mapUv:Ht&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:Lt&&x(b.lightMap.channel),bumpMapUv:rt&&x(b.bumpMap.channel),normalMapUv:At&&x(b.normalMap.channel),displacementMapUv:pt&&x(b.displacementMap.channel),emissiveMapUv:Pt&&x(b.emissiveMap.channel),metalnessMapUv:ut&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:xt&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(b.sheenRoughnessMap.channel),specularMapUv:$t&&x(b.specularMap.channel),specularColorMapUv:Yt&&x(b.specularColorMap.channel),specularIntensityMapUv:xe&&x(b.specularIntensityMap.channel),transmissionMapUv:O&&x(b.transmissionMap.channel),thicknessMapUv:vt&&x(b.thicknessMap.channel),alphaMapUv:j&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(At||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(Ht||j),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ft,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ht&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let S=g[b.type],L;if(S){let k=Wn[S];L=Hi.clone(k.uniforms)}else L=b.uniforms;return L}function U(b,S){let L;for(let k=0,N=h.length;k<N;k++){let F=h[k];if(F.cacheKey===S){L=F,++L.usedTimes;break}}return L===void 0&&(L=new jx(i,S,b,r),h.push(L)),L}function T(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function nv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Md(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||iv),n.length>1&&n.sort(d||Md),s.length>1&&s.sort(d||Md)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function sv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sd,i.set(n,[a])):s>=r.length?(a=new Sd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Bt};break;case"SpotLight":e={position:new C,direction:new C,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function av(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ov=0;function lv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cv(i){let t=new rv,e=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new le,a=new le;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,U=0,T=0,R=0;c.sort(lv);for(let b=0,S=c.length;b<S;b++){let L=c[b],k=L.color,N=L.intensity,F=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],N);R++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,W=e.get(L);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=G,f++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(N),G.distance=F,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;let tt=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,tt.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=tt.matrix,L.castShadow){let W=e.get(L);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Y,v++}x++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(k).multiplyScalar(N),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let tt=L.shadow,W=e.get(L);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=G,g++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(N),G.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==U||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=U,P.numLightProbes=R,n.version=ov++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function bd(i){let t=new cv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bd(i),t.set(s,[o])):r>=a.length?(o=new bd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ch=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fv(i,t,e){let n=new Qr,s=new et,r=new et,a=new Me,o=new ch({depthPacking:_p}),l=new hh,c={},h=e.maxTextureSize,u={[Oi]:en,[en]:Oi,[tn]:tn},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Yn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==hi&&this.type===hi,F=p===hi&&this.type!==hi;for(let Y=0,G=T.length;Y<G;Y++){let tt=T[Y],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||N===!0||F===!0){let at=this.type!==hi?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new Je(s.x,s.y,at),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let dt=W.getViewportCount();for(let at=0;at<dt;at++){let Dt=W.getViewport(at);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),k.viewport(a),W.updateMatrices(tt,at),n=W.getFrustum(),v(R,P,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function y(T,R){let P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Je(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function _(T,R,P,b){let S=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=S.uuid,N=R.uuid,F=c[k];F===void 0&&(F={},c[k]=F);let Y=F[N];Y===void 0&&(Y=S.clone(),F[N]=Y,R.addEventListener("dispose",U)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,b===hi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=P}return S}function v(T,R,P,b,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),F=T.material;if(Array.isArray(F)){let Y=N.groups;for(let G=0,tt=Y.length;G<tt;G++){let W=Y[G],ct=F[W.materialIndex];if(ct&&ct.visible){let dt=_(T,ct,b,S);T.onBeforeShadow(i,T,R,P,N,dt,W),i.renderBufferDirect(P,null,N,dt,T,W),T.onAfterShadow(i,T,R,P,N,dt,W)}}}else if(F.visible){let Y=_(T,F,b,S);T.onBeforeShadow(i,T,R,P,N,Y,null),i.renderBufferDirect(P,null,N,Y,T,null),T.onAfterShadow(i,T,R,P,N,Y,null)}}let k=T.children;for(let N=0,F=k.length;N<F;N++)v(k[N],R,P,b,S)}function U(T){T.target.removeEventListener("dispose",U);for(let P in c){let b=c[P],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var pv={[fc]:pc,[mc]:vc,[gc]:_c,[Js]:xc,[pc]:fc,[vc]:mc,[_c]:gc,[xc]:Js};function mv(i,t){function e(){let O=!1,vt=new Me,Z=null,j=new Me(0,0,0,0);return{setMask:function(wt){Z!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),Z=wt)},setLocked:function(wt){O=wt},setClear:function(wt,gt,Zt,Ee,ze){ze===!0&&(wt*=Ee,gt*=Ee,Zt*=Ee),vt.set(wt,gt,Zt,Ee),j.equals(vt)===!1&&(i.clearColor(wt,gt,Zt,Ee),j.copy(vt))},reset:function(){O=!1,Z=null,j.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,Z=null,j=null,wt=null;return{setReversed:function(gt){if(vt!==gt){let Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=wt;wt=null,this.setClear(Ee)}vt=gt},getReversed:function(){return vt},setTest:function(gt){gt?lt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!O&&(i.depthMask(gt),Z=gt)},setFunc:function(gt){if(vt&&(gt=pv[gt]),j!==gt){switch(gt){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case vc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){O=gt},setClear:function(gt){wt!==gt&&(vt&&(gt=1-gt),i.clearDepth(gt),wt=gt)},reset:function(){O=!1,Z=null,j=null,wt=null,vt=!1}}}function s(){let O=!1,vt=null,Z=null,j=null,wt=null,gt=null,Zt=null,Ee=null,ze=null;return{setTest:function(he){O||(he?lt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!O&&(i.stencilMask(he),vt=he)},setFunc:function(he,mn,Cn){(Z!==he||j!==mn||wt!==Cn)&&(i.stencilFunc(he,mn,Cn),Z=he,j=mn,wt=Cn)},setOp:function(he,mn,Cn){(gt!==he||Zt!==mn||Ee!==Cn)&&(i.stencilOp(he,mn,Cn),gt=he,Zt=mn,Ee=Cn)},setLocked:function(he){O=he},setClear:function(he){ze!==he&&(i.clearStencil(he),ze=he)},reset:function(){O=!1,vt=null,Z=null,j=null,wt=null,gt=null,Zt=null,Ee=null,ze=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,U=null,T=null,R=new Bt(0,0,0),P=0,b=!1,S=null,L=null,k=null,N=null,F=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=tt>=2);let ct=null,dt={},at=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),ht=new Me().fromArray(at),H=new Me().fromArray(Dt);function J(O,vt,Z,j){let wt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Z;Zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(vt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return gt}let yt={};yt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Js),rt(!1),At(Au),lt(i.CULL_FACE),D(Yn);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ft(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function zt(O,vt){return u[O]!==vt?(i.bindFramebuffer(O,vt),u[O]=vt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ct(O,vt){let Z=f,j=!1;if(O){Z=d.get(vt),Z===void 0&&(Z=[],d.set(vt,Z));let wt=O.textures;if(Z.length!==wt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=wt.length;gt<Zt;gt++)Z[gt]=i.COLOR_ATTACHMENT0+gt;Z.length=wt.length,j=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,j=!0);j&&i.drawBuffers(Z)}function Ht(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Q={[is]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};Q[jf]=i.MIN,Q[tp]=i.MAX;let st={[ep]:i.ZERO,[np]:i.ONE,[ip]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[cp]:i.SRC_ALPHA_SATURATE,[op]:i.DST_COLOR,[rp]:i.DST_ALPHA,[sp]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[lp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[hp]:i.CONSTANT_COLOR,[up]:i.ONE_MINUS_CONSTANT_COLOR,[dp]:i.CONSTANT_ALPHA,[fp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,vt,Z,j,wt,gt,Zt,Ee,ze,he){if(O===Yn){x===!0&&(ft(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),O!==Jf){if(O!==m||he!==b){if((p!==is||v!==is)&&(i.blendEquation(i.FUNC_ADD),p=is,v=is),he)switch(O){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFunc(i.ONE,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,U=null,T=null,R.set(0,0,0),P=0,m=O,b=he}return}wt=wt||vt,gt=gt||Z,Zt=Zt||j,(vt!==p||wt!==v)&&(i.blendEquationSeparate(Q[vt],Q[wt]),p=vt,v=wt),(Z!==y||j!==_||gt!==U||Zt!==T)&&(i.blendFuncSeparate(st[Z],st[j],st[gt],st[Zt]),y=Z,_=j,U=gt,T=Zt),(Ee.equals(R)===!1||ze!==P)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ze),R.copy(Ee),P=ze),m=O,b=!1}function Lt(O,vt){O.side===tn?ft(i.CULL_FACE):lt(i.CULL_FACE);let Z=O.side===en;vt&&(Z=!Z),rt(Z),O.blending===qs&&O.transparent===!1?D(Yn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let j=O.stencilWrite;o.setTest(j),j&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function At(O){O!==Yf?(lt(i.CULL_FACE),O!==L&&(O===Au?i.cullFace(i.BACK):O===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),L=O}function pt(O){O!==k&&(G&&i.lineWidth(O),k=O)}function Pt(O,vt,Z){O?(lt(i.POLYGON_OFFSET_FILL),(N!==vt||F!==Z)&&(i.polygonOffset(vt,Z),N=vt,F=Z)):ft(i.POLYGON_OFFSET_FILL)}function ut(O){O?lt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+Y-1),ct!==O&&(i.activeTexture(O),ct=O)}function E(O,vt,Z){Z===void 0&&(ct===null?Z=i.TEXTURE0+Y-1:Z=ct);let j=dt[Z];j===void 0&&(j={type:void 0,texture:void 0},dt[Z]=j),(j.type!==O||j.texture!==vt)&&(ct!==Z&&(i.activeTexture(Z),ct=Z),i.bindTexture(O,vt||yt[O]),j.type=O,j.texture=vt)}function V(){let O=dt[ct];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(O){ht.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ht.copy(O))}function Et(O){H.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),H.copy(O))}function $t(O,vt){let Z=c.get(vt);Z===void 0&&(Z=new WeakMap,c.set(vt,Z));let j=Z.get(O);j===void 0&&(j=i.getUniformBlockIndex(vt,O.name),Z.set(O,j))}function Yt(O,vt){let j=c.get(vt).get(O);l.get(vt)!==j&&(i.uniformBlockBinding(vt,j,O.__bindingPointIndex),l.set(vt,j))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,dt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,U=null,T=null,R=new Bt(0,0,0),P=0,b=!1,S=null,L=null,k=null,N=null,F=null,ht.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:ft,bindFramebuffer:zt,drawBuffers:Ct,useProgram:Ht,setBlending:D,setMaterial:Lt,setFlipSided:rt,setCullFace:At,setLineWidth:pt,setPolygonOffset:Pt,setScissorTest:ut,activeTexture:A,bindTexture:E,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:bt,texImage3D:Ot,updateUBOMapping:$t,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:it,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:kt,viewport:Et,reset:xe}}function Ed(i,t,e,n){let s=gv(n);switch(e){case qd:return i*t;case Zd:return i*t;case $d:return i*t*2;case Gh:return i*t/s.components*s.byteLength;case Wh:return i*t/s.components*s.byteLength;case Jd:return i*t*2/s.components*s.byteLength;case Xh:return i*t*2/s.components*s.byteLength;case Yd:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case qh:return i*t*4/s.components*s.byteLength;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Tc:return Math.max(i,16)*Math.max(t,8)/4;case bc:case wc:return Math.max(i,8)*Math.max(t,8)/2;case Ac:case Rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kd:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gv(i){switch(i){case mi:case Gd:return{byteLength:1,components:1};case Jr:case Wd:case bn:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case os:case kh:case yn:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return f?new OffscreenCanvas(A,E):mo("canvas")}function x(A,E,V){let K=1,nt=ut(A);if((nt.width>V||nt.height>V)&&(K=V/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(K*nt.width),Tt=Math.floor(K*nt.height);u===void 0&&(u=g($,Tt));let xt=E?g($,Tt):u;return xt.width=$,xt.height=Tt,xt.getContext("2d").drawImage(A,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Tt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,E,V,K,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=E;if(E===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),E===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),E===i.RGBA){let Tt=nt?Jo:ie.getTransfer(K);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=Tt===fe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,E){let V;return A?E===null||E===os||E===js?V=i.DEPTH24_STENCIL8:E===yn?V=i.DEPTH32F_STENCIL8:E===Jr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===os||E===js?V=i.DEPTH_COMPONENT24:E===yn?V=i.DEPTH_COMPONENT32F:E===Jr&&(V=i.DEPTH_COMPONENT16),V}function U(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&h.delete(E)}function R(A){let E=A.target;E.removeEventListener("dispose",R),S(E)}function P(A){let E=n.get(A);if(E.__webglInit===void 0)return;let V=A.source,K=d.get(V);if(K){let nt=K[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(A),Object.keys(K).length===0&&d.delete(V)}n.remove(A)}function b(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let V=A.source,K=d.get(V);delete K[E.__cacheKey],a.memory.textures--}function S(A){let E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let nt=0;nt<E.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=A.textures;for(let K=0,nt=V.length;K<nt;K++){let $=n.get(V[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(A)}let L=0;function k(){L=0}function N(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function F(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Y(A,E){let V=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,A,E);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function G(A,E){let V=n.get(A);if(A.version>0&&V.__version!==A.version){H(V,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function tt(A,E){let V=n.get(A);if(A.version>0&&V.__version!==A.version){H(V,A,E);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function W(A,E){let V=n.get(A);if(A.version>0&&V.__version!==A.version){J(V,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let ct={[$r]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},dt={[ln]:i.NEAREST,[xp]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},at={[Mp]:i.NEVER,[Ap]:i.ALWAYS,[Sp]:i.LESS,[jd]:i.LEQUAL,[bp]:i.EQUAL,[Tp]:i.GEQUAL,[Ep]:i.GREATER,[wp]:i.NOTEQUAL};function Dt(A,E){if(E.type===yn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===Cl||E.magFilter===Ra||E.magFilter===as||E.minFilter===qn||E.minFilter===Cl||E.minFilter===Ra||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ct[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ct[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ct[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==Ra&&E.minFilter!==as||E.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ht(A,E){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let K=E.source,nt=d.get(K);nt===void 0&&(nt={},d.set(K,nt));let $=F(E);if($!==A.__cacheKey){nt[$]===void 0&&(nt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[$].usedTimes++;let Tt=nt[A.__cacheKey];Tt!==void 0&&(nt[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(E)),A.__cacheKey=$,A.__webglTexture=nt[$].texture}return V}function H(A,E,V){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);let nt=ht(A,E),$=E.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+V);let Tt=n.get($);if($.version!==Tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);let xt=ie.getPrimaries(ie.workingColorSpace),St=E.colorSpace===Ui?null:ie.getPrimaries(E.colorSpace),Jt=E.colorSpace===Ui||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=x(E.image,!1,s.maxTextureSize);it=Pt(E,it);let bt=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type),kt=_(E.internalFormat,bt,Ot,E.colorSpace,E.isVideoTexture);Dt(K,E);let Et,$t=E.mipmaps,Yt=E.isVideoTexture!==!0,xe=Tt.__version===void 0||nt===!0,O=$.dataReady,vt=U(E,it);if(E.isDepthTexture)kt=v(E.format===tr,E.type),xe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,kt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,bt,Ot,null));else if(E.isDataTexture)if($t.length>0){Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,kt,$t[0].width,$t[0].height);for(let Z=0,j=$t.length;Z<j;Z++)Et=$t[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,Z,kt,Et.width,Et.height,0,bt,Ot,Et.data);E.generateMipmaps=!1}else Yt?(xe&&e.texStorage2D(i.TEXTURE_2D,vt,kt,it.width,it.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,bt,Ot,it.data)):e.texImage2D(i.TEXTURE_2D,0,kt,it.width,it.height,0,bt,Ot,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,kt,$t[0].width,$t[0].height,it.depth);for(let Z=0,j=$t.length;Z<j;Z++)if(Et=$t[Z],E.format!==un)if(bt!==null)if(Yt){if(O)if(E.layerUpdates.size>0){let wt=Ed(Et.width,Et.height,E.format,E.type);for(let gt of E.layerUpdates){let Zt=Et.data.subarray(gt*wt/Et.data.BYTES_PER_ELEMENT,(gt+1)*wt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,gt,Et.width,Et.height,1,bt,Zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,it.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,kt,Et.width,Et.height,it.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,it.depth,bt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,kt,Et.width,Et.height,it.depth,0,bt,Ot,Et.data)}else{Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,kt,$t[0].width,$t[0].height);for(let Z=0,j=$t.length;Z<j;Z++)Et=$t[Z],E.format!==un?bt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,Z,kt,Et.width,Et.height,0,bt,Ot,Et.data)}else if(E.isDataArrayTexture)if(Yt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,kt,it.width,it.height,it.depth),O)if(E.layerUpdates.size>0){let Z=Ed(it.width,it.height,E.format,E.type);for(let j of E.layerUpdates){let wt=it.data.subarray(j*Z/it.data.BYTES_PER_ELEMENT,(j+1)*Z/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,bt,Ot,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(E.isData3DTexture)Yt?(xe&&e.texStorage3D(i.TEXTURE_3D,vt,kt,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)):e.texImage3D(i.TEXTURE_3D,0,kt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(E.isFramebufferTexture){if(xe)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,kt,it.width,it.height);else{let Z=it.width,j=it.height;for(let wt=0;wt<vt;wt++)e.texImage2D(i.TEXTURE_2D,wt,kt,Z,j,0,bt,Ot,null),Z>>=1,j>>=1}}else if($t.length>0){if(Yt&&xe){let Z=ut($t[0]);e.texStorage2D(i.TEXTURE_2D,vt,kt,Z.width,Z.height)}for(let Z=0,j=$t.length;Z<j;Z++)Et=$t[Z],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt,Ot,Et):e.texImage2D(i.TEXTURE_2D,Z,kt,bt,Ot,Et);E.generateMipmaps=!1}else if(Yt){if(xe){let Z=ut(it);e.texStorage2D(i.TEXTURE_2D,vt,kt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ot,it)}else e.texImage2D(i.TEXTURE_2D,0,kt,bt,Ot,it);m(E)&&p(K),Tt.__version=$.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function J(A,E,V){if(E.image.length!==6)return;let K=ht(A,E),nt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let $=n.get(nt);if(nt.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+V);let Tt=ie.getPrimaries(ie.workingColorSpace),xt=E.colorSpace===Ui?null:ie.getPrimaries(E.colorSpace),St=E.colorSpace===Ui||Tt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let j=0;j<6;j++)!Jt&&!it?bt[j]=x(E.image[j],!0,s.maxCubemapSize):bt[j]=it?E.image[j].image:E.image[j],bt[j]=Pt(E,bt[j]);let Ot=bt[0],kt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),$t=_(E.internalFormat,kt,Et,E.colorSpace),Yt=E.isVideoTexture!==!0,xe=$.__version===void 0||K===!0,O=nt.dataReady,vt=U(E,Ot);Dt(i.TEXTURE_CUBE_MAP,E);let Z;if(Jt){Yt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,$t,Ot.width,Ot.height);for(let j=0;j<6;j++){Z=bt[j].mipmaps;for(let wt=0;wt<Z.length;wt++){let gt=Z[wt];E.format!==un?kt!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,gt.width,gt.height,kt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,gt.width,gt.height,0,kt,Et,gt.data)}}}else{if(Z=E.mipmaps,Yt&&xe){Z.length>0&&vt++;let j=ut(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,$t,j.width,j.height)}for(let j=0;j<6;j++)if(it){Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt[j].width,bt[j].height,kt,Et,bt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,bt[j].width,bt[j].height,0,kt,Et,bt[j].data);for(let wt=0;wt<Z.length;wt++){let Zt=Z[wt].image[j].image;Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,Zt.width,Zt.height,kt,Et,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,Zt.width,Zt.height,0,kt,Et,Zt.data)}}else{Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,kt,Et,bt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,kt,Et,bt[j]);for(let wt=0;wt<Z.length;wt++){let gt=Z[wt];Yt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,kt,Et,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,kt,Et,gt.image[j])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),$.__version=nt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function yt(A,E,V,K,nt,$){let Tt=r.convert(V.format,V.colorSpace),xt=r.convert(V.type),St=_(V.internalFormat,Tt,xt,V.colorSpace),Jt=n.get(E),it=n.get(V);if(it.__renderTarget=E,!Jt.__hasExternalTextures){let bt=Math.max(1,E.width>>$),Ot=Math.max(1,E.height>>$);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,St,bt,Ot,E.depth,0,Tt,xt,null):e.texImage2D(nt,$,St,bt,Ot,0,Tt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),At(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,it.__webglTexture,0,rt(E)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let K=E.depthTexture,nt=K&&K.isDepthTexture?K.type:null,$=v(E.stencilBuffer,nt),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=rt(E);At(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,$,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,$,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,A)}else{let K=E.textures;for(let nt=0;nt<K.length;nt++){let $=K[nt],Tt=r.convert($.format,$.colorSpace),xt=r.convert($.type),St=_($.internalFormat,Tt,xt,$.colorSpace),Jt=rt(E);V&&At(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,St,E.width,E.height):At(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,St,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,St,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let nt=K.__webglTexture,$=rt(E);if(E.depthTexture.format===Ys)At(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===tr)At(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function zt(A){let E=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=K}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,A)}else if(V){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),lt(E.__webglDepthbuffer[K],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),lt(E.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,E,V){let K=n.get(A);E!==void 0&&yt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&zt(A)}function Ht(A){let E=A.texture,V=n.get(A),K=n.get(E);A.addEventListener("dispose",R);let nt=A.textures,$=A.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[xt]=[];for(let St=0;St<E.mipmaps.length;St++)V.__webglFramebuffer[xt][St]=i.createFramebuffer()}else V.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let xt=0;xt<E.mipmaps.length;xt++)V.__webglFramebuffer[xt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let xt=0,St=nt.length;xt<St;xt++){let Jt=n.get(nt[xt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&At(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xt=0;xt<nt.length;xt++){let St=nt[xt];V.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[xt]);let Jt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),bt=_(St.internalFormat,Jt,it,St.colorSpace,A.isXRRenderTarget===!0),Ot=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,V.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,E);for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)yt(V.__webglFramebuffer[xt][St],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else yt(V.__webglFramebuffer[xt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let xt=0,St=nt.length;xt<St;xt++){let Jt=nt[xt],it=n.get(Jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Dt(i.TEXTURE_2D,Jt),yt(V.__webglFramebuffer,A,Jt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,K.__webglTexture),Dt(xt,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)yt(V.__webglFramebuffer[St],A,E,i.COLOR_ATTACHMENT0,xt,St);else yt(V.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,xt,0);m(E)&&p(xt),e.unbindTexture()}A.depthBuffer&&zt(A)}function Q(A){let E=A.textures;for(let V=0,K=E.length;V<K;V++){let nt=E[V];if(m(nt)){let $=y(A),Tt=n.get(nt).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}let st=[],D=[];function Lt(A){if(A.samples>0){if(At(A)===!1){let E=A.textures,V=A.width,K=A.height,nt=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(A),xt=E.length>1;if(xt)for(let St=0;St<E.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let Jt=n.get(E[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,nt,i.NEAREST),l===!0&&(st.length=0,D.length=0,st.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<E.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let Jt=n.get(E[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function rt(A){return Math.min(s.maxSamples,A.samples)}function At(A){let E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(A){let E=a.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Pt(A,E){let V=A.colorSpace,K=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==hr&&V!==Ui&&(ie.getTransfer(V)===fe?(K!==un||nt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=Ct,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=At}function vv(i,t){function e(n,s=Ui){let r,a=ie.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===Hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===kh)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===qd)return i.ALPHA;if(n===Yd)return i.RGB;if(n===un)return i.RGBA;if(n===Zd)return i.LUMINANCE;if(n===$d)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Gh)return i.RED;if(n===Wh)return i.RED_INTEGER;if(n===Jd)return i.RG;if(n===Xh)return i.RG_INTEGER;if(n===qh)return i.RGBA_INTEGER;if(n===oo||n===lo||n===co||n===ho)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Ec||n===wc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===qc||n===Yc||n===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uh=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},_v={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:yv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Bi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new dh,m=e.getContextAttributes(),p=null,y=null,_=[],v=[],U=new et,T=null,R=new on;R.viewport=new Me;let P=new on;P.viewport=new Me;let b=[R,P],S=new uh,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=_[H];return J===void 0&&(J=new Xr,_[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=_[H];return J===void 0&&(J=new Xr,_[H]=J),J.getGripSpace()},this.getHand=function(H){let J=_[H];return J===void 0&&(J=new Xr,_[H]=J),J.getHandSpace()};function N(H){let J=v.indexOf(H.inputSource);if(J===-1)return;let yt=_[J];yt!==void 0&&(yt.update(H.inputSource,H.frame,c||a),yt.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let H=0;H<_.length;H++){let J=v[H];J!==null&&(v[H]=null,_[H].disconnect(J))}L=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Je(f.framebufferWidth,f.framebufferHeight,{format:un,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?tr:Ys,yt=m.stencil?js:os);let ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Je(d.textureWidth,d.textureHeight,{format:un,type:mi,depthTexture:new bo(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(H){for(let J=0;J<H.removed.length;J++){let yt=H.removed[J],lt=v.indexOf(yt);lt>=0&&(v[lt]=null,_[lt].disconnect(yt))}for(let J=0;J<H.added.length;J++){let yt=H.added[J],lt=v.indexOf(yt);if(lt===-1){for(let zt=0;zt<_.length;zt++)if(zt>=v.length){v.push(yt),lt=zt;break}else if(v[zt]===null){v[zt]=yt,lt=zt;break}if(lt===-1)break}let ft=_[lt];ft&&ft.connect(yt)}}let G=new C,tt=new C;function W(H,J,yt){G.setFromMatrixPosition(J.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let lt=G.distanceTo(tt),ft=J.projectionMatrix.elements,zt=yt.projectionMatrix.elements,Ct=ft[14]/(ft[10]-1),Ht=ft[14]/(ft[10]+1),Q=(ft[9]+1)/ft[5],st=(ft[9]-1)/ft[5],D=(ft[8]-1)/ft[0],Lt=(zt[8]+1)/zt[0],rt=Ct*D,At=Ct*Lt,pt=lt/(-D+Lt),Pt=pt*-D;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Pt),H.translateZ(pt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ft[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ut=Ct+pt,A=Ht+pt,E=rt-Pt,V=At+(lt-Pt),K=Q*Ht/A*ut,nt=st*Ht/A*ut;H.projectionMatrix.makePerspective(E,V,K,nt,ut,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ct(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let J=H.near,yt=H.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),S.near=P.near=R.near=J,S.far=P.far=R.far=yt,(L!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far),R.layers.mask=H.layers.mask|2,P.layers.mask=H.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;let lt=H.parent,ft=S.cameras;ct(S,lt);for(let zt=0;zt<ft.length;zt++)ct(ft[zt],lt);ft.length===2?W(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),dt(H,S,lt)};function dt(H,J,yt){yt===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(yt.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Kc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let at=null;function Dt(H,J){if(h=J.getViewerPose(c||a),g=J,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let zt=0;zt<yt.length;zt++){let Ct=yt[zt],Ht=null;if(f!==null)Ht=f.getViewport(Ct);else{let st=u.getViewSubImage(d,Ct);Ht=st.viewport,zt===0&&(t.setRenderTargetTextures(y,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(y))}let Q=b[zt];Q===void 0&&(Q=new on,Q.layers.enable(zt),Q.viewport=new Me,b[zt]=Q),Q.matrix.fromArray(Ct.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ct.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),zt===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Q)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){let zt=u.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let yt=0;yt<_.length;yt++){let lt=v[yt],ft=_[yt];lt!==null&&ft!==void 0&&ft.update(lt,J,c||a)}at&&at(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ht=new sf;ht.setAnimationLoop(Dt),this.setAnimationLoop=function(H){at=H},this.dispose=function(){}}},es=new $n,Sv=new le;function bv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(es)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ev(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let U=_.program;n.updateUBOMapping(y,U);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),U=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,U=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,R=v.length;T<R;T++){let P=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,S=P.length;b<S;b++){let L=P[b];if(f(L,T,b,U)===!0){let k=L.__offset,N=Array.isArray(L.value)?L.value:[L.value],F=0;for(let Y=0;Y<N.length;Y++){let G=N[Y],tt=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+F,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,F),F+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,U){let T=y.value,R=_+"_"+v;if(U[R]===void 0)return typeof T=="number"||typeof T=="boolean"?U[R]=T:U[R]=T.clone(),!0;{let P=U[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return U[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){let _=y.uniforms,v=0,U=16;for(let R=0,P=_.length;R<P;R++){let b=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,L=b.length;S<L;S++){let k=b[S],N=Array.isArray(k.value)?k.value:[k.value];for(let F=0,Y=N.length;F<Y;F++){let G=N[F],tt=x(G),W=v%U,ct=W%tt.boundary,dt=W+ct;v+=ct,dt!==0&&U-dt<tt.storage&&(v+=U-dt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=tt.storage}}}let T=v%U;return T>0&&(v+=U-T),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Eo=class{constructor(t={}){let{canvas:e=Cp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Fi,this.toneMappingExposure=1;let v=this,U=!1,T=0,R=0,P=null,b=-1,S=null,L=new Me,k=new Me,N=null,F=new Bt(0),Y=0,G=e.width,tt=e.height,W=1,ct=null,dt=null,at=new Me(0,0,G,tt),Dt=new Me(0,0,G,tt),ht=!1,H=new Qr,J=!1,yt=!1,lt=new le,ft=new le,zt=new C,Ct=new Me,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function st(){return P===null?W:1}let D=n;function Lt(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let B="webgl2";if(D=Lt(B,w),D===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rt,At,pt,Pt,ut,A,E,V,K,nt,$,Tt,xt,St,Jt,it,bt,Ot,kt,Et,$t,Yt,xe,O;function vt(){rt=new kg(D),rt.init(),Yt=new vv(D,rt),At=new Ug(D,rt,t,Yt),pt=new mv(D,rt),At.reverseDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),Pt=new Gg(D),ut=new nv,A=new xv(D,rt,pt,ut,At,Yt,Pt),E=new Fg(v),V=new zg(v),K=new Jp(D),xe=new Lg(D,K),nt=new Hg(D,K,Pt,xe),$=new Xg(D,nt,K,Pt),kt=new Wg(D,At,A),it=new Ng(ut),Tt=new ev(v,E,V,rt,At,xe,it),xt=new bv(v,ut),St=new sv,Jt=new hv(rt),Ot=new Ig(v,E,V,pt,$,f,l),bt=new fv(v,$,At),O=new Ev(D,Pt,At,pt),Et=new Dg(D,rt,Pt),$t=new Vg(D,rt,Pt),Pt.programs=Tt.programs,v.capabilities=At,v.extensions=rt,v.properties=ut,v.renderLists=St,v.shadowMap=bt,v.state=pt,v.info=Pt}vt();let Z=new fh(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(G,tt,!1))},this.getSize=function(w){return w.set(G,tt)},this.setSize=function(w,B,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,tt=B,e.width=Math.floor(w*W),e.height=Math.floor(B*W),X===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(G*W,tt*W).floor()},this.setDrawingBufferSize=function(w,B,X){G=w,tt=B,W=X,e.width=Math.floor(w*X),e.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,B,X,q){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,B,X,q),pt.viewport(L.copy(at).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,B,X,q){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,B,X,q),pt.scissor(k.copy(Dt).multiplyScalar(W).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){pt.setScissorTest(ht=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,B=!0,X=!0){let q=0;if(w){let z=!1;if(P!==null){let ot=P.texture.format;z=ot===qh||ot===Xh||ot===Wh}if(z){let ot=P.texture.type,Mt=ot===mi||ot===os||ot===Jr||ot===js||ot===Hh||ot===Vh,Nt=Ot.getClearColor(),Rt=Ot.getClearAlpha(),Vt=Nt.r,Xt=Nt.g,It=Nt.b;Mt?(g[0]=Vt,g[1]=Xt,g[2]=It,g[3]=Rt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Vt,x[1]=Xt,x[2]=It,x[3]=Rt,D.clearBufferiv(D.COLOR,0,x))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),Jt.dispose(),ut.dispose(),E.dispose(),V.dispose(),$.dispose(),xe.dispose(),O.dispose(),Tt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Rr),Z.removeEventListener("sessionend",Cr),Hn.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let w=Pt.autoReset,B=bt.enabled,X=bt.autoUpdate,q=bt.needsUpdate,z=bt.type;vt(),Pt.autoReset=w,bt.enabled=B,bt.autoUpdate=X,bt.needsUpdate=q,bt.type=z}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zt(w){let B=w.target;B.removeEventListener("dispose",Zt),Ee(B)}function Ee(w){ze(w),ut.remove(w)}function ze(w){let B=ut.get(w).programs;B!==void 0&&(B.forEach(function(X){Tt.releaseProgram(X)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,q,z,ot){B===null&&(B=Ht);let Mt=z.isMesh&&z.matrixWorld.determinant()<0,Nt=wa(w,B,X,q,z);pt.setMaterial(q,Mt);let Rt=X.index,Vt=1;if(q.wireframe===!0){if(Rt=nt.getWireframeAttribute(X),Rt===void 0)return;Vt=2}let Xt=X.drawRange,It=X.attributes.position,ne=Xt.start*Vt,ue=(Xt.start+Xt.count)*Vt;ot!==null&&(ne=Math.max(ne,ot.start*Vt),ue=Math.min(ue,(ot.start+ot.count)*Vt)),Rt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Rt.count)):It!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,It.count));let de=ue-ne;if(de<0||de===1/0)return;xe.setup(z,q,Nt,X,Rt);let Ze,oe=Et;if(Rt!==null&&(Ze=K.get(Rt),oe=$t,oe.setIndex(Ze)),z.isMesh)q.wireframe===!0?(pt.setLineWidth(q.wireframeLinewidth*st()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(z.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),pt.setLineWidth(Ft*st()),z.isLineSegments?oe.setMode(D.LINES):z.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else z.isPoints?oe.setMode(D.POINTS):z.isSprite&&oe.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ft=z._multiDrawStarts,In=z._multiDrawCounts,qt=z._multiDrawCount,Fe=Rt?K.get(Rt).bytesPerElement:1,si=ut.get(q).currentProgram.getUniforms();for(let Le=0;Le<qt;Le++)si.setValue(D,"_gl_DrawID",Le),oe.render(Ft[Le]/Fe,In[Le])}else if(z.isInstancedMesh)oe.renderInstances(ne,de,z.count);else if(X.isInstancedBufferGeometry){let Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,In=Math.min(X.instanceCount,Ft);oe.renderInstances(ne,de,In)}else oe.render(ne,de)};function he(w,B,X){w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,ii(w,B,X),w.side=Oi,w.needsUpdate=!0,ii(w,B,X),w.side=tn):ii(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),p=Jt.get(X),p.init(B),_.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ot=z.material;if(ot)if(Array.isArray(ot))for(let Mt=0;Mt<ot.length;Mt++){let Nt=ot[Mt];he(Nt,X,z),q.add(Nt)}else he(ot,X,z),q.add(ot)}),_.pop(),p=null,q},this.compileAsync=function(w,B,X=null){let q=this.compile(w,B,X);return new Promise(z=>{function ot(){if(q.forEach(function(Mt){ut.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){z(w);return}setTimeout(ot,10)}rt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let mn=null;function Cn(w){mn&&mn(w)}function Rr(){Hn.stop()}function Cr(){Hn.start()}let Hn=new sf;Hn.setAnimationLoop(Cn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){mn=w,Z.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},Z.addEventListener("sessionstart",Rr),Z.addEventListener("sessionend",Cr),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,P),p=Jt.get(w,_.length),p.init(B),_.push(p),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(ft),yt=this.localClippingEnabled,J=it.init(this.clippingPlanes,yt),m=St.get(w,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ot=v.xr.getDepthSensingMesh();ot!==null&&Zi(ot,B,-1/0,v.sortObjects)}Zi(w,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,dt),Q=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Q&&Ot.addToRenderList(m,w),this.info.render.frame++,J===!0&&it.beginShadows();let X=p.state.shadowsArray;bt.render(X,w,B),J===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){let ot=B.cameras;if(z.length>0)for(let Mt=0,Nt=ot.length;Mt<Nt;Mt++){let Rt=ot[Mt];Vn(q,z,w,Rt)}Q&&Ot.render(w);for(let Mt=0,Nt=ot.length;Mt<Nt;Mt++){let Rt=ot[Mt];Es(m,w,Rt,Rt.viewport)}}else z.length>0&&Vn(q,z,w,B),Q&&Ot.render(w),Es(m,w,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,B),xe.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],J===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Zi(w,B,X,q){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){q&&Ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let Mt=$.update(w),Nt=w.material;Nt.visible&&m.push(w,Mt,Nt,X,Ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let Mt=$.update(w),Nt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ct.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ct.copy(Mt.boundingSphere.center)),Ct.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(Nt)){let Rt=Mt.groups;for(let Vt=0,Xt=Rt.length;Vt<Xt;Vt++){let It=Rt[Vt],ne=Nt[It.materialIndex];ne&&ne.visible&&m.push(w,Mt,ne,X,Ct.z,It)}}else Nt.visible&&m.push(w,Mt,Nt,X,Ct.z,null)}}let ot=w.children;for(let Mt=0,Nt=ot.length;Mt<Nt;Mt++)Zi(ot[Mt],B,X,q)}function Es(w,B,X,q){let z=w.opaque,ot=w.transmissive,Mt=w.transparent;p.setupLightsView(X),J===!0&&it.setGlobalState(v.clippingPlanes,X),q&&pt.viewport(L.copy(q)),z.length>0&&Pn(z,B,X),ot.length>0&&Pn(ot,B,X),Mt.length>0&&Pn(Mt,B,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Vn(w,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Je(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?bn:mi,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ot=p.state.transmissionRenderTarget[q.id],Mt=q.viewport||L;ot.setSize(Mt.z,Mt.w);let Nt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(F),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ot.render(X);let Rt=v.toneMapping;v.toneMapping=Fi;let Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&it.setGlobalState(v.clippingPlanes,q),Pn(w,X,q),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,ne=B.length;It<ne;It++){let ue=B[It],de=ue.object,Ze=ue.geometry,oe=ue.material,Ft=ue.group;if(oe.side===tn&&de.layers.test(q.layers)){let In=oe.side;oe.side=en,oe.needsUpdate=!0,$i(de,X,q,Ze,oe,Ft),oe.side=In,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}v.setRenderTarget(Nt),v.setClearColor(F,Y),Vt!==void 0&&(q.viewport=Vt),v.toneMapping=Rt}function Pn(w,B,X){let q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ot=w.length;z<ot;z++){let Mt=w[z],Nt=Mt.object,Rt=Mt.geometry,Vt=q===null?Mt.material:q,Xt=Mt.group;Nt.layers.test(X.layers)&&$i(Nt,B,X,Rt,Vt,Xt)}}function $i(w,B,X,q,z,ot){w.onBeforeRender(v,B,X,q,z,ot),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,B,X,q,w,ot),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,v.renderBufferDirect(X,B,q,z,w,ot),z.side=Oi,z.needsUpdate=!0,v.renderBufferDirect(X,B,q,z,w,ot),z.side=tn):v.renderBufferDirect(X,B,q,z,w,ot),w.onAfterRender(v,B,X,q,z,ot)}function ii(w,B,X){B.isScene!==!0&&(B=Ht);let q=ut.get(w),z=p.state.lights,ot=p.state.shadowsArray,Mt=z.state.version,Nt=Tt.getParameters(w,z.state,ot,B,X),Rt=Tt.getProgramCacheKey(Nt),Vt=q.programs;q.environment=w.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Zt),Vt=new Map,q.programs=Vt);let Xt=Vt.get(Rt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===Mt)return Pr(w,Nt),Xt}else Nt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Nt,v),Xt=Tt.acquireProgram(Nt,Rt),Vt.set(Rt,Xt),q.uniforms=Nt.uniforms;let It=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=it.uniform),Pr(w,Nt),q.needsLights=Ir(w),q.lightsStateVersion=Mt,q.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function Un(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Pr(w,B){let X=ut.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function wa(w,B,X,q,z){B.isScene!==!0&&(B=Ht),A.resetTextureUnits();let ot=B.fog,Mt=q.isMeshStandardMaterial?B.environment:null,Nt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hr,Rt=(q.isMeshStandardMaterial?V:E).get(q.envMap||Mt),Vt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color,de=Fi;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=v.toneMapping);let Ze=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Ze!==void 0?Ze.length:0,Ft=ut.get(q),In=p.state.lights;if(J===!0&&(yt===!0||w!==S)){let Oe=w===S&&q.id===b;it.setState(q,w,Oe)}let qt=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==In.state.version||Ft.outputColorSpace!==Nt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Rt||q.fog===!0&&Ft.fog!==ot||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==Xt||Ft.morphTargets!==It||Ft.morphNormals!==ne||Ft.morphColors!==ue||Ft.toneMapping!==de||Ft.morphTargetsCount!==oe)&&(qt=!0):(qt=!0,Ft.__version=q.version);let Fe=Ft.currentProgram;qt===!0&&(Fe=ii(q,B,z));let si=!1,Le=!1,Nn=!1,ye=Fe.getUniforms(),gn=Ft.uniforms;if(pt.useProgram(Fe.program)&&(si=!0,Le=!0,Nn=!0),q.id!==b&&(b=q.id,Le=!0),si||S!==w){pt.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),Ip(lt),Lp(lt),ye.setValue(D,"projectionMatrix",lt)):ye.setValue(D,"projectionMatrix",w.projectionMatrix),ye.setValue(D,"viewMatrix",w.matrixWorldInverse);let hn=ye.map.cameraPosition;hn!==void 0&&hn.setValue(D,zt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Le=!0,Nn=!0)}if(z.isSkinnedMesh){ye.setOptional(D,z,"bindMatrix"),ye.setOptional(D,z,"bindMatrixInverse");let Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ye.setValue(D,"boneTexture",Oe.boneTexture,A))}z.isBatchedMesh&&(ye.setOptional(D,z,"batchingTexture"),ye.setValue(D,"batchingTexture",z._matricesTexture,A),ye.setOptional(D,z,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",z._indirectTexture,A),ye.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",z._colorsTexture,A));let Gn=X.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&kt.update(z,X,Fe),(Le||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,ye.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gn.envMap.value=Rt,gn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),Le&&(ye.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Ta(gn,Nn),ot&&q.fog===!0&&xt.refreshFogUniforms(gn,ot),xt.refreshMaterialUniforms(gn,q,W,tt,p.state.transmissionRenderTarget[w.id]),$s.upload(D,Un(Ft),gn,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($s.upload(D,Un(Ft),gn,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(D,"center",z.center),ye.setValue(D,"modelViewMatrix",z.modelViewMatrix),ye.setValue(D,"normalMatrix",z.normalMatrix),ye.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Oe=q.uniformsGroups;for(let hn=0,xn=Oe.length;hn<xn;hn++){let Lr=Oe[hn];O.update(Lr,Fe),O.bind(Lr,Fe)}}return Fe}function Ta(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Ir(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,X){ut.get(w.texture).__webglTexture=B,ut.get(w.depthTexture).__webglTexture=X;let q=ut.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let X=ut.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,X=0){P=w,T=B,R=X;let q=!0,z=null,ot=!1,Mt=!1;if(w){let Rt=ut.get(w);if(Rt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Rt.__hasExternalTextures)A.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(Rt.__boundDepthTexture!==It){if(It!==null&&ut.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);let Xt=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?z=Xt[B][X]:z=Xt[B],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?z=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?z=Xt[X]:z=Xt,L.copy(w.viewport),k.copy(w.scissor),N=w.scissorTest}else L.copy(at).multiplyScalar(W).floor(),k.copy(Dt).multiplyScalar(W).floor(),N=ht;if(pt.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&pt.drawBuffers(w,z),pt.viewport(L),pt.scissor(k),pt.setScissorTest(N),ot){let Rt=ut.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Rt.__webglTexture,X)}else if(Mt){let Rt=ut.get(w.texture),Vt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,X||0,Vt)}b=-1},this.readRenderTargetPixels=function(w,B,X,q,z,ot,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Nt=Nt[Mt]),Nt){pt.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let Rt=w.texture,Vt=Rt.format,Xt=Rt.type;if(!At.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-q&&X>=0&&X<=w.height-z&&D.readPixels(B,X,q,z,Yt.convert(Vt),Yt.convert(Xt),ot)}finally{let Rt=P!==null?ut.get(P).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,q,z,ot,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Nt=Nt[Mt]),Nt){let Rt=w.texture,Vt=Rt.format,Xt=Rt.type;if(!At.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-q&&X>=0&&X<=w.height-z){pt.bindFramebuffer(D.FRAMEBUFFER,Nt);let It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(B,X,q,z,Yt.convert(Vt),Yt.convert(Xt),0);let ne=P!==null?ut.get(P).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,ne);let ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Pp(D,ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(It),D.deleteSync(ue),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,X=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-X),z=Math.floor(w.image.width*q),ot=Math.floor(w.image.height*q),Mt=B!==null?B.x:0,Nt=B!==null?B.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Mt,Nt,z,ot),pt.unbindTexture()},this.copyTextureToTexture=function(w,B,X=null,q=null,z=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let ot,Mt,Nt,Rt,Vt,Xt,It,ne,ue,de=w.isCompressedTexture?w.mipmaps[z]:w.image;X!==null?(ot=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Nt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Vt=X.min.y,Xt=X.isBox3?X.min.z:0):(ot=de.width,Mt=de.height,Nt=de.depth||1,Rt=0,Vt=0,Xt=0),q!==null?(It=q.x,ne=q.y,ue=q.z):(It=0,ne=0,ue=0);let Ze=Yt.convert(B.format),oe=Yt.convert(B.type),Ft;B.isData3DTexture?(A.setTexture3D(B,0),Ft=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Ft=D.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let In=D.getParameter(D.UNPACK_ROW_LENGTH),qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fe=D.getParameter(D.UNPACK_SKIP_PIXELS),si=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let Nn=w.isDataArrayTexture||w.isData3DTexture,ye=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let gn=ut.get(w),Gn=ut.get(B),Oe=ut.get(gn.__renderTarget),hn=ut.get(Gn.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,Oe.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let xn=0;xn<Nt;xn++)Nn&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(w).__webglTexture,z,Xt+xn),w.isDepthTexture?(ye&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(B).__webglTexture,z,ue+xn),D.blitFramebuffer(Rt,Vt,ot,Mt,It,ne,ot,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ye?D.copyTexSubImage3D(Ft,z,It,ne,ue+xn,Rt,Vt,ot,Mt):D.copyTexSubImage2D(Ft,z,It,ne,ue+xn,Rt,Vt,ot,Mt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ft,z,It,ne,ue,ot,Mt,Nt,Ze,oe,de.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,z,It,ne,ue,ot,Mt,Nt,Ze,de.data):D.texSubImage3D(Ft,z,It,ne,ue,ot,Mt,Nt,Ze,oe,de):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,It,ne,ot,Mt,Ze,oe,de.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,It,ne,de.width,de.height,Ze,de.data):D.texSubImage2D(D.TEXTURE_2D,z,It,ne,ot,Mt,Ze,oe,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,In),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,si),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),z===0&&B.generateMipmaps&&D.generateMipmap(Ft),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,X=null,q=null,z=0){return w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,X,q,z)},this.initRenderTarget=function(w){ut.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,pt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var rr=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ph=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new C,wo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vi=class extends Jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zs,Or=new C,ks=new C,Hs=new C,Vs=new et,Br=new et,cf=new le,$a=new C,zr=new C,Ja=new C,wd=new et,rc=new et,Td=new et,zi=class extends Re{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ph(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new wo(n,3,0,!1)),zs.setAttribute("uv",new wo(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ka($a.set(-.5,-.5,0),Hs,a,ks,s,r),Ka(zr.set(.5,-.5,0),Hs,a,ks,s,r),Ka(Ja.set(.5,.5,0),Hs,a,ks,s,r),wd.set(0,0),rc.set(1,0),Td.set(1,1);let o=t.ray.intersectTriangle($a,zr,Ja,!1,Or);if(o===null&&(Ka(zr.set(-.5,.5,0),Hs,a,ks,s,r),rc.set(0,1),o=t.ray.intersectTriangle($a,Ja,zr,!1,Or),o===null))return;let l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:Ni.getInterpolation(Or,$a,zr,Ja,wd,rc,Td,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ka(i,t,e,n,s,r){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*Vs.x-s*Vs.y,Br.y=s*Vs.x+r*Vs.y):Br.copy(Vs),i.copy(t),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(cf)}var ar=class extends dn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ln,h=ln,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new le,Ad=new le,Qa=[],Rd=new gi,wv=new le,kr=new Ut,Hr=new xi,or=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Rd.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Rd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Hr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Ad.multiplyMatrices(n,Gs),kr.matrixWorld=Ad,kr.raycast(t,Qa);for(let a=0,o=Qa.length;a<o;a++){let l=Qa[a];l.instanceId=r,l.object=this,e.push(l)}Qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,Gh,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var jr=class extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ao=new C,Ro=new C,Cd=new le,Vr=new Kr,ja=new xi,ac=new C,Pd=new C,Co=class extends Re{constructor(t=new ce,e=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ao.fromBufferAttribute(e,s-1),Ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ao.distanceTo(Ro);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;Cd.copy(s).invert(),Vr.copy(t.ray).applyMatrix4(Cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),_=to(this,t,Vr,l,p,y);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=to(this,t,Vr,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=to(this,t,Vr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=to(this,t,Vr,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function to(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Ao.fromBufferAttribute(a,s),Ro.fromBufferAttribute(a,r),e.distanceSqToSegment(Ao,Ro,ac,Pd)>n)return;ac.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ac);if(!(l<t.near||l>t.far))return{distance:l,point:Pd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var mh=class extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Id=new le,gh=new Kr,eo=new xi,no=new C,Po=class extends Re{constructor(t=new ce,e=new mh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;Id.copy(s).invert(),gh.copy(t.ray).applyMatrix4(Id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);no.fromBufferAttribute(u,m),Ld(no,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)no.fromBufferAttribute(u,g),Ld(no,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ld(i,t,e,n,s,r,a){let o=gh.distanceSqToPoint(i);if(o<e){let l=new C;gh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Kn=class extends dn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new et:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ta=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xh=class extends ta{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var io=new C,oc=new Zh,lc=new Zh,cc=new Zh,ea=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Tv(i,t){let e=1-i;return e*e*t}function Av(i,t){return 2*(1-i)*i*t}function Rv(i,t){return i*i*t}function qr(i,t,e,n){return Tv(i,t)+Av(i,e)+Rv(i,n)}function Cv(i,t){let e=1-i;return e*e*e*t}function Pv(i,t){let e=1-i;return 3*e*e*i*t}function Iv(i,t){return 3*(1-i)*i*i*t}function Lv(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return Cv(i,t)+Pv(i,e)+Iv(i,n)+Lv(i,s)}var Io=class extends Mn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vh=class extends Mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y),Yr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_h=class extends Mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(t,s.x,r.x,a.x),qr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(t,s.x,r.x,a.x),qr(t,s.y,r.y,a.y),qr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Dd(o,l.x,c.x,h.x,u.x),Dd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:ea,CubicBezierCurve:Io,CubicBezierCurve3:vh,EllipseCurve:ta,LineCurve:Lo,LineCurve3:_h,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Uo,SplineCurve:No}),yh=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fo[s.type]().fromJSON(s))}return this}},na=class extends yh{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lo(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Do(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Io(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new No(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ta(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ia=class i extends ce{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new et,f=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,v=Math.sin(_),U=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*U,a.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let R=l[3*T+0]*v,P=l[3*T+1],b=l[3*T+0]*U;c.push(R,P,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,U=v,T=v+t.length,R=v+t.length+1,P=v+1;r.push(U,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Oo=class i extends ia{constructor(t=1,e=1,n=4,s=8){let r=new na;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},_i=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function y(){let v=new C,U=new C,T=0,R=(e-t)/n;for(let P=0;P<=r;P++){let b=[],S=P/r,L=S*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,F=N*l+o,Y=Math.sin(F),G=Math.cos(F);U.x=L*Y,U.y=-S*n+m,U.z=L*G,u.push(U.x,U.y,U.z),v.set(Y,R,G).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let S=x[b][P],L=x[b+1][P],k=x[b+1][P+1],N=x[b][P+1];(t>0||b!==0)&&(h.push(S,L,N),T+=3),(e>0||b!==r-1)&&(h.push(L,k,N),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){let U=g,T=new et,R=new C,P=0,b=v===!0?t:e,S=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let L=g;for(let k=0;k<=s;k++){let F=k/s*l+o,Y=Math.cos(F),G=Math.sin(F);R.x=b*G,R.y=m*S,R.z=b*Y,u.push(R.x,R.y,R.z),d.push(0,S,0),T.x=Y*.5+.5,T.y=G*.5*S+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let N=U+k,F=L+k;v===!0?h.push(F,F+1,N):h.push(F+1,F,N),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zo=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new C,v=new C,U=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],v),f(e[T+2],U),l(_,v,U,y)}function l(y,_,v,U){let T=U+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let b=y.clone().lerp(v,P/T),S=_.clone().lerp(v,P/T),L=T-P;for(let k=0;k<=L;k++)k===0&&P===T?R[P][k]=b:R[P][k]=b.clone().lerp(S,k/L)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){let S=Math.floor(b/2);b%2===0?(d(R[P][S+1]),d(R[P+1][S]),d(R[P][S])):(d(R[P][S+1]),d(R[P+1][S+1]),d(R[P+1][S]))}}function c(y){let _=new C;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let v=m(y)/2/Math.PI+.5,U=p(y)/Math.PI+.5;a.push(v,1-U)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],v=a[y+2],U=a[y+4],T=Math.max(_,v,U),R=Math.min(_,v,U);T>.9&&R<.1&&(_<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),U<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){let y=new C,_=new C,v=new C,U=new C,T=new et,R=new et,P=new et;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),U.copy(y).add(_).add(v).divideScalar(3);let L=m(U);x(T,S+0,y,L),x(R,S+2,_,L),x(P,S+4,v,L)}}function x(y,_,v,U){U<0&&y.x===1&&(a[_]=y.x-1),v.x===0&&v.z===0&&(a[_]=U/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var sa=class extends na{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new na().fromJSON(s))}return this}},Dv={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Bv(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ra(r,a,e,o,l,f,0),a}};function hf(i,t,e,n,s){let r,a;if(s===$v(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ud(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ud(r,i[r],i[r+1],a);return a&&Qo(a,a.next)&&(oa(a),a=a.next),a}function ls(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qo(e,e.next)||Te(e.prev,e,e.next)===0)){if(oa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ra(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Nv(i,n,s,r):Uv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fv(ls(i),t,e),ra(i,t,e,n,s,r,2)):a===2&&Ov(i,t,e,n,s,r):ra(ls(i),t,e,n,s,r,1);break}}}function Uv(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xs(s,o,r,l,a,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nv(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Mh(f,g,t,e,n),y=Mh(x,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Xs(o,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Xs(o,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Fv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Qo(s,r)&&uf(s,n,n.next,r)&&aa(s,r)&&aa(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),oa(n),oa(n.next),n=i=r),n=n.next}while(n!==i);return ls(n)}function Ov(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qv(a,o)){let l=df(a,o);a=ls(a,a.next),l=ls(l,l.next),ra(a,t,e,n,s,r,0),ra(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Bv(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=hf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Xv(c));for(s.sort(zv),r=0;r<s.length;r++)e=kv(s[r],e);return e}function zv(i,t){return i.x-t.x}function kv(i,t){let e=Hv(i,t);if(!e)return t;let n=df(e,i);return ls(n,n.next),ls(e,e.next)}function Hv(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Xs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),aa(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Vv(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Gv(i,t,e,n){let s=i;do s.z===0&&(s.z=Mh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wv(s)}function Wv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Mh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function qv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yv(i,t)&&(aa(i,t)&&aa(t,i)&&Zv(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Qo(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qo(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){let s=ro(Te(i,t,e)),r=ro(Te(i,t,n)),a=ro(Te(e,n,i)),o=ro(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&so(i,e,t)||r===0&&so(i,n,t)||a===0&&so(e,i,n)||o===0&&so(e,t,n))}function so(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ro(i){return i>0?1:i<0?-1:0}function Yv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function aa(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Zv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function df(i,t){let e=new Sh(i.i,i.x,i.y),n=new Sh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ud(i,t,e,n){let s=new Sh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $v(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nd(t),Fd(n,t);let a=t.length;e.forEach(Nd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Fd(n,e[l]);let o=Dv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ko=class i extends ce{constructor(t=new sa([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Jv,_,v=!1,U,T,R,P;p&&(_=p.getSpacedPoints(h),v=!0,d=!1,U=p.computeFrenetFrames(h,!1),T=new C,R=new C,P=new C),d||(m=0,f=0,g=0,x=0);let b=o.extractPoints(c),S=b.shape,L=b.holes;if(!Zr.isClockWise(S)){S=S.reverse();for(let Q=0,st=L.length;Q<st;Q++){let D=L[Q];Zr.isClockWise(D)&&(L[Q]=D.reverse())}}let N=Zr.triangulateShape(S,L),F=S;for(let Q=0,st=L.length;Q<st;Q++){let D=L[Q];S=S.concat(D)}function Y(Q,st,D){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,D)}let G=S.length,tt=N.length;function W(Q,st,D){let Lt,rt,At,pt=Q.x-st.x,Pt=Q.y-st.y,ut=D.x-Q.x,A=D.y-Q.y,E=pt*pt+Pt*Pt,V=pt*A-Pt*ut;if(Math.abs(V)>Number.EPSILON){let K=Math.sqrt(E),nt=Math.sqrt(ut*ut+A*A),$=st.x-Pt/K,Tt=st.y+pt/K,xt=D.x-A/nt,St=D.y+ut/nt,Jt=((xt-$)*A-(St-Tt)*ut)/(pt*A-Pt*ut);Lt=$+pt*Jt-Q.x,rt=Tt+Pt*Jt-Q.y;let it=Lt*Lt+rt*rt;if(it<=2)return new et(Lt,rt);At=Math.sqrt(it/2)}else{let K=!1;pt>Number.EPSILON?ut>Number.EPSILON&&(K=!0):pt<-Number.EPSILON?ut<-Number.EPSILON&&(K=!0):Math.sign(Pt)===Math.sign(A)&&(K=!0),K?(Lt=-Pt,rt=pt,At=Math.sqrt(E)):(Lt=pt,rt=Pt,At=Math.sqrt(E/2))}return new et(Lt/At,rt/At)}let ct=[];for(let Q=0,st=F.length,D=st-1,Lt=Q+1;Q<st;Q++,D++,Lt++)D===st&&(D=0),Lt===st&&(Lt=0),ct[Q]=W(F[Q],F[D],F[Lt]);let dt=[],at,Dt=ct.concat();for(let Q=0,st=L.length;Q<st;Q++){let D=L[Q];at=[];for(let Lt=0,rt=D.length,At=rt-1,pt=Lt+1;Lt<rt;Lt++,At++,pt++)At===rt&&(At=0),pt===rt&&(pt=0),at[Lt]=W(D[Lt],D[At],D[pt]);dt.push(at),Dt=Dt.concat(at)}for(let Q=0;Q<m;Q++){let st=Q/m,D=f*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+x;for(let rt=0,At=F.length;rt<At;rt++){let pt=Y(F[rt],ct[rt],Lt);lt(pt.x,pt.y,-D)}for(let rt=0,At=L.length;rt<At;rt++){let pt=L[rt];at=dt[rt];for(let Pt=0,ut=pt.length;Pt<ut;Pt++){let A=Y(pt[Pt],at[Pt],Lt);lt(A.x,A.y,-D)}}}let ht=g+x;for(let Q=0;Q<G;Q++){let st=d?Y(S[Q],Dt[Q],ht):S[Q];v?(R.copy(U.normals[0]).multiplyScalar(st.x),T.copy(U.binormals[0]).multiplyScalar(st.y),P.copy(_[0]).add(R).add(T),lt(P.x,P.y,P.z)):lt(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<G;st++){let D=d?Y(S[st],Dt[st],ht):S[st];v?(R.copy(U.normals[Q]).multiplyScalar(D.x),T.copy(U.binormals[Q]).multiplyScalar(D.y),P.copy(_[Q]).add(R).add(T),lt(P.x,P.y,P.z)):lt(D.x,D.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let st=Q/m,D=f*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+x;for(let rt=0,At=F.length;rt<At;rt++){let pt=Y(F[rt],ct[rt],Lt);lt(pt.x,pt.y,u+D)}for(let rt=0,At=L.length;rt<At;rt++){let pt=L[rt];at=dt[rt];for(let Pt=0,ut=pt.length;Pt<ut;Pt++){let A=Y(pt[Pt],at[Pt],Lt);v?lt(A.x,A.y+_[h-1].y,_[h-1].x+D):lt(A.x,A.y,u+D)}}}H(),J();function H(){let Q=s.length/3;if(d){let st=0,D=G*st;for(let Lt=0;Lt<tt;Lt++){let rt=N[Lt];ft(rt[2]+D,rt[1]+D,rt[0]+D)}st=h+m*2,D=G*st;for(let Lt=0;Lt<tt;Lt++){let rt=N[Lt];ft(rt[0]+D,rt[1]+D,rt[2]+D)}}else{for(let st=0;st<tt;st++){let D=N[st];ft(D[2],D[1],D[0])}for(let st=0;st<tt;st++){let D=N[st];ft(D[0]+G*h,D[1]+G*h,D[2]+G*h)}}n.addGroup(Q,s.length/3-Q,0)}function J(){let Q=s.length/3,st=0;yt(F,st),st+=F.length;for(let D=0,Lt=L.length;D<Lt;D++){let rt=L[D];yt(rt,st),st+=rt.length}n.addGroup(Q,s.length/3-Q,1)}function yt(Q,st){let D=Q.length;for(;--D>=0;){let Lt=D,rt=D-1;rt<0&&(rt=Q.length-1);for(let At=0,pt=h+m*2;At<pt;At++){let Pt=G*At,ut=G*(At+1),A=st+Lt+Pt,E=st+rt+Pt,V=st+rt+ut,K=st+Lt+ut;zt(A,E,V,K)}}}function lt(Q,st,D){l.push(Q),l.push(st),l.push(D)}function ft(Q,st,D){Ct(Q),Ct(st),Ct(D);let Lt=s.length/3,rt=y.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Ht(rt[0]),Ht(rt[1]),Ht(rt[2])}function zt(Q,st,D,Lt){Ct(Q),Ct(st),Ct(Lt),Ct(st),Ct(D),Ct(Lt);let rt=s.length/3,At=y.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);Ht(At[0]),Ht(At[1]),Ht(At[3]),Ht(At[1]),Ht(At[2]),Ht(At[3])}function Ct(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Ht(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fo[s.type]().fromJSON(s)),new i(n,t.options)}},Jv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(d,1-g),new et(x,1-p)]:[new et(o,1-l),new et(h,1-u),new et(f,1-g),new et(m,1-p)]}};function Kv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var lr=class i extends zo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ho=class i extends zo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Vo=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new et;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,U=y+n+2,T=y+1;o.push(_,v,T),o.push(v,U,T)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Sn=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){let T=U/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],U=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(_,v,T),(p!==n-1||l<Math.PI)&&f.push(v,U,T)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cs=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Go=class i extends ce{constructor(t=new Uo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new et,h=new C,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(f,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);let v=a.normals[_],U=a.binormals[_];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,P=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+P*U.x,l.y=b*v.y+P*U.y,l.z=b*v.z+P*U.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let U=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),R=(s+1)*_+v,P=(s+1)*(_-1)+v;g.push(U,T,P),g.push(T,R,P)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Wo=class extends Se{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ce=class extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ki=class extends Ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var cr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bh=class extends cr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Iu:r=t,o=2*e-n;break;case Lu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:a=t,l=2*n-e;break;case Lu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+y*a[c+U]+_*a[l+U]+v*a[u+U];return r}},Eh=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},wh=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case $c:e=this.InterpolantFactoryMethodLinear;break;case Pl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return $c;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=$c;var hs=class extends zn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=fo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends zn{};Th.prototype.ValueTypeName="color";var Ah=class extends zn{};Ah.prototype.ValueTypeName="number";var Rh=class extends cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xo=class extends zn{InterpolantFactoryMethodLinear(t){return new Rh(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends zn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=fo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends zn{};Ch.prototype.ValueTypeName="vector";var Ph=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},jv=new Ph,Ih=class{constructor(t){this.manager=t!==void 0?t:jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Yo=class extends qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hc=new le,Od=new C,Bd=new C,Lh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),Bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bd),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Dh=class extends Lh{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zd(){return performance.now()}var $h="\\[\\]\\.:\\/",t_=new RegExp("["+$h+"]","g"),Jh="[^"+$h+"]",e_="[^"+$h.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",Jh),i_=/(WCOD+)?/.source.replace("WCOD",e_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),r_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),a_=new RegExp("^"+n_+i_+s_+r_+"$"),o_=["material","materials","bones","map"],Uh=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(t){let e=a_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Uh;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var jo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},l_=new ir(-1,1,1,-1,0,1),Kh=class extends ce{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},c_=new Kh,Vi=class{constructor(t){this._mesh=new Ut(c_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var dr=class extends En{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hi.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ua=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tl=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var el=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dr(jo),this.copyPass.material.blending=Yn,this.clock=new Zo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ua!==void 0&&(a instanceof ua?n=!0:a instanceof tl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nl=class extends En{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ff={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var fr=class i extends En{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,a,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Je(r,a,{type:bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Je(r,a,{type:bn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=ff;this.highPassUniforms=Hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=jo;this.copyUniforms=Hi.clone(h.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new Xe,this.fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};fr.BlurDirectionX=new et(1,0);fr.BlurDirectionY=new et(0,1);var pf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var il=class extends En{constructor(){super();let t=pf;this.uniforms=Hi.clone(t.uniforms),this.material=new Wo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var te=Math.PI*2,sn=10,cn=10,yi=cn/110,gr=32*yi,pr=92,Mi=58,fs=5,fn=1,h_=.75,sl=420,pe=(i,t,e)=>[i,t,e],ds=[{id:"night",name:"Neon Night",blurb:"Black 12-inch. Round and flat.",shape:{a:[0,0,0,0],p:[0,0,0,0]},waves:[],bowl:0,theme:{zen:pe(.006,.004,.03),mid:pe(.07,.012,.16),hor:pe(.55,.09,.3),sunA:pe(1,.12,.55),sunB:pe(1,.8,.15),sunEl:.2,sunSize:.25,moon:pe(.35,.8,1),aurora:1,stars:1,fog:pe(.2,.03,.13),vinyl:pe(.01,.009,.013),amb:pe(.25,.12,.3),hueL:.93,hueR:.53,hueSpread:.023,sunLight:pe(2.4,1.2,1.1),hemi:[16743088,1705520]}},{id:"dunes",name:"Amber Dunes",blurb:"Oval amber pressing, badly warped. The dunes are jumps.",shape:{a:[0,.2,0,0],p:[0,0,0,0]},waves:[{A:7,k:3,p:.6,tw:.012},{A:2.2,k:7,p:2,tw:-.02}],bowl:0,theme:{zen:pe(.035,.012,.07),mid:pe(.45,.1,.13),hor:pe(1,.5,.16),sunA:pe(1,.3,.08),sunB:pe(1,.9,.5),sunEl:.11,sunSize:.36,moon:pe(.5,.35,.3),aurora:0,stars:.35,fog:pe(.5,.2,.08),vinyl:pe(.15,.045,.005),amb:pe(1,.6,.35),hueL:.13,hueR:.97,hueSpread:.006,sunLight:pe(3.4,2.2,1.2),hemi:[16756832,4198408]}},{id:"flexi",name:"Blue Flexi",blurb:"Squared-off flexi disc, dished like a bowl under an aurora.",shape:{a:[0,0,0,.055],p:[0,0,0,Math.PI]},waves:[{A:2.6,k:4,p:.4,tw:0}],bowl:16,theme:{zen:pe(0,.012,.05),mid:pe(.015,.11,.2),hor:pe(.3,.7,.8),sunA:pe(.6,.9,1),sunB:pe(1,1,1),sunEl:.4,sunSize:.15,moon:pe(1,.6,.9),aurora:2.4,stars:1.5,fog:pe(.08,.28,.38),vinyl:pe(.004,.035,.09),amb:pe(.3,.7,1),hueL:.47,hueR:.8,hueSpread:.012,sunLight:pe(1.8,2.4,2.8),hemi:[8446207,399408]}}],eu=i=>ds.find(t=>t.id===i)||ds[0];function rl(i,t=ds[0]){let e=i/sn,n=fn+e+h_,s=pr+cn/2+n*cn,r=t.shape.a,a=Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])+Math.abs(r[3]),o=0;for(let l of t.waves)o-=Math.abs(l.A);return{duration:i,musicRevs:e,totalRevs:n,R0:s,R_EDGE:s+cn/2+10,world:t,sa:r,sp:t.shape.p,fMax:1+a,fMin:1-a,waves:t.waves,bowl:t.bowl,warpMin:o}}var tu=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function nu(i,t){return tu(0,.04,t)*tu(i.totalRevs,i.totalRevs-.04,t)}function ps(i,t){let e=i.sa,n=i.sp;return 1+e[0]*Math.cos(t+n[0])+e[1]*Math.cos(2*t+n[1])+e[2]*Math.cos(3*t+n[2])+e[3]*Math.cos(4*t+n[3])}function da(i,t,e){if(!i.waves.length&&!i.bowl)return 0;let n=tu(Mi+6,pr+26,t);if(n<=0)return 0;let s=0;for(let r of i.waves)s+=r.A*Math.sin(r.k*e+r.p+r.tw*t);if(i.bowl){let r=(t-pr)/(i.R0-pr);s+=i.bowl*r*r}return s*n}function jn(i,t,e,n){let s=Math.hypot(t,e),r=Math.atan2(-e,t);r<0&&(r+=te);let a=ps(i,r),o=s/a,l=r/te,c=(i.R0-o)/cn,h=c-l,u=Math.round(h);return n.rw=s,n.f=a,n.r=o,n.phi=r,n.fr=l,n.rho=c,n.n=u,n.e=(h-u)*cn,n.rev=u+l,n.inGroove=n.rev>=0&&n.rev<i.totalRevs,n}var Qn={};function fa(i,t,e){if(jn(i,t,e,Qn),!Qn.inGroove)return 0;let n=gr*nu(i,Qn.rev),s=Qn.e,r=Math.min(0,Math.sqrt(s*s+.09)-.3-n);return-Math.sqrt(r*r+.0625)+.25}function be(i,t,e){return fa(i,t,e)*Qn.f+da(i,Qn.r,Qn.phi)}function ms(i,t,e){return jn(i,t,e,Qn),da(i,Qn.r,Qn.phi)}function mr(i,t,e,n=0){let s=t*te,r=i.R0-t*cn-n,a=ps(i,s),o=r*a;return e.x=o*Math.cos(s),e.z=-o*Math.sin(s),e.r=r,e.phi=s,e.f=a,e}var Qh={},jh={};function xr(i,t,e,n){mr(i,t-2e-4,Qh,e),mr(i,t+2e-4,jh,e),mr(i,t,n,e);let r=jh.x-Qh.x,a=jh.z-Qh.z;return n.yaw=Math.atan2(-a,r),n.mPerRev=Math.hypot(r,a)/(2*2e-4),n}var wn={P:110,D:32,LAT_MAX:21,VERT_MAX:12,V0:.28};function iu(i){let t=Math.exp(-1/(.00318*i)),e=Math.exp(-1/(318e-6*i)),n=Math.exp(-1/(75e-6*i)),s=2*Math.PI*1e3/i,r=Math.cos(s),a=Math.sin(s),o=c=>Math.hypot(1-c*r,c*a),l=o(t)*o(n)/o(e);return{p1:t,z2:e,p3:n,gPlay:l}}function mf(i,t,e){let n=i.length,s=0,r=0;for(let at=0;at<n;at+=3){let Dt=i[at],ht=t[at],H=Dt*Dt+ht*ht;H>1e-6&&(s+=H,r+=2)}let a=Math.sqrt(s/Math.max(1,r)),o=Math.min(6,Math.max(.2,.126/Math.max(1e-5,a))),{p1:l,z2:c,p3:h,gPlay:u}=iu(e),d=-(l+h),f=l*h,g=1/u,x=Math.min(16e3,e*.42),m=Math.tan(Math.PI*x/e),p=Math.SQRT1_2,y=1/(1+m/p+m*m),_=m*m*y,v=2*_,U=_,T=2*(m*m-1)*y,R=(1-m/p+m*m)*y,P=Math.exp(-2*Math.PI*140/e),b=Math.exp(-2*Math.PI*6/e),S=Math.exp(-2*Math.PI*4/e),L=wn.V0*o,k=.32,N=new Float32Array(n),F=new Float32Array(n),Y=0,G=[new Float64Array(10),new Float64Array(10)],tt=0;for(let at=0;at<n;at++){let Dt=i[at],ht=t[at],H=.5*(Dt+ht),J=.5*(Dt-ht);Y=J+(Y-J)*P;let yt=J-Y;for(let lt=0;lt<2;lt++){let ft=G[lt],zt=lt===0?H+yt:H-yt,Ct=_*zt+v*ft[0]+U*ft[1]-T*ft[2]-R*ft[3];ft[1]=ft[0],ft[0]=zt,ft[3]=ft[2],ft[2]=Ct;let Ht=g*(Ct+d*ft[4]+f*ft[5])+c*ft[6];ft[5]=ft[4],ft[4]=Ct,ft[6]=Ht,Ht=k*Math.tanh(Ht*L/k);let Q=Ht<0?-Ht:Ht;Q>tt&&(tt=Q);let st=ft[7]*b+Ht/e;ft[7]=st;let D=ft[8]=st+(ft[8]-st)*S,Lt=(st-D)*1e6;lt===0?F[at]=-Lt:N[at]=Lt}}let W=0,ct=0;for(let at=0;at<n;at++){let Dt=N[at],ht=-F[at],H=Math.abs(Dt+ht)*Math.SQRT1_2,J=Math.abs(Dt-ht)*Math.SQRT1_2;H>W&&(W=H),J>ct&&(ct=J)}let dt=Math.min(1,wn.LAT_MAX/Math.max(1e-9,W),wn.VERT_MAX/Math.max(1e-9,ct));if(dt<1)for(let at=0;at<n;at++)N[at]*=dt,F[at]*=dt;return{dA:N,dB:F,sens:1/(wn.V0*dt),stats:{loud:o,scale:dt,cutDb:20*Math.log10(dt),latMax:W*dt,vertMax:ct*dt,peakVel:tt*dt,rms:a}}}function gf(i,t,e,n=2048){let s=i.length,r=Math.max(1,Math.ceil(s/e)),a=Math.ceil(s/r),o=[],l=a,c=0;for(;l>=32&&o.length<16;)o.push({n:l,off:c}),c+=l,l=l>>1;let h=Math.ceil(c/n),u=new Float32Array(h*n*4),d=1e-6;for(let p=0;p<s;p++){let y=Math.abs(i[p]),_=Math.abs(t[p]);y>d&&(d=y),_>d&&(d=_)}let f=1/d;for(let p=0;p<a;p++){let y=p*r,_=Math.min(s,y+r),v=0,U=0,T=0,R=0;for(let S=y;S<_;S++){let L=-t[S]*f,k=i[S]*f;v+=L,U+=k,T+=L*L,R+=k*k}let P=1/(_-y);v*=P,U*=P;let b=p*4;u[b]=v,u[b+1]=U,u[b+2]=Math.max(0,T*P-v*v),u[b+3]=Math.max(0,R*P-U*U)}for(let p=1;p<o.length;p++){let y=o[p-1],_=o[p];for(let v=0;v<_.n;v++){let U=(y.off+2*v)*4,T=(y.off+Math.min(y.n-1,2*v+1))*4,R=(_.off+v)*4,P=.5*(u[U]+u[T]),b=.5*(u[U+1]+u[T+1]);u[R]=P,u[R+1]=b,u[R+2]=Math.max(0,.5*(u[U+2]+u[U]*u[U]+u[T+2]+u[T]*u[T])-P*P),u[R+3]=Math.max(0,.5*(u[U+3]+u[U+1]*u[U+1]+u[T+3]+u[T+1]*u[T+1])-b*b)}}let g=1024,x=new Float32Array(g),m=o[o.length-1];for(let p=0;p<g;p++){let y=0;for(;y<o.length-1&&o[y].n>g*2;)y++;let _=Math.min(o[y].n-1,Math.floor(p/g*o[y].n)),v=(o[y].off+_)*4;x[p]=Math.sqrt(u[v+2]+u[v+3]+u[v]*u[v]+u[v+1]*u[v+1])}return{data:u,TW:n,rows:h,levels:o,dec:r,n0:a,peak:d,env:x}}var xf=Math.SQRT2,gs=Math.SQRT1_2,al=class{constructor(t){this.fs=t,this.NS=4,this.dt=1/(t*this.NS),this.mt=6e-7,this.Ma=.018,this.kc=83,this.cc=.05,this.cArm=.35,this.VTF=25e3,this.rTip=8,this.dSide=24,this.dUp=22,this.dHang=15,this.kStop=6e3,this.Lf=6,this.Tdown=5,this.Tup=14,this.rest=5,this.kLim=6e3,this.cLim=2;let e=this.VTF*gs,n=this.mt*Math.pow(2*Math.PI*17e3,2);this.d0=1.5*e/n,this.kappa=e/Math.pow(this.d0,1.5),this.kMax=this.mt*Math.pow(2*Math.PI*3e4,2),this.dMax=Math.pow(this.kMax/(1.5*this.kappa),2),this.FdMax=this.kappa*Math.pow(this.dMax,1.5),this.cv=.021,this.mu=.04,this.NMASK=(1<<18)-1,this.noise=new Float32Array(this.NMASK+1);let s=99991,r=0,a=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/2147483648-1);for(let u=0;u<=this.NMASK;u++){let d=a();r=r*.996+d,this.noise[u]=r*55e-5+d*4e-4}for(let u=0;u<4096;u++){let d=u/4096;this.noise[u]=this.noise[u]*d+this.noise[this.NMASK+1-4096+u]*0}this.noiseGain=1,this.dA=null,this.dB=null,this.len=0,this.spr=t*10,this.leadIn=1,this.totalRevs=0,this.sens=1,this.ys=0,this.zs=-wn.D,this.vys=0,this.vzs=0,this.ya=0,this.za=-wn.D,this.vya=0,this.vza=0,this.pPrevA=0,this.pPrevB=0,this.pPrevL=0;let o=iu(t);this.rz=o.z2,this.ra1=o.p1+o.p3,this.ra2=-o.p1*o.p3,this.rg=o.gPlay,this.eq=new Float64Array(8);let l=Math.tan(Math.PI*18/t),c=.707,h=1/(1+l/c+l*l);this.hb0=h,this.hb1=-2*h,this.hb2=h,this.ha1=2*(l*l-1)*h,this.ha2=(1-l/c+l*l)*h,this.hp=new Float64Array(8),this.tel={cA:0,cB:0,cL:0,n:0,sub:0,e:0,grooveN:0,pos:0,pk:0},this.wA=new Float64Array(10),this.wB=new Float64Array(10),this.scope=new Float32Array(256),this.scI=0,this.scN=0,this.tickBlock=-1,this.tickPos=-1,this.tickAmpA=0,this.tickAmpB=0}setRecord(t){this.dA=t.dA,this.dB=t.dB,this.len=t.dA?t.dA.length:0,this.spr=t.spr,this.leadIn=t.leadIn,this.totalRevs=t.totalRevs,this.sens=t.sens,this.realIn=t.realIn??.06,this.realOut=t.realOut??.1466}seat(t,e){this.ys=this.ya=t,this.zs=this.za=Math.min(0,e)-5,this.vys=this.vzs=this.vya=this.vza=0,this.pPrevA=this.pPrevB=this.pPrevL=0}process(t,e,n,s,r,a,o,l,c,h,u){let{NS:d,dt:f,mt:g,Ma:x,kc:m,cc:p,cArm:y,dSide:_,dUp:v,dHang:U,kStop:T,Lf:R,Tdown:P,Tup:b,rest:S,kLim:L,cLim:k,kappa:N,dMax:F,kMax:Y,FdMax:G,cv:tt,mu:W}=this,ct=wn.P,dt=wn.D,at=this.fs,Dt=this.dA,ht=this.dB,H=this.len,J=this.spr,yt=this.leadIn,lt=this.totalRevs,ft=this.noise,zt=this.NMASK,Ct=this.wA,Ht=this.wB,Q=this.noiseGain,st=1/n,D=1/d,Lt=this.VTF*h,rt=(o-a)*st*at,At=(c-l)*st*at,pt=this.sens*1e-6,Pt=this.eq,ut=this.hp,A=this.tel,E=this.rz,V=this.ra1,K=this.ra2,nt=this.rg,$=this.ys,Tt=this.zs,xt=this.vys,St=this.vzs,Jt=this.ya,it=this.za,bt=this.vya,Ot=this.vza,kt=this.pPrevA,Et=this.pPrevB,$t=this.pPrevL,Yt=1/f,xe=1/(2*this.rTip),O=0,vt=0,Z=0,j=A.pk,wt=!!Dt;for(let gt=0;gt<n;gt++){let Zt=gt*st,Ee=a+(o-a)*Zt,ze=l+(c-l)*Zt,he=s+(r-s)*Zt,mn=(r-s)*st*D,Cn=0,Rr=0;for(let Un=0;Un<d;Un++){let Pr=he+mn*(Un+1),wa=Pr-Math.floor(Pr),Ta=$/ct-wa,Ir=Math.round(Ta),w=(Ta-Ir)*ct,B=Ir+wa,X=0,q=0,z=0,ot=-Tt;if(B>=0&&B<lt){let qt=0,Fe=0,si=(B-yt)*J,Le=Math.floor(si),Nn=si-Le,gn=3.4907*(this.realOut-B/lt*(this.realOut-this.realIn))/at*1e6;if(wt&&Le>=4&&Le<H-6)for(let Gt=0;Gt<10;Gt++){let ve=Le-4+Gt;Ct[Gt]=Dt[ve]+ft[ve&zt]*Q,Ht[Gt]=ht[ve]+ft[ve+91733&zt]*Q}else for(let Gt=0;Gt<10;Gt++){let ve=Le-4+Gt;Ct[Gt]=ft[ve&zt]*Q,Ht[Gt]=ft[ve+91733&zt]*Q}let Gn=Le>>12;if(Gn!==this.tickBlock){this.tickBlock=Gn;let Gt=Math.imul(Gn^2654435769,2246822507);Gt^=Gt>>>13,Gt=Math.imul(Gt,3266489909),Gt^=Gt>>>16,(Gt&255)<9*Q?(this.tickPos=(Gn<<12)+(Gt>>>8&4095),this.tickAmpA=((Gt>>>20&15)/15-.4)*1.4,this.tickAmpB=((Gt>>>24&15)/15-.6)*1.4):this.tickPos=-1e9}let Oe=this.tickPos-Le;Oe>-5&&Oe<6&&(Ct[Oe+4]+=this.tickAmpA,Ht[Oe+4]+=this.tickAmpB,Oe+5<10&&(Ct[Oe+5]-=this.tickAmpA*.5,Ht[Oe+5]-=this.tickAmpB*.5));let hn=Nn*Nn,xn=hn*Nn,Lr=-.5*xn+hn-.5*Nn,Mu=1.5*xn-2.5*hn+1,Su=-1.5*xn+2*hn+.5*Nn,bu=.5*xn-.5*hn;qt=-1e9,Fe=-1e9;for(let Gt=-3;Gt<=3;Gt++){let ve=Gt+3,Eu=Gt*gn*(Gt*gn)*xe,wu=Lr*Ct[ve]+Mu*Ct[ve+1]+Su*Ct[ve+2]+bu*Ct[ve+3]-Eu;wu>qt&&(qt=wu);let Tu=Lr*Ht[ve]+Mu*Ht[ve+1]+Su*Ht[ve+2]+bu*Ht[ve+3]-Eu;Tu>Fe&&(Fe=Tu)}let Al=(-w-dt+xf*qt-Tt)*gs,Rl=(w-dt+xf*Fe-Tt)*gs,Aa=0;if(Al>0&&ot>0)if(Al<ot){let Gt=Al,ve=Gt<F?N*Gt*Math.sqrt(Gt):G+Y*(Gt-F);kt>0&&(ve+=tt*(Gt-kt)*Yt),ve>0&&(X=ve),kt=Gt}else Aa=ot,kt=0;else kt=0;if(Rl>0&&ot>0)if(Rl<ot){let Gt=Rl,ve=Gt<F?N*Gt*Math.sqrt(Gt):G+Y*(Gt-F);Et>0&&(ve+=tt*(Gt-Et)*Yt),ve>0&&(q=ve),Et=Gt}else Aa=ot,Et=0;else Et=0;if(Aa>0){let Gt=Aa,ve=Gt<F?N*Gt*Math.sqrt(Gt):G+Y*(Gt-F);$t>0&&(ve+=tt*(Gt-$t)*Yt),ve>0&&(z=ve),$t=Gt}else $t=0}else if(ot>0){let qt=ot,Fe=qt<F?N*qt*Math.sqrt(qt):G+Y*(qt-F);$t>0&&(Fe+=tt*(qt-$t)*Yt),Fe>0&&(z=Fe),$t=qt,kt=Et=0}else $t=kt=Et=0;X>0&&O++,q>0&&vt++,z>0&&Z++;let Mt=(X-q)*gs,Nt=(X+q)*gs+z;if(z>0){let qt=xt*.02;Mt-=W*z*(qt>1?1:qt<-1?-1:qt)}let Rt=Jt-$,Vt=it-Tt,Xt=m*Rt+p*(bt-xt),It=m*Vt+p*(Ot-St);Rt>_?Xt+=T*(Rt-_):Rt<-_&&(Xt+=T*(Rt+_)),Vt>U?It+=T*(Vt-U):Vt<-v&&(It+=T*(Vt+v));let ne=-Xt-y*(bt-rt),ue=-It-y*(Ot-At),de=Jt-Ee;de>R?ne-=L*(de-R)+k*(bt-rt):de<-R&&(ne-=L*(de+R)+k*(bt-rt));let Ze=ze-S-P,oe=ze-S+b;it<Ze?ue+=L*(Ze-it)-k*(Ot-At):it>oe&&(ue-=L*(it-oe)+k*(Ot-At)),xt+=(Mt+Xt)/g*f,St+=(Nt+It-Lt)/g*f,bt+=ne/x*f,Ot+=ue/x*f,$+=xt*f,Tt+=St*f,Jt+=bt*f,it+=Ot*f;let Ft=xt-bt,In=St-Ot;Cn+=(Ft+In)*gs,Rr+=(-Ft+In)*gs,Un===d-1&&(A.e=w,A.grooveN=Ir,A.pos=B)}if((this.scN++&7)===0){let Un=this.scI;this.scope[Un]=$-Jt,this.scope[Un+1]=Tt-it,this.scI=Un+2&255}let Cr=-Rr*D*pt,Hn=Cn*D*pt,Zi=nt*(Cr-E*Pt[0])+V*Pt[1]+K*Pt[2];Pt[0]=Cr,Pt[2]=Pt[1],Pt[1]=Zi;let Es=nt*(Hn-E*Pt[4])+V*Pt[5]+K*Pt[6];Pt[4]=Hn,Pt[6]=Pt[5],Pt[5]=Es;let Vn=this.hb0*Zi+this.hb1*ut[0]+this.hb2*ut[1]-this.ha1*ut[2]-this.ha2*ut[3];ut[1]=ut[0],ut[0]=Zi,ut[3]=ut[2],ut[2]=Vn;let Pn=this.hb0*Es+this.hb1*ut[4]+this.hb2*ut[5]-this.ha1*ut[6]-this.ha2*ut[7];ut[5]=ut[4],ut[4]=Es,ut[7]=ut[6],ut[6]=Pn,Vn*=u,Pn*=u;let $i=Vn<0?-Vn:Vn,ii=Pn<0?-Pn:Pn;$i>j&&(j=$i),ii>j&&(j=ii),t[gt]=$i<.6?Vn:Math.sign(Vn)*(.6+.38*Math.tanh(($i-.6)/.38)),e[gt]=ii<.6?Pn:Math.sign(Pn)*(.6+.38*Math.tanh((ii-.6)/.38))}if($!==$||Tt!==Tt||Math.abs(Tt)>1e5||Math.abs($-o)>1e5){this.seat(o,c),this.eq.fill(0),this.hp.fill(0);for(let gt=0;gt<n;gt++)t[gt]=0,e[gt]=0;return}this.ys=$,this.zs=Tt,this.vys=xt,this.vzs=St,this.ya=Jt,this.za=it,this.vya=bt,this.vza=Ot,this.pPrevA=kt,this.pPrevB=Et,this.pPrevL=$t,A.cA+=O,A.cB+=vt,A.cL+=Z,A.sub+=n*d,A.pk=j}};var ol=class{constructor(t,e){this.fs=t,this.post=e,this.sim=new al(t),this.c={t:0,q:0,qRate:0,rho:0,rhoRate:0,hb:-wn.D,g:1,follow:!0,sway:0},this.q=0,this.rate=0,this.yb=0,this.hb=-wn.D,this.g=1,this.gain=0,this.gainT=1,this.ready=!1,this.snap=!0,this.telN=0,this.haveCtl=!1}onMessage(t){t.type==="record"?(this.sim.setRecord(t),this.ready=!0,this.snap=!0,this.haveCtl=!1):t.type==="ctl"?(this.c=t,this.haveCtl=!0,t.snap&&(this.snap=!0)):t.type==="set"?(t.gain!=null&&(this.gainT=t.gain),t.vtf!=null&&(this.sim.VTF=t.vtf*9806.65),t.noise!=null&&(this.sim.noiseGain=t.noise)):t.type==="eject"&&(this.ready=!1,this.sim.setRecord({dA:null,dB:null,spr:this.sim.spr,leadIn:1,totalRevs:0,sens:1}))}render(t,e,n,s){if(!this.ready||!this.haveCtl){t.fill(0),e.fill(0);return}let r=this.fs,a=this.sim,o=wn.P;for(let l=0;l<n;l+=128){let c=Math.min(128,n-l),h=this.c,u=s+l/r-h.t;u>.3?u=.3:u<-.1&&(u=-.1);let d=h.q+h.qRate*u,f=h.follow?0:(h.rho+h.rhoRate*u)*o;(this.snap||Math.abs(d-this.q)>.02)&&(this.q=d,this.rate=h.qRate,this.hb=h.hb,this.g=h.g,this.yb=h.follow?(d+h.sway)*o:f,a.seat(this.yb,this.hb),this.snap=!1);let g=h.qRate+(d-this.q)*3;this.rate+=(g-this.rate)*.25;let x=this.q+this.rate*c/r,m=h.follow?(x+h.sway)*o:this.yb+(f-this.yb)*.5,p=this.hb+(h.hb-this.hb)*.5;if(this.g+=(h.g-this.g)*.5,this.gain+=(this.gainT-this.gain)*.05,a.process(l?t.subarray(l,l+c):c===n?t:t.subarray(0,c),l?e.subarray(l,l+c):c===n?e:e.subarray(0,c),c,this.q,x,this.yb,m,this.hb,p,this.g<0?0:this.g,this.gain),this.q=x,this.yb=(a.ys===a.ys,m),this.hb=p,this.telN+=c,this.telN>=768){this.telN=0;let y=a.tel,_=Math.max(1,y.sub);this.post({type:"tel",q:this.q,rate:this.rate,n:y.grooveN,e:y.e,ty:a.ys-this.yb,tz:a.zs,ay:a.ya-this.yb,az:a.za,cA:y.cA/_,cB:y.cB/_,cL:y.cL/_,pk:y.pk,scope:a.scope.slice(),scI:a.scI}),y.cA=y.cB=y.cL=y.sub=0,y.pk=0}}}};var ll=class{constructor(){this.ctx=null,this.node=null,this.tel=null,this.onTel=null,this.mode="none",this.clockOff=null,this.spec=new Uint8Array(512),this.wave=new Float32Array(1024),this.level=0,this.bass=0}async init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-4,this.limiter.knee.value=4,this.limiter.ratio.value=12,this.limiter.attack.value=.002,this.limiter.release.value=.12,this.analyser=e.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.72,this.master.connect(this.limiter),this.limiter.connect(this.analyser),this.analyser.connect(e.destination);let n=s=>{s.type==="tel"&&(this.tel=s,this.onTel&&this.onTel(s))};try{if(!e.audioWorklet)throw new Error("no AudioWorklet");try{await e.audioWorklet.addModule("worklet.js")}catch{let r=await(await fetch("worklet.js")).text();await e.audioWorklet.addModule(URL.createObjectURL(new Blob([r],{type:"application/javascript"})))}this.node=new AudioWorkletNode(e,"stylus",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.node.port.onmessage=s=>n(s.data),this.post=(s,r)=>this.node.port.postMessage(s,r||[]),this.mode="worklet"}catch(s){console.warn("AudioWorklet unavailable, using main-thread audio:",s);let r=new ol(e.sampleRate,n);this.node=e.createScriptProcessor(1024,0,2),this.node.onaudioprocess=a=>{let o=a.outputBuffer;r.render(o.getChannelData(0),o.getChannelData(1),o.length,a.playbackTime)},this.post=a=>r.onMessage(a),this.mode="main-thread"}this.node.connect(this.master)}async resume(){if(this.ctx&&this.ctx.state!=="running")try{await this.ctx.resume()}catch{}}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}decode(t){return new Promise((e,n)=>{let s=this.ctx.decodeAudioData(t,e,n);s&&s.catch&&s.catch(n)})}press(t,e,n=sl){let s=t.sampleRate,r=Math.min(t.length,Math.floor(n*s)),a=t.getChannelData(0).subarray(0,r),o=(t.numberOfChannels>1?t.getChannelData(1):t.getChannelData(0)).subarray(0,r),l=mf(a,o,s),c=r/s,h=rl(c),u=gf(l.dA,l.dB,Math.min(e,Math.ceil(c*4e3))),d=s*sn;return u.texPerRev=d/u.dec,this.post({type:"record",dA:l.dA,dB:l.dB,spr:d,leadIn:fn,totalRevs:h.totalRevs,sens:l.sens},this.mode==="worklet"?[l.dA.buffer,l.dB.buffer]:void 0),{layout:h,tex:u,stats:l.stats,duration:c,truncated:t.length>r}}now(t){let e=(t??performance.now())/1e3,n=this.ctx.currentTime-performance.now()/1e3;try{let s=this.ctx.getOutputTimestamp&&this.ctx.getOutputTimestamp();s&&s.contextTime>0&&s.performanceTime>0&&(n=s.contextTime-s.performanceTime/1e3)}catch{}return this.clockOff===null||Math.abs(n-this.clockOff)>.3?this.clockOff=n:this.clockOff+=(n-this.clockOff)*.012,e+this.clockOff}ctl(t,e){t.type="ctl",t.t=this.now(e),this.post(t)}set(t){t.type="set",this.post(t)}analyse(){if(!this.analyser)return;this.analyser.getByteFrequencyData(this.spec);let t=0;for(let n=1;n<6;n++)t+=this.spec[n];t/=1275;let e=0;for(let n=1;n<200;n++)e+=this.spec[n];e/=50745,this.bass+=(t-this.bass)*(t>this.bass?.6:.12),this.level+=(e-this.level)*.3}};var vf=`
uniform float uTime;
uniform float uSkyRot;
uniform float uSpec[32];
uniform float uBass;
uniform vec3 uZen, uMid, uHor, uSunA, uSunB, uMoon, uFog;
uniform float uSunEl, uSunSize, uAurora, uStars;
const float TAU = 6.28318530718;
vec3 hsv(float h, float s, float v){ vec3 k = vec3(1., 2./3., 1./3.); vec3 p = abs(fract(vec3(h)+k)*6.-3.); return v*mix(vec3(1.), clamp(p-1.,0.,1.), s); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*.1031); p3 += dot(p3, p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
vec3 skyBase(vec3 d, float detail){
  float c = cos(uSkyRot), s = sin(uSkyRot);
  d = vec3(c*d.x + s*d.z, d.y, -s*d.x + c*d.z);
  float az = atan(d.z, d.x), el = d.y;
  vec3 zen = uZen, mid = uMid, hor = uHor;
  float t = clamp(el,0.,1.);
  vec3 col = mix(hor, mid, smoothstep(0.,.2,t)); col = mix(col, zen, smoothstep(.12,.7,t));
  col *= 0.55 + 0.3*uBass;
  // striped sun
  vec3 sd = normalize(vec3(1., uSunEl, 0.));
  float sdot = dot(d, sd), ang = acos(clamp(sdot,-1.,1.));
  float disc = smoothstep(uSunSize + .012, uSunSize, ang);
  float stripes = smoothstep(-.2,.2, sin((d.y-.02)*120. - uTime*.7));
  stripes = mix(1., stripes, smoothstep(uSunEl + .06, uSunEl - .1, d.y));
  vec3 sunCol = mix(uSunA, uSunB, smoothstep(uSunEl - .2, uSunEl + .22, d.y))*1.6;
  col += disc*stripes*sunCol;
  col += uSunA*pow(max(sdot,0.),8.)*.16 + uSunB*pow(max(sdot,0.),60.)*.3;
  // a second, cold moon opposite
  vec3 md = normalize(vec3(-1., .55, .4));
  float mdot = dot(d, md);
  col += uMoon*(smoothstep(.9965,.9972,mdot)*2.5 + pow(max(mdot,0.),30.)*.35);
  // spectrum skyline on the horizon
  float a01 = fract(az/TAU + .5);
  float bi = floor(a01*128.), bf = fract(a01*128.);
  float m = mod(bi, 64.); int idx = int(m < 32. ? m : 63. - m);
  float sv = uSpec[idx];
  float h = 0.025 + 0.3*sv*sv;
  if (el < h && el > -0.01 && bf > .14 && bf < .86) {
    float seg = smoothstep(.15,.3, fract(el*64.));
    vec3 bc = hsv(a01*3. + uTime*.02, .85, 1.);
    col = mix(col, bc*(.35 + 1.5*el/h)*seg, .93);
  }
  // stars
  if (detail > .5 && el > .04) {
    vec2 sp = vec2(az*46., el*70.); vec2 ip = floor(sp); float r = hash12(ip); vec2 fp = fract(sp)-.5;
    col += step(.982, r)*smoothstep(.16,.0,length(fp))*vec3(1.,.9,1.)*2.2*uStars*(.5+.5*sin(uTime*3.+r*90.));
  }
  // aurora
  float au = sin(az*3. + uTime*.2 + sin(el*8.+uTime*.3)*1.5);
  float band = smoothstep(.22,.0,abs(el - (.45 + .1*au)))*(.5+.5*sin(az*14.+uTime));
  col += hsv(.45 + .15*au, .8, 1.)*band*.16*uAurora*(.5+uBass)*(.35 + .65*detail);
  if (el < 0.) col = mix(col, uZen*1.5 + uFog*.08, smoothstep(0., -.25, el));
  return col;
}
`,_f=`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position,1.); gl_Position = p.xyww; }
`,yf=`
precision highp float;
${vf}
varying vec3 vDir;
void main(){ gl_FragColor = vec4(skyBase(normalize(vDir), 1.), 1.); }
`,Mf=`
varying vec3 vWorld; varying vec3 vNrm;
void main(){ vec4 w = modelMatrix * vec4(position,1.); vWorld = w.xyz; vNrm = normal; gl_Position = projectionMatrix * viewMatrix * w; }
`,Sf=`
precision highp float;
precision highp sampler2D;
${vf}
uniform sampler2D uGroove; uniform float uTW; uniform float uLevOff[16]; uniform float uLevN[16]; uniform int uNumLev;
uniform float uR0, uPitch, uDepth, uTotalRevs, uLeadIn, uTexPerRev, uTraceGain, uREdge, uRLabel, uREnd;
uniform float uProg, uBlur, uHead, uTipGlow, uPulse;
uniform vec3 uBuggy, uBuggyFwd, uTip, uGlowCol, uSunDir;
uniform vec3 uLd[3]; uniform vec3 uLc[3];
uniform sampler2D uLabel;
uniform vec4 uShA, uShP; uniform vec3 uVinyl, uAmb, uSunLight; uniform float uHueL, uHueR, uHueSpread, uRLabelW;
varying vec3 vWorld; varying vec3 vNrm;
float shapeF(float a){ return 1. + uShA.x*cos(a+uShP.x) + uShA.y*cos(2.*a+uShP.y) + uShA.z*cos(3.*a+uShP.z) + uShA.w*cos(4.*a+uShP.w); }
float shapeD(float a){ return -(uShA.x*sin(a+uShP.x) + 2.*uShA.y*sin(2.*a+uShP.y) + 3.*uShA.z*sin(3.*a+uShP.z) + 4.*uShA.w*sin(4.*a+uShP.w)); }

vec4 fetchLev(int l, float x){
  float n = uLevN[l]; float xi = floor(x); float f = x - xi;
  float a0 = uLevOff[l] + clamp(xi, 0., n-1.), a1 = uLevOff[l] + clamp(xi+1., 0., n-1.);
  ivec2 p0 = ivec2(int(mod(a0, uTW)), int(floor(a0/uTW))), p1 = ivec2(int(mod(a1, uTW)), int(floor(a1/uTW)));
  return mix(texelFetch(uGroove, p0, 0), texelFetch(uGroove, p1, 0), f);
}
vec3 N, Tn, B, V, albedo; float rough;
vec3 shade(vec3 Ld, vec3 Lc){
  float NL = max(dot(N,Ld),0.); if (NL <= 0.) return vec3(0.);
  vec3 H = normalize(Ld+V); float NH = max(dot(N,H),0.), TH = dot(Tn,H), BH = dot(B,H);
  float at = 0.06, ab = 0.3 + rough;
  float d = TH*TH/(at*at) + BH*BH/(ab*ab) + NH*NH; float Dg = 1./(3.14159*at*ab*d*d);
  float F = 0.05 + 0.95*pow(1.-max(dot(H,V),0.),5.);
  // diffraction off the cut: rainbow orders fanning out across the grooves
  float w = abs(BH);
  vec3 rb = hsv(w*4.5, .95, 1.)*exp(-TH*TH*90.)*smoothstep(.04,.2,w)*smoothstep(.95,.4,w);
  return Lc*(Dg*F*.095 + rb*.02 + albedo)*NL;
}
void main(){
  vec2 pw = vWorld.xz; float rw = length(pw);
  V = normalize(cameraPosition - vWorld);
  vec2 rad = pw/max(rw,1e-3);
  float phi = atan(-pw.y, pw.x); if (phi < 0.) phi += TAU; float fr = phi/TAU;
  // disc space: the round, flat record this world is a stretched and warped copy of
  float sf = shapeF(phi), sd_ = shapeD(phi);
  vec2 p = pw/sf; float r = rw/sf;
  vec2 Ed = -rad, Td = vec2(rad.y, -rad.x);
  // world-space frame for lighting: up is the warped surface, E points across the groove toward the spindle
  vec3 U = normalize(vNrm);
  vec2 g2 = rad - (sd_/sf)*Td;
  vec3 E = -normalize(vec3(g2.x, 0., g2.y)); E = normalize(E - U*dot(E,U));
  vec3 Tg = cross(E, U);
  float rho = (uR0 - r)/uPitch, u = rho - fr, n = floor(u+.5), e = (u-n)*uPitch, rev = n + fr;
  bool inG = rev >= 0. && rev < uTotalRevs;
  float D = uDepth*smoothstep(0.,.04,rev)*smoothstep(uTotalRevs, uTotalRevs-.04, rev);
  vec2 dx = dFdx(p), dy = dFdy(p);
  float fT = max(abs(dot(dx,Td)), abs(dot(dy,Td)));
  float fE = max(abs(dot(dx,Ed)), abs(dot(dy,Ed)));
  float far = smoothstep(.5, 2.4, fE);
  N = U; albedo = uVinyl; rough = 0.1;
  vec3 emis = vec3(0.); float ao = 1.;
  if (rw < uRLabelW) {
    // paper label
    vec2 uv = vec2(.5 + pw.x/(2.*uRLabelW), .5 - pw.y/(2.*uRLabelW));
    vec3 lab = texture2D(uLabel, uv).rgb;
    albedo = lab*.55; rough = .5;
    emis += lab*lab*(.12 + .5*uBass*uBass);
  } else if (inG) {
    float side = e > 0. ? 1. : -1.;
    float played = smoothstep(uProg + .0015, uProg - .0015, rev);
    float front = exp(-abs(rev-uProg)*520.);
    vec3 cL = hsv(uHueL + rev*uHueSpread + uTime*uHueSpread*.5, .86, 1.), cR = hsv(uHueR + rev*uHueSpread + uTime*uHueSpread*.5, .86, 1.);
    float heat = .28 + .95*played + 1.1*front;
    if (abs(e) < D && D > .05) {
      float sw = abs(e)/D;
      N = normalize(U - side*E);
      float mpt = TAU*r/uTexPerRev;
      float lod = min(log2(max(1., (fT + uBlur)/mpt)), float(uNumLev-1));
      int l0 = int(floor(lod)); int l1 = min(l0+1, uNumLev-1); float lf = lod - float(l0);
      float x0 = (rev - uLeadIn)*uTexPerRev;
      vec4 g = vec4(0.); float slope = 0.;
      if (x0 >= 0. && x0 < uLevN[0]) {
        float s0 = exp2(float(l0)), xa = x0/s0 - .5, xb = x0/exp2(float(l1)) - .5;
        g = mix(fetchLev(l0, xa), fetchLev(l1, xb), lf);
        vec4 gp = fetchLev(l0, xa + .5), gm = fetchLev(l0, xa - .5);
        slope = (side > 0. ? gp.x - gm.x : gp.y - gm.y)/(mpt*s0);
      }
      float mean = side > 0. ? g.x : g.y, var = side > 0. ? g.z : g.w;
      float tr = .5 + .27*clamp(mean*uTraceGain, -1.4, 1.4);
      float sig2 = .0009 + var*uTraceGain*uTraceGain*.073 + fE*fE/(D*D)*.5;
      float dd = sw - tr;
      // a crisp line at the local mean, inside an aura as wide as the signal is loud
      float core2 = .0009 + fE*fE/(D*D)*.5;
      float I = .6*exp(-dd*dd/(2.*core2))*sqrt(.0009/core2) + .7*exp(-dd*dd/(2.*sig2))*sqrt(.0009/sig2);
      emis += (side > 0. ? cL : cR)*I*heat;
      float tilt = clamp(slope*uTraceGain*D*.27, -1.4, 1.4)*(1. - smoothstep(1.5, 5., lod));
      N = normalize(N - Tg*tilt*.6);
      rough = .08 + .3*clamp(sqrt(var)*uTraceGain, 0., 1.);
      ao = mix(.45, 1., sw);
      // crease and rim catch light
      emis += vec3(.9,.95,1.)*(smoothstep(.04,.0,sw)*.05);
    } else {
      float mg = sin(r*38.)*.05*(1.-smoothstep(.01,.06,fE));
      N = normalize(U + E*mg);
    }
    // distant grooves melt into a sheen of their average glow
    vec3 avg = (cL + cR)*.5*heat*.035;
    emis = mix(emis, avg, far); N = normalize(mix(N, U, far)); rough += far*.25; ao = mix(ao, .85, far);
  } else {
    float mg = sin(r*38.)*.05*(1.-smoothstep(.01,.06,fE));
    N = normalize(U + E*mg);
    // run-out area: a few etched rings
    float ring = smoothstep(.25,.0,abs(r - (uRLabel + 10.))) + smoothstep(.2,.0,abs(r - (uREnd - 8.)));
    emis += vec3(.5,.3,.8)*ring*.05;
  }
  B = normalize(cross(N, Tg)); Tn = normalize(cross(B, N));
  // buggy shadow
  vec3 tb = vWorld - uBuggy; float d2 = dot(tb.xz, tb.xz);
  float shadow = 1. - .65*exp(-d2*.09)*step(vWorld.y, uBuggy.y + .6);
  vec3 col = vec3(0.);
  col += shade(uSunDir, uSunLight)*shadow;
  for (int i = 0; i < 3; i++) col += shade(uLd[i], uLc[i])*shadow;
  // sky reflection
  vec3 Rf = reflect(-V, N); float occ = 1.; if (Rf.y < 0.) { Rf.y = -Rf.y; occ = .35; }
  float Fe = .03 + .5*pow(1. - max(dot(N,V),0.), 4.);
  col += skyBase(Rf, 0.)*Fe*(1. - .6*rough)*occ*ao*shadow*.8;
  col += albedo*uAmb*ao*(1. + .6*max(dot(N,uSunDir),0.));
  // headlights
  vec3 hp = uBuggy + U*1.1 + uBuggyFwd*1.6; vec3 th = vWorld - hp; float hd = length(th); vec3 hl = th/max(hd,1e-3);
  float cone = smoothstep(.80,.97, dot(hl, normalize(uBuggyFwd - U*.11)));
  float hatt = cone*uHead/(1. + hd*hd*.0011);
  col += shade(-hl, vec3(1.,.93,.78)*hatt*16.) + vec3(.9,.85,.7)*hatt*.05*max(dot(N,-hl),0.)*ao;
  // underglow and the glowing diamond
  col += uGlowCol*(1.3/(1. + d2*.07))*.22*ao;
  vec3 tt = vWorld - uTip; col += vec3(1.,.85,.55)*uTipGlow/(1. + dot(tt,tt)*1.2);
  // bass pulse travelling out from the spindle
  float pr = fract(uTime*.45)*uREdge;
  emis += hsv(uTime*.07, .8, 1.)*exp(-pow((r-pr)/7.,2.))*.07*uPulse;
  // edge bead
  emis += vec3(1.,.25,.7)*smoothstep(2.2,.0,abs(r - (uREdge - 1.5)))*.35;
  col += emis;
  // air perspective toward the horizon glow
  float dist = length(cameraPosition - vWorld);
  col = mix(col, uFog*(.6+.3*uBass), 1. - exp(-dist*.0004));
  gl_FragColor = vec4(col, 1.);
}
`,bf=`
precision highp float;
uniform sampler2D tDiffuse; uniform float uSpeed, uTime, uFlash, uAspect;
varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
void main(){
  vec2 c = vUv - .5; float rr = dot(c,c);
  // radial speed smear + chromatic split, both growing with speed
  vec3 col = vec3(0.); float tot = 0.;
  float k = uSpeed*.022;
  for (int i = 0; i < 6; i++) { float f = float(i)/5.; float s = 1. - k*f*rr*4.; vec2 uv = .5 + c*s;
    vec3 smp = vec3(texture2D(tDiffuse, .5 + c*s*(1. + (.004+.012*uSpeed)*rr)).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, .5 + c*s*(1. - (.004+.012*uSpeed)*rr)).b);
    float w = 1. - f*.6; col += smp*w; tot += w; }
  col /= tot;
  // speed lines at the edge
  float a = atan(c.y, c.x*uAspect); float ln = h(vec2(floor(a*60.), floor(uTime*24.)));
  col += vec3(1.,.9,1.)*step(.965, ln)*smoothstep(.16,.45,rr)*max(0., uSpeed - .55)*.07;
  col *= 1. - rr*.75;
  col += uFlash*vec3(1.,.9,.95);
  col += (h(vUv*vec2(1920.,1080.) + uTime) - .5)*.025;
  gl_FragColor = vec4(col, 1.);
}
`;function u_(i,t){let e=[],n=[],s=cn,r=gr,a=(p,y,_)=>{let v=ps(i,y),U=p*v;e.push(U*Math.cos(y),_*v+da(i,p,y),-U*Math.sin(y))},o=Math.ceil(i.totalRevs*t),l=[-s/2,-r,0,r,s/2];for(let p=0;p<=o;p++){let y=Math.min(i.totalRevs,p/t),_=y*te,v=i.R0-y*s,U=nu(i,y);for(let T=0;T<5;T++)a(v-l[T],_,T===2?-r*U:0);if(p<o){let T=p*5;for(let R=0;R<4;R++)n.push(T+R,T+R+1,T+5+R,T+R+1,T+5+R+1,T+5+R)}}let c=e.length/3;for(let p=0;p<=t;p++){let y=p/t,_=y*te,v=i.R0+s/2-y*s;if(a(i.R_EDGE,_,0),a(v,_,0),p<t){let U=c+p*2;n.push(U,U+1,U+2,U+1,U+3,U+2)}}c=e.length/3;let h=i.totalRevs-Math.floor(i.totalRevs),u=1e-5,d=6;for(let p=0;p<=t;p++){let y=h+u+p/t*(1-2*u),_=y-Math.floor(y),v=_*te,U=Math.floor(i.totalRevs-_)+_,T=i.R0-U*s-s/2;for(let R=0;R<d;R++)a(R===d-1?.5:T+(Mi+6-T)*(R/(d-2)),v,0);if(p<t){let R=c+p*d;for(let P=0;P<d-1;P++)n.push(R+P,R+P+1,R+d+P,R+P+1,R+d+P+1,R+d+P)}}let f=new ce;f.setAttribute("position",new Wt(e,3));let g=new Float32Array(e.length),x=!i.waves.length&&!i.bowl,m=1.2;for(let p=0;p<e.length;p+=3){if(x){g[p+1]=1;continue}let y=e[p],_=e[p+2],v=(ms(i,y+m,_)-ms(i,y-m,_))/(2*m),U=(ms(i,y,_+m)-ms(i,y,_-m))/(2*m),T=1/Math.hypot(v,1,U);g[p]=-v*T,g[p+1]=T,g[p+2]=-U*T}return f.setAttribute("normal",new Ae(g,3)),f.setIndex(n),f.computeBoundingSphere(),f}function d_(i,t){let n=[],s=[];for(let a=0;a<=240;a++){let o=a/240*te,l=ps(i,o),c=i.R_EDGE*l,h=c*Math.cos(o),u=-c*Math.sin(o);if(n.push(h,da(i,i.R_EDGE,o),u,h,t,u),a<240){let d=a*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}let r=new ce;return r.setAttribute("position",new Wt(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function Ef(i,t,e,n,s,r,a,o,l=1,c=!1){i.save(),i.font=a,i.fillStyle=o,i.textAlign="center",i.textBaseline="middle";let h=[...t].map(f=>i.measureText(f).width*l),u=h.reduce((f,g)=>f+g,0),d=r-(c?-1:1)*u/s/2;[...t].forEach((f,g)=>{let x=h[g],m=d+(c?-1:1)*x/s/2;i.save(),i.translate(e+Math.cos(m)*s,n+Math.sin(m)*s),i.rotate(m+(c?-Math.PI/2:Math.PI/2)),i.fillText(f,0,0),i.restore(),d+=(c?-1:1)*x/s}),i.restore()}function su(i,t,e,n){let s=i.width,r=s/2,a=i.getContext("2d"),o=(f,g,x)=>`hsl(${(f%360+360)%360} ${g}% ${x}%)`;a.clearRect(0,0,s,s);let l=a.createRadialGradient(r,r,s*.05,r,r,r);l.addColorStop(0,o(n+40,95,62)),l.addColorStop(.55,o(n,92,52)),l.addColorStop(1,o(n-50,90,34)),a.fillStyle=l,a.beginPath(),a.arc(r,r,r,0,te),a.fill(),a.save(),a.translate(r,r);for(let f=0;f<36;f++)a.rotate(te/36),a.fillStyle=f%2?o(n+150,95,60):o(n+185,95,55),a.globalAlpha=.22,a.beginPath(),a.moveTo(0,0),a.arc(0,0,r,0,te/72),a.fill();a.restore(),a.globalAlpha=1,a.lineWidth=s*.012,a.strokeStyle="#0a0612",a.beginPath(),a.arc(r,r,r*.965,0,te),a.stroke(),a.lineWidth=s*.006,a.strokeStyle="#fff6d8",a.beginPath(),a.arc(r,r,r*.93,0,te),a.stroke(),a.beginPath(),a.arc(r,r,r*.33,0,te),a.stroke();let c='"Bungee", "Arial Black", Impact, sans-serif',h='"Chakra Petch", "Trebuchet MS", sans-serif';Ef(a,"WAX RALLY RECORDS",r,r,r*.8,-Math.PI/2,`${s*.085}px ${c}`,"#0a0612",1.06),Ef(a,"\u2605 33\u2153 RPM \u2605 STEREO \u2605 CUT IN REAL TIME \u2605",r,r,r*.82,Math.PI/2,`600 ${s*.04}px ${h}`,"#0a0612",1.1,!0),a.textAlign="center",a.fillStyle="#fff6d8",a.strokeStyle="#0a0612",a.lineJoin="round";let u=(t||"UNTITLED").toUpperCase(),d=s*.1;for(a.font=`${d}px ${c}`;a.measureText(u).width>s*.72&&d>s*.035;)d*=.94,a.font=`${d}px ${c}`;if(a.measureText(u).width>s*.72){for(;u.length>4&&a.measureText(u+"\u2026").width>s*.72;)u=u.slice(0,-1);u+="\u2026"}a.lineWidth=d*.22,a.strokeText(u,r,r-s*.2),a.fillText(u,r,r-s*.2),a.font=`600 ${s*.036}px ${h}`,a.fillStyle="#0a0612",a.fillText(e||"",r,r-s*.2+d*.85),a.font=`${s*.05}px ${c}`,a.fillText("SIDE A",r-s*.28,r+s*.02),a.fillText("45\xB0/45\xB0",r+s*.28,r+s*.02),a.font=`600 ${s*.03}px ${h}`,a.fillText("LEFT = INNER WALL \xB7 RIGHT = OUTER WALL",r,r+s*.24),a.fillText("KEEP NEEDLE CLEAN \xB7 DRIVE LOUD",r,r+s*.285)}var cl=class{constructor(t,e){this.scene=t,this.quality=e,this.mesh=null,this.layout=null,this.labelCanvas=document.createElement("canvas"),this.labelCanvas.width=this.labelCanvas.height=e.mobile?512:1024,this.labelTex=new Kn(this.labelCanvas),this.labelTex.colorSpace=$e,this.labelTex.anisotropy=4;let n=new ar(new Float32Array(16),2,2,un,yn);n.needsUpdate=!0,this.grooveTex=n,this.uniforms={uTime:{value:0},uSkyRot:{value:0},uSpec:{value:new Float32Array(32)},uBass:{value:0},uGroove:{value:n},uTW:{value:2048},uLevOff:{value:new Float32Array(16)},uLevN:{value:new Float32Array(16).fill(1)},uNumLev:{value:1},uR0:{value:300},uPitch:{value:cn},uDepth:{value:gr},uTotalRevs:{value:0},uLeadIn:{value:fn},uTexPerRev:{value:1e3},uTraceGain:{value:1},uREdge:{value:320},uRLabel:{value:Mi},uREnd:{value:pr},uProg:{value:0},uBlur:{value:0},uHead:{value:1},uTipGlow:{value:.5},uPulse:{value:0},uBuggy:{value:new C},uBuggyFwd:{value:new C(1,0,0)},uTip:{value:new C},uGlowCol:{value:new C(.2,1,.9)},uSunDir:{value:new C(1,.2,0).normalize()},uLd:{value:[new C(0,1,0),new C(0,1,0),new C(0,1,0)]},uLc:{value:[new C(2,.3,1.6),new C(.2,1.6,2),new C(1.8,1.5,.2)]},uLabel:{value:this.labelTex},uShA:{value:new Me},uShP:{value:new Me},uRLabelW:{value:Mi},uZen:{value:new C},uMid:{value:new C},uHor:{value:new C},uSunA:{value:new C},uSunB:{value:new C},uMoon:{value:new C},uFog:{value:new C},uSunEl:{value:.2},uSunSize:{value:.25},uAurora:{value:1},uStars:{value:1},uVinyl:{value:new C(.01,.009,.013)},uAmb:{value:new C(.25,.12,.3)},uSunLight:{value:new C(2.4,1.2,1.1)},uHueL:{value:.93},uHueR:{value:.53},uHueSpread:{value:.023}},this.material=new Se({uniforms:this.uniforms,vertexShader:Mf,fragmentShader:Sf,side:tn}),this.edge=new Ut(new ce,new Ce({color:328967,roughness:.25,metalness:.2,side:tn})),this.edge.frustumCulled=!1,t.add(this.edge),this.platterTop=-3,this.platter=new Ut(new nn(1.02,1.02,10,160,1,!1),new Ce({color:9080732,roughness:.32,metalness:1})),this.platter.position.y=-8.01,t.add(this.platter),this.strobeMat=new Se({uniforms:{uTime:{value:0},uRate:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"precision highp float; uniform float uTime, uRate; varying vec2 vUv; void main(){ float row = floor(vUv.y*4.); float n = 180. + row*6.; float d = fract(vUv.x*n + uTime*(row-1.5)*.6); float dot_ = smoothstep(.2,.3,d)*smoothstep(.8,.7,d)*smoothstep(.1,.25,fract(vUv.y*4.))*smoothstep(.9,.75,fract(vUv.y*4.)); gl_FragColor = vec4(mix(vec3(.02), vec3(1.,.35,.2)*3.5, dot_), 1.); }"}),this.strobe=new Ut(new nn(1.021,1.021,6,160,1,!0),this.strobeMat),this.strobe.position.y=-8,t.add(this.strobe)}setSong(t,e,n,s,r){this.layout=t,this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose());let a=this.quality.mobile?360:600;this.mesh=new Ut(u_(t,a),this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.grooveTex&&this.grooveTex.dispose();let o=new ar(e.data,e.TW,e.rows,un,yn);o.minFilter=o.magFilter=ln,o.generateMipmaps=!1,o.needsUpdate=!0,this.grooveTex=o;let l=this.uniforms;l.uGroove.value=o,l.uTW.value=e.TW,l.uNumLev.value=e.levels.length;for(let f=0;f<16;f++){let g=e.levels[Math.min(f,e.levels.length-1)];l.uLevOff.value[f]=g.off,l.uLevN.value[f]=g.n}l.uR0.value=t.R0,l.uTotalRevs.value=t.totalRevs,l.uTexPerRev.value=e.texPerRev,l.uREdge.value=t.R_EDGE;let c=0;for(let f=0;f<e.env.length;f++)c+=e.env[f]*e.env[f];let h=Math.sqrt(c/e.env.length)||.3;l.uTraceGain.value=Math.min(4,Math.max(1,.55/h));let u=this.platterTop=t.warpMin-3,d=t.R_EDGE*t.fMax+34;this.edge.geometry.dispose(),this.edge.geometry=d_(t,u),this.platter.scale.set(d,1,d),this.platter.position.y=u-5.01,this.strobe.scale.set(d,1,d),this.strobe.position.y=u-5,l.uShA.value.fromArray(t.sa),l.uShP.value.fromArray(t.sp),l.uRLabelW.value=Mi*t.fMin*.985,this.setTheme(t.world.theme),su(this.labelCanvas,n,s,r),this.labelTex.needsUpdate=!0}setTheme(t){let e=this.uniforms;for(let[n,s]of[["uZen",t.zen],["uMid",t.mid],["uHor",t.hor],["uSunA",t.sunA],["uSunB",t.sunB],["uMoon",t.moon],["uFog",t.fog],["uVinyl",t.vinyl],["uAmb",t.amb],["uSunLight",t.sunLight]])e[n].value.fromArray(s);e.uSunEl.value=t.sunEl,e.uSunSize.value=t.sunSize,e.uAurora.value=t.aurora,e.uStars.value=t.stars,e.uHueL.value=t.hueL,e.uHueR.value=t.hueR,e.uHueSpread.value=t.hueSpread}};var ru=class{constructor(t,e=800){this.n=e,this.i=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.base=new Float32Array(e*4),this.grav=new Float32Array(e);let n=new ce;n.setAttribute("position",new Ae(this.pos,3)),n.setAttribute("aColor",new Ae(this.col,3)),n.setAttribute("aSize",new Ae(this.size,1)),this.mat=new Se({uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:Dn,vertexShader:"attribute float aSize; attribute vec3 aColor; uniform float uScale; varying vec3 vC; void main(){ vC = aColor; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = aSize*uScale/max(.2,-mv.z); }",fragmentShader:"precision highp float; varying vec3 vC; void main(){ float d = length(gl_PointCoord-.5); float a = smoothstep(.5,.05,d); gl_FragColor = vec4(vC*a*a, 1.); }"}),this.points=new Po(n,this.mat),this.points.frustumCulled=!1,t.add(this.points),this.geo=n}emit(t,e,n,s,r,a,o,l,c,h,u,d=22){let f=this.i;this.i=(f+1)%this.n;let g=f*3;this.pos[g]=t,this.pos[g+1]=e,this.pos[g+2]=n,this.vel[g]=s,this.vel[g+1]=r,this.vel[g+2]=a,this.base[f*4]=o,this.base[f*4+1]=l,this.base[f*4+2]=c,this.base[f*4+3]=u,this.life[f]=h,this.max[f]=h,this.grav[f]=d}update(t,e){let{pos:n,vel:s,life:r,max:a,col:o,size:l,base:c,n:h,grav:u}=this;for(let d=0;d<h;d++){if(r[d]<=0){l[d]=0;continue}r[d]-=t;let f=d*3;if(s[f+1]-=u[d]*t,n[f]+=s[f]*t,n[f+1]+=s[f+1]*t,n[f+2]+=s[f+2]*t,e&&u[d]>0){let x=e(n[f],n[f+2]);n[f+1]<x&&(n[f+1]=x,s[f+1]*=-.45,s[f]*=.7,s[f+2]*=.7)}let g=Math.max(0,r[d]/a[d]);o[f]=c[d*4]*g,o[f+1]=c[d*4+1]*g,o[f+2]=c[d*4+2]*g,l[d]=c[d*4+3]*(.4+.6*g)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0}},hl=class{constructor(t,e,n){this.scene=t,this.shared=n,this.skyMat=new Se({uniforms:n,vertexShader:_f,fragmentShader:yf,side:en,depthWrite:!1}),this.sky=new Ut(new Sn(1,32,20),this.skyMat),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,t.add(this.sky),this.hemi=new Yo(16743088,1705520,.6),t.add(this.hemi),this.sun=new la(16756880,2.2),t.add(this.sun),this.spots=[16728016,3201279,16769072].map(c=>{let h=new la(c,1.3);return t.add(h),h}),this.renderer=e;let s=new Ce({color:16777215,metalness:1,roughness:.06}),r=new Ut(new nn(fs,fs,26,40),s);r.position.y=13,t.add(r);let a=new Ut(new Sn(fs,32,16,0,Math.PI*2,0,Math.PI/2),s);a.position.y=26,t.add(a),this.ball=new Ut(new lr(11,3),new Ce({color:16777215,metalness:1,roughness:.05,flatShading:!0,envMapIntensity:.55})),this.ball.position.y=52,t.add(this.ball);let o=new Ut(new nn(.25,.25,4e3,6),new Xe({color:3346756}));o.position.y=2063,t.add(o),this.speakers=new De,t.add(this.speakers),this.cones=[];let l=new Ce({color:789522,roughness:.55,metalness:.4});for(let c=0;c<10;c++){let h=new De,u=new Ut(new Ue(14,30,18),l);u.position.y=15,h.add(u);for(let[d,f]of[[9,6.2],[22,4]]){let g=new Xe;g.toneMapped=!1;let x=new Ut(new Vo(f*.72,f,32),g);x.position.set(-7.05,d,0),x.rotation.y=-Math.PI/2,h.add(x);let m=new Ut(new _i(f*.7,24),new Ce({color:1710626,roughness:.4,metalness:.6}));m.position.set(-7.03,d,0),m.rotation.y=-Math.PI/2,h.add(m),this.cones.push({m:g,ring:x,cone:m,hue:c/10+(f<5?.5:0),small:f<5})}this.speakers.add(h)}this.sparks=new ru(t,900),this._c=new Bt}setSong(t,e=-3){let n=this.speakers.children.length;this.speakers.children.forEach((r,a)=>{let o=a/n*Math.PI*2+.3,l=(t.R_EDGE+20)*ps(t,o);r.position.set(Math.cos(o)*l,e,-Math.sin(o)*l),r.rotation.y=o});let s=t.world.theme;this.sunEl=s.sunEl,this.hemi.color.setHex(s.hemi[0]),this.hemi.groundColor.setHex(s.hemi[1]),this.sun.color.setRGB(s.sunLight[0],s.sunLight[1],s.sunLight[2]).multiplyScalar(.4),this.bakeEnv()}bakeEnv(){try{let t=this.shared,e=new sr(this.renderer),n=new rr,s=new Ut(this.sky.geometry,this.skyMat);s.frustumCulled=!1,n.add(s);let r=t.uSpec.value.slice(),a=t.uSkyRot.value;t.uSpec.value.fill(.45),t.uSkyRot.value=0;let o=this.env;this.env=e.fromScene(n,0,.1,100).texture,this.scene.environment=this.env,this.scene.environmentIntensity=1.1,t.uSpec.value.set(r),t.uSkyRot.value=a,e.dispose(),o&&o.dispose()}catch(t){console.warn("environment bake failed",t)}}update(t,e,n,s,r){let a=this.shared;a.uTime.value=e,a.uSkyRot.value=n,a.uBass.value=s;let o=this.sunEl??.2,l=1/Math.hypot(1,o),c=Math.cos(n)*l,h=Math.sin(n)*l;a.uSunDir.value.set(c,o*l,h),this.sun.position.set(c*100,o*l*100,h*100);for(let u=0;u<3;u++){let d=e*.55+u*2.094+Math.sin(e*.3+u)*.8,f=a.uLd.value[u];f.set(Math.cos(d),.42+.2*Math.sin(e*.7+u*2),Math.sin(d)).normalize(),this.spots[u].position.copy(f).multiplyScalar(100),this.spots[u].intensity=.9+s*2;let g=1.2+s*2.2;a.uLc.value[u].set([2,.2,1.8][u]*g,[.3,1.6,1.5][u]*g,[1.6,2,.2][u]*g)}this.scene.environmentRotation&&(this.scene.environmentRotation.y=n),this.ball.rotation.y=e*.4;for(let u of this.cones){let d=u.small?r*2.2:s;this._c.setHSL((u.hue+e*.03)%1,1,.5),u.m.color.copy(this._c).multiplyScalar(.35+d*1.8);let f=1+d*.22;u.cone.scale.setScalar(f)}}};var Gi=(i,t,e,n=1)=>{let s=new Xe;return s.color.setRGB(i*n,t*n,e*n),s.toneMapped=!1,s};function ti(i,t,e,n=!1){let s=new ea(i.map(r=>new C(...r)),n,"catmullrom",.12);return new Ut(new Go(s,Math.max(8,i.length*8),t,8,n),e)}function pa(i,t){let e=new nn(i,i,1,8);return e.translate(0,.5,0),new Ut(e,t)}var au=new C,Zy=new C,f_=new C(0,1,0);function vr(i,t,e){au.copy(e).sub(t);let n=au.length()||.001;i.position.copy(t),i.scale.set(1,n,1),i.quaternion.setFromUnitVectors(f_,au.divideScalar(n))}function p_(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Kn(i)}function m_(i,t,e,n,s=5){let r=new De,a=[[i*.6,-t/2],[i*.86,-t/2],[i*.98,-t*.36],[i,-t*.2],[i,t*.2],[i*.98,t*.36],[i*.86,t/2],[i*.6,t/2]].map(x=>new et(x[0],x[1])),o=new Ut(new ia(a,28),e.rubber);o.rotation.x=Math.PI/2,r.add(o);let l=new Ue(i*.2,.09,t*.92),c=new or(l,e.rubber,n),h=new le,u=new Zn,d=new C(1,1,1),f=new C;for(let x=0;x<n;x++){let m=x/n*Math.PI*2;f.set(Math.cos(m)*(i+.02),Math.sin(m)*(i+.02),0),u.setFromAxisAngle(new C(0,0,1),m+.25),h.compose(f,u,d),c.setMatrixAt(x,h)}r.add(c);let g=new Ut(new nn(i*.62,i*.62,t*.72,20),e.chrome);g.rotation.x=Math.PI/2,r.add(g);for(let x=0;x<s;x++){let m=new Ut(new Ue(i*1.1,.07,t*.78),e.dark);m.rotation.z=x/s*Math.PI,r.add(m)}for(let x of[-t*.38,t*.38]){let m=new Ut(new cs(i*.66,.028,6,36),e.rimGlow);m.position.z=x,r.add(m)}return r}function ul(i={}){let t=!!i.lite,e=new De,n=new De;e.add(n);let s={paint:new ki({color:i.color??16722559,metalness:.75,roughness:.26,clearcoat:1,clearcoatRoughness:.06,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[200,700]}),cage:new ki({color:i.cage??1630463,metalness:.9,roughness:.2,clearcoat:1}),chrome:new Ce({color:16777215,metalness:1,roughness:.07}),gold:new Ce({color:16761402,metalness:1,roughness:.16}),dark:new Ce({color:1381660,metalness:.5,roughness:.5}),rubber:new Ce({color:592139,roughness:.82}),seat:new Ce({color:2820927,roughness:.6}),helmet:new ki({color:16769354,metalness:.2,roughness:.15,clearcoat:1}),rimGlow:Gi(.2,1,.9,3),head:Gi(1,.95,.8,7),tail:Gi(1,.05,.1,5),visor:Gi(.2,.9,1,2.2),diamond:Gi(.8,1,1,5),spring:Gi(1,.85,.1,1.6)},r=new sa;[[-1.55,.36],[1.3,.36],[1.95,.5],[1.8,.74],[.95,.9],[.58,.84],[.5,.62],[-.62,.62],[-.72,.98],[-1.55,.98]].forEach(([ht,H],J)=>J?r.lineTo(ht,H):r.moveTo(ht,H));let a=new Ut(new ko(r,{depth:1.16,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:3}),s.paint);a.position.z=-.58,n.add(a);let o=new Ut(new Ue(.9,.02,.3),s.rimGlow);o.position.set(1.32,.86,0),o.rotation.z=-.175,n.add(o);let l=.05;n.add(ti([[-.55,.62,-.64],[-.55,1.5,-.56],[-.55,1.86,-.3],[-.55,1.9,0],[-.55,1.86,.3],[-.55,1.5,.56],[-.55,.62,.64]],l,s.cage)),n.add(ti([[.58,.82,-.62],[.5,1.35,-.54],[.46,1.62,-.3],[.45,1.66,0],[.46,1.62,.3],[.5,1.35,.54],[.58,.82,.62]],l,s.cage));for(let ht of[-1,1])n.add(ti([[.47,1.6,.36*ht],[-.05,1.8,.38*ht],[-.55,1.86,.36*ht]],l,s.cage)),n.add(ti([[-.55,1.8,.4*ht],[-1.1,1.45,.46*ht],[-1.62,.98,.5*ht]],l,s.cage)),n.add(ti([[.58,.82,.62*ht],[1.3,.7,.5*ht],[1.98,.5,.36*ht]],l*.9,s.cage)),n.add(ti([[.58,.66,.64*ht],[0,.46,.9*ht],[-.55,.62,.66*ht]],l*.9,s.chrome));n.add(ti([[2,.5,-.5],[2.06,.5,0],[2,.5,.5]],l,s.chrome));for(let ht of[-.3,.3]){let H=new Ut(new Ue(.5,.12,.46),s.seat);H.position.set(-.22,.7,ht),n.add(H);let J=new Ut(new Ue(.12,.72,.46),s.seat);J.position.set(-.47,1.05,ht),J.rotation.z=.14,n.add(J)}let c=new De;c.position.set(-.26,0,-.3),n.add(c);let h=new Ut(new Oo(.19,.36,4,10),s.dark);h.position.set(0,1.12,0),h.rotation.z=.1,c.add(h);let u=new De;u.position.set(.03,1.62,0),c.add(u),u.add(new Ut(new Sn(.21,20,14),s.helmet));let d=new Ut(new Sn(.215,16,8,-.9+Math.PI/2,1.8,1.15,.5),s.visor);d.rotation.y=-Math.PI/2,u.add(d);let f=new Ut(new cs(.17,.03,6,18),s.chrome);if(f.position.set(.48,1.12,0),f.rotation.y=Math.PI/2,f.rotation.x=0,c.add(f),!t)for(let ht of[-.16,.16])c.add(ti([[.02,1.36,ht*1.3],[.25,1.2,ht*1.2],[.46,1.14,ht]],.05,s.dark));let g=new Ut(new Ue(.72,.42,.78),s.dark);g.position.set(-1.12,1.18,0),n.add(g);let x=new Ut(new Ue(.5,.26,.4),s.chrome);x.position.set(-1.12,1.52,0),n.add(x);let m=new Ut(new nn(.2,.26,.3,14),s.gold);m.position.set(-1.05,1.76,0),m.rotation.z=-1.2,n.add(m);let p=[];for(let ht of[-1,1]){for(let J=0;J<(t?1:3);J++)n.add(ti([[-.92-J*.2,1.22,.4*ht],[-.95-J*.2,1.3,.6*ht],[-1.3-J*.12,1.2+J*.07,.74*ht],[-2,1.16+J*.1,.72*ht]],.05,s.chrome));let H=new Re;H.position.set(-2.02,1.26,.72*ht),n.add(H),p.push(H)}let y=[];for(let ht of[-.42,.42]){let H=new Ut(new nn(.15,.11,.2,14),s.chrome);H.rotation.z=Math.PI/2,H.position.set(1.84,.82,ht),n.add(H);let J=new Ut(new _i(.135,16),s.head);J.rotation.y=Math.PI/2,J.position.set(1.945,.82,ht),n.add(J),y.push(J);let yt=new Ut(new Ue(.05,.12,.3),s.tail);yt.position.set(-1.62,.86,ht),n.add(yt)}let _=[],v=new Ut(new Ue(.12,.12,1),s.dark);v.position.set(.47,1.76,0),n.add(v);for(let ht=0;ht<6;ht++){let H=Gi(1,1,1,4);_.push(H);let J=new Ut(new _i(.07,12),H);J.rotation.y=Math.PI/2,J.position.set(.535,1.76,-.4+ht*.16),n.add(J)}let U=p_(),T=[];for(let ht of[-.42,.42]){let H=new zi(new vi({map:U,color:16773320,blending:Dn,depthWrite:!1,transparent:!0,opacity:.9}));H.position.set(2,.82,ht),H.scale.setScalar(1.8),n.add(H),T.push(H)}let R=[],P=[[1.25,.54,.42,1.08,!0],[1.25,.54,.42,-1.08,!0],[-1.2,.7,.66,1.16,!1],[-1.2,.7,.66,-1.16,!1]];for(let[ht,H,J,yt,lt]of P){let ft=new De;ft.position.set(ht,H,yt),e.add(ft);let zt=m_(H,J,s,lt?12:16,t?2:5);ft.add(zt);let Ct=pa(.04,s.chrome),Ht=pa(.04,s.chrome),Q=pa(.07,s.spring);t||n.add(Ct,Ht,Q),R.push({pivot:ft,spin:zt,R:H,front:lt,x:ht,z:yt,arm1:Ct,arm2:Ht,shock:Q,inner:new C(ht,.5,Math.sign(yt)*.5),top:new C(ht,1,Math.sign(yt)*.56),y:H})}let b=new De;b.position.set(-1.5,.98,-.5),n.add(b),b.add(ti([[0,0,0],[0,1.2,0],[0,2.4,0]],.015,s.chrome));let S=new Ut(new Sn(.08,10,8),Gi(1,.3,.8,5));S.position.y=2.4,b.add(S);let L=new ce;L.setAttribute("position",new Wt([0,2.3,0,0,1.9,0,-.7,2.1,0],3)),L.computeVertexNormals();let k=new Ut(L,new Xe({color:16769354,side:tn}));b.add(k);let N=new De;t||e.add(N);let F=new Ut(new Ho(.22,0),s.diamond);F.scale.set(.8,1.5,.8),F.position.y=.24,N.add(F);let Y=pa(.045,s.chrome);N.add(Y);let G=new De;N.add(G);let tt=new Ut(new Ue(.62,.24,.42),s.gold);G.add(tt);let W=new Ut(new Bo(.2,.4,4),s.gold);W.rotation.z=-Math.PI/2,W.rotation.x=Math.PI/4,W.position.x=.5,G.add(W);let ct=new Ut(new Ue(.16,.26,.44),s.dark);ct.position.x=.12,G.add(ct);let dt=pa(.06,s.chrome);t||e.add(dt);let at=new zi(new vi({map:U,color:12581119,blending:Dn,depthWrite:!1,transparent:!0}));at.scale.setScalar(1.6),at.position.y=.2,N.add(at);let Dt=p.map(ht=>{let H=new zi(new vi({map:U,color:16747050,blending:Dn,depthWrite:!1,transparent:!0}));return H.center.set(.85,.5),ht.add(H),H});return{root:e,body:n,wheels:R,mats:s,barMats:_,flares:T,lamps:y,whip:b,flag:k,cart:N,diamond:F,cantilever:Y,cartBody:G,stem:dt,tipGlow:at,flames:Dt,head:u,driver:c,steer:f,glowTex:U,stemAnchor:new C(-.5,.42,0)}}var _r={nitro:{name:"NITRO",hint:"burst of speed",color:"#ffd23a"},zap:{name:"STATIC ZAP",hint:"spins out the racer ahead",color:"#19e3ff"},gum:{name:"GUM",hint:"drop it behind you",color:"#ff5fb0"},sleeve:{name:"SLEEVE",hint:"blocks one hit",color:"#9dff6a"},rpm45:{name:"45 RPM",hint:"six seconds at 45, untouchable",color:"#ff2a7f"}},_s=[16722559,1696767,16765498,10354538,12086271,16747050,16777215,3828735],g_=["Lathe","Rumble","Flutter","Shellac","Dubplate","Acetate","Matrix"],ma=[-1.6,0,1.6],wf=30,xs=1.22,vs=1.12,Si=(i,t,e)=>i<t?t:i>e?e:i,bi=(i,t)=>1-Math.exp(-i*t);function Tf(i){let t=i>>>0||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function x_(i,t){let e=Tf(t),n=[],s=0,r=(h,u,d,f)=>n.push({id:s++,type:h,q:u,lane:d,lat:ma[d],hideUntil:-1,taken:!1,...f}),a=fn+i.musicRevs-.14,o=fn+.16,l=3,c="";for(;o<a;){let h=e();l++;let u=l>=7?"boxes":h<.2?"notes":h<.36?"pad":h<.5?"ramp":h<.68?"dust":h<.8?"grease":h<.9?"sweeper":"notes";u===c&&u!=="notes"&&(u="notes");let d=Math.floor(e()*3);if(u==="boxes"){for(let f=0;f<3;f++)r("box",o,f);l=0}else if(u==="notes")for(let f=0;f<5;f++)r("note",o+f*.006,d);else if(u==="pad")r("pad",o,d);else if(u==="ramp"){for(let f=0;f<3;f++)r("ramp",o,f);for(let f=0;f<4;f++)r("note",o+.014+f*.007,1,{high:!0});o+=.03}else u==="dust"?(r("dust",o,d),e()<.45&&r("dust",o+.004,(d+1+Math.floor(e()*2))%3)):u==="grease"?r("grease",o,d):u==="sweeper"&&r("sweeper",o,1,{phase:e()*te,speed:1.1+e()});c=u,o+=.075+e()*.05}return n.sort((h,u)=>h.q-u.q),n}function v_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,128),t.strokeStyle="#fff",t.lineWidth=12,t.lineJoin="miter";for(let n=-1;n<4;n++)t.beginPath(),t.moveTo(4,40+n*44),t.lineTo(32,12+n*44),t.lineTo(60,40+n*44),t.stroke();let e=new Kn(i);return e.wrapT=$r,e.colorSpace=$e,e}function __(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#1a0d2b",t.fillRect(0,0,128,128),t.strokeStyle="#fff",t.lineWidth=10,t.strokeRect(8,8,112,112),t.fillStyle="#fff",t.font='900 92px "Arial Black", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("?",64,70);let e=new Kn(i);return e.colorSpace=$e,e}function y_(i,t){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font='700 34px "Chakra Petch", "Trebuchet MS", sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineWidth=8,n.strokeStyle="rgba(10,6,18,.9)",n.strokeText(i,128,34),n.fillStyle="#"+new Bt(t).getHexString(),n.fillText(i,128,34);let s=new zi(new vi({map:new Kn(e),transparent:!0,depthWrite:!1}));return s.scale.set(5,1.25,1),s}var M_=(i,t,e,n=1)=>{let s=new Xe;return s.color.setRGB(i*n,t*n,e*n),s.toneMapped=!1,s},Ne={},Tn=new Re,S_=new le().makeScale(0,0,0),dl=class{constructor(t,e){this.scene=t,this.fx=e,this.group=new De,this.group.visible=!1,t.add(this.group),this.active=!1,this.racers=[],this.objs=[],this.gums=[],this.me=null,this.net=null,this.phase="idle",this.clock=0,this.over=!1;let n=this.chev=v_(),s=(R,P,b)=>{let S=new or(R,P,b);return S.frustumCulled=!1,S.count=0,this.group.add(S),S},r=new nr(2.5,4.4);r.rotateX(-Math.PI/2),r.rotateY(-Math.PI/2);let a=new Xe({map:n,transparent:!0,blending:Dn,depthWrite:!1,toneMapped:!1});a.color.setRGB(.4,3,2.6);let o=new ce,l=1.25,c=5,h=1.5;o.setAttribute("position",new Wt([-c/2,0,-l,-c/2,0,l,c/2,h,l,c/2,h,-l,c/2,0,-l,c/2,0,l],3)),o.setAttribute("uv",new Wt([0,0,1,0,1,1,0,1,0,1,1,1],2)),o.setIndex([0,1,2,0,2,3,3,2,5,3,5,4,0,3,4,1,5,2]),o.computeVertexNormals();let u=new Ce({color:1773616,roughness:.4,metalness:.5,emissive:new Bt(3,1.2,.1),emissiveMap:n,side:tn}),d=new Xe({map:__(),toneMapped:!1});this.boxM=d;let f=M_(1,.8,.15,3),g=new lr(1.05,2);{let R=g.attributes.position;for(let P=0;P<R.count;P++){let b=R.getX(P),S=R.getY(P),L=R.getZ(P),k=1+.16*Math.sin(b*7+S*5)*Math.cos(L*6+b*3);R.setXYZ(P,b*k,S*k*.85,L*k)}g.computeVertexNormals()}let x=new Ce({color:11049608,roughness:1,emissive:2760728,flatShading:!0}),m=new _i(1.25,20);m.rotateX(-Math.PI/2),m.scale(2.6,1,1);let p=new ki({color:657940,metalness:1,roughness:.04,iridescence:1,iridescenceIOR:2.1,emissive:1050648}),y=new nn(.8,.8,2.6,16);y.rotateZ(Math.PI/2);let _=new Ce({color:16777215,roughness:.5,emissive:new Bt(2.2,.2,.9),emissiveMap:n});this.im={pad:s(r,a,140),ramp:s(o,u,260),box:s(new Ue(1.5,1.5,1.5),d,260),note:s(new cs(.5,.17,8,18),f,1500),dust:s(g,x,260),eye:s(new Sn(.26,10,8),new Xe({color:16777215}),520),pupil:s(new Sn(.12,8,6),new Xe({color:328965}),520),grease:s(m,p,120),sweeper:s(y,_,90)},this.gumMeshes=[];let v=new Sn(.85,14,10);v.scale(1,.55,1);let U=new Ce({color:16736176,roughness:.3,emissive:7344186});for(let R=0;R<16;R++){let P=new Ut(v,U);P.visible=!1,this.group.add(P),this.gumMeshes.push(P)}let T=new ce;T.setAttribute("position",new Ae(new Float32Array(42),3)),this.bolt=new Co(T,new jr({color:new Bt(1,4,5),toneMapped:!1})),this.bolt.visible=!1,this.bolt.frustumCulled=!1,this.group.add(this.bolt),this.boltT=0,this.models=[]}setup(t,e,n,s){this.L=t,this.net=s||null,this.seed=e,this.objs=x_(t,e),this.gums=[],this.over=!1,this.phase="count",this.clock=-3.5,this.goAt=null,this.said=4,this.gumN=0,this.qFin=fn+t.musicRevs-.02,this.laps=Math.max(1,Math.ceil(t.musicRevs));let r=Tf(e^1540483477);for(let o of this.models)this.group.remove(o.root),o.tag&&this.group.remove(o.tag);this.models=[],this.racers=n.map((o,l)=>{let c={id:o.id,name:o.name,kind:o.kind,color:o.color??_s[l%_s.length],grid:l,q:fn-.1-l*.007,lat:(l%2?1:-1)*1,rate:0,vy:0,ya:0,pH:0,air:0,airT:0,grounded:!0,gload:1,spinT:0,spinA:0,boostT:0,rpmT:0,slipT:0,slipDir:1,shield:!1,item:null,rollT:0,useT:0,notes:0,draft:0,trick:!1,fin:null,place:l+1,oi:0,x:0,z:0,yaw:0,mPerRev:1e3,skill:.955+r()*.05,laneT:0,tLane:1,thinkT:r()*.2,net:null,wheel:0,botUse:0};if(this._frame(c),c.ya=this._ground(c),c.pH=c.ya,o.kind!=="me"){let h=ul({lite:!0,color:c.color,cage:16777215});h.tag=y_(o.name,c.color),this.group.add(h.root),this.group.add(h.tag),this.models.push(h),c.model=h}return c}),this.me=this.racers.find(o=>o.kind==="me");let a={};for(let o in this.im)a[o]=0;for(let o of this.objs)this._place(o,o.q,o.lat),o.slot=a[o.type]++,o.type==="dust"&&(a.eye+=2,a.pupil+=2);for(let o in this.im)this.im[o].count=Math.min(this.im[o].instanceMatrix.count,a[o]);this.active=!0,this.group.visible=!0,this._instances(0,!0)}startAt(t){this.goAt=t}stop(){this.active=!1,this.group.visible=!1,this.phase="idle"}drop(t){let e=this.racers.findIndex(s=>s.id===t&&s.kind==="remote");if(e<0)return;let n=this.racers[e];n.model&&(n.model.root.visible=!1,n.model.tag.visible=!1),this.racers.splice(e,1)}_frame(t){xr(this.L,t.q,t.lat,Ne),t.x=Ne.x,t.z=Ne.z,t.yaw=Ne.yaw,t.mPerRev=Ne.mPerRev}_ground(t){let e=Math.cos(t.yaw),n=Math.sin(t.yaw),s=this.L,r=0;for(let a=0;a<4;a++){let o=a<2?xs:-xs,l=a%2?vs:-vs;r+=be(s,t.x+e*o+n*l,t.z-n*o+e*l)}return r/4}_place(t,e,n){let s=this.L;xr(s,e,n,Ne);let r=Math.cos(Ne.yaw),a=Math.sin(Ne.yaw),o=.8,l=be(s,Ne.x,Ne.z),c=be(s,Ne.x+a*o,Ne.z+r*o),h=be(s,Ne.x-a*o,Ne.z-r*o),u=be(s,Ne.x+r*2,Ne.z-a*2),d=be(s,Ne.x-r*2,Ne.z+a*2);t.x=Ne.x,t.z=Ne.z,t.y=l,t.yaw=Ne.yaw,t.roll=Math.atan2(c-h,2*o),t.pitch=Math.atan2(u-d,4)}rank(){let t=this.racers.slice().sort((e,n)=>e.fin!=null&&n.fin!=null?e.fin-n.fin:e.fin!=null?-1:n.fin!=null?1:n.q-e.q);return t.forEach((e,n)=>e.place=n+1),t}_hit(t,e){return t.rpmT>0?!1:t.shield?(t.shield=!1,t===this.me&&this.fx.toast("SLEEVE POPPED","that one was free"),!1):(t.spinT=1.25,t.rate*=.55,t.boostT=0,t===this.me&&(this.fx.toast(e||"SKIPPED!","needle knocked"),this.fx.shake(.9),this.fx.flash(.2)),this.fx.burst(t.x,t.ya+.6,t.z,26,1,.9,.5,13),!0)}_touch(t,e){let n=t===this.me,s=this.clock;switch(e.type){case"pad":t.boostT=Math.max(t.boostT,2.2),n&&(this.fx.toast("BOOST"),this.fx.shake(.3));break;case"ramp":t.grounded&&(t.vy=12+2.5*t.rate,t.ya+=.25,t.trick=!1);break;case"box":!t.item&&t.rollT<=0&&(!n||s>e.hideUntil)&&(t.rollT=1,n&&(e.hideUntil=s+3.5,this.fx.burst(e.x,e.y+1.5,e.z,18,1,.3,1,9)));break;case"note":(!n||!e.taken)&&(t.notes++,n&&(e.taken=!0,this.fx.note(t.notes)));break;case"grease":t.rpmT<=0&&(t.slipT=1.5,t.slipDir=t.lat>=0?-1:1,n&&this.fx.toast("GREASY","fingerprints on the wax"));break;case"dust":case"sweeper":this._hit(t,e.type==="dust"?"DUST BUNNY":"SWEPT");break}}_item(t){let e=this.racers.length,n=e>1?(t.place-1)/(e-1):.5,s=Math.random(),r=n<.25?[["gum",.42],["sleeve",.3],["nitro",.22],["zap",.06]]:n<.75?[["nitro",.3],["zap",.3],["gum",.2],["sleeve",.14],["rpm45",.06]]:[["nitro",.3],["zap",.28],["rpm45",.3],["sleeve",.12]],a=0;for(let[o,l]of r)if(a+=l,s<a)return o;return"nitro"}useItem(t=this.me){if(!t||!t.item||this.phase!=="race"||t.spinT>0||t.fin!=null)return;let e=t.item,n=t===this.me;if(t.item=null,e==="nitro")t.boostT=Math.max(t.boostT,2.6),n&&this.fx.shake(.4);else if(e==="rpm45")t.rpmT=6,t.spinT=0,n&&(this.fx.toast("45 RPM","wrong speed, right idea"),this.fx.flash(.25));else if(e==="sleeve")t.shield=!0;else if(e==="gum"){let s={id:`${t.id}:${this.gumN++}`,q:t.q-.0045,lat:t.lat,owner:t.id,born:this.clock};this._addGum(s),this.net&&this.net.ev({k:"gum",id:s.id,q:s.q,lat:s.lat})}else if(e==="zap"){let s=null;for(let r of this.racers){let a=r.q-t.q;r!==t&&r.fin==null&&a>0&&a<.12&&(!s||a<s.q-t.q)&&(s=r)}this._bolt(t,s),s?s.kind==="remote"?this.net&&this.net.ev({k:"zap",to:s.id}):this._hit(s,"ZAPPED"):this.net&&this.net.ev({k:"zap",to:null}),n&&!s&&this.fx.toast("FIZZ","nobody in range")}}_addGum(t){this._place(t,t.q,t.lat),this.gums.push(t),this.gums.length>16&&this.gums.shift()}_bolt(t,e){let n=this.bolt.geometry.attributes.position,s=n.count,r=e?e.x:t.x+Math.cos(t.yaw)*60,a=e?e.z:t.z-Math.sin(t.yaw)*60,o=e?e.ya:t.ya;for(let l=0;l<s;l++){let c=l/(s-1),h=l===0||l===s-1?0:2.5;n.setXYZ(l,t.x+(r-t.x)*c+(Math.random()-.5)*h,t.ya+1.2+(o-t.ya)*c+(Math.random()-.5)*h,t.z+(a-t.z)*c+(Math.random()-.5)*h)}n.needsUpdate=!0,this.bolt.visible=!0,this.boltT=.28}onEvent(t,e){let n=this.racers.find(s=>s.id===t);if(e.k==="gum")this._addGum({id:e.id,q:e.q,lat:e.lat,owner:t,born:this.clock});else if(e.k==="rm")this.gums=this.gums.filter(s=>s.id!==e.id);else if(e.k==="zap"){let s=this.racers.find(r=>r.id===e.to);n&&this._bolt(n,s||null),s&&s===this.me&&this._hit(s,"ZAPPED")}else e.k==="fin"&&n&&(n.fin=e.time)}onSnapshot(t,e){for(let n of this.racers){if(n.kind!=="remote")continue;let s=t[n.id];s&&(n.net={q:s[0],lat:s[1],rate:s[2],air:s[3],fl:s[4],t:e},(n.q===void 0||Math.abs(n.q-s[0])>.05)&&(n.q=s[0]))}}netState(){let t=this.me;return[+t.q.toFixed(5),+t.lat.toFixed(2),+t.rate.toFixed(3),+t.air.toFixed(2),(t.spinT>0?1:0)|(t.boostT>0?2:0)|(t.rpmT>0?4:0)|(t.shield?8:0)|(t.fin!=null?16:0)]}_bot(t,e){let n={thr:1,steer:0,brake:!1};if(t.thinkT-=e,t.thinkT<=0){t.thinkT=.12+Math.random()*.08;let s=[0,0,0],r=Math.random()<.12;for(let l=t.oi;l<this.objs.length;l++){let c=this.objs[l],h=c.q-t.q;if(h>.04)break;if(h<.003)continue;let u=1-h/.04;if(c.type==="sweeper"){let f=this._sweepLat(c,this.clock+h*sn/Math.max(.3,t.rate));for(let g=0;g<3;g++)Math.abs(ma[g]-f)<1.5&&(s[g]-=8*u);continue}let d=c.lane;c.type==="dust"?s[d]-=(r||t.rpmT>0?0:10)*u:c.type==="grease"?s[d]-=4*u:c.type==="pad"?s[d]+=3:c.type==="box"?s[d]+=t.item?0:1.5:c.type==="note"&&!c.high&&(s[d]+=.5)}for(let l of this.gums){let c=l.q-t.q;if(c>.003&&c<.04)for(let h=0;h<3;h++)Math.abs(ma[h]-l.lat)<1.2&&(s[h]-=9)}let a=t.tLane,o=-1e9;for(let l=0;l<3;l++){let c=s[l]-Math.abs(ma[l]-t.lat)*.35+(l===t.tLane?.3:0);c>o&&(o=c,a=l)}t.tLane=a}if(n.steer=Si((ma[t.tLane]-t.lat)*1.6,-1,1),t.item){t.botUse+=e;let s=t.item,r=t.botUse>5;s==="sleeve"||s==="rpm45"?r=t.botUse>.6:s==="nitro"?r=t.botUse>1.2:s==="zap"?r=r||t.botUse>.8&&this.racers.some(a=>a!==t&&a.q-t.q>.004&&a.q-t.q<.1):s==="gum"&&(r=r||t.botUse>.8&&this.racers.some(a=>a!==t&&t.q-a.q>.004&&t.q-a.q<.04)),r&&(t.botUse=0,this.useItem(t))}else t.botUse=0;return n}_sweepLat(t,e){return 1.75*Math.sin(e*t.speed+t.phase)}_step(t,e,n){let s=this.phase==="race",r=1+.006*Math.min(10,t.notes);if(t.rpmT>0&&(r=Math.max(r,1.35)),t.boostT>0&&(r+=.42),t.draft>.4&&(r+=.05),Math.abs(t.lat)>1.8&&(r*=.94),t.kind==="bot"){let g=this.me?t.q-this.me.q:0;r*=t.skill*(g>.3?.965:g<-.3?1.045:1)}s?t.spinT>0?(t.rate+=(.22-t.rate)*bi(n,5),t.spinT-=n,t.spinA+=n*14,t.spinT<=0&&(t.spinA=0)):t.fin!=null?t.rate+=(.75-t.rate)*bi(n,.8):e.brake?t.rate=Math.max(0,t.rate-1.3*n):e.thr>.05?t.rate+=(r*e.thr-t.rate)*bi(n,t.rate>r?1.4:1.15):t.rate=Math.max(0,t.rate-.24*n):t.rate=0,t.boostT>0&&(t.boostT-=n),t.rpmT>0&&(t.rpmT-=n);let a=t.spinT>0?0:e.steer;t.grounded||(a*=.5),t.slipT>0&&(t.slipT-=n,a=a*.3+t.slipDir*.55),t.lat=Si(t.lat+a*5.8*n,-2.05,2.05);let o=t.q;t.q+=t.rate*n/sn,this._frame(t);let l=this._ground(t),c=l-t.ya,h=Si((l-t.pH)/n,-60,16);t.pH=l;let u=-wf;if(c>-.02){let g=Si(900*c-52*(t.vy-h),0,400);u+=g,t.gload=g/wf}else t.gload=0;t.vy+=u*n,t.ya+=t.vy*n,t.ya<l-.45&&(t.ya=l-.45,t.vy<0&&(t.vy=0));let d=t.grounded;t.grounded=c>-.12,t.air=Math.max(0,t.ya-l),t.grounded?(!d&&t.airT>.3&&t.trick&&(t.boostT=Math.max(t.boostT,.9),t===this.me&&this.fx.toast("TRICK BOOST")),t.airT>0&&(t.airT=0,t.trick=!1)):t.airT+=n;let f=this.objs;for(;t.oi<f.length&&f[t.oi].q<=t.q;){let g=f[t.oi++];if(g.q<o-.002)continue;let x=g.type==="sweeper"?this._sweepLat(g,this.clock):g.lat,m=g.type==="ramp"?1:g.type==="pad"||g.type==="sweeper"?1.35:1.15;Math.abs(x-t.lat)>m||(g.high?t.air<1:t.air>.9&&g.type!=="ramp")||this._touch(t,g)}for(let g=this.gums.length-1;g>=0;g--){let x=this.gums[g];x.q>o&&x.q<=t.q&&Math.abs(x.lat-t.lat)<1.15&&t.air<.9&&!(x.owner===t.id&&this.clock-x.born<.6)&&(this.gums.splice(g,1),this.net&&this.net.ev({k:"rm",id:x.id}),this._hit(t,"GUMMED UP"))}t.rollT>0&&(t.rollT-=n,t.rollT<=0&&(t.item=this._item(t),t===this.me&&this.fx.item(t.item))),s&&t.fin==null&&t.q>=this.qFin&&(t.fin=this.clock,this.rank(),t===this.me&&(this.fx.finish(t.place),this.net&&this.net.ev({k:"fin",time:t.fin})))}_remote(t,e){let n=t.net;if(!n)return;let s=(performance.now()-n.t)/1e3,r=n.q+n.rate*Math.min(s,.5)/sn;t.rate=n.rate,t.q+=n.rate*e/sn,t.q+=(r-t.q)*bi(e,8),t.lat+=(n.lat-t.lat)*bi(e,10),this._frame(t);let a=this._ground(t);t.air+=(n.air-t.air)*bi(e,12),t.ya=a+t.air,t.grounded=t.air<.3,t.spinT=n.fl&1?1:0,t.spinT?t.spinA+=e*14:t.spinA=0,t.boostT=n.fl&2?1:0,t.rpmT=n.fl&4?1:0,t.shield=!!(n.fl&8)}step(t,e){if(!this.active)return;if(this.clock=this.goAt!=null?(performance.now()-this.goAt)/1e3:this.clock,this.phase==="count"){let s=Math.ceil(-this.clock);this.goAt!=null&&s<this.said&&s>0&&s<=3&&(this.said=s,this.fx.toast(String(s)),this.fx.beep(!1)),this.goAt!=null&&this.clock>=0&&(this.phase="race",this.fx.toast("GO!","first to the label wins"),this.fx.beep(!0),this.fx.flash(.2))}let n=this.me;for(let s of this.racers)s.kind==="me"?this._step(s,{thr:e.throttle>0?e.throttle:(e.throttle<0,0),brake:e.hand||e.throttle<-.3,steer:e.steer},t):s.kind==="bot"?this._step(s,this._bot(s,t),t):this._remote(s,t);if(n){let s=!1;for(let r of this.racers){if(r===n)continue;let a=(r.q-n.q)*n.mPerRev,o=r.lat-n.lat;Math.abs(a)<3.6&&Math.abs(o)<1.5&&n.air<.8&&r.air<.8&&(n.lat=Si(n.lat-Math.sign(o||1)*4*t,-2.05,2.05),a>0&&n.rate>r.rate&&(n.rate+=(r.rate-n.rate)*bi(t,6)),r.kind==="bot"&&(r.lat=Si(r.lat+Math.sign(o||1)*3*t,-2.05,2.05))),a>4&&a<26&&Math.abs(o)<1.2&&(s=!0)}n.draft=Si(n.draft+(s?t:-2*t),0,1),e.boost&&!this._bp&&(!n.grounded&&n.airT>.12&&!n.trick?(n.trick=!0,this.fx.toast("TRICK!")):this.useItem(n)),this._bp=e.boost,n.fin!=null&&!this.over&&(this.racers.every(a=>a.fin!=null)||this.clock>n.fin+6)&&(this.over=!0,this.rank())}}_instances(t,e){let n=this.im,s=this.clock,r=this.me?this.me.q:0;this.chev.offset.y=-(performance.now()/1e3*1.6)%1;for(let a of this.objs){if((a.type==="pad"||a.type==="ramp"||a.type==="grease")&&!e||!e&&Math.abs(a.q-r)>.6)continue;let l=n[a.type];if(a.slot>=l.instanceMatrix.count)continue;let c=!1,h=0,u=0,d=0;if(a.type==="note"?(c=a.taken,h=a.high?3.4:1,u=s*3+a.q*400):a.type==="box"?(c=s<a.hideUntil,h=1.7,u=s*1.4+a.id,d=Math.sin(s*2.4+a.id)*.25):a.type==="dust"?(h=.75,d=Math.abs(Math.sin(s*3+a.id))*.25):a.type==="sweeper"?(this._place(a,a.q,this._sweepLat(a,s)),h=.8):a.type==="pad"?h=.07:a.type==="grease"&&(h=.05),c){l.setMatrixAt(a.slot,S_),l.instanceMatrix.needsUpdate=!0;continue}if(Tn.rotation.order="YZX",Tn.rotation.set(a.type==="note"||a.type==="box"?0:-a.roll,a.yaw+u,a.type==="note"||a.type==="box"?0:a.pitch),Tn.position.set(a.x,a.y+h+d,a.z),Tn.scale.setScalar(1),Tn.updateMatrix(),l.setMatrixAt(a.slot,Tn.matrix),l.instanceMatrix.needsUpdate=!0,a.type==="dust"&&e!=="skipEyes"){let f=Math.cos(a.yaw),g=Math.sin(a.yaw),x=a.slot*2;for(let m=0;m<2;m++){let p=m?.38:-.38,y=a.x-f*.86+g*p,_=a.z+g*.86+f*p,v=a.y+h+d+.3;Tn.rotation.set(0,0,0),Tn.position.set(y,v,_),Tn.updateMatrix(),n.eye.setMatrixAt(x+m,Tn.matrix),Tn.position.set(y-f*.2,v,_+g*.2),Tn.updateMatrix(),n.pupil.setMatrixAt(x+m,Tn.matrix)}n.eye.instanceMatrix.needsUpdate=!0,n.pupil.instanceMatrix.needsUpdate=!0}}}frame(t,e){if(!this.active)return;this._instances(t,!1);let n=e*.25%1;this.boxM.color.setHSL(n,1,.6).multiplyScalar(2.4),this.gumMeshes.forEach((r,a)=>{let o=this.gums[a];r.visible=!!o,o&&r.position.set(o.x,o.y+.35,o.z)}),this.boltT>0&&(this.boltT-=t,this.boltT<=0&&(this.bolt.visible=!1));let s=this.L;for(let r of this.racers){let a=r.model;if(!a)continue;let o=Math.cos(r.yaw),l=Math.sin(r.yaw),c=be(s,r.x+l*vs,r.z+o*vs),h=be(s,r.x-l*vs,r.z-o*vs),u=be(s,r.x+o*xs,r.z-l*xs),d=be(s,r.x-o*xs,r.z+l*xs),f=r.grounded?Math.atan2(c-h,2*vs):0,g=r.grounded?Math.atan2(u-d,2*xs):Si(r.vy*.01,-.2,.25);r.vroll=(r.vroll||0)+(f-(r.vroll||0))*bi(t,12),r.vpitch=(r.vpitch||0)+(g-(r.vpitch||0))*bi(t,12),a.root.position.set(r.x,r.ya,r.z),a.root.rotation.order="YZX",a.root.rotation.set(-r.vroll,r.yaw+r.spinA,r.vpitch),r.wheel-=r.rate/sn*r.mPerRev*t;for(let m of a.wheels){let p=Math.sign(m.z),y=r.x+o*m.x+l*m.z,_=r.z-l*m.x+o*m.z,v=r.grounded?Si(Math.atan2(be(s,y+l*p*.3,_+o*p*.3)-be(s,y-l*p*.3,_-o*p*.3),.6)-p*r.vroll,-.8,.8):.1;m.pivot.rotation.set(-p*v,0,0),m.pivot.position.y=m.R*Math.cos(v)+Math.abs(Math.sin(v))*.12,m.spin.rotation.z=r.wheel/m.R}let x=r.boostT>0||r.rpmT>0;a.flames.forEach(m=>{let p=.5+r.rate+(x?2.6:0)+Math.random()*.3;m.scale.set(p*1.5,.5+p*.2,1),m.material.opacity=.75}),r.rpmT>0?a.mats.paint.emissive.setHSL(e*2%1,1,.35):a.mats.paint.emissive.setRGB(r.shield?.1:0,r.shield?.35:0,r.shield?.1:0),a.tag.position.set(r.x,r.ya+3.4,r.z)}}},Af=(i,t)=>[{id:"me",name:t||"You",kind:"me",color:_s[0]},...g_.slice(0,i).map((e,n)=>({id:"bot"+n,name:e,kind:"bot",color:_s[n+1]}))];var ys=class i{constructor(){this.ws=null,this.id=null,this.host=null,this.players=[],this.offset=0,this.on={},this.room=null,this.open=!1,this.rtt=0}static base(){let t="";try{t=localStorage.getItem("wax.server")||""}catch{}let e=document.querySelector('meta[name="wax-server"]')?.content||"",n=location.hostname,s=location.protocol.startsWith("http")&&!/github\.io$|claude|anthropic|^$/.test(n),r=t||e||(s?location.host:"");if(!r)return"";let a=r.replace(/^\w+:\/\//,"").replace(/\/+$/,"");return(!/^(localhost|127\.|\[::1\])/.test(a)?"wss://":"ws://")+a}static save(t){try{t?localStorage.setItem("wax.server",t):localStorage.removeItem("wax.server")}catch{}}connect(t,e,n){return new Promise((s,r)=>{let a=i.base();if(!a)return r(new Error("no-server"));let o;try{o=new WebSocket(`${a}/ws/${t}`)}catch(u){return r(u)}this.ws=o,this.room=t;let l=!1,c=u=>{l||(l=!0,r(u instanceof Error?u:new Error("connect")))},h=setTimeout(()=>{c(new Error("timeout"));try{o.close()}catch{}},8e3);o.onopen=()=>{this.open=!0,o.send(JSON.stringify({t:"hello",name:e,color:n})),this.ping()},o.onerror=()=>c(new Error("connect")),o.onclose=()=>{clearTimeout(h);let u=this.open;this.open=!1,clearInterval(this.pinger),c(new Error("closed")),u&&this.on.close&&this.on.close()},o.onmessage=u=>{let d;try{d=JSON.parse(u.data)}catch{return}if(d.t==="welcome")clearTimeout(h),this.id=d.id,this.host=d.host,this.players=d.players,this.offset=d.now-Date.now(),l=!0,this.pinger=setInterval(()=>this.ping(),4e3),s(d);else if(d.t==="err")c(new Error(d.msg));else if(d.t==="pong"){let f=performance.now()-d.c;this.rtt=f,this.offset=d.now+f/2-Date.now()}else d.t==="join"?this.players=this.players.filter(f=>f.id!==d.p.id).concat(d.p):d.t==="leave"&&(this.players=this.players.filter(f=>f.id!==d.id),this.host=d.host);this.on[d.t]&&this.on[d.t](d)}})}ping(){this.send({t:"ping",c:performance.now()})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}ev(t){this.send({t:"ev",e:t})}isHost(){return this.id&&this.id===this.host}toPerf(t){return performance.now()+(t-(Date.now()+this.offset))}close(){this.on={};try{this.ws&&this.ws.close()}catch{}this.open=!1,clearInterval(this.pinger)}};var mt=i=>document.getElementById(i),re=(i,t,e)=>i<t?t:i>e?e:i;var vl=i=>(i=(i+Math.PI)%te,i<0&&(i+=te),i-Math.PI),qe=(i,t)=>1-Math.exp(-i*t),Ma=[{id:"needle-drop",title:"Needle Drop",sub:"Electro-funk \xB7 116 BPM",file:"music/needle-drop.mp3",hue:325,world:"night"},{id:"dune-runner",title:"Dune Runner",sub:"Synthwave \xB7 104 BPM",file:"music/dune-runner.mp3",hue:28,world:"dunes"},{id:"wow-and-flutter",title:"Wow & Flutter",sub:"Drum & bass \xB7 172 BPM",file:"music/wow-and-flutter.mp3",hue:188,world:"flexi"}],b_=mt("gl"),Tr=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,qi={mobile:Tr||Math.min(innerWidth,innerHeight)<560,scale:1};Tr&&document.body.classList.add("touch");var Ti;try{Ti=new Eo({canvas:b_,antialias:!1,powerPreference:"high-performance"})}catch(i){throw mt("status").textContent="This needs WebGL 2, which this browser or device did not provide.",mt("status").className="err",i}Ti.toneMapping=ca;Ti.toneMappingExposure=.95;var Sa=new rr,Pe=new on(64,1,.4,9e3),kn=new cl(Sa,qi),wi=new hl(Sa,Ti,kn.uniforms),me=ul();Sa.add(me.root);var ee=new ll,Wi,hu,_a;function fu(){if(Wi)try{Wi.dispose()}catch{}let i=Math.min(window.devicePixelRatio||1,qi.mobile?1.5:1.75)*qi.scale;Ti.setPixelRatio(i),Ti.setSize(innerWidth,innerHeight,!1);let t=Math.floor(innerWidth*i),e=Math.floor(innerHeight*i),n=new Je(t,e,{type:bn,samples:qi.mobile?0:4});Wi=new el(Ti,n),Wi.addPass(new nl(Sa,Pe)),hu=new fr(new et(t/2,e/2),.5,.55,1),Wi.addPass(hu),_a=new dr({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uTime:{value:0},uFlash:{value:0},uAspect:{value:t/e}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:bf}),Wi.addPass(_a),Wi.addPass(new il),Pe.aspect=innerWidth/innerHeight,Pe.updateProjectionMatrix(),wi.sparks.mat.uniforms.uScale.value=e*.9}fu();addEventListener("resize",fu);var I={phase:"menu",mode:"follow",choice:"follow",L:null,song:null,cam:0,time:0,score:0,rot:0,selected:0,flash:0,shake:0,pressed:null,started:!1,loading:!0,world:ds[0]},M={x:0,z:0,y:0,vy:0,vx:0,vz:0,yaw:0,q:.75,rate:1,sway:0,grounded:!0,air:0,gload:1,prevHc:0,phiU:0,pitch:0,roll:0,speed:0,qRate:.1,rhoRate:0,wheelSpin:0,steerVis:0,airTime:0,blend:new C,throttleVis:0,lastN:0,hops:0,hopT:0,lastSign:1,scr:0,scrT:0,pocket:0,donut:0,boostVis:0,finished:!1},Ie={},Ss={},Ye={},pu=()=>(I.mode==="follow"||I.mode==="race")&&!M.finished,ae={throttle:0,steer:0,hand:!1,boost:!1},Ke=new Set,Qt={ty:0,tz:-37,ay:0,az:-37,cA:1,cB:1,cL:0,pk:0,scope:null,scI:0,fresh:0};ee.onTel=i=>{Qt.ty=i.ty,Qt.tz=i.tz,Qt.ay=i.ay,Qt.az=i.az,Qt.cA=i.cA,Qt.cB=i.cB,Qt.cL=i.cL,Qt.pk=Math.max(Qt.pk*.9,i.pk),Qt.scope=i.scope,Qt.scI=i.scI,Qt.fresh=performance.now()};function An(i,t){let e=mt("status");e.textContent=i,e.className=t?"err":""}var Rf=()=>new Promise(i=>requestAnimationFrame(()=>i())),fl=0;async function bl(i){let t=++fl;I.loading=!0,mt("go").disabled=!0;try{await ee.init(),An(i.file instanceof File?"Reading your file\u2026":"Fetching the master tape\u2026");let e=i.file instanceof File?await i.file.arrayBuffer():await(await fetch(i.file)).arrayBuffer();if(t!==fl)return;An("Decoding\u2026");let n=await ee.decode(e);if(t!==fl)return;An("Cutting the lacquer\u2026"),await Rf(),await Rf();let s=qi.mobile?240:sl,r=ee.press(n,qi.mobile?42e4:11e5,s);I.pressed=r,I.song=i,I.started=!1,I.mode="follow",M.finished=!1,I.phase!=="menu"&&Ai(),i.world&&(I.world=eu(i.world)),El(I.world),mt("trk").textContent=i.title,mt("go").textContent="Drop the needle";let a=r.stats;An(`${_l(r.duration)} of groove \xB7 ${I.L.musicRevs.toFixed(1)} turns \xB7 cut at ${a.cutDb.toFixed(1)} dB, peak ${(a.peakVel*100).toFixed(1)} cm/s, \xB1${a.latMax.toFixed(0)} \xB5m sideways${r.truncated?` \xB7 trimmed to the first ${s/60} min`:""}`),I.loading=!1,Tl(),I.onLoaded&&I.onLoaded()}catch(e){if(console.error(e),t!==fl)return;An(i.file instanceof File?"That file could not be decoded as audio. Try an MP3, WAV, M4A or OGG.":"Could not load that track. Check your connection and try again.",!0),I.loading=!1,mt("go").disabled=!I.L}}function El(i){I.world=i;let t=I.song,e=I.pressed;e&&(I.L=rl(e.duration,i),kn.setSong(I.L,e.tex,t.title,t.sub,t.hue),wi.setSong(I.L,kn.platterTop),F_(),I.started=!1,I.mode="follow",M.finished=!1,mu(!1),C_())}var _l=i=>(i=Math.max(0,i),Math.floor(i/60)+":"+String(Math.floor(i%60)).padStart(2,"0"));function mu(i=!0){M.q=.72,M.rate=I.phase==="play"?0:1,M.sway=0,M.vy=0,M.vx=0,M.vz=0,M.qRate=0,M.lastSign=1,M.airTime=0,M.air=0,M.grounded=!0,M.finished=!1,M.pocket=0,M.hops=0,M.scr=0,M.donut=0,gu(),M.y=Ar(M.x,M.z,M.yaw),M.prevHc=M.y,M.blend.set(0,0,0),I.score=0,mt("score").textContent="000000",mt("combo").textContent="",Xi=!0,i&&ba(!0)}function gu(){xr(I.L,M.q,M.sway,Ye),M.x=Ye.x,M.z=Ye.z,M.yaw=Ye.yaw,M.phiU=M.q*te}var uu=1.22,du=1.12,Cf=30;function Ar(i,t,e){let n=Math.cos(e),s=Math.sin(e),r=n,a=-s,o=s,l=n,c=I.L,h=0;for(let u=0;u<4;u++){let d=u<2?uu:-uu,f=u%2?du:-du,g=be(c,i+r*d+o*f,t+a*d+l*f);Ei[u]=g,h+=g}return h/4}var Ei=[0,0,0,0];function E_(i){let t=I.L,e=1,n=.35;ae.hand?(e=0,n=.14):ae.throttle>.05?(e=1+ae.throttle*(ae.boost?2:1),n=.5):ae.throttle<-.05?(e=1+ae.throttle*2.5,n=.4):ae.boost&&(e=2,n=.4),I.phase!=="play"&&(e=1,n=.3),M.rate+=(e-M.rate)*qe(i,1/n),M.q+=M.rate*i/sn,M.q<.03&&(M.q=.03,M.rate<0&&(M.rate*=-.3)),M.q>=t.totalRevs-.035&&(I.phase==="play"?T_():M.q=.72),M.sway+=(ae.steer*1.5-M.sway)*qe(i,6),gu(),M.yaw+=re((ae.steer*1.5-M.sway)*.12,-.25,.25);let s=Ar(M.x,M.z,M.yaw);M.y+=(s-M.y)*qe(i,18),M.vy=0,M.air=0,M.grounded=!0,M.gload=1,M.prevHc=s,M.speed=M.rate/sn*Ye.mPerRev,M.vx=Math.cos(Ye.yaw)*M.speed,M.vz=-Math.sin(Ye.yaw)*M.speed,M.qRate=M.rate/sn,M.rhoRate=M.qRate}function w_(i){let t=I.L,e=Math.cos(M.yaw),n=Math.sin(M.yaw),s=M.vx*e-M.vz*n,r=M.vx*n+M.vz*e,a=ae.throttle,o=ae.steer,l=ae.hand,c=ae.boost;if(M.finished&&(a=s<20?.5:-.25,o=1,l=!1,c=!1),M.grounded){let b=c?240:170;a>0?s+=a*(c?100:62)*Math.max(0,1-s/b)*i:a<0?s+=a*(s>2?120:48)*i:c&&(s+=100*Math.max(0,1-s/b)*i),s-=s*.1*i+Math.sign(s)*Math.min(Math.abs(s),2*i),s<-80&&(s=-80),r*=Math.exp(-(l?1.1:7)*i),l&&(s-=s*.8*i)}let h=o*s/(7+s*s/100);if(l&&M.grounded&&(h*=1.8),M.grounded||(h*=.4),jn(t,M.x,M.z,Ie),M.grounded&&Ie.inGroove&&Math.abs(Ie.e)<gr*.95&&Math.abs(s)>4&&!M.finished){let b=1-Math.min(1,Math.abs(o)*1.7);xr(t,Ie.rev,Ie.e,Ye);let S=Math.cos(Ye.yaw),L=-Math.sin(Ye.yaw),k=M.vx*S+M.vz*L,N=k>=0?1:-1,F=Ye.yaw-N*re(Ie.e*.06,-.2,.2),Y=vl(F-M.yaw);Math.abs(Y)>Math.PI/2&&(Y=vl(Y+Math.PI+N*2*re(Ie.e*.06,-.2,.2))),Math.abs(Y)<.8&&(M.yaw+=k/Ye.mPerRev*te*i*b+Y*qe(i,9*b))}if(M.yaw+=h*i,e=Math.cos(M.yaw),n=Math.sin(M.yaw),M.vx=s*e+r*n,M.vz=-s*n+r*e,M.grounded){let S=(be(t,M.x+.7,M.z)-be(t,M.x-.7,M.z))/1.4,L=(be(t,M.x,M.z+.7)-be(t,M.x,M.z-.7))/(2*.7);M.vx-=24*S*i,M.vz-=24*L*i}let u=M.x,d=M.z,f=Ie.r;M.x+=M.vx*i,M.z+=M.vz*i,jn(t,M.x,M.z,Ie);let g=Ie.r,x=t.R_EDGE-3,m=fs+2.6;if(g>x||g<m){let b=M.x/Ie.rw,S=M.z/Ie.rw,L=M.vx*b+M.vz*S,k=g>x;(k&&L>0||!k&&L<0)&&(M.vx-=1.5*L*b,M.vz-=1.5*L*S,yl(M.x,M.y+.5,M.z,30,1,.5,.9,18),I.shake=Math.max(I.shake,.6));let N=k?x:m;M.x=b*N*Ie.f,M.z=S*N*Ie.f,g=N}let p=Ar(M.x,M.z,M.yaw),y=p-M.y,_=re((p-M.prevHc)/i,-60,15);M.prevHc=p;let v=-Cf;if(y>-.02){let b=900*y-52*(M.vy-_);b<0&&(b=0),b>400&&(b=400),v+=b,M.gload=b/Cf}else M.gload=0;M.vy+=v*i,M.y+=M.vy*i,M.y<p-.45&&(M.y=p-.45,M.vy<0&&(M.vy=0));let U=M.grounded;if(M.grounded=y>-.12,M.air=Math.max(0,M.y-p),!M.grounded)M.airTime+=i;else if(!U){if(M.airTime>.45&&I.phase==="play"){let b=Math.round(M.airTime*400);pn(M.airTime>1.1?"MASSIVE AIR":"BIG AIR",`+${b} \xB7 needle off the wax ${M.airTime.toFixed(1)} s`),ya(b),yl(M.x,M.y,M.z,40,1,.8,.3,14),I.shake=Math.max(I.shake,.8)}M.airTime=0}let T=Math.atan2(-M.z,M.x),R=Math.atan2(-d,u),P=vl(T-R);M.phiU+=P,M.qRate+=(P/i/te-M.qRate)*.5,M.rhoRate=-(g-f)/i/cn,M.rate=M.qRate*sn,M.speed=s,g<Mi&&Math.abs(h)>1&&M.grounded&&(M.donut+=Math.abs(h)*i,M.donut>te*1.5&&I.phase==="play"&&(M.donut=0,pn("LABEL DONUT","+300"),ya(300)))}function ba(i,t=0,e){if(!ee.ctx||ee.ctx.state!=="running"||!I.L)return;let n=I.L;if(pu()){let s=I.mode==="race",r=fa(n,M.x,M.z)/yi;s&&(jn(n,M.x,M.z,Ss),r+=M.air/Ss.f/yi),ee.ctl({q:M.q+M.qRate*t,qRate:M.qRate,rho:M.q,rhoRate:M.qRate,hb:r,g:s?re(M.gload,0,4):1,follow:!0,sway:M.sway/cn,snap:!!i},e)}else{let s=fa(n,M.x,M.z);jn(n,M.x,M.z,Ss);let r=Ss.r;ee.ctl({q:M.phiU/te+M.qRate*t,qRate:M.qRate,rho:(n.R0-r)/cn+M.rhoRate*t,rhoRate:M.rhoRate,hb:(s+M.air/Ss.f)/yi,g:re(M.gload,0,4),follow:!1,sway:0,snap:!!i},e)}}function Ea(i,t=!0){if(!I.L||i===I.mode&&!M.finished){I.mode=i,Yi();return}let e=I.L,n=new C(M.x,M.y,M.z);i==="follow"?(jn(e,M.x,M.z,Ie),M.q=re(Ie.rev,.05,e.totalRevs-.2),M.sway=0,M.rate=re(M.rate,-1.5,3),M.finished=!1,I.mode=i,gu(),M.blend.copy(n).sub(new C(M.x,M.y,M.z)),M.vy=0,t&&I.phase==="play"&&(pn("NEEDLE DROP","locked into the groove"),yl(M.x,M.y,M.z,30,.4,1,1,12))):(I.mode=i,M.phiU=M.q*te,M.prevHc=Ar(M.x,M.z,M.yaw),t&&I.phase==="play"&&pn("FREE DRIVE","the whole side is yours")),Yi(),ba(!0)}function Ff(){I.phase!=="play"||I.mode==="race"||(I.choice=I.mode==="follow"?"free":"follow",Ea(I.choice))}function Yi(){let i=mt("modeBadge");i.textContent=I.mode==="race"?"RACE":I.mode==="follow"?"FOLLOW":"FREE DRIVE",i.className=I.mode==="free"?"free":"",mt("racePanel").hidden=I.choice!=="race",mt("bMode").hidden=I.mode==="race",mt("raceHud").hidden=I.mode!=="race",mt("board").hidden=I.mode!=="race",mt("tBoost").textContent=I.mode==="race"?"ITEM":"NOS",mt("tGas").style.opacity=I.mode==="race"?"0.35":"",document.body.classList.toggle("racing",I.mode==="race"),document.querySelectorAll("#modes button").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.mode===I.choice)))}function T_(){M.finished=!0,I.phase="done",I.mode="free",M.phiU=M.q*te,M.prevHc=Ar(M.x,M.z,M.yaw),Yi(),pn("SIDE COMPLETE",`${Math.round(I.score).toLocaleString()} points`);for(let i=0;i<5;i++)setTimeout(()=>Of(),i*260);setTimeout(()=>{I.phase==="done"&&Ai(`Side complete \xB7 ${Math.round(I.score).toLocaleString()} points`)},4200)}function ya(i){I.score+=i,mt("score").textContent=String(Math.round(I.score)).padStart(6,"0")}function pn(i,t){let e=document.createElement("div");if(e.className="toast",e.textContent=i,t){let s=document.createElement("small");s.textContent=t,e.appendChild(s)}let n=mt("toasts");for(n.appendChild(e);n.children.length>2;)n.firstChild.remove();setTimeout(()=>e.remove(),1500)}function yl(i,t,e,n,s,r,a,o){for(let l=0;l<n;l++){let c=Math.random()*te,h=Math.random();wi.sparks.emit(i,t+.2,e,Math.cos(c)*o*h+M.vx*.3,4+Math.random()*o,Math.sin(c)*o*h+M.vz*.3,s*3,r*3,a*3,.5+Math.random()*.7,.5+Math.random()*.5)}}function Of(){let i=new Bt;for(let t=0;t<120;t++){i.setHSL(Math.random(),1,.55);let e=Math.random()*te,n=6+Math.random()*16;wi.sparks.emit(M.x,M.y+2,M.z,Math.cos(e)*n,14+Math.random()*16,Math.sin(e)*n,i.r*3,i.g*3,i.b*3,1.6+Math.random()*1.4,.7+Math.random()*.6,14)}I.flash=.25}function A_(i){if(I.phase!=="play"||I.mode==="race")return;let t=Qt.cA>.9&&Qt.cB>.9;if(I.mode==="follow")if(Math.abs(M.rate-1)<.04&&t){M.pocket+=i;let n=1+Math.min(7,Math.floor(M.pocket/8));ya(12*n*i),mt("combo").textContent=`IN THE POCKET \xD7${n}`,M.pocket>8&&Math.floor(M.pocket/8)!==Math.floor((M.pocket-i)/8)&&n<=8&&pn(`POCKET \xD7${n}`,"dead on 33\u2153")}else M.pocket>1&&(mt("combo").textContent=""),M.pocket=0;else mt("combo").textContent=M.hops>1&&I.time-M.hopT<2?`GROOVE HOPS \xD7${M.hops}`:"",Ie.inGroove&&Ie.n!==M.lastN&&M.grounded&&(I.time-M.hopT>2&&(M.hops=0),M.hops++,M.hopT=I.time,M.lastN=Ie.n,ya(40*M.hops),M.hops%5===0&&pn(`${M.hops} GROOVE HOPS`,`+${40*M.hops}`));let e=M.rate>.35?1:M.rate<-.35?-1:0;if(e&&e!==M.lastSign){M.lastSign=e,I.time-M.scrT>1.6&&(M.scr=0),M.scr++,M.scrT=I.time;let n=["BABY SCRATCH","CHIRP","TRANSFORMER","FLARE","CRAB","ORBIT"],s=n[Math.min(n.length-1,M.scr-1)];ya(120*M.scr),M.scr>=2&&pn(s,`+${120*M.scr}`),I.shake=Math.max(I.shake,.35)}}addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT")return;let t=i.key.length===1?i.key.toLowerCase():i.key;Ke.add(t),I.mode==="race"&&I.phase==="play"&&(t==="Shift"||t==="e"||t==="x"||t==="Enter")&&!i.repeat&&(I.useQueued=!0),I.phase==="play"||I.phase==="done"?t==="m"||t==="Tab"?(i.preventDefault(),Ff()):t==="c"?yu():t==="r"?I.mode==="free"&&I.phase==="play"&&(I.choice="follow",Ea("follow")):(t==="Escape"||t==="p")&&Ai():I.phase==="menu"&&t==="Enter"&&!I.loading&&vu(),[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&I.phase==="play"&&i.preventDefault()});addEventListener("keyup",i=>{Ke.delete(i.key.length===1?i.key.toLowerCase():i.key)});addEventListener("blur",()=>Ke.clear());var Rn={steer:0,gas:!1,brake:!1,boost:!1};function xu(i,t,e){let n=mt(i),s=a=>{a.preventDefault(),n.setPointerCapture?.(a.pointerId),n.classList.add("on"),t(a)},r=a=>{n.classList.remove("on"),e(a)};return n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n}xu("tGas",()=>Rn.gas=!0,()=>Rn.gas=!1);xu("tBrake",()=>Rn.brake=!0,()=>Rn.brake=!1);xu("tBoost",()=>Rn.boost=!0,()=>Rn.boost=!1);{let i=mt("tSteer"),t=i.querySelector("i"),e=s=>{let r=i.getBoundingClientRect(),a=re((s.clientX-(r.left+r.width/2))/(r.width/2),-1,1);Rn.steer=-a,t.style.setProperty("--x",a*r.width*.3+"px")};i.addEventListener("pointerdown",s=>{s.preventDefault(),i.setPointerCapture?.(s.pointerId),e(s)}),i.addEventListener("pointermove",s=>{(s.buttons||s.pointerType==="touch")&&e(s)});let n=()=>{Rn.steer=0,t.style.setProperty("--x","0px")};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}function R_(i){let t=0,e=0;(Ke.has("w")||Ke.has("ArrowUp"))&&(t+=1),(Ke.has("s")||Ke.has("ArrowDown"))&&(t-=1),(Ke.has("a")||Ke.has("ArrowLeft"))&&(e+=1),(Ke.has("d")||Ke.has("ArrowRight"))&&(e-=1);let n=Ke.has(" "),s=Ke.has("Shift");Rn.gas&&(t+=1),Rn.brake&&(t-=1),Rn.boost&&(s=!0),e+=Rn.steer,I.mode==="race"&&((Ke.has("e")||Ke.has("x")||Ke.has("Enter")||I.useQueued)&&(s=!0),I.useQueued=!1,Tr&&!Rn.brake&&(t=1));let r=[];try{r=navigator.getGamepads?navigator.getGamepads():[]}catch{r=[]}for(let a of r){if(!a||!a.connected)continue;let o=Math.abs(a.axes[0])>.12?a.axes[0]:0;e-=o,t+=(a.buttons[7]?.value||0)-(a.buttons[6]?.value||0),a.buttons[0]?.pressed&&(s=!0),(a.buttons[1]?.pressed||a.buttons[2]?.pressed)&&(n=!0);break}ae.throttle=re(t,-1,1),ae.steer+=(re(e,-1,1)-ae.steer)*qe(i,Tr?20:9),ae.hand=n,ae.boost=s,I.phase!=="play"&&(ae.throttle=0,ae.steer=0,ae.hand=!1,ae.boost=!1)}var wl=mt("tracks");Ma.forEach((i,t)=>{let e=document.createElement("button");e.type="button",e.innerHTML="<b></b><small></small>",e.querySelector("b").textContent=i.title,e.querySelector("small").textContent=i.sub,e.setAttribute("aria-pressed",String(t===0)),e.addEventListener("click",()=>P_(t)),wl.appendChild(e)});var Bf=mt("worlds");ds.forEach(i=>{let t=document.createElement("button");t.type="button",t.innerHTML="<b></b><small></small>",t.querySelector("b").textContent=i.name,t.querySelector("small").textContent=i.blurb,t.dataset.world=i.id,t.addEventListener("click",()=>{I.locked||!I.pressed||(I.mode==="race"&&I.started&&bs(),El(i),Ml())}),Bf.appendChild(t)});function C_(){[...Bf.children].forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.world===I.world.id)))}function P_(i){I.locked||(I.selected=i,[...wl.children].forEach((t,e)=>t.setAttribute("aria-pressed",String(i===e))),mt("uploadLabel").classList.remove("sel"),bl(Ma[i]).then(Ml))}function zf(i){if(!i)return;if(se){An("Online races use the built-in tracks, so everyone has the same groove.",!0);return}[...wl.children].forEach(n=>n.setAttribute("aria-pressed","false")),mt("uploadLabel").classList.add("sel");let t=i.name.replace(/\.[^.]+$/,"").replace(/[_]+/g," ").slice(0,60);mt("uploadHint").textContent=i.name;let e=0;for(let n of t)e=(e*31+n.charCodeAt(0))%360;bl({file:i,title:t,sub:"Your pressing",hue:e})}mt("file").addEventListener("change",i=>zf(i.target.files[0]));addEventListener("dragover",i=>{i.preventDefault()});addEventListener("drop",i=>{i.preventDefault();let t=i.dataTransfer?.files?.[0];t&&(I.phase!=="menu"&&Ai(),zf(t))});document.querySelectorAll("#modes button").forEach(i=>i.addEventListener("click",()=>{I.mode==="race"&&I.started&&bs(),I.choice=i.dataset.mode,I.started&&I.phase==="menu"&&I.choice!=="race"&&Ea(I.choice,!1),Yi(),Tl()}));var ga=null;function kf(){if(!(ga||!Tr))try{let t=new ArrayBuffer(844),e=new DataView(t),n=(r,a)=>{for(let o=0;o<a.length;o++)e.setUint8(r+o,a.charCodeAt(o))};n(0,"RIFF"),e.setUint32(4,836,!0),n(8,"WAVEfmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,800,!0);for(let r=0;r<800;r++)e.setUint8(44+r,128);ga=new Audio(URL.createObjectURL(new Blob([t],{type:"audio/wav"}))),ga.loop=!0,ga.playsInline=!0;let s=ga.play();s&&s.catch&&s.catch(()=>{})}catch{}}mt("go").addEventListener("click",()=>{if(ee.ctx)try{ee.ctx.resume()}catch{}kf(),vu()});mt("bFull").addEventListener("click",()=>{try{if(document.fullscreenElement)document.exitFullscreen();else{let i=document.documentElement.requestFullscreen?.();i&&i.catch&&i.catch(()=>{})}}catch{}});mt("bMode").addEventListener("click",()=>Ff());mt("bCam").addEventListener("click",()=>yu());mt("bMenu").addEventListener("click",()=>Ai());function Ai(i){I.mode==="race"&&I.started&&se&&I.phase==="play"&&(bs(),i="You left the race."),I.phase==="play"&&(I.pauseAt=performance.now()),I.phase="menu",mt("menu").hidden=!1,mt("hud").hidden=!0,ee.suspend();let t=mt("results");i?(t.hidden=!1,t.textContent="",typeof i=="string"?t.textContent=i:t.appendChild(i),I.started=!1):t.hidden=!0,Tl()}function Tl(){let i=mt("go");I.choice==="race"&&se?(i.textContent=se.isHost()?"Start the race":"Waiting for the host",i.disabled=!se.isHost()||I.loading):(i.textContent=I.started?"Resume":I.choice==="race"?"Start the race":"Drop the needle",i.disabled=I.loading||!I.L)}async function vu(){if(I.loading||!I.L)return;try{await ee.init()}catch{}await ee.resume();let i=I.choice,t=!I.started;if(i==="race"&&t){if(se){se.isHost()&&se.send({t:"start"});return}Gf(Math.random()*2147483647|0,Af(5,Hf()),performance.now()+3800,null);return}mt("menu").hidden=!0,mt("hud").hidden=!1,t?(I.phase="play",I.mode="follow",M.finished=!1,mu(!1),i==="free"?Ea("free",!1):Yi(),I.started=!0,I.cam=0):I.mode==="race"&&I.pauseAt&&ge.goAt!=null&&(ge.goAt+=performance.now()-I.pauseAt),I.phase="play",Xi=!0,ba(!0),t&&pn(I.song.title.toUpperCase(),i==="follow"?"follow mode \xB7 ride the groove":"free drive \xB7 go anywhere")}var _u=i=>i+(["th","st","nd","rd"][i%100>10&&i%100<14?0:i%10]||"th");function I_(i){try{let t=ee.ctx;if(!t||t.state!=="running")return;let e=t.createOscillator(),n=t.createGain();e.type="square",e.frequency.value=i?880:440,n.gain.setValueAtTime(1e-4,t.currentTime),n.gain.exponentialRampToValueAtTime(.16,t.currentTime+.01),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+(i?.6:.18)),e.connect(n),n.connect(ee.master),e.start(),e.stop(t.currentTime+.7)}catch{}}var L_={toast:pn,burst:yl,beep:I_,shake:i=>{I.shake=Math.max(I.shake,i)},flash:i=>{I.flash=Math.max(I.flash,i)},note:()=>{},item:i=>pn(_r[i].name,_r[i].hint),finish:i=>{if(pn(`${_u(i).toUpperCase()} PLACE`,i===1?"you beat the record":"side complete"),i<=3)for(let t=0;t<4;t++)setTimeout(Of,t*250)}},ge=new dl(Sa,L_),se=null,Pf=0;function Hf(){return(mt("pname").value||"").trim().slice(0,14)||"You"}function Vf(){let i=ge.me;i&&(M.q=i.q,M.sway=i.lat,M.rate=i.rate,M.x=i.x,M.z=i.z,M.yaw=i.yaw,M.y=i.ya,M.vy=i.vy,M.air=i.air,M.grounded=i.grounded,M.gload=i.gload,M.spinVis=i.spinA,M.qRate=i.rate/sn,M.speed=M.qRate*i.mPerRev,M.vx=Math.cos(i.yaw)*M.speed,M.vz=-Math.sin(i.yaw)*M.speed,M.phiU=i.q*te,Ar(M.x,M.z,M.yaw))}function Gf(i,t,e,n){mt("menu").hidden=!0,mt("hud").hidden=!1,mt("results").hidden=!0,I.phase="play",I.mode="race",I.started=!0,I.cam=0,M.finished=!1,M.blend.set(0,0,0),I.score=0,I.raceShown=!1,ge.setup(I.L,i,t,n),ge.startAt(e),Vf(),M.prevHc=M.y,Yi(),Xi=!0,ba(!0),pn(I.song.title.toUpperCase(),`${t.length} racers \xB7 ${ge.laps} laps to the label`)}function bs(){ge.stop(),I.mode="follow",I.started=!1,M.finished=!1,mu(!1),Yi()}function Wf(){let i=document.createElement("div"),t=document.createElement("ol");t.className="standings";let e=ge.me;i.textContent=`${_u(e.place)} of ${ge.racers.length}`;for(let n of ge.rank()){let s=document.createElement("li");s.textContent=`${n.name}${n.fin!=null?" \xB7 "+_l(n.fin)+"."+String(Math.floor(n.fin%1*10)):""}`,n===e&&(s.className="me"),t.appendChild(s)}return i.appendChild(t),i}function D_(){let i=ge.me;if(!i)return;let t=ge.rank();mt("score").textContent=`${_u(i.place)}/${t.length}`,mt("combo").textContent=`LAP ${re(Math.floor(i.q-fn)+1,1,ge.laps)}/${ge.laps} \xB7 ${Math.min(10,i.notes)} NOTES`;let e=mt("item"),n=i.rollT>0?Object.keys(_r)[Math.floor(performance.now()/70)%5]:i.item;e.textContent=n?_r[n].name:"NO ITEM",e.style.setProperty("--c",n?_r[n].color:"rgba(184,166,214,.5)"),e.classList.toggle("has",!!i.item),mt("status2").textContent=i.rpmT>0?"45 RPM":i.shield?"SLEEVE ON":i.boostT>0?"BOOST":i.draft>.4?"SLIPSTREAM":"";let s=mt("board");if(s.children.length!==Math.min(8,t.length)){s.textContent="";for(let r=0;r<Math.min(8,t.length);r++)s.appendChild(document.createElement("li"))}t.slice(0,8).forEach((r,a)=>{let o=s.children[a],l=r.name;o.textContent!==l&&(o.textContent=l),o.className=r===i?"me":"",o.style.setProperty("--c","#"+r.color.toString(16).padStart(6,"0"))})}function wr(){let i=mt("lobby");if(i.textContent="",mt("bLeave").hidden=!se,mt("bCreate").hidden=!!se,mt("bJoin").hidden=!!se,mt("room").disabled=!!se,I.locked=!!se&&!se.isHost(),document.body.classList.toggle("locked",I.locked),se){let t=document.createElement("div");t.className="code",t.textContent=`Room ${se.room}`,i.appendChild(t);let e=document.createElement("ul");for(let s of se.players){let r=document.createElement("li");r.textContent=s.name+(s.id===se.host?" \xB7 host":"")+(s.id===se.id?" \xB7 you":""),r.style.setProperty("--c","#"+(s.color>>>0).toString(16).padStart(6,"0")),e.appendChild(r)}i.appendChild(e);let n=document.createElement("small");n.textContent=se.isHost()?"Share the room code. Pick the track and world, then start.":"The host picks the track and starts the race.",i.appendChild(n)}Tl()}function Ml(){se&&se.isHost()&&I.song&&I.song.id&&se.send({t:"cfg",song:I.song.id,world:I.world.id})}async function ou(i){let t=Ma.findIndex(e=>e.id===i.song);t<0||(!I.song||I.song.id!==i.song?(I.selected=t,[...wl.children].forEach((e,n)=>e.setAttribute("aria-pressed",String(t===n))),await bl({...Ma[t],world:i.world})):I.world.id!==i.world&&(I.mode==="race"&&I.started&&ge.stop(),El(eu(i.world))))}async function Xf(i){if(se)return;let t=mt("server").value.trim();if(t&&ys.save(t),!ys.base()){An("Online racing needs the game served from its Cloudflare Worker, or a race server address entered below.",!0),mt("srvRow").hidden=!1;return}try{await ee.init(),ee.ctx.resume()}catch{}kf();let e=new ys;An("Connecting\u2026");try{let n=await e.connect(i,Hf(),_s[Math.floor(Math.random()*_s.length)]);se=e,mt("room").value=i,An(`Connected to room ${i}.`),e.on.join=wr,e.on.leave=s=>{ge.drop(s.id),wr(),Ml()},e.on.cfg=s=>{e.isHost()||ou(s.cfg)},e.on.close=()=>{se=null,I.mode==="race"&&I.started&&(bs(),Ai("Lost the connection to the race server.")),wr(),An("Disconnected from the room.",!0)},e.on.snap=s=>ge.onSnapshot(s.s,performance.now()),e.on.ev=s=>ge.onEvent(s.from,s.e),e.on.go=async s=>{await ou(s.cfg),I.loading&&await new Promise(a=>{I.onLoaded=()=>{I.onLoaded=null,a()}}),await ee.resume();let r=s.grid.map(a=>{let o=e.players.find(l=>l.id===a)||{name:"Racer",color:16777215};return{id:a,name:o.name,color:o.color,kind:a===e.id?"me":"remote"}});r.some(a=>a.kind==="me")&&Gf(s.seed,r,e.toPerf(s.at),e)},e.on.over=()=>{if(I.mode==="race"&&I.started&&!I.raceShown){I.raceShown=!0;let s=Wf();bs(),Ai(s)}wr()},e.isHost()?Ml():await ou(n.cfg),wr()}catch(n){An(n.message==="no-server"?"No race server address set.":n.message&&n.message.includes("full")?n.message:"Could not reach the race server. Check the address, or that the Worker is deployed.",!0),mt("srvRow").hidden=!1}}mt("bCreate").addEventListener("click",()=>{let i="ABCDEFGHJKLMNPQRSTUVWXYZ",t="";for(let e=0;e<4;e++)t+=i[Math.floor(Math.random()*i.length)];Xf(t)});mt("bJoin").addEventListener("click",()=>{let i=mt("room").value.trim().toUpperCase();if(!/^[A-Z0-9]{3,8}$/.test(i)){An("Enter the 4-letter room code your host shared.",!0);return}Xf(i)});mt("bLeave").addEventListener("click",()=>{if(se){let i=se;se=null,i.close()}I.mode==="race"&&I.started&&bs(),wr(),An("Left the room.")});document.querySelectorAll("#raceKind button").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll("#raceKind button").forEach(t=>t.setAttribute("aria-pressed",String(t===i))),mt("online").hidden=i.dataset.kind!=="online",i.dataset.kind!=="online"&&se&&mt("bLeave").click()}));try{mt("pname").value=localStorage.getItem("wax.name")||"",mt("pname").addEventListener("change",()=>{try{localStorage.setItem("wax.name",mt("pname").value)}catch{}})}catch{}mt("srvRow").hidden=!!ys.base()&&!/github\.io$/.test(location.hostname);var Xi=!0,If=new C,Lf=new C,yr=new C,xa=new C,pl=0,ml=0,Df=["CHASE","NEEDLE CAM","ORBIT","TOP DOWN"];function yu(){I.cam=(I.cam+1)%Df.length,Xi=!0,pn(Df[I.cam])}function U_(i,t,e){let n=I.phase==="menu"&&!I.started?2:I.cam,s=re(Math.abs(M.speed)/200,0,1.3);pl+=vl(M.yaw-pl)*(Xi?1:qe(i,6));let r=Math.cos(pl),a=-Math.sin(pl),o=62;if(n===0){let u=Pe.aspect<1?1.55:1,d=(7.4+s*1.8)*u;yr.set(-r*d,(3.6+s*.5)*(u>1?1.5:1),-a*d),xa.set(r*8,u>1?-2.6:.9,a*8),o=60+s*16}else if(n===1){let u=Math.cos(M.yaw),d=-Math.sin(M.yaw);yr.set(e.x-t.x-u*3.9,e.y-t.y+.62,e.z-t.z-d*3.9),xa.set(e.x-t.x+u*6,e.y-t.y+.75,e.z-t.z+d*6),o=74+s*8}else if(n===2){ml+=i*.22;let u=window.__orbitD||13;yr.set(Math.cos(ml)*u,5.5+Math.sin(ml*.7)*2.2,Math.sin(ml)*u),xa.set(0,.8,0),o=58}else yr.set(-r*8,95,-a*8),xa.set(r*10,0,a*10),o=55;let l=Xi?1:qe(i,n===1?12:5),c=Xi?1:qe(i,8);If.lerp(yr,l),Lf.lerp(xa,c),Xi=!1,Pe.position.copy(t).add(If);let h=be(I.L,Pe.position.x,Pe.position.z)+(n===1?.35:1.2);Pe.position.y<h&&(Pe.position.y=h),I.shake>.01&&(Pe.position.x+=(Math.random()-.5)*I.shake*.5,Pe.position.y+=(Math.random()-.5)*I.shake*.5,Pe.position.z+=(Math.random()-.5)*I.shake*.5),Pe.up.set(0,1,0),n===3&&Pe.up.set(r,0,a),Pe.lookAt(yr.copy(t).add(Lf)),window.__cam&&(Pe.position.set(...window.__cam.pos),Pe.up.set(0,1,0),Pe.lookAt(...window.__cam.look)),Math.abs(Pe.fov-o)>.05&&(Pe.fov+=(o-Pe.fov)*qe(i,4),Pe.updateProjectionMatrix())}var N_=mt("mini"),Ve=N_.getContext("2d"),Sl=document.createElement("canvas");Sl.width=Sl.height=192;function F_(){let i=I.L,t=Sl.getContext("2d"),e=192,n=(e/2-3)/(i.R_EDGE*i.fMax),s=I.pressed.tex.env,r=1e-6;for(let o of s)r=Math.max(r,o);t.clearRect(0,0,e,e),t.fillStyle="#07040d",t.beginPath(),t.arc(e/2,e/2,e/2-2,0,te),t.fill(),t.lineWidth=Math.max(.6,cn*n*.55);let a=.004;for(let o=0;o<i.totalRevs;o+=a){let l=(o-fn)/i.musicRevs,c=l>=0&&l<1?s[Math.floor(l*s.length)]/r:0;mr(i,o,Ye);let h=e/2+Ye.x*n,u=e/2+Ye.z*n;mr(i,o+a*1.3,Ye),t.strokeStyle=`hsl(${(330+o*9)%360} 95% ${10+c*55}%)`,t.beginPath(),t.moveTo(h,u),t.lineTo(e/2+Ye.x*n,e/2+Ye.z*n),t.stroke()}t.fillStyle=`hsl(${I.song.hue} 90% 55%)`,t.beginPath(),t.arc(e/2,e/2,Mi*n,0,te),t.fill(),t.fillStyle="#07040d",t.beginPath(),t.arc(e/2,e/2,fs*n+1,0,te),t.fill(),t.strokeStyle="#ff2a7f",t.lineWidth=2,t.beginPath(),t.arc(e/2,e/2,e/2-2,0,te),t.stroke()}function O_(){let t=93/(I.L.R_EDGE*I.L.fMax);Ve.clearRect(0,0,192,192),Ve.drawImage(Sl,0,0);let e=192/2+M.x*t,n=192/2+M.z*t;if(Ve.fillStyle="#fff",Ve.shadowColor="#19e3ff",Ve.shadowBlur=12,Ve.beginPath(),Ve.arc(e,n,5,0,te),Ve.fill(),Ve.shadowBlur=0,I.mode==="race")for(let s of ge.racers)s!==ge.me&&(Ve.fillStyle="#"+s.color.toString(16).padStart(6,"0"),Ve.beginPath(),Ve.arc(192/2+s.x*t,192/2+s.z*t,4,0,te),Ve.fill());Ve.strokeStyle="#19e3ff",Ve.lineWidth=2.5,Ve.beginPath(),Ve.moveTo(e,n),Ve.lineTo(e+Math.cos(M.yaw)*12,n-Math.sin(M.yaw)*12),Ve.stroke()}var B_=mt("scope"),z_=B_.getContext("2d");function k_(){let t=z_,e=3,n=224/2,s=224*.6;if(t.fillStyle="rgba(5,3,10,0.35)",t.fillRect(0,0,224,224),t.strokeStyle="rgba(184,166,214,.5)",t.lineWidth=2,t.beginPath(),t.moveTo(n-34*e,s-34*e+8*e),t.lineTo(n,s+8*e),t.lineTo(n+34*e,s-34*e+8*e),t.stroke(),!Qt.scope||performance.now()-Qt.fresh>300)return;let r=Qt.scope,a=r.length/2;t.lineWidth=2,t.lineJoin="round",t.strokeStyle="#19e3ff",t.shadowColor="#19e3ff",t.shadowBlur=8,t.beginPath();for(let l=0;l<a;l++){let c=(Qt.scI/2+l)%a*2,h=n-re(r[c],-40,40)*e,u=s-re(r[c+1],-40,40)*e;l?t.lineTo(h,u):t.moveTo(h,u)}t.stroke(),t.shadowBlur=0;let o=(Qt.scI/2+a-1)%a*2;t.fillStyle="#fff",t.beginPath(),t.arc(n-re(r[o],-40,40)*e,s-re(r[o+1],-40,40)*e,5,0,te),t.fill()}var H_=mt("vu"),V_=H_.getContext("2d"),Mr={l:0,r:0,pl:0,pr:0},fM=new Float32Array(1024);function G_(){let i=V_;i.clearRect(0,0,300,224);let n=ee.spec,s=30;for(let c=0;c<s;c++){let h=Math.floor(Math.pow(c/s,2)*300)+1,u=Math.floor(Math.pow((c+1)/s,2)*300)+2,d=0;for(let g=h;g<u;g++)d=Math.max(d,n[g]);d/=255;let f=d*d*118;i.fillStyle=`hsl(${320-c*6} 95% ${45+d*25}%)`,i.fillRect(6+c*9.7,124-f,7.5,f)}let r=re(Math.sqrt(ee.level)*1.5,0,1),a=re(Qt.pk*1.4,0,1);Mr.l+=(r-Mr.l)*.4,Mr.pl=Math.max(Mr.pl-.01,a);let o=(c,h,u,d)=>{i.fillStyle="rgba(184,166,214,.18)",i.fillRect(34,c,258,22);let f=i.createLinearGradient(34,0,292,0);f.addColorStop(0,"#19e3ff"),f.addColorStop(.7,"#ffd23a"),f.addColorStop(1,"#ff2a7f"),i.fillStyle=f,i.fillRect(34,c,258*h,22),i.fillStyle="#fff",i.fillRect(34+258*u-3,c,3,22),i.fillStyle="#b8a6d6",i.font='700 20px "Chakra Petch", sans-serif',i.fillText(d,4,c+18)};o(142,Mr.l,Mr.pl,"VU");let l=re(Math.min(Qt.cA,Qt.cB),0,1);o(180,l,l,"TRK")}var W_=mt("strobe"),X_=W_.getContext("2d"),Uf=0;function q_(i){let t=X_,e=640,n=28;Uf+=(M.rate-1)*i*220,t.clearRect(0,0,e,n);let s=Math.abs(M.rate-1)<.04;t.fillStyle=s?"#ffd23a":"#ff2a7f";for(let r=-40+(Uf%40+40)%40;r<e+40;r+=40)t.beginPath(),t.arc(r,n/2,8,0,te),t.fill()}function Y_(i){let t=I.L,e=re((pu()?M.q:Ie.rev)-fn,0,t.musicRevs)*sn;mt("time").textContent=`${_l(e)} / ${_l(t.duration)}`;let n=33.333*M.rate,s=mt("rpm");s.textContent=Math.abs(n)<99.95?Math.abs(n).toFixed(1):Math.abs(n).toFixed(0),s.className=M.rate<-.02?"rev":"",mt("pitch").textContent=M.rate<-.02?"REVERSE":`${M.rate>=1?"+":"\u2212"}${Math.abs((M.rate-1)*100).toFixed(M.rate>3?0:1)}%`,mt("spd").textContent=`${Math.round(Math.abs(M.speed)*3.6)} km/h`;let r=ee.ctx&&ee.ctx.state==="running"&&performance.now()-Qt.fresh<400;mt("lampL").className=r&&Qt.cB>.5?"on":"",mt("lampR").className=r&&Qt.cA>.5?"on":"",mt("lampLand").className=r&&Qt.cL>.3?"on":"",mt("lampAir").className=r&&Qt.cA+Qt.cB+Qt.cL<.2?"on":"",O_(),k_(),G_(),q_(i)}var ei=new C,Sr=new C,ni=new C,va=new C,Z_=new C,$_=new C,J_=new C,Ms=new Bt,K_=!1,Nf=performance.now(),br=0,gl=16,xl=0;var Er=0,lu=-3,cu=0;function qf(i){requestAnimationFrame(qf);let t=(i-Nf)/1e3;if(Nf=i,t>.1&&(t=.1),t<=0)return;if(!I.L){Ti.setRenderTarget(null),Ti.clear();return}I.time+=t,R_(t),br+=t;let e=1/120,n=0,s=I.phase==="menu"&&I.started;for(s&&(br=0);br>=e&&n<8;)I.mode==="race"?(ge.step(e,ae),Vf()):I.mode==="follow"&&!M.finished?E_(e):w_(e),br-=e,n++;n===8&&(br=0),jn(I.L,M.x,M.z,Ie),A_(t),ba(!1,s?0:br,i),ee.analyse(),I.rot+=t*.11;let r=kn.uniforms.uSpec.value;for(let N=0;N<32;N++){let F=Math.floor(Math.pow(N/32,1.8)*300)+1,Y=ee.spec[F]/255;r[N]+=(Y-r[N])*(Y>r[N]?.6:.15)}if(I.phase==="menu"&&ee.ctx?.state!=="running")for(let N=0;N<32;N++)r[N]=.35+.3*Math.sin(I.time*2+N*.7)*Math.sin(I.time*.9+N*.23);wi.update(t,I.time,I.rot,ee.bass,ee.level),M.blend.multiplyScalar(Math.exp(-t*7)),Sr.set(M.x+M.blend.x,M.y+M.blend.y,M.z+M.blend.z);let a=(Ei[0]+Ei[1])/2,o=(Ei[2]+Ei[3])/2,l=(Ei[1]+Ei[3])/2,c=(Ei[0]+Ei[2])/2,h=Math.atan2(a-o,2*uu),u=Math.atan2(l-c,2*du);M.grounded||(h=M.pitch-t*.25*Math.sign(M.vy)*0+re(M.vy*.015,-.35,.35)*.05,u=M.roll*.98),M.pitch+=(h-M.pitch)*qe(t,12),M.roll+=(u-M.roll)*qe(t,12),me.root.position.copy(Sr),me.root.rotation.set(0,0,0),me.root.rotation.order="YZX",me.root.rotation.y=M.yaw+(I.mode==="race"&&M.spinVis||0),me.root.rotation.z=M.pitch,me.root.rotation.x=-M.roll;let d=re((M.gload-1)*.06,-.12,.2);me.body.position.y=-d,me.body.rotation.x=re(-ae.steer*Math.abs(M.speed)*.0016,-.2,.2),me.body.rotation.z=re(ae.throttle*.04+(ae.boost?.04:0),-.08,.1);let f=Math.cos(M.yaw),g=Math.sin(M.yaw);M.wheelSpin-=M.speed*t,M.steerVis+=(ae.steer*.42-M.steerVis)*qe(t,12);for(let N=0;N<4;N++){let F=me.wheels[N],Y=Math.sign(F.z),G=.3,tt=M.x+f*F.x+g*F.z,W=M.z-g*F.x+f*F.z,ct=be(I.L,tt-g*Y*G,W-f*Y*G),dt=be(I.L,tt+g*Y*G,W+f*Y*G),at=be(I.L,tt,W),Dt=Math.atan2(dt-ct,2*G)-Y*M.roll;Dt=re(Dt,-.8,.8),M.grounded||(Dt=.1),F.cam=(F.cam||0)+(Dt-(F.cam||0))*qe(t,14);let ht=M.y+(F.x>0?1:-1)*(a-o)/2+(Y>0?1:-1)*(l-c)/2,H=M.grounded?re(at-ht,-.5,.5):-.3;F.y+=(F.R*Math.cos(F.cam)+H+Math.abs(Math.sin(F.cam))*.12-F.y)*qe(t,16),F.pivot.position.y=F.y,F.pivot.rotation.set(-Y*F.cam,F.front?M.steerVis:0,0),F.spin.rotation.z=M.wheelSpin/F.R,ni.set(F.x,F.y,F.z-Y*.3),vr(F.arm1,F.inner,ni),ni.y+=.1,vr(F.arm2,va.set(F.x-.4,F.inner.y,F.inner.z),ni),vr(F.shock,F.top,ni)}let x=ee.ctx&&ee.ctx.state==="running"&&performance.now()-Qt.fresh<300,m=fa(I.L,M.x,M.z);jn(I.L,M.x,M.z,Ss);let p=Ss.f,y=x?Qt.ay*yi:0,_=x?(Qt.az+5.5)*yi:m;Er+=(y-Er)*qe(t,25),lu+=(_-lu)*qe(t,30);let v=x?re((Qt.ty-Qt.ay)*yi*.3,-.7,.7):0,U=x?re((Qt.tz-Qt.az)*yi*.3,-.5,.5):0,T=Math.hypot(M.x,M.z)||1,R=-M.x/T,P=-M.z/T,b=M.x+R*Er*p,S=M.z+P*Er*p;ei.set(Sr.x+R*(Er+v)*p,Math.max(ms(I.L,b,S)+(lu+U)*p,be(I.L,b,S)-.25)+(M.air>2.2?M.air-2.2:0),Sr.z+P*(Er+v)*p),me.root.updateMatrixWorld(!0),ni.copy(ei),me.root.worldToLocal(ni),me.cart.position.copy(ni),me.cart.rotation.set(0,0,0),va.set(-1.05,.98-U,0),me.cartBody.position.copy(va),vr(me.cantilever,Z_.set(0,.16,0),$_.copy(va).add(J_.set(.32,-.1,0))),me.diamond.rotation.y+=t*3,ni.copy(me.cart.position).add(va.set(-1.05,1.08,0)),vr(me.stem,me.stemAnchor,ni);let L=x?re(1-Math.min(Qt.cA,Qt.cB),0,1):0;if(me.tipGlow.scale.setScalar(1.3+ee.bass*2+L*2.5),x){cu+=t*(Math.abs(M.rate)*26+L*240+Qt.cL*160+Math.max(0,M.gload-1.6)*200);let N=Math.cos(M.yaw),F=-Math.sin(M.yaw),Y=Math.sign(M.speed)||1;for(;cu>1;){cu-=1;let G=L+Qt.cL>.15,tt=Math.random()*te,W=G?9:3;G?wi.sparks.emit(ei.x,ei.y+.1,ei.z,-N*Y*6+Math.cos(tt)*W,3+Math.random()*9,-F*Y*6+Math.sin(tt)*W,3.5,2.2,.6,.35+Math.random()*.5,.35+Math.random()*.3):wi.sparks.emit(ei.x,ei.y+.1,ei.z,-N*Y*9+Math.cos(tt)*W,2+Math.random()*4,-F*Y*9+Math.sin(tt)*W,.5,2.2,2.6,.25+Math.random()*.3,.22)}}if(wi.sparks.update(t,(N,F)=>be(I.L,N,F)),I.mode==="race"&&(ge.frame(t,I.time),se&&ge.active&&i-Pf>80&&(Pf=i,se.send({t:"s",d:ge.netState()})),ge.over&&!I.raceShown&&!se)){I.raceShown=!0;let N=Wf();bs(),Ai(N)}me.barMats.forEach((N,F)=>{Ms.setHSL((I.time*.6+F/6)%1,1,.5),N.color.copy(Ms).multiplyScalar(2+ee.bass*6)}),Ms.setHSL(I.time*.08%1,1,.5),me.mats.rimGlow.color.copy(Ms).multiplyScalar(2+ee.bass*3),kn.uniforms.uGlowCol.value.set(Ms.r,Ms.g,Ms.b).multiplyScalar(.6+ee.bass*2.2),M.throttleVis+=((I.mode!=="free"?re(Math.abs(M.rate),0,3)/2:Math.abs(ae.throttle)*.6+.2)-M.throttleVis)*qe(t,8),M.boostVis+=(((I.mode==="race"?ge.me&&(ge.me.boostT>0||ge.me.rpmT>0):ae.boost)?1:0)-M.boostVis)*qe(t,8),me.flames.forEach((N,F)=>{let Y=.5+M.throttleVis*1.4+M.boostVis*3+Math.random()*.35;N.scale.set(Y*1.6,.5+Y*.25,1),N.material.color.setRGB(1,.45+M.boostVis*.3,.15+M.boostVis*.9),N.material.opacity=.75}),me.whip.rotation.z=re(-M.speed*.0022-ae.throttle*.08,-.5,.4)+Math.sin(I.time*17)*.02*Math.min(1,Math.abs(M.speed)/40),me.whip.rotation.x=re(ae.steer*.25,-.3,.3),me.head.rotation.y=ae.steer*.5,me.steer.rotation.x=-ae.steer*1.2;let k=kn.uniforms;k.uBuggy.value.copy(Sr),k.uBuggyFwd.value.set(f,0,-g),k.uTip.value.copy(ei),k.uTip.value.y+=.2,k.uProg.value=pu()?M.q:Ie.rev,k.uBlur.value=Math.abs(M.speed)*.006,k.uTipGlow.value=.35+ee.bass*1.2+L*2,k.uPulse.value=ee.bass,kn.strobeMat.uniforms.uTime.value=I.time,kn.strobeMat.uniforms.uRate.value=M.rate,I.shake=Math.max(0,I.shake-t*2.2),M.boostVis>.5&&(I.shake=Math.max(I.shake,.12)),I.flash=Math.max(0,I.flash-t*1.5),U_(t,Sr,ei),_a.uniforms.uSpeed.value=re(Math.abs(M.speed)/190,0,1.4)*[1,.7,.2,.12][I.phase==="menu"&&!I.started?2:I.cam],_a.uniforms.uTime.value=I.time,_a.uniforms.uFlash.value=I.flash,hu.strength=.42+ee.bass*.3,Wi.render(),I.phase!=="menu"&&(Y_(t),I.mode==="race"&&D_()),gl+=(t*1e3-gl)*.05,gl>30&&I.time>4?(xl+=t,xl>2.5&&qi.scale>.55&&(qi.scale*=.8,xl=0,gl=16,fu())):xl=0}document.addEventListener("visibilitychange",()=>{document.hidden&&I.phase==="play"&&!(I.mode==="race"&&se)&&Ai()});Yi();Tr&&(mt("keys").hidden=!0);var Q_=()=>{I.song&&I.L&&(su(kn.labelCanvas,I.song.title,I.song.sub,I.song.hue),kn.labelTex.needsUpdate=!0)};(document.fonts?.ready||Promise.resolve()).then(()=>{K_=!0,Q_()});bl(Ma[0]);requestAnimationFrame(qf);window.__wax={S:I,b:M,tel:Qt,audio:ee,inp:ae,keys:Ke,setMode:Ea,start:vu,nextCam:yu,record:kn,world:wi,applyWorld:El,WORLDS:ds,race:ge,getNet:()=>se};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
