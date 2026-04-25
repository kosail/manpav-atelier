import project1 from "@assets/gallery/1.webp";
import project2 from "@assets/gallery/2.webp";
import project3 from "@assets/gallery/3.webp";
import project4 from "@assets/gallery/4.webp";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: ImageMetadata;
  slug: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Silent Forms",
    category: "Architecture & Space",
    year: "2025",
    image: project1,
    slug: "silent-forms",
    description: "An exploration of negative space in contemporary Japanese architecture, where absence becomes the primary material.",
  },
  {
    id: "2",
    title: "Earthbound",
    category: "Craft & Material",
    year: "2024",
    image: project2,
    slug: "earthbound",
    description: "Documentary series following artisan ceramicists in rural Portugal, capturing the dialogue between hand and earth.",
  },
  {
    id: "3",
    title: "White Cube Revisited",
    category: "Exhibition Design",
    year: "2024",
    image: project3,
    slug: "white-cube-revisited",
    description: "Reimagining the gallery as a living organism — light, air, and movement choreographed across four seasons.",
  },
  {
    id: "4",
    title: "Verdant Shadows",
    category: "Environmental",
    year: "2023",
    image: project4,
    slug: "verdant-shadows",
    description: "A visual meditation on tropical ecosystems, tracing the boundary between cultivation and wilderness.",
  },
];
