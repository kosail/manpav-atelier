
const email: string = "manapavon@gmail.com";
const subject: string = "Propuesta de trabajo | Porfatolio Manpav";

const emailTrigger: () => string = () => {
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${email}?subject=${encodedSubject}`;
};

export { email, subject, emailTrigger };