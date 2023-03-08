import {
    Timeline,
    Container,
    Content
   } from 'vertical-timeline-component-react';
   
   const Education = () => {
    const customTheme = {
     yearColor: '#405b73',
     lineColor: '#d0cdc4',
     dotColor: '#262626',
     borderDotColor: '#d0cdc4',
     titleColor: '#405b73',
     subtitleColor: '#bf9765',
     textColor: '#262626',
    };
   
    return (
        <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

     <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
        <Container title="MSCS" startDate="2022/08/07" endDate="2024/06/30">
        <Content
            title="Masters in Computer Science"
            description={[
            "Maharishi International University",
            ]}
            />        
       </Container>
       <Container title="Bsc" startDate="1999/06/09" endDate="2005/07/05">
        <Content
         title="Bsc in Computer Science & Technology"
         description={[
          "University of Rajshahi",
         ]}
        />        
       </Container>
      </Timeline>
      </section>
    );
   };
export default Education;