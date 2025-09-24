/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_TYPE: string
  readonly VITE_GRAPHQL_ENDPOINT: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_ENABLE_SERVICE_CACHING: string
  readonly VITE_CACHE_TIMEOUT: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}