import { nanoid } from 'nanoid';
const data = {
  mainTitle: 'React CV App!',
  firstName: 'Edouard',
  lastName: 'Desgrée',
  userJobTitle: 'Front-end developer',
  userDescription:
    'My description ipsum dolor sit amet consectetur adipisicing elit. Facer consectetur dolores accusantium error blanditiis quaerat deserunt  asperiores, necessitatibus, itaque aut voluptates eveniet venia.',
  email: 'edouard@desgree.com',
  phone: '345-098-3333',
  location: 'Montreal,Qc',
  website: 'www.desgree.com',
  social: [
    { id: nanoid(), name: 'facebook', url: 'http://www.facebook.com' },
    { id: nanoid(), name: 'github', url: 'http://www.github.com' },
    { id: nanoid(), name: 'instagram', url: 'http://www.instagram.com' }
  ],
  interests: [
    { id: nanoid(), name: 'badminton' },
    { id: nanoid(), name: 'rock climbing' },
    { id: nanoid(), name: 'space science' }
  ],
  work: [
    {
      id: nanoid(),
      dateStart: '02-02-2020',
      dateEnd: '01-01-2022',
      jobTitle: 'webdesigner',
      company: 'designCo',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing eli Excepturi provident tenetur voluptatibus dolorum facere quo consectetur.',
      location: 'Paris, France'
    },
    {
      id: nanoid(),
      dateStart: '16-12-2018',
      dateEnd: '24-09-2022',
      jobTitle: 'adventurer',
      company: 'popoy',
      description:
        'Adventure ipsum dolor sit amet consectetur, adipisicing eli Excepturi provident tenetur voluptatibus dolorum facere quo consectetur.',
      location: 'Auckland, Nz'
    }
  ],
  education: [
    {
      id: nanoid(),
      dateGraduated: '16-12-2008',
      diplomaTitle: 'Maitrise audiovisuel & multimedia',
      schoolName: 'University of Marne la vallée',
      notes: 'some notes about the curriculum'
    },
    {
      id: nanoid(),
      dateGraduated: '12-12-2008',
      diplomaTitle: 'school2',
      schoolName: 'University school',
      notes: 'some notes'
    }
  ]
};

export default data;
