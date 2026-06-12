"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Clock, Tag } from "lucide-react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  categories?: string[];
}

// UPDATE: Replace with your actual Medium username (without @)
const MEDIUM_USERNAME = "MonikaSharmaa";

export function MediumFeed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=6`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.status === "ok" && data.items?.length > 0) {
          setPosts(data.items);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[72px] rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
          Medium articles will appear here automatically once published.
        </p>
        <a
          href={`https://medium.com/@${MEDIUM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-amber-600 dark:text-amber-400 hover:underline font-medium"
        >
          View profile on Medium →
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => {
        const date = new Date(post.pubDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        return (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {date}
                </span>
                {post.categories && post.categories.length > 0 && (
                  <span className="flex items-center gap-1">
                    <Tag size={11} />
                    {post.categories.slice(0, 2).join(", ")}
                  </span>
                )}
              </div>
            </div>
            <ExternalLink
              size={14}
              className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 flex-shrink-0 mt-0.5 transition-colors"
            />
          </a>
        );
      })}
    </div>
  );
}
