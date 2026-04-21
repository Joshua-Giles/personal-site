"use client";
import * as React from "react";
import { Float } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

export type ShapeKind = "icosahedron" | "octahedron" | "torus" | "torusKnot" | "dodecahedron";

interface FloatingShapeProps {
  position: [number, number, number];
  kind: ShapeKind;
  color: string;
  scale?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  speed?: number;
  wireframe?: boolean;
}

export function FloatingShape({
  position,
  kind,
  color,
  scale = 1,
  rotationIntensity = 1,
  floatIntensity = 1.2,
  speed = 1.2,
  wireframe = false
}: FloatingShapeProps) {
  const geometry = React.useMemo(() => {
    switch (kind) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[0.8, 0.28, 16, 64]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.7, 0.22, 128, 16]} />;
      case "dodecahedron":
      default:
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [kind]);

  const meshProps: ThreeElements["mesh"] = {
    position,
    scale
  };

  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      <mesh {...meshProps} castShadow receiveShadow>
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.35}
          metalness={0.15}
          emissive={color}
          emissiveIntensity={0.12}
          wireframe={wireframe}
        />
      </mesh>
    </Float>
  );
}
