var library = [
    {prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452'},
    {prof: 'Rakesh Shrestha', course: 'WAA', courseID: 'CS545'},
    {prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425'}
];

library.sort((c1, c2) => c1.course>c2.course);
library.forEach(course => console.log(course));