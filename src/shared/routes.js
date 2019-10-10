/**
 * Created by amit on 4/24/18.
 */

// Import your components here.
//example imports
import { ExampleComponentFirst, ExampleComponentSecond, Home } from './screens';

export default [
    {
        exact: true,
        component: Home,
        path: "/"
    },
    {
        exact: true,
        component: ExampleComponentSecond,
        path: "/amit"
    }
];
