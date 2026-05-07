import { prisma } from "@/lib/prisma";
import { sendReportEmail } from "@/lib/email";

export async function GET() {

  try {

    const totalClicks = await prisma.click.count();

    await sendReportEmail(totalClicks);

    return Response.json({
      success: true,
      totalClicks,
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}