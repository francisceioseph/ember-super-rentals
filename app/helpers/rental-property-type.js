import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'TownHouse',
  'Apartment'
];

export const rentalPropertyTypes = ([propertyType]) => {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}

export default helper(rentalPropertyTypes);
