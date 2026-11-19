import * as THREE from 'three';
import { SKY_VERT, SKY_FRAG } from './shaders.js';
import { R_SPINDLE, shapeF } from './config.js';

export class Sparks {
  constructor(scene, n = 800) {
    this.n = n; this.i = 0;
    this.pos = new Float32Array(n * 3); this.col = new Float32Array(n * 3); this.size = new Float32Array(n);
    this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n); this.base = new Float32Array(n * 4); this.grav = new Float32Array(n);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3)); g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 600 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'attribute float aSize; attribute vec3 aColor; uniform float uScale; varying vec3 vC; void main(){ vC = aColor; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = aSize*uScale/max(.2,-mv.z); }',
      fragmentShader: 'precision highp float; varying vec3 vC; void main(){ float d = length(gl_PointCoord-.5); float a = smoothstep(.5,.05,d); gl_FragColor = vec4(vC*a*a, 1.); }',
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; scene.add(this.points); this.geo = g;
  }
  emit(x, y, z, vx, vy, vz, r, g, b, life, size, grav = 22) {
    const i = this.i; this.i = (i + 1) % this.n; const j = i * 3;
    this.pos[j] = x; this.pos[j + 1] = y; this.pos[j + 2] = z; this.vel[j] = vx; this.vel[j + 1] = vy; this.vel[j + 2] = vz;
    this.base[i * 4] = r; this.base[i * 4 + 1] = g; this.base[i * 4 + 2] = b; this.base[i * 4 + 3] = size; this.life[i] = life; this.max[i] = life; this.grav[i] = grav;
  }
  update(dt, ground) {
    const { pos, vel, life, max, col, size, base, n, grav } = this;
    for (let i = 0; i < n; i++) {
      if (life[i] <= 0) { size[i] = 0; continue; }
      life[i] -= dt; const j = i * 3;
      vel[j + 1] -= grav[i] * dt; pos[j] += vel[j] * dt; pos[j + 1] += vel[j + 1] * dt; pos[j + 2] += vel[j + 2] * dt;
      if (ground && grav[i] > 0) { const h = ground(pos[j], pos[j + 2]); if (pos[j + 1] < h) { pos[j + 1] = h; vel[j + 1] *= -0.45; vel[j] *= 0.7; vel[j + 2] *= 0.7; } }
      const f = Math.max(0, life[i] / max[i]); col[j] = base[i * 4] * f; col[j + 1] = base[i * 4 + 1] * f; col[j + 2] = base[i * 4 + 2] * f; size[i] = base[i * 4 + 3] * (0.4 + 0.6 * f);
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.aColor.needsUpdate = true; this.geo.attributes.aSize.needsUpdate = true;
  }
}

export class World {
  constructor(scene, renderer, shared) {
    this.scene = scene; this.shared = shared;
    this.skyMat = new THREE.ShaderMaterial({ uniforms: shared, vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), this.skyMat); this.sky.frustumCulled = false; this.sky.renderOrder = -10; scene.add(this.sky);
    // lights for the buggy (the vinyl does its own lighting in its shader)
    this.hemi = new THREE.HemisphereLight(0xff7ab0, 0x1a0630, 0.6); scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffb090, 2.2); scene.add(this.sun);
    this.spots = [0xff3fd0, 0x30d8ff, 0xffe030].map(c => { const l = new THREE.DirectionalLight(c, 1.3); scene.add(l); return l; });
    this.renderer = renderer;
    // spindle and mirror ball
    const chrome = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.06 });
    const sp = new THREE.Mesh(new THREE.CylinderGeometry(R_SPINDLE, R_SPINDLE, 26, 40), chrome); sp.position.y = 13; scene.add(sp);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(R_SPINDLE, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), chrome); cap.position.y = 26; scene.add(cap);
    this.ball = new THREE.Mesh(new THREE.IcosahedronGeometry(11, 3), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.05, flatShading: true, envMapIntensity: 0.55 }));
    this.ball.position.y = 52; scene.add(this.ball);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 4000, 6), new THREE.MeshBasicMaterial({ color: 0x331144 })); cord.position.y = 63 + 2000; scene.add(cord);
    // speaker stacks standing on the platter
    this.speakers = new THREE.Group(); scene.add(this.speakers); this.cones = [];
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x0c0c12, roughness: 0.55, metalness: 0.4 });
    for (let i = 0; i < 10; i++) {
      const g = new THREE.Group(); const box = new THREE.Mesh(new THREE.BoxGeometry(14, 30, 18), boxMat); box.position.y = 15; g.add(box);
      for (const [y, r] of [[9, 6.2], [22, 4]]) {
        const m = new THREE.MeshBasicMaterial(); m.toneMapped = false; const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.72, r, 32), m); ring.position.set(-7.05, y, 0); ring.rotation.y = -Math.PI / 2; g.add(ring);
        const cone = new THREE.Mesh(new THREE.CircleGeometry(r * 0.7, 24), new THREE.MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.4, metalness: 0.6 })); cone.position.set(-7.03, y, 0); cone.rotation.y = -Math.PI / 2; g.add(cone);
        this.cones.push({ m, ring, cone, hue: i / 10 + (r < 5 ? 0.5 : 0), small: r < 5 });
      }
      this.speakers.add(g);
    }
    this.sparks = new Sparks(scene, 900);
    this._c = new THREE.Color();
  }
  setSong(L, platterTop = -3) {
    const n = this.speakers.children.length;
    this.speakers.children.forEach((g, i) => { const a = i / n * Math.PI * 2 + 0.3, r = (L.R_EDGE + 20) * shapeF(L, a); g.position.set(Math.cos(a) * r, platterTop, -Math.sin(a) * r); g.rotation.y = a; });
    const t = L.world.theme; this.sunEl = t.sunEl; this.hemi.color.setHex(t.hemi[0]); this.hemi.groundColor.setHex(t.hemi[1]); this.sun.color.setRGB(t.sunLight[0], t.sunLight[1], t.sunLight[2]).multiplyScalar(0.4);
    this.bakeEnv();
  }
  // environment for reflections on the buggies, baked from the current sky
  bakeEnv() {
    try {
      const sh = this.shared, pm = new THREE.PMREMGenerator(this.renderer), es = new THREE.Scene(), sk = new THREE.Mesh(this.sky.geometry, this.skyMat); sk.frustumCulled = false; es.add(sk);
      const save = sh.uSpec.value.slice(), rot = sh.uSkyRot.value; sh.uSpec.value.fill(0.45); sh.uSkyRot.value = 0;
      const old = this.env; this.env = pm.fromScene(es, 0, 0.1, 100).texture; this.scene.environment = this.env; this.scene.environmentIntensity = 1.1;
      sh.uSpec.value.set(save); sh.uSkyRot.value = rot; pm.dispose(); if (old) old.dispose();
    } catch (e) { console.warn('environment bake failed', e); }
  }
  update(dt, time, rot, bass, level) {
    const sh = this.shared; sh.uTime.value = time; sh.uSkyRot.value = rot; sh.uBass.value = bass;
    const el = this.sunEl ?? 0.2, il = 1 / Math.hypot(1, el), sx = Math.cos(rot) * il, sz = Math.sin(rot) * il; sh.uSunDir.value.set(sx, el * il, sz);
    this.sun.position.set(sx * 100, el * il * 100, sz * 100);
    for (let i = 0; i < 3; i++) { const a = time * 0.55 + i * 2.094 + Math.sin(time * 0.3 + i) * 0.8; const d = sh.uLd.value[i]; d.set(Math.cos(a), 0.42 + 0.2 * Math.sin(time * 0.7 + i * 2), Math.sin(a)).normalize(); this.spots[i].position.copy(d).multiplyScalar(100); this.spots[i].intensity = 0.9 + bass * 2; const k = 1.2 + bass * 2.2; sh.uLc.value[i].set([2, 0.2, 1.8][i] * k, [0.3, 1.6, 1.5][i] * k, [1.6, 2, 0.2][i] * k); }
    if (this.scene.environmentRotation) this.scene.environmentRotation.y = rot;
    this.ball.rotation.y = time * 0.4;
    for (const c of this.cones) { const b = c.small ? level * 2.2 : bass; this._c.setHSL((c.hue + time * 0.03) % 1, 1, 0.5); c.m.color.copy(this._c).multiplyScalar(0.35 + b * 1.8); const s = 1 + b * 0.22; c.cone.scale.setScalar(s); }
  }
}
