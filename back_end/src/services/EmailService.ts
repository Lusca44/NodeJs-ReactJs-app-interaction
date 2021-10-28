interface MailTo {
  name: string;
  email: string;
}

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: MailTo;
  message: MailMessage;
}

interface MailService {
  sendMail(arg: MessageDTO): void;
}

class EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email Enviado para: ${to.name} - ${message.subject}`);
  }
}

export default EmailService;
