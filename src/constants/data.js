import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'ETB 3,024',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'ETB 3,186',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'ETB 2,376',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'ETB 1,674',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'ETB 1,404',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'ETB 1,080',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'ETB 864',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'ETB 540',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'ETB 1,674',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'ETB 1,404',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Recognized for offering exceptional food at a great value.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Awarded for emerging talent and outstanding potential in the culinary world.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honored for delivering excellent hospitality and exceptional guest service.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrated for exceptional culinary skills and innovative dishes.',
  },
];


export default { wines, cocktails, awards };
