import { library } from "@fortawesome/fontawesome-svg-core";
export * from './commands';
export * from './api_commands';
export { default as summary } from './summary';
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize)
