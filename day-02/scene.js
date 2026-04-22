(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || !window.THREE) return;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a1128, 50, 180);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.set(0, 0, 85);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0a1128, 1);

  function makeGlowTexture(hex) {
    const size = 128;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d");
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const grad = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
    grad.addColorStop(0.2, `rgba(${r},${g},${b},0.85)`);
    grad.addColorStop(0.5, `rgba(${r},${g},${b},0.25)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }

  const texRed = makeGlowTexture("#e63946");
  const texWhite = makeGlowTexture("#eef1f8");
  const texBlue = makeGlowTexture("#7c9cff");
  const texPacket = makeGlowTexture("#ff5a67");

  const group = new THREE.Group();
  scene.add(group);

  const COLS = isMobile ? 5 : 7;
  const ROWS = isMobile ? 3 : 4;
  const LAYERS = isMobile ? 2 : 3;
  const spacing = 14;
  const nodes = [];

  function pickTex() {
    const r = Math.random();
    if (r < 0.18) return texRed;
    if (r < 0.48) return texBlue;
    return texWhite;
  }

  for (let l = 0; l < LAYERS; l++) {
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const px = (c - (COLS - 1) / 2) * spacing + (Math.random() - 0.5) * 3;
        const py = (r - (ROWS - 1) / 2) * spacing + (Math.random() - 0.5) * 3;
        const pz = (l - (LAYERS - 1) / 2) * spacing + (Math.random() - 0.5) * 3;
        const tex = pickTex();
        const mat = new THREE.SpriteMaterial({
          map: tex,
          transparent: true,
          opacity: 0.7,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const sprite = new THREE.Sprite(mat);
        sprite.position.set(px, py, pz);
        const s = 2 + Math.random() * 1.6;
        sprite.scale.set(s, s, 1);
        sprite.userData = {
          phase: Math.random() * Math.PI * 2,
          speed: 0.7 + Math.random() * 1.6,
          baseSize: s,
        };
        group.add(sprite);
        nodes.push(sprite);
      }
    }
  }

  const connections = [];
  const linePositions = [];
  const maxDist = spacing * 1.5;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = nodes[i].position.distanceTo(nodes[j].position);
      if (d < maxDist && Math.random() < 0.55) {
        connections.push({ a: nodes[i], b: nodes[j] });
        linePositions.push(
          nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
          nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
        );
      }
    }
  }

  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(linePositions, 3)
  );
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x3a4b82,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });
  const lines = new THREE.LineSegments(lineGeom, lineMat);
  group.add(lines);

  const packets = [];
  const packetCount = Math.min(
    connections.length,
    isMobile ? 14 : 32
  );
  for (let i = 0; i < packetCount; i++) {
    const conn = connections[Math.floor(Math.random() * connections.length)];
    const mat = new THREE.SpriteMaterial({
      map: texPacket,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.8, 1.8, 1);
    group.add(sprite);
    packets.push({
      sprite,
      conn,
      t: Math.random(),
      speed: 0.15 + Math.random() * 0.4,
    });
  }

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const speed = reduceMotion ? 0.25 : 1;
  const clock = new THREE.Clock();
  const tmpV = new THREE.Vector3();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    camera.position.x = mouse.x * 10;
    camera.position.y = -mouse.y * 6;
    camera.lookAt(0, 0, 0);

    group.rotation.y = Math.sin(t * 0.08 * speed) * 0.35;
    group.rotation.x = Math.cos(t * 0.06 * speed) * 0.15;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const u = n.userData;
      const pulse = 0.55 + Math.sin(t * u.speed * speed + u.phase) * 0.4;
      n.material.opacity = Math.max(0.15, pulse);
      const s = u.baseSize * (0.9 + Math.sin(t * u.speed * speed * 1.3 + u.phase) * 0.18);
      n.scale.set(s, s, 1);
    }

    for (let i = 0; i < packets.length; i++) {
      const p = packets[i];
      p.t += p.speed * 0.012 * speed;
      if (p.t >= 1) {
        p.t = 0;
        p.conn = connections[Math.floor(Math.random() * connections.length)];
        p.speed = 0.15 + Math.random() * 0.4;
      }
      tmpV.copy(p.conn.a.position).lerp(p.conn.b.position, p.t);
      p.sprite.position.copy(tmpV);
      const fade = Math.sin(p.t * Math.PI);
      p.sprite.material.opacity = 0.3 + fade * 0.7;
    }

    renderer.render(scene, camera);
  }

  animate();
})();
