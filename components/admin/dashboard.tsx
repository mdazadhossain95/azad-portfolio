"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import {
  createItem,
  deleteItem,
  saveSettings,
  updateItem,
  watchCollection,
} from "@/lib/firestore-client";
import { db } from "@/lib/firebase-client";
import {
  defaultArticles,
  defaultProjects,
  defaultReviews,
  defaultSettings,
  defaultTravels,
} from "@/lib/default-content";
import { uploadImage } from "@/lib/storage-client";
import { Article, Project, Review, Settings, TravelPost } from "@/lib/types";

type Tab = "projects" | "articles" | "reviews" | "travels" | "settings";

type ProjectForm = {
  id?: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  techStack: string;
  playStore: string;
  appStore: string;
  live: string;
  featured: boolean;
};

type ArticleForm = {
  id?: string;
  title: string;
  slug: string;
  preview: string;
  content: string;
  publishedAt: string;
};

type ReviewForm = {
  id?: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
};

type TravelForm = {
  id?: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  location: string;
  publishedAt: string;
};

const tabs: Tab[] = ["projects", "articles", "reviews", "travels", "settings"];

const emptyProject: ProjectForm = {
  title: "",
  slug: "",
  description: "",
  image: "",
  techStack: "Flutter, Firebase",
  playStore: "",
  appStore: "",
  live: "",
  featured: false,
};

const emptyArticle: ArticleForm = {
  title: "",
  slug: "",
  preview: "",
  content: "",
  publishedAt: new Date().toISOString().slice(0, 10),
};

const emptyReview: ReviewForm = {
  name: "",
  role: "",
  company: "",
  text: "",
  rating: 5,
};

const emptyTravel: TravelForm = {
  title: "",
  slug: "",
  summary: "",
  content: "",
  image: "",
  location: "",
  publishedAt: new Date().toISOString().slice(0, 10),
};

export function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("projects");
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [articles, setArticles] = useState<Article[]>(defaultArticles);
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [travels, setTravels] = useState<TravelPost[]>(defaultTravels);
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [message, setMessage] = useState("");

  const [projectForm, setProjectForm] = useState<ProjectForm>(emptyProject);
  const [articleForm, setArticleForm] = useState<ArticleForm>(emptyArticle);
  const [reviewForm, setReviewForm] = useState<ReviewForm>(emptyReview);
  const [travelForm, setTravelForm] = useState<TravelForm>(emptyTravel);
  const [settingsForm, setSettingsForm] = useState(defaultSettings);

  useEffect(() => {
    const unsubProjects = watchCollection<Project>("projects", (items) => {
      if (items.length > 0) {
        setProjects(items);
      }
    });
    const unsubArticles = watchCollection<Article>("articles", (items) => {
      if (items.length > 0) {
        setArticles(items);
      }
    });
    const unsubReviews = watchCollection<Review>("reviews", (items) => {
      if (items.length > 0) {
        setReviews(items);
      }
    });
    const unsubTravels = watchCollection<TravelPost>("travels", (items) => {
      if (items.length > 0) {
        setTravels(items);
      }
    });

    const unsubSettings = db
      ? onSnapshot(doc(db, "settings", "main"), (snapshot) => {
          if (snapshot.exists()) {
            const loaded = {
              id: snapshot.id,
              ...(snapshot.data() as Omit<Settings, "id">),
            };
            setSettings(loaded);
            setSettingsForm(loaded);
          }
        })
      : () => {};

    return () => {
      unsubProjects();
      unsubArticles();
      unsubReviews();
      unsubTravels();
      unsubSettings();
    };
  }, []);

  const featuredCount = useMemo(
    () => projects.filter((item) => item.featured).length,
    [projects],
  );

  async function handleProjectSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const payload = {
      title: projectForm.title,
      slug: projectForm.slug,
      description: projectForm.description,
      images: projectForm.image ? [projectForm.image] : [],
      techStack: projectForm.techStack
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      links: {
        playStore: projectForm.playStore,
        appStore: projectForm.appStore,
        live: projectForm.live,
      },
      featured: projectForm.featured,
    };

    if (projectForm.id) {
      await updateItem("projects", projectForm.id, payload);
      setMessage("Project updated");
    } else {
      await createItem("projects", payload);
      setMessage("Project created");
    }

    setProjectForm(emptyProject);
  }

  async function handleArticleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      title: articleForm.title,
      slug: articleForm.slug,
      preview: articleForm.preview,
      content: articleForm.content,
      publishedAt: articleForm.publishedAt,
    };

    if (articleForm.id) {
      await updateItem("articles", articleForm.id, payload);
      setMessage("Article updated");
    } else {
      await createItem("articles", payload);
      setMessage("Article created");
    }

    setArticleForm(emptyArticle);
  }

  async function handleReviewSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: reviewForm.name,
      role: reviewForm.role,
      company: reviewForm.company,
      text: reviewForm.text,
      rating: reviewForm.rating,
    };

    if (reviewForm.id) {
      await updateItem("reviews", reviewForm.id, payload);
      setMessage("Review updated");
    } else {
      await createItem("reviews", payload);
      setMessage("Review created");
    }

    setReviewForm(emptyReview);
  }

  async function handleTravelSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      title: travelForm.title,
      slug: travelForm.slug,
      summary: travelForm.summary,
      content: travelForm.content,
      images: travelForm.image ? [travelForm.image] : [],
      location: travelForm.location,
      publishedAt: travelForm.publishedAt,
    };

    if (travelForm.id) {
      await updateItem("travels", travelForm.id, payload);
      setMessage("Travel post updated");
    } else {
      await createItem("travels", payload);
      setMessage("Travel post created");
    }

    setTravelForm(emptyTravel);
  }

  async function handleSettingsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await saveSettings("main", settingsForm);
    setSettings(settingsForm);
    setMessage("Settings saved");
  }

  async function uploadProjectImage(file?: File | null) {
    if (!file) {
      return;
    }

    const url = await uploadImage(file, "projects");
    setProjectForm((prev) => ({ ...prev, image: url }));
    setMessage("Project image uploaded");
  }

  async function uploadTravelImage(file?: File | null) {
    if (!file) {
      return;
    }

    const url = await uploadImage(file, "travels");
    setTravelForm((prev) => ({ ...prev, image: url }));
    setMessage("Travel image uploaded");
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
        <p className="text-sm text-[var(--muted)]">Featured projects: {featuredCount}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`rounded-full border px-4 py-2 text-sm capitalize ${
              item === tab
                ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                : "border-[var(--line)] text-[var(--text)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {message ? <p className="mb-6 text-sm text-emerald-500">{message}</p> : null}

      {tab === "projects" ? (
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleProjectSubmit} className="space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-xl font-semibold">Project Form</h2>
            <input value={projectForm.title} onChange={(event) => setProjectForm((prev) => ({ ...prev, title: event.target.value }))} placeholder="Title" className="field" required />
            <input value={projectForm.slug} onChange={(event) => setProjectForm((prev) => ({ ...prev, slug: event.target.value }))} placeholder="Slug" className="field" required />
            <textarea value={projectForm.description} onChange={(event) => setProjectForm((prev) => ({ ...prev, description: event.target.value }))} placeholder="Description" className="field min-h-24" required />
            <input value={projectForm.techStack} onChange={(event) => setProjectForm((prev) => ({ ...prev, techStack: event.target.value }))} placeholder="Tech stack (comma separated)" className="field" required />
            <input value={projectForm.image} onChange={(event) => setProjectForm((prev) => ({ ...prev, image: event.target.value }))} placeholder="Image URL" className="field" />
            <input type="file" accept="image/*" onChange={(event) => uploadProjectImage(event.target.files?.[0])} className="field" />
            <input value={projectForm.playStore} onChange={(event) => setProjectForm((prev) => ({ ...prev, playStore: event.target.value }))} placeholder="Play Store URL" className="field" />
            <input value={projectForm.appStore} onChange={(event) => setProjectForm((prev) => ({ ...prev, appStore: event.target.value }))} placeholder="App Store URL" className="field" />
            <input value={projectForm.live} onChange={(event) => setProjectForm((prev) => ({ ...prev, live: event.target.value }))} placeholder="Live URL" className="field" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={projectForm.featured} onChange={(event) => setProjectForm((prev) => ({ ...prev, featured: event.target.checked }))} />
              Featured project
            </label>
            <button type="submit" className="rounded-full bg-[var(--text)] px-5 py-2 text-sm text-[var(--bg)]">
              {projectForm.id ? "Update" : "Create"} project
            </button>
          </form>

          <div className="space-y-3">
            {projects.map((item) => (
              <article key={item.id} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">/{item.slug}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <button type="button" className="rounded-full border border-[var(--line)] px-3 py-1" onClick={() => setProjectForm({ id: item.id, title: item.title, slug: item.slug, description: item.description, image: item.images[0] ?? "", techStack: item.techStack.join(", "), playStore: item.links.playStore ?? "", appStore: item.links.appStore ?? "", live: item.links.live ?? "", featured: item.featured })}>Edit</button>
                  <button type="button" className="rounded-full border border-rose-400 px-3 py-1 text-rose-500" onClick={() => deleteItem("projects", item.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab === "articles" ? (
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleArticleSubmit} className="space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-xl font-semibold">Article Form</h2>
            <input value={articleForm.title} onChange={(event) => setArticleForm((prev) => ({ ...prev, title: event.target.value }))} placeholder="Title" className="field" required />
            <input value={articleForm.slug} onChange={(event) => setArticleForm((prev) => ({ ...prev, slug: event.target.value }))} placeholder="Slug" className="field" required />
            <input value={articleForm.preview} onChange={(event) => setArticleForm((prev) => ({ ...prev, preview: event.target.value }))} placeholder="Preview" className="field" required />
            <textarea value={articleForm.content} onChange={(event) => setArticleForm((prev) => ({ ...prev, content: event.target.value }))} placeholder="Content" className="field min-h-40" required />
            <input type="date" value={articleForm.publishedAt} onChange={(event) => setArticleForm((prev) => ({ ...prev, publishedAt: event.target.value }))} className="field" required />
            <button type="submit" className="rounded-full bg-[var(--text)] px-5 py-2 text-sm text-[var(--bg)]">{articleForm.id ? "Update" : "Create"} article</button>
          </form>

          <div className="space-y-3">
            {articles.map((item) => (
              <article key={item.id} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">/{item.slug}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <button type="button" className="rounded-full border border-[var(--line)] px-3 py-1" onClick={() => setArticleForm({ id: item.id, title: item.title, slug: item.slug, preview: item.preview, content: item.content, publishedAt: item.publishedAt })}>Edit</button>
                  <button type="button" className="rounded-full border border-rose-400 px-3 py-1 text-rose-500" onClick={() => deleteItem("articles", item.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab === "reviews" ? (
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleReviewSubmit} className="space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-xl font-semibold">Review Form</h2>
            <input value={reviewForm.name} onChange={(event) => setReviewForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Name" className="field" required />
            <input value={reviewForm.role} onChange={(event) => setReviewForm((prev) => ({ ...prev, role: event.target.value }))} placeholder="Role" className="field" required />
            <input value={reviewForm.company} onChange={(event) => setReviewForm((prev) => ({ ...prev, company: event.target.value }))} placeholder="Company" className="field" />
            <textarea value={reviewForm.text} onChange={(event) => setReviewForm((prev) => ({ ...prev, text: event.target.value }))} placeholder="Review text" className="field min-h-32" required />
            <input type="number" min={1} max={5} value={reviewForm.rating} onChange={(event) => setReviewForm((prev) => ({ ...prev, rating: Number(event.target.value) }))} className="field" />
            <button type="submit" className="rounded-full bg-[var(--text)] px-5 py-2 text-sm text-[var(--bg)]">{reviewForm.id ? "Update" : "Create"} review</button>
          </form>

          <div className="space-y-3">
            {reviews.map((item) => (
              <article key={item.id} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{item.role}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <button type="button" className="rounded-full border border-[var(--line)] px-3 py-1" onClick={() => setReviewForm({ id: item.id, name: item.name, role: item.role, company: item.company ?? "", text: item.text, rating: item.rating })}>Edit</button>
                  <button type="button" className="rounded-full border border-rose-400 px-3 py-1 text-rose-500" onClick={() => deleteItem("reviews", item.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab === "travels" ? (
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleTravelSubmit} className="space-y-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
            <h2 className="text-xl font-semibold">Travel Form</h2>
            <input value={travelForm.title} onChange={(event) => setTravelForm((prev) => ({ ...prev, title: event.target.value }))} placeholder="Title" className="field" required />
            <input value={travelForm.slug} onChange={(event) => setTravelForm((prev) => ({ ...prev, slug: event.target.value }))} placeholder="Slug" className="field" required />
            <input value={travelForm.summary} onChange={(event) => setTravelForm((prev) => ({ ...prev, summary: event.target.value }))} placeholder="Summary" className="field" required />
            <textarea value={travelForm.content} onChange={(event) => setTravelForm((prev) => ({ ...prev, content: event.target.value }))} placeholder="Content" className="field min-h-40" required />
            <input value={travelForm.location} onChange={(event) => setTravelForm((prev) => ({ ...prev, location: event.target.value }))} placeholder="Location" className="field" />
            <input value={travelForm.image} onChange={(event) => setTravelForm((prev) => ({ ...prev, image: event.target.value }))} placeholder="Image URL" className="field" />
            <input type="file" accept="image/*" onChange={(event) => uploadTravelImage(event.target.files?.[0])} className="field" />
            <input type="date" value={travelForm.publishedAt} onChange={(event) => setTravelForm((prev) => ({ ...prev, publishedAt: event.target.value }))} className="field" required />
            <button type="submit" className="rounded-full bg-[var(--text)] px-5 py-2 text-sm text-[var(--bg)]">{travelForm.id ? "Update" : "Create"} travel post</button>
          </form>

          <div className="space-y-3">
            {travels.map((item) => (
              <article key={item.id} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">/{item.slug}</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <button type="button" className="rounded-full border border-[var(--line)] px-3 py-1" onClick={() => setTravelForm({ id: item.id, title: item.title, slug: item.slug, summary: item.summary, content: item.content, image: item.images[0] ?? "", location: item.location ?? "", publishedAt: item.publishedAt })}>Edit</button>
                  <button type="button" className="rounded-full border border-rose-400 px-3 py-1 text-rose-500" onClick={() => deleteItem("travels", item.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab === "settings" ? (
        <form onSubmit={handleSettingsSubmit} className="grid gap-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 md:max-w-2xl">
          <h2 className="text-xl font-semibold">Social Settings</h2>
          <input value={settingsForm.email} onChange={(event) => setSettingsForm((prev) => ({ ...prev, email: event.target.value }))} placeholder="Email" className="field" />
          <input value={settingsForm.linkedin} onChange={(event) => setSettingsForm((prev) => ({ ...prev, linkedin: event.target.value }))} placeholder="LinkedIn" className="field" />
          <input value={settingsForm.github} onChange={(event) => setSettingsForm((prev) => ({ ...prev, github: event.target.value }))} placeholder="GitHub" className="field" />
          <input value={settingsForm.upwork} onChange={(event) => setSettingsForm((prev) => ({ ...prev, upwork: event.target.value }))} placeholder="Upwork" className="field" />
          <input value={settingsForm.x ?? ""} onChange={(event) => setSettingsForm((prev) => ({ ...prev, x: event.target.value }))} placeholder="X / Twitter" className="field" />
          <button type="submit" className="w-fit rounded-full bg-[var(--text)] px-5 py-2 text-sm text-[var(--bg)]">Save settings</button>
          <p className="text-xs text-[var(--muted)]">Current contact email: {settings.email}</p>
        </form>
      ) : null}
    </section>
  );
}
