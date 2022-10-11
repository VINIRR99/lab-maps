import { User } from './User';
import { Company } from './Company';
import { createScriptTag } from './createScriptTag';
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

createScriptTag(() => {
    new CustomMap('map');
});