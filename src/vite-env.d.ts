/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLAG?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
