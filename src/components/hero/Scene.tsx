"use client";
import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { FloatingShape, type ShapeKind } from "./FloatingShape";

const PALETTE = {
  brand: "#3b5724",
  secondary: "#3D405B",
  cream: "#F2E9DC",
  accent: "#F85E00",
  deepRed: "#90323D"
};

interface ShapeDef {
  position: [number, number, number];
  kind: ShapeKind;
  color: string;
  scale: number;
  speed: number;
  wireframe?: boolean;
}

const SHAPES: ShapeDef[] = [
  { position: [-3.2, 1.2, -1], kind: "icosahedron", color: PALETTE.brand, scale: 1.1, speed: 1.1 },
  { position: [3, -0.8, -2], kind: "torusKnot", color: PALETTE.accent, scale: 0.9, speed: 1.4 },
  { position: [0, 2, -3], kind: "octahedron", color: PALETTE.cream, scale: 0.8, speed: 0.9, wireframe: true },
  { position: [-2, -1.6, -2.5], kind: "torus", color: PALETTE.deepRed, scale: 0.85, speed: 1.2 },
  { position: [2.2, 1.8, -1.5], kind: "dodecahedron", color: PALETTE.secondary, scale: 0.75, speed: 1.3 },
  { position: [-0.2, -2, -1], kind: "icosahedron", color: PALETTE.accent, scale: 0.55, speed: 1.6, wireframe: true },
  { position: [3.5, 2.5, -4], kind: "octahedron", color: PALETTE.brand, scale: 1.3, speed: 0.8 }
];

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const groupRef = React.useRef<THREE.Group>(null);
  const target = React.useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      target.current.set(x, y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [viewport.width]);

  useFrame((_, dt) => {
    if (!groupRef.current) return;
    const g = groupRef.current;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, target.current.x * 0.25, 4, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, target.current.y * 0.15, 4, dt);
    g.position.x = THREE.MathUtils.damp(g.position.x, target.current.x * 0.4, 4, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, target.current.y * 0.25, 4, dt);
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroScene() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color={PALETTE.accent} />
      <React.Suspense fallback={null}>
        <Environment preset="city" />
      </React.Suspense>
      <ParallaxGroup>
        {SHAPES.map((s, i) => (
          <FloatingShape
            key={i}
            position={s.position}
            kind={s.kind}
            color={s.color}
            scale={s.scale}
            speed={reducedMotion ? 0 : s.speed}
            floatIntensity={reducedMotion ? 0 : 1.4}
            rotationIntensity={reducedMotion ? 0 : 0.9}
            wireframe={s.wireframe}
          />
        ))}
      </ParallaxGroup>
    </Canvas>
  );
}
