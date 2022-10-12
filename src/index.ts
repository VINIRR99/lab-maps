import { User } from './User';
import { Company } from './Company';
import { createScriptTag } from './createScriptTag';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

createScriptTag(() => {
    const customMap = new CustomMap('map');
    customMap.addMarker(user);
    customMap.addMarker(company);
});