import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReportEmail(totalClicks) {

  try {

   const data = await resend.emails.send({

  from: "Analytics System <onboarding@resend.dev>",

  to: "?????????????",

  subject: "Relatório de Cliques",

  html: `
    <h1>Relatório Mensal</h1>

    <p>Total de cliques registrados:</p>

    <h2>${totalClicks}</h2>
  `,
});
    console.log(data);

  } catch (error) {

    console.error(error);
  }
}