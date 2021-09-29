import { LOAD_IMAGES_FAIL, LOAD_IMAGES_PENDING, LOAD_IMAGES_SUCCESS, REMOVE_WORKER, UPDATE_HIRED_WORKERS } from '../Constants/Actions'
import { ImageState, WorkerState } from '../State/State'

export interface Action<T, P = {} > {
     type: T;
     payload: P;
  }
const defaultState: ImageState = {
     workers: [],
     error: "",
     isLoading: false,
  };

const workersState: WorkerState = {
     hiredWorkers: [],
     removedWorkers: []
}

const getImages = (state = defaultState, action: Action<string, any>): ImageState => {
     switch(action.type){
          case LOAD_IMAGES_PENDING:
               return { ...state, isLoading: true, error: "" };
          case LOAD_IMAGES_SUCCESS:
               return { ...state, isLoading: false, workers: action.payload }
          case LOAD_IMAGES_FAIL:
               return {...state, isLoading: false, error: action.payload}
          default:
               return state
     }
}

const updateWorkers = (state = workersState, action: Action<String, any>): WorkerState => {
     switch(action.type){
          case UPDATE_HIRED_WORKERS: 
               return { ...state, hiredWorkers: [...state.hiredWorkers, action.payload] }
          case REMOVE_WORKER:
               return {...state, removedWorkers: [...state.removedWorkers, action.payload]}
          default:
               return state
     }
}

export { getImages, updateWorkers }