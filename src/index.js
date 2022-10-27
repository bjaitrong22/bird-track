import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getAPIData } from './js/get-apidata.js';

let commonName = "House Sparrow".toLowerCase();
getAPIData(commonName).then((results) => console.log(results));
