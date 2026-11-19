// GLSL shared by the sky dome and by the vinyl (which reflects the same sky).
export const SKY_GLSL = /* glsl */`
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
`;

export const SKY_VERT = /* glsl */`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = projectionMatrix * mat4(mat3(modelViewMatrix)) * vec4(position,1.); gl_Position = p.xyww; }
`;
export const SKY_FRAG = /* glsl */`
precision highp float;
${SKY_GLSL}
varying vec3 vDir;
void main(){ gl_FragColor = vec4(skyBase(normalize(vDir), 1.), 1.); }
`;

export const VINYL_VERT = /* glsl */`
varying vec3 vWorld; varying vec3 vNrm;
void main(){ vec4 w = modelMatrix * vec4(position,1.); vWorld = w.xyz; vNrm = normal; gl_Position = projectionMatrix * viewMatrix * w; }
`;

export const VINYL_FRAG = /* glsl */`
precision highp float;
precision highp sampler2D;
${SKY_GLSL}
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
`;

export const POST_FRAG = /* glsl */`
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
`;
