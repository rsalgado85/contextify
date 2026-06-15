import { NextRequest, NextResponse } from "next/server";

const JINA_BASE = "https://r.jina.ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'url' field in request body" },
        { status: 400 }
      );
    }

    // Build the Jina URL: strip protocol and prepend http://
    const strippedUrl = url.replace(/^https?:\/\//, "");
    const jinaUrl = `${JINA_BASE}/http://${strippedUrl}`;

    const response = await fetch(jinaUrl, {
      headers: {
        Accept: "text/markdown",
        "X-Return-Format": "markdown",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Jina API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const text = await response.text();
    return new NextResponse(text, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
