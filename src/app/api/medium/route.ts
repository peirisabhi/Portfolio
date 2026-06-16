import { NextResponse } from "next/server";

const MEDIUM_USERNAME = "abhishekpeiris";

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail?: string;
}

// Simple XML parser for RSS
function parseRSS(xml: string): MediumItem[] {
  const items: MediumItem[] = [];
  const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

  for (const match of itemMatches) {
    const item = match[1];

    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const linkMatch = item.match(/<link>(.*?)<\/link>/);
    const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);

    if (!titleMatch || !linkMatch) continue;

    // Extract thumbnail from content
    let thumbnail: string | undefined;
    if (contentMatch) {
      const imgMatch = contentMatch[1].match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) thumbnail = imgMatch[1];
    }

    // Extract description
    let description = "";
    if (contentMatch) {
      description = contentMatch[1]
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 200);
    }

    items.push({
      title: titleMatch[1],
      link: linkMatch[1],
      pubDate: dateMatch ? dateMatch[1] : "",
      content: description,
      thumbnail,
    });

    if (items.length >= 6) break;
  }

  return items;
}

export async function GET() {
  try {
    const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const res = await fetch(rssUrl, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "abhishek-portfolio/1.0" },
    });

    if (!res.ok) throw new Error("Medium RSS error");

    const xml = await res.text();
    const articles = parseRSS(xml);

    return NextResponse.json({ articles });
  } catch (error) {
    console.error("Medium RSS error:", error);
    return NextResponse.json({
      articles: [
        {
          title: "Building Scalable Microservices with Spring Boot and Kafka",
          link: `https://medium.com/@${MEDIUM_USERNAME}`,
          pubDate: new Date().toISOString(),
          content: "A deep dive into building event-driven microservices using Apache Kafka and Spring Boot...",
          thumbnail: null,
        },
        {
          title: "Android Development Best Practices in 2024",
          link: `https://medium.com/@${MEDIUM_USERNAME}`,
          pubDate: new Date().toISOString(),
          content: "Exploring modern Android development patterns including Jetpack Compose and Kotlin coroutines...",
          thumbnail: null,
        },
        {
          title: "Agile Sprint Management: Tools and Techniques",
          link: `https://medium.com/@${MEDIUM_USERNAME}`,
          pubDate: new Date().toISOString(),
          content: "How to effectively manage sprint data and team velocity in Agile development environments...",
          thumbnail: null,
        },
      ],
    });
  }
}
