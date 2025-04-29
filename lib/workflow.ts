import { Client as WorkflowClient } from "@upstash/workflow";
import config from "@/lib/config";
import emailjs from "@/lib/emailjs";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const templateParams = {
      email: email,
      title: subject,
      message: message,
      name: "Phat Doan",
    };

    await emailjs.send(
      config.env.emailjs.serviceId,
      config.env.emailjs.templateId,
      templateParams
    );

    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

// export const sendEmail = async ({
//   email,
//   subject,
//   message,
// }: {
//   email: string;
//   subject: string;
//   message: string;
// }) => {
//   await qstashClient.publishJSON({
//     api: {
//       name: "email",
//       provider: resend({ token: config.env.resendToken }),
//     },
//     body: {
//       from: "JS Mastery <contact@adrianjsmastery.com>",
//       to: [email],
//       subject,
//       html: message,
//     },
//   });
// };
