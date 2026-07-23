import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectDetailsPage } from '@/components/project-details';
import { defaultProjects } from '@/lib/default-content';
import { CaseStudy } from '@/lib/types';
import ProjectDetailPage from '@/app/projects/[slug]/page';
import { notFound } from 'next/navigation';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams(),
  notFound: vi.fn(),
}));

describe('Case Studies System', () => {
  it('validates a valid project model', () => {
    const project = defaultProjects[0] as CaseStudy;
    expect(project).toBeDefined();
    expect(project.title).toBeTruthy();
    expect(project.slug).toBeTruthy();
    expect(project.category).toBeTruthy();
    expect(project.status).toMatch(/^(live|private|archived|concept)$/);
  });

  it('triggers 404 for invalid project slug', async () => {
    // ProjectDetailPage is an async component returning a promise in next 15/react 19 Server Components
    const props = { params: Promise.resolve({ slug: 'invalid-slug-123' }) };
    await ProjectDetailPage(props);
    expect(notFound).toHaveBeenCalled();
  });

  it('does not display unverified claims', () => {
    const project = {
      ...defaultProjects[0],
      results: [
        { statement: 'Valid claim', evidence: 'public' },
        { statement: 'Fake unapproved claim', evidence: 'unverified' },
      ],
    } as CaseStudy;

    render(<ProjectDetailsPage project={project} />);
    
    expect(screen.getByText('Valid claim')).toBeDefined();
    expect(screen.queryByText('Fake unapproved claim')).toBeNull();
  });

  it('contains independent store links if present', () => {
    const project = defaultProjects.find(p => p.links?.playStore || p.links?.appStore) as CaseStudy;
    expect(project).toBeDefined();
    
    render(<ProjectDetailsPage project={project} />);
    
    if (project.links.playStore) {
      const playStoreLink = screen.getByText('Play Store');
      expect(playStoreLink.getAttribute('href')).toBe(project.links.playStore);
    }
    
    if (project.links.appStore) {
      const appStoreLink = screen.getByText('App Store');
      expect(appStoreLink.getAttribute('href')).toBe(project.links.appStore);
    }
  });

  it('ensures media accessibility', () => {
    const project = defaultProjects.find(p => p.gallery.length > 0) as CaseStudy;
    expect(project).toBeDefined();
    
    // Check that all gallery items have alt text in the data model
    project.gallery.forEach(img => {
      expect(img.alt).toBeTruthy();
      expect(img.alt.length).toBeGreaterThan(0);
    });
  });
});
