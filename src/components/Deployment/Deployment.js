import { deployment } from '../../portfolio'

const Deployment = () => {
  const {imgLink } = deployment

  return (
    <div className='about center'>
      <h2 className='section__title'>Portfolio Deployment Diagram</h2>
      {imgLink && (
       <img alt="Deplyment Diagram" src={imgLink} />
      )}            
    </div>
  )
}

export default Deployment
/*
{
    "Template": {
      "HtmlPart": "<!DOCTYPE html><html><body><table width=\"100%\" bgcolor=\"#f6f8fb\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\" offset=\"0\" style=\"border-collapse:collapse; text-align:center;border-width:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;background-color:#f6f8fb;font-size:16px; line-height:22px; font-family:'Arial';\"><tr><td align=\"center\" valign=\"top\" style=\"padding-top:50px;padding-right:20px;padding-bottom:30px;padding-left:20px;\"></td></tr></table></td></tr></table></body></html>",
      "SubjectPart": "Your {{name}} account is now active",
      "TemplateName": "account-activation"
    }
  }
  aws ses list-templates

  aws ses get-template --template-name SanTemplate

  aws ses create-template --cli-input-json file://SanTemplate.json

  aws ses update-template --cli-input-json file://acc-activate.json

  aws ses delete-template --template-name acc-activate


const AWS = require("aws-sdk"); 

AWS.config.update({
    region: 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const params = {
    "Source": "noreply@isanjiv.com", //verified Source Email
    "Template": "acc-activate",
    "Destination": {
        "ToAddresses": [ "sanjiv771@gmail.com" ]
    },
    "TemplateData": "{ \"name\":\"Tom Tom\"}"
}

const response = ses.sendTemplatedEmail(params, (err, data) =>  {
    if (err) {
        console.log(err, err.stack); 
    }
    else{
        console.log(data);
    }     
});

*/