/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Alexandria University Hospitals',
    position: 'Hospital Pharmacist',
    url: 'https://auhospitals.alexu.edu.eg',
    startDate: '2023-03-01',
    summary: `Experienced pharmacist skilled in dispensing medications, monitoring therapy, 
    and providing drug information. Proficient in clinical trials and research for innovative 
    treatments. Expertise in patient care areas such as nutrition support and pain management.`,
    highlights: [
      'Dispense medications to patients, both in-house and upon discharge.',
      'Monitor patients\' medication therapy to identify and resolve any potential problems.',
      'Provide drug information to other healthcare providers and patients.',
      'Involved in other areas, such as nutrition support, and antimicrobial stewardship.'
    ],
  },
  {
    name: 'Institute of Training and Occupational Learning (ITOL)',
    position: 'Project Executive (Part-Time)',
    url: 'https://www.itol.org',
    startDate: '2023-01-01',
    summary: `Institute of Training and Occupational Learning. Home of training, learning, and 
    continuing professional development.`,
    highlights: [
      'Establish excellent relationships with customers in B2B.',
      'Perform accreditation processes for training programs.',
    ],
  },
  {
    name: 'Soudy Store for perfumes and cosmetics (Own business)',
    position: 'Business Owner, seller, and formulator',
    url: 'https://www.facebook.com/SoudyStore',
    startDate: '2019-09-01',
    endDate: '2023-01-01',
    summary: `Soudy Store is a small store for agency and distribution of perfumes and cosmetics. 
    As business owner, I had to develop a business plan, manage staff, market the business online 
    and offline, provide customer service, and comply with all applicable regulations. In addition, 
    I used my pharmaceutical experience to formulate some fragrances and cosmeceutical formulations. 
    As salesperson, I had to promote and make deals with B2B and B2C customers.`,
    highlights: [
      'Built my brand called سعودي.',
      'Covered all costs of my store and succeeded in gaining revenue and profit.',
      "Established a database of more than 1000 customers in 7 governorates.",
      "Formulated some fragrance products like eau de cologne, eau de toilet, and eau de perfume.",
      'Made more than 300,000 L.E. sales in one product throughout the last years.',
    ],
  },
  {
    name: 'National Food Safety Authority (NFSA)',
    position: 'Special Food Safety Inspector ',
    url: 'https://reg.nfsa.gov.eg',
    startDate: '2021-08-01',
    endDate: '2023-02-01',
    summary: `A special food safety inspector with pharmaceutical background is a public health 
    professional who is responsible for ensuring that special food is safe to deliver and eat. 
    In addition, inspection and sampling of special foods (Food supplements, infant formulas, etc.) 
    and review and draft regulatory documents required for importing these products.`,
    highlights: [
      'Established a sub-unit cooperatively resulting in reducing time of inspection by half.',
    ],
  },
  {
    name: 'Asmaa Abo Hay Pharmacy',
    position: 'Community Pharmacist',
    url: 'https://www.facebook.com/asmaaabohaypharmacy',
    startDate: '2021-05-01',
    endDate: '2021-07-01',
    summary: `Asmaa Abo Hay is a pharmacy in Damanhour city. 
    Being a community pharmacy made me play an important role in providing convenient and 
    accessible healthcare services to the public. As known, community pharmacists are often the 
    first point of contact for people with health concerns, and they can provide advice and support 
    on a wide range of topics.`,
    highlights: [
      'Managed the pharmacy during my night shift.',
    ],
  },
  {
    name: 'NIG Nutritional Egypt',
    position: 'Product Specialist',
    url: 'https://www.nignutritionals.co.nz',
    startDate: '2021-02-01',
    endDate: '2021-04-01',
    summary: `NIG is a multinational company specialized in prophylactic nutrition. 
    Headquarters in Newzeland. I had to provide technical and clinical information about bioactive 
    colostrum to healthcare professionals, manage sales relationships with healthcare professionals 
    and attend medical conferences and events.`,
    highlights: [
      'Achieved sales from the first month.',
    ],
  },
  {
    name: 'Evy Pharmacy',
    position: 'Community Pharmacist',
    url: 'https://evypharmacy.business.site',
    startDate: '2020-08-01',
    endDate: '2021-01-01',
    summary: `Working in a community pharmacy allowed me to assume a significant responsibility 
    in offering convenient and easily accessible healthcare services to the community.`,
    highlights: [
      'Compound and dispense medication as prescribed by physician.',
    ],
  },
  {
    name: 'Doctorz Company for Perfumes and Cosmetics',
    position: 'Promotional and Sales Representative',
    startDate: '2019-07-01',
    endDate: '2020-08-01',
    url: 'https://www.facebook.com/doctorzcoperfumes',
    summary: `Doctorz Company for Perfumes and Cosmetics Alexandria and Delta, Egypt
    A company specialized in perfumes, cosmetics, medical plants and chemicals. I established this 
    new brand outside Alexandria governorate and fulfilled many tasks in fields of sales, marketing, 
    customer services and after sales service.`,
    highlights: [
      'Best achiever in Q4 2019.',
      'Built Doctorz business outside Alexandria from nothing in 2016 to +350,000 L.E. ' +
      'in total sales in the last 9 months.',
      'Q1,2 2020 total sales were 57.3% more than the same period in 2019.',
    ],
  }
];

export default work;
