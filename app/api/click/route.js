import { prisma } from "@/lib/prisma";

export async function POST(req) {

  try {

    const body = await req.json();

    const click = await prisma.click.create({
      data: {
        url: body.url,
        userAgent: req.headers.get("user-agent"),
      },
    });

    return Response.json({
      success: true,
      click,
    });

  } catch (error) {

    console.error("ERRO API CLICK:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}