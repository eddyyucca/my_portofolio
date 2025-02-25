module.exports = {
  apps: [{
    name: "portfolio",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    instances: "max",      // Gunakan semua CPU atau angka tertentu
    exec_mode: "cluster",  // Mode cluster untuk load balancing
    watch: false,
    max_memory_restart: "500M"
  }]
};