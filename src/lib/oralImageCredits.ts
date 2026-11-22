/// File: src/lib/oralImageCredits.ts
//
// Photo credits for Individual Oral stimulus images, keyed by the image file
// name without its extension (e.g. "identities-health" for
// /images/oral/identities-health.jpg). Shown under the photo in
// AudioAssignmentModule.tsx.
//
// Add an entry once you have replaced an image with a licensed photo:
//   "identities-health": {
//     author: "Photographer Name",
//     license: "CC BY-SA 4.0",
//     page: "https://commons.wikimedia.org/wiki/File:Example.jpg",
//   },
// Only use CC0, public-domain, CC BY, or CC BY-SA images (and Unsplash/Pexels
// licence-free photos, crediting the photographer). See docs/oral-image-sourcing.md.

export interface ImageCredit {
  author: string;
  license: string;
  page: string;
}

export const ORAL_IMAGE_CREDITS: Record<string, ImageCredit> = {};
