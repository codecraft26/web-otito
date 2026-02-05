import { NextResponse } from "next/server";

export async function GET() {
  const content = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "CXARZXW9GU.com.Otito",
          paths: ["/news/*"],
        },
      ],
    },
  };

  return new NextResponse(JSON.stringify(content), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
