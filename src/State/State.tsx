export interface Dictionary<T> {
     [key: string]: T;
  }

export interface ImageStateP {
     getImages: ImageState,
     updateWorkers: WorkerState,
     
}

export interface ImageState {
     workers: [],
     error: string,
     isLoading: boolean,
}

export interface WorkerState{
     hiredWorkers: any[],
     removedWorkers: any[]
}