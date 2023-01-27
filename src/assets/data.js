import { nanoid } from 'nanoid';
const data = {
  mainTitle: 'React CV App!',
  firstName: 'Jackie',
  lastName: 'Chan',
  userJobTitle: 'International Action Star & Stuntman',
  userDescription:
    'Jackie Chan is a Hong Kong actor, martial artist, film director, producer, stuntman, and singer. He is known for his acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts.',
  email: 'jackie@chan.com',
  phone: '+1-541-754-3010',
  location: 'Hong Kong, China',
  website: 'jackie-chan.com',
  social: [
    { id: nanoid(), name: 'Facebook', url: 'www.facebook.com/jackie' },
    { id: nanoid(), name: 'Instagram', url: 'instagram.com/jackiechan/?hl=en' },
    { id: nanoid(), name: 'Twitter', url: 'twitter.com/EyeOfJackieChan' }
  ],
  interests: [
    { id: nanoid(), name: 'Martial arts' },
    { id: nanoid(), name: 'Stunt coordination' },
    { id: nanoid(), name: 'Acting' },
    { id: nanoid(), name: 'Producing' },
    { id: nanoid(), name: 'Directing' }
  ],
  work: [
    {
      id: nanoid(),
      dateStart: '02-02-1976',
      dateEnd: '01-01-2022',
      jobTitle: 'Actor',
      company: 'Golden Harvest',
      description:
        'Acted in various Hong Kong action films. Performed all of own stunts in films. Collaborated with director on action choreography. Acted in over 150 films, including Rush Hour and Kung Fu Panda',
      location: 'Hong Kong'
    },
    {
      id: nanoid(),
      dateStart: '02-02-1989',
      dateEnd: '01-09-2018',
      jobTitle: 'Stunt Coordinator',
      company: 'Various',
      description:
        'Coordinated and performed stunts for films. Coordinated stunts for over 50 films. Performed dangerous stunts, including high falls and vehicle stunts. Trained actors and stunts performers',
      location: 'Hong Kong'
    },
    {
      id: nanoid(),
      dateStart: '02-02-1985',
      dateEnd: '01-09-2009',
      jobTitle: 'Director',
      company: 'JCE Movies Limited',
      description:
        'Directed action films. Directed over 10 films, including Armor of God and Police Story. Collaborated with actors and stunt performers on action choreography. Oversaw all aspects of film production',
      location: 'Los Angeles'
    }
  ],
  education: [
    {
      id: nanoid(),
      dateGraduated: '16-12-1972',
      diplomaTitle: 'Bachelor of Fine Arts',
      schoolName: 'New York University',
      notes: 'Action and stunt award of the year'
    },
    {
      id: nanoid(),
      dateGraduated: '12-12-1968',
      diplomaTitle: 'High School Diploma',
      schoolName: 'University of Bejing',
      notes: 'Option art and cinema'
    }
  ]
};

export default data;
