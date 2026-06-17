import { NextResponse } from "next/server";

export const dynamic = "force-static";

const GITHUB_USERNAME = "peirisabhi";
const GITHUB_API = "https://api.github.com";

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "abhishek-portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API error");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    // Language stats
    const languageCount: Record<string, number> = {};
    if (Array.isArray(repos)) {
      repos.forEach((repo: { language?: string }) => {
        if (repo.language) {
          languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
      });
    }

    const languages = Object.entries(languageCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([name, count]) => ({ name, count }));

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + (r.stargazers_count || 0), 0)
      : 0;

    const topRepos = Array.isArray(repos)
      ? repos
          .filter((r: { fork: boolean }) => !r.fork)
          .sort((a: { stargazers_count: number }, b: { stargazers_count: number }) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
          .map((r: {
            name: string;
            description: string | null;
            html_url: string;
            stargazers_count: number;
            forks_count: number;
            language: string | null;
            topics: string[];
          }) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
            topics: r.topics || [],
          }))
      : [];

    return NextResponse.json({
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      totalStars,
      languages,
      topRepos,
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    // Return fallback data
    return NextResponse.json({
      username: GITHUB_USERNAME,
      name: "Abhishek Peiris",
      bio: "Software Engineer | Java | Spring Boot | Android",
      avatar: `https://avatars.githubusercontent.com/${GITHUB_USERNAME}`,
      followers: 0,
      following: 0,
      publicRepos: 100,
      totalStars: 0,
      languages: [
        { name: "Java", count: 40 },
        { name: "PHP", count: 20 },
        { name: "JavaScript", count: 15 },
        { name: "Python", count: 10 },
        { name: "Kotlin", count: 8 },
        { name: "HTML", count: 7 },
      ],
      topRepos: [],
    });
  }
}
