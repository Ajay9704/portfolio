'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simple particle system component
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    
    return positions
  }, [])

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3))
    return geometry
  }, [particlesPosition])

  const particlesMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#14b8a6',
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    })
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <points ref={ref} geometry={particlesGeometry} material={particlesMaterial} />
  )
}

// Floating geometric shapes
function FloatingShapes() {
  const group = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      group.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Wireframe Box */}
      <mesh position={[-3, 2, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#14b8a6" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Wireframe Sphere */}
      <mesh position={[3, -1, -1]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Wireframe Torus */}
      <mesh position={[0, -2, -3]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Additional floating elements */}
      <mesh position={[2, 3, 1]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.2} />
      </mesh>
      
      <mesh position={[-2, -3, 2]}>
        <sphereGeometry args={[0.6, 12, 12]} />
        <meshBasicMaterial color="#ef4444" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

// Neural network visualization
function NeuralNetwork() {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.2
      })
    }
  })

  const nodes = useMemo(() => {
    const nodePositions = []
    for (let layer = 0; layer < 4; layer++) {
      for (let node = 0; node < 3; node++) {
        nodePositions.push([
          (layer - 1.5) * 2,
          (node - 1) * 1.5,
          -5
        ])
      }
    }
    return nodePositions
  }, [])

  return (
    <group ref={ref}>
      {nodes.map((position, i) => (
        <mesh key={i} position={position as [number, number, number]}>
          <sphereGeometry args={[0.1]} />
          <meshBasicMaterial color="#14b8a6" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

// Main 3D Scene
export function Scene3D() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Floating geometric shapes */}
      <FloatingShapes />
      
      {/* Neural network visualization */}
      <NeuralNetwork />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0f172a', 5, 25]} />
    </>
  )
}