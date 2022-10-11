import { User } from './User';
import { Company } from './Company';
import { createScriptTag } from './createScriptTag';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

createScriptTag(() => {
    const map = document.getElementById('map') as HTMLDivElement;

    new google.maps.Map(map, {
        zoom: 1,
        center: { lat: 0, lng: 0 }
    });
});