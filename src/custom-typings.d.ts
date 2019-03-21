declare var DEV_SERVER: boolean;
declare var ENV: string;
declare var PORT: number;
declare var STORE_DEV_TOOLS: string;
declare var API_KEY: string;

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface NodeModule extends WebpackModule {}

// Custom types

interface Players {
  localVideoRef: any,
  remoteVideoRef: any
}

interface NewRoom {
  id?: string;
  key: string;
}

interface Room {
  id: string;
  initiator: boolean;
}
