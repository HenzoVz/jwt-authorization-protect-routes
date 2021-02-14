declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_CONNECTION_URL: string;
    SECRET_KEY: string;
  }
}
