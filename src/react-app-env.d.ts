/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    REACT_APP_API_ENDPOINT: string
    REACT_APP_AUTHOR_ID: string
  }
}
