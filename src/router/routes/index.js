import { main } from './main.route';
import { edit } from './edit.route';
import { user } from './user.route';
import { page404 } from './page404.route';

const routes = [
    ...main,
    ...edit,
    ...user,
    ...page404
];

export { routes };