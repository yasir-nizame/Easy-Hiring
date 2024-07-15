import React from 'react'
import SmallCards from './smallcard'
import Bigcards from './bigcard';
import  { useState } from 'react';
// import SmallCards from './smallcard';
const currentDate = new Date();
const cardData = [
    {
        title: 'MERN Stack Developer',
        company: 'Tech Solutions Inc.',
        location: 'Remote',
        pay: '$80,000 - $100,000 per year',
        description: 'Tech Solutions Inc. is seeking a skilled MERN Stack Developer to join our team. As a MERN Stack Developer, you will be responsible for designing, implementing, and maintaining web applications using MongoDB, Express.js, React.js, and Node.js',
        jobtype: 'Full Time',
        published: '31st June, 2021',
        readingTime: currentDate.toLocaleString(),
        responsibilities: '1. Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). \n2. Collaborate with cross-functional teams to define, design, and ship new features. \n3. Write clean, scalable, and maintainable code adhering to industry best practices. \n4. Optimize applications for maximum speed and scalability. \n5. Implement security and data protection measures. \n6. Troubleshoot and debug issues reported by users and other team members. \n7. Stay up-to-date with emerging technologies and trends in web development.',

        specifications: '1. Bachelor’s degree in Computer Science, Engineering, or related field. \n2. Proven experience as a MERN stack developer or similar role. \n3. Strong proficiency in JavaScript and its modern ES6+ syntax. \n4. Solid understanding of React.js and its core principles. \n5. Experience with popular React.js workflows (such as Redux). \n6. Familiarity with server-side programming using Node.js and Express.js. \n7. Experience with NoSQL databases, particularly MongoDB. \n8. Knowledge of RESTful APIs and web services. \n9. Good understanding of HTML5, CSS3, and front-end build tools like Webpack. \n10. Strong problem-solving and communication skills. \n11. Ability to work independently and collaboratively in a fast-paced environment.',

        experience: ' 1. 3+ years of experience in full-stack web development, with a focus on the MERN stack. \n2. Proven track record of delivering high-quality software solutions on time. \n3. Experience working in Agile/Scrum development environments. \n4. Familiarity with version control systems such as Git. \n5. Previous experience in e-commerce or SaaS projects is a plus. \n6. Experience with cloud platforms (such as AWS, Azure, or GCP) is desirable. \n7. Additional certifications or training in web development technologies are advantageous.',
    },
    {
        title: 'Building a SaaS product as a software developer',
        company: 'John Doe',
        location: '/jobfeed',
        pay: '20',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
        jobtype: 'full time',
        published: '31st June, 2021',
        readingTime: currentDate.toLocaleString(),
        responsibilities: '1. Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). \n2. Collaborate with cross-functional teams to define, design, and ship new features. \n3. Write clean, scalable, and maintainable code adhering to industry best practices. \n4. Optimize applications for maximum speed and scalability. \n5. Implement security and data protection measures. \n6. Troubleshoot and debug issues reported by users and other team members. \n7. Stay up-to-date with emerging technologies and trends in web development.',

        specifications: '1. Bachelor’s degree in Computer Science, Engineering, or related field. \n2. Proven experience as a MERN stack developer or similar role. \n3. Strong proficiency in JavaScript and its modern ES6+ syntax. \n4. Solid understanding of React.js and its core principles. \n5. Experience with popular React.js workflows (such as Redux). \n6. Familiarity with server-side programming using Node.js and Express.js. \n7. Experience with NoSQL databases, particularly MongoDB. \n8. Knowledge of RESTful APIs and web services. \n9. Good understanding of HTML5, CSS3, and front-end build tools like Webpack. \n10. Strong problem-solving and communication skills. \n11. Ability to work independently and collaboratively in a fast-paced environment.',

        experience: ' 1. 3+ years of experience in full-stack web development, with a focus on the MERN stack. \n2. Proven track record of delivering high-quality software solutions on time. \n3. Experience working in Agile/Scrum development environments. \n4. Familiarity with version control systems such as Git. \n5. Previous experience in e-commerce or SaaS projects is a plus. \n6. Experience with cloud platforms (such as AWS, Azure, or GCP) is desirable. \n7. Additional certifications or training in web development technologies are advantageous.',
    },
    {
        title: 'Building a SaaS product as a software developer',
        company: 'John Doe',
        location: '/jobfeed',
        pay: '20',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
        jobtype: 'full time',
        published: '31st June, 2021',
        readingTime: currentDate.toLocaleString(),
        responsibilities: '1. Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). \n2. Collaborate with cross-functional teams to define, design, and ship new features. \n3. Write clean, scalable, and maintainable code adhering to industry best practices. \n4. Optimize applications for maximum speed and scalability. \n5. Implement security and data protection measures. \n6. Troubleshoot and debug issues reported by users and other team members. \n7. Stay up-to-date with emerging technologies and trends in web development.',

        specifications: '1. Bachelor’s degree in Computer Science, Engineering, or related field. \n2. Proven experience as a MERN stack developer or similar role. \n3. Strong proficiency in JavaScript and its modern ES6+ syntax. \n4. Solid understanding of React.js and its core principles. \n5. Experience with popular React.js workflows (such as Redux). \n6. Familiarity with server-side programming using Node.js and Express.js. \n7. Experience with NoSQL databases, particularly MongoDB. \n8. Knowledge of RESTful APIs and web services. \n9. Good understanding of HTML5, CSS3, and front-end build tools like Webpack. \n10. Strong problem-solving and communication skills. \n11. Ability to work independently and collaboratively in a fast-paced environment.',

        experience: ' 1. 3+ years of experience in full-stack web development, with a focus on the MERN stack. \n2. Proven track record of delivering high-quality software solutions on time. \n3. Experience working in Agile/Scrum development environments. \n4. Familiarity with version control systems such as Git. \n5. Previous experience in e-commerce or SaaS projects is a plus. \n6. Experience with cloud platforms (such as AWS, Azure, or GCP) is desirable. \n7. Additional certifications or training in web development technologies are advantageous.',

    },
    {
        title: 'Building a SaaS product as a software developer',
        company: 'John Doe',
        location: '/jobfeed',
        pay: '20',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
        jobtype: 'full time',
        published: '31st June, 2021',
        readingTime: currentDate.toLocaleString(),
        responsibilities: '1. Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). \n2. Collaborate with cross-functional teams to define, design, and ship new features. \n3. Write clean, scalable, and maintainable code adhering to industry best practices. \n4. Optimize applications for maximum speed and scalability. \n5. Implement security and data protection measures. \n6. Troubleshoot and debug issues reported by users and other team members. \n7. Stay up-to-date with emerging technologies and trends in web development.',

        specifications: '1. Bachelor’s degree in Computer Science, Engineering, or related field. \n2. Proven experience as a MERN stack developer or similar role. \n3. Strong proficiency in JavaScript and its modern ES6+ syntax. \n4. Solid understanding of React.js and its core principles. \n5. Experience with popular React.js workflows (such as Redux). \n6. Familiarity with server-side programming using Node.js and Express.js. \n7. Experience with NoSQL databases, particularly MongoDB. \n8. Knowledge of RESTful APIs and web services. \n9. Good understanding of HTML5, CSS3, and front-end build tools like Webpack. \n10. Strong problem-solving and communication skills. \n11. Ability to work independently and collaboratively in a fast-paced environment.',

        experience: ' 1. 3+ years of experience in full-stack web development, with a focus on the MERN stack. \n2. Proven track record of delivering high-quality software solutions on time. \n3. Experience working in Agile/Scrum development environments. \n4. Familiarity with version control systems such as Git. \n5. Previous experience in e-commerce or SaaS projects is a plus. \n6. Experience with cloud platforms (such as AWS, Azure, or GCP) is desirable. \n7. Additional certifications or training in web development technologies are advantageous.',

    },
];
const Cardsdata = () => {
    return (
        <div className='flex md:flex-row justify-center '>
            <div>
                <SmallCards cardData={cardData} />
            </div>
            <div className='invisible md:visible'>
                <Bigcards cardData={cardData}/>
            </div>
        </div>
    )
}
export default Cardsdata;
