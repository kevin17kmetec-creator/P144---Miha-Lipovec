import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Runner3DProps {
  runSpeed: number;
  isJumpingRef: React.MutableRefObject<boolean>;
  isSprinting: boolean;
}

export default function Runner3D({ runSpeed, isJumpingRef, isSprinting }: Runner3DProps) {
  const group = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Group>(null);
  const rightLeg = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftKnee = useRef<THREE.Group>(null);
  const rightKnee = useRef<THREE.Group>(null);
  const leftElbow = useRef<THREE.Group>(null);
  const rightElbow = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current || !leftLeg.current || !rightLeg.current || !leftArm.current || !rightArm.current || !leftKnee.current || !rightKnee.current || !leftElbow.current || !rightElbow.current) return;

    if (!isSprinting) {
      group.current.position.set(0, -1, 0);
      group.current.rotation.set(0, 0, 0);
      leftLeg.current.rotation.z = 0;
      rightLeg.current.rotation.z = 0;
      leftArm.current.rotation.z = 0;
      rightArm.current.rotation.z = 0;
      leftKnee.current.rotation.z = 0;
      rightKnee.current.rotation.z = 0;
      leftElbow.current.rotation.z = 0;
      rightElbow.current.rotation.z = 0;
      return;
    }

    const t = state.clock.getElapsedTime() * runSpeed;
    
    if (isJumpingRef.current) {
      // Jump animation (moving along X (up) and Y (left) because the parent is rotated 90deg)
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 5, 0.1);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, 5, 0.1);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -Math.PI / 4, 0.1);
      return;
    }

    // Running animation (simplified biomechanics)
    const stride = Math.sin(t);
    const strideCos = Math.cos(t);
    
    // Forward tilt
    group.current.rotation.z = -0.2;
    
    // Legs (Thighs) - running along X axis, so rotate around Z
    leftLeg.current.rotation.z = stride * 0.8;
    rightLeg.current.rotation.z = -stride * 0.8;
    
    // Knees (Lower legs) - must bend backwards (negative Z)
    // Knee bends when the leg is moving forward (stride is increasing, strideCos > 0)
    leftKnee.current.rotation.z = -Math.max(0, strideCos * 1.5);
    rightKnee.current.rotation.z = -Math.max(0, -strideCos * 1.5);
    
    // Arms (Shoulders) - opposite to legs
    leftArm.current.rotation.z = -stride * 0.8;
    rightArm.current.rotation.z = stride * 0.8;
    
    // Elbows (Lower arms) - bend forwards (positive Z)
    // Elbow bends when the arm is moving forward
    leftElbow.current.rotation.z = Math.PI / 8 + Math.max(0, -strideCos * 0.8);
    rightElbow.current.rotation.z = Math.PI / 8 + Math.max(0, strideCos * 0.8);
    
    // Torso twist
    group.current.rotation.y = -stride * 0.2;
    // Bobbing
    group.current.position.y = -1 + Math.abs(strideCos) * 0.2;
    group.current.position.x = 0;
  });

  return (
    <group ref={group} scale={[0.6, 0.6, 0.6]} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>
      
      {/* Torso */}
      <mesh position={[0, 1.2, 0]}>
        <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Left Arm */}
      <group position={[0, 1.8, -0.5]} ref={leftArm}>
        <mesh position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.12, 0.8, 4, 8]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        <group position={[0, -0.8, 0]} ref={leftElbow}>
          <mesh position={[0, -0.4, 0]}>
            <capsuleGeometry args={[0.1, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>
      
      {/* Right Arm */}
      <group position={[0, 1.8, 0.5]} ref={rightArm}>
        <mesh position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.12, 0.8, 4, 8]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        <group position={[0, -0.8, 0]} ref={rightElbow}>
          <mesh position={[0, -0.4, 0]}>
            <capsuleGeometry args={[0.1, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>
      
      {/* Left Leg */}
      <group position={[0, 0.5, -0.25]} ref={leftLeg}>
        <mesh position={[0, -0.5, 0]}>
          <capsuleGeometry args={[0.15, 1, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <group position={[0, -1, 0]} ref={leftKnee}>
          <mesh position={[0, -0.5, 0]}>
            <capsuleGeometry args={[0.12, 1, 4, 8]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
        </group>
      </group>
      
      {/* Right Leg */}
      <group position={[0, 0.5, 0.25]} ref={rightLeg}>
        <mesh position={[0, -0.5, 0]}>
          <capsuleGeometry args={[0.15, 1, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <group position={[0, -1, 0]} ref={rightKnee}>
          <mesh position={[0, -0.5, 0]}>
            <capsuleGeometry args={[0.12, 1, 4, 8]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
