const skills = [
  {
    title: 'After sales service',
    competency: 4,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Drug Information',
    competency: 5,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Product Specialists',
    competency: 2,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Market Research',
    competency: 3,
    category: ['Industry Knowledge'],
  },
  {
    title: 'B2B Marketing',
    competency: 2,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Pharmaceuticals',
    competency: 4,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Visual Inspection',
    competency: 2,
    category: ['Industry Knowledge'],
  },
  {
    title: 'Microsoft Excel',
    competency: 2,
    category: ['Tools & Technologies'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Tools & Technologies'],
  },
  {
    title: 'Power Point',
    competency: 3,
    category: ['Tools & Technologies'],
  },
  {
    title: 'Odoo',
    competency: 3,
    category: ['Tools & Technologies'],
  },
  {
    title: 'Team Leadership',
    competency: 2,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Problem Solving',
    competency: 2,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Negotiation',
    competency: 3,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Active Listening',
    competency: 3,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Teamwork',
    competency: 3,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Communication',
    competency: 2,
    category: ['Interpersonal Skills'],
  },
  {
    title: 'Arabic',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'French',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Artificial Intelligence',
    competency: 2,
    category: ['Industry Knowledge'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of RGB Hex colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#00111c',
  '#001523',
  '#001a2d',
  '#001f38',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
