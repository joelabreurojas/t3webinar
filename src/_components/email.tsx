interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}. Thanks for registering!</h1>
    <p>Our meeting will be on July 10.</p>
    <a href="https://meet.google.com/xtk-hjor-eyq">Google Meet Link</a>
    <p>We are glad you are interested in joining us.</p>
  </div>
);
