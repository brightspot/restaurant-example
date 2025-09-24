#!/usr/bin/env node

/**
 * Configuration Test Script
 *
 * Tests different environment configurations to ensure the service selection works correctly.
 */

import { spawn } from 'child_process'

const testConfigurations = [
  {
    name: 'Default (Mock Services)',
    env: {}
  },
  {
    name: 'Brightspot Services',
    env: {
      VITE_SERVICE_TYPE: 'brightspot',
      VITE_GRAPHQL_ENDPOINT: 'http://localhost:8080/graphql'
    }
  }
]

console.log('🧪 Testing Service Configurations\n')

for (const config of testConfigurations) {
  console.log(`📋 Testing: ${config.name}`)

  try {
    const result = await runBuild(config.env)

    if (result.success) {
      console.log('✅ Build successful')
    } else {
      console.log('❌ Build failed')
      console.log(result.error)
    }
  } catch (err) {
    console.log('❌ Build error:', err.message)
  }

  console.log('') // Empty line
}

console.log('🎉 Configuration testing complete!')

function runBuild(env) {
  return new Promise((resolve) => {
    const child = spawn('yarn', ['build'], {
      env: { ...process.env, ...env },
      stdio: ['pipe', 'pipe', 'pipe']
    })

    let stdout = ''
    let stderr = ''

    child.stdout.on('data', (data) => {
      stdout += data
    })

    child.stderr.on('data', (data) => {
      stderr += data
    })

    child.on('close', (code) => {
      resolve({
        success: code === 0,
        stdout,
        stderr,
        error: code !== 0 ? stderr : null
      })
    })
  })
}