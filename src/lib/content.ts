import { getCollection, getEntry } from 'astro:content';

/** Published projects (not drafts), in manual order. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Published roles, newest first. */
export async function getRoles() {
  const all = await getCollection('experience', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.startDate.localeCompare(a.data.startDate));
}

/** A page's front matter; fails the build if the file is missing. */
export async function getPage(id: string) {
  const page = await getEntry('pages', id);
  if (!page) throw new Error(`content/pages/${id}.md is missing`);
  return page;
}

/** All skill names, for checking project tools against skills.yaml. */
export async function getSkillNames() {
  const groups = await getCollection('skills');
  return new Set(groups.flatMap((g) => g.data.items));
}
