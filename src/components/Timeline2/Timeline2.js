import {
    Timeline,
    Container,
    Content
   } from 'vertical-timeline-component-react';
   
   const Timeline2 = () => {
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
        <section id='experience' className='section experience'>
      <h2 className='section__title'>Professional Experience</h2>

     <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
       <Container title="ITConquest" startDate="2013/06/09" endDate="2022/07/05">
        <Content
         title="ITConquest"
         description={[
          "Canada Based Outsorcing Company http://www.itconquest.com",
         ]}
        />        
       </Container>
       <Container title="Brac IT Service Ltd" startDate="2011/04/11" endDate="2013/07/13">
       <Content
         title="Brac IT Service Ltd"
         description={[
          "Sister Concern of Brac http://www.bracits.com/",          
         ]}
        />        
       </Container>
       <Container title="Evoknow Bangladesh Ltd" startDate="2006/03/04" endDate="2011/04/10">
       <Content
         title="Evoknow Bangladesh Ltd"
         description={[
          "US Based Outsorcing Company",          
         ]}
        />        
       </Container>
      </Timeline>
      </section>
    );
   };
export default Timeline2;