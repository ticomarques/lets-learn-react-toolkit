/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_DOGS_API_KEY: string
    // mais variáveis de ambiente...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }