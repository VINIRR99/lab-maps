import { User } from './User';
import { Company } from './Company';
import { createScriptTag } from './createScriptTag';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

createScriptTag();