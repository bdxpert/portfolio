import aboutpic from "./components/Access/profile.jpg"
import deploymentpic from "./components/Access/project.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://isanjiv.com/ses_dlq.pdf',
  title: 'Blog',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Sanjiv Kumar Sarkar',
  role: 'Lead Software Engineer(Former)',
  description:
  'Currently I am MIU MSCS student. I am interested in Java backend development. Personally I am a hardworking and enthusiastic person.'+
  'I love what I do.'+
  'I am passionate about my work. I always plan my task before I proceed to implement it. First I try to make my work done and then try to make it more perfect. I love to work in friendly environment where I can learn and apply my knowledge to solve problems.',
  resume: 'https://isanjiv.com/resume/sanjiv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sanjiv-kumar-sarkar-239a235',
    github: 'https://github.com/bdxpert',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio Deployment',
    description:
      'Use Route53, CDN, S3, API Gatway, SNS, SQS, SES and Lambda to deploy & function protfolio',
    stack: ['route53', 'Cloudfront', 'S3','API Gateway','Lambda','SQS', 'DynamoDB'],
    sourceCode: '',
    livePreview: 'https://isanjiv.com',
  },
  {
    name: 'FutureVault',
    description:
      'FutureVault is a secure document management system with Encryption, OCR, Searching & sharing facility.',
    stack: ['Java 8', 'SpringBoot', 'MongoDB','Aws Services','express','nodejs'],
    sourceCode: '',
    livePreview: 'https://futurevault.com',
  },
  {
    name: `Sara’s Home Stay`,
    description:
      'Home stay for person, School, agency.',
    stack: ['Laravel', 'Mysql', 'Jquery', 'Bootstrap UI.'],
    sourceCode: '',
    livePreview: 'https://www.sarahomestay.com/',
  },
  {
    name: 'GarmentsApp',
    description:
      'Garments ERP solutions with modules merchandising, production, hr, accounts & inventory',
    stack: ['JAVA', 'Mysql', 'Angular.js', 'Twitter Bootstrap'],
    sourceCode: '', 
    livePreview: '',   
  },
  {
    name: 'Brodi Ecommerce',
    description:
      'Customize ecommerce solution built on opencart & integration with quickbook for accounting purpose',
    stack: ['PHP','Mysql', 'Jquery', 'Twitter Bootstrap'],
    sourceCode: '',
    livePreview: 'https://www.brodi.com',
  },
  {
    name: 'Trace',
    description:
      'Live streaming application with events & video uploads from app.',      
    stack: ['PHP','Mysql', 'Nodejs', 'Jquery', 'Twitter Bootstrap'],
    sourceCode: '',
    livePreview: 'https://www.trace.com',
  },
  

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java 8',
  'Java Spring Boot',
  'CSS',
  'JavaScript',  
  'Express',
  'MySQL',
  'MongoDB',
  'PostGre',
  'React',
  'PHP',  
  'Laravel',
  'Material UI',
  'Git',      
  'Microservices',
  'Docker'  
]
const deployment = {  
  imgLink: deploymentpic,
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sanjiv771@gmail.com',
}

export { header, about, projects, skills, contact,  deployment}
/*
`* Buy a domain and register it in route53
      * Deploy the static content in S3 bucket
      * Publish bucket content in CloudFront Distribution
      * Submit contact information in Aws API Gateway
      * Catch input in lambda function and send data two separate SQS
      * SQS trigger Lambda will catch SQS content.
      * One lambda will send email to portfolio user and another Lambda will store data in DynamoDB
      * Incase Lambda unable to process contact detail it will send back an email to contact person`
*/