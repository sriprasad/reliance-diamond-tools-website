export interface FoundationValue {
  label: string;
  description: string;
  iconKey: "precision" | "integrity" | "innovation" | "customer-focus";
}

export interface FoundationSlide {
  id: string;
  heading: string;
  type: "body" | "values";
  body?: string;
  values?: FoundationValue[];
  iconKey?: "vision" | "quality" | "journey";
}

export const foundationSlides: FoundationSlide[] = [
  {
    id: "vision-mission",
    heading: "Our Vision & Mission",
    type: "body",
    iconKey: "vision",
    body:
      "Vision: To be a globally trusted name in precision diamond and super-abrasive tooling, recognized for engineering excellence and reliability. Mission: To continuously deliver high-performance cutting solutions that help our customers improve productivity, reduce operational costs, and achieve manufacturing excellence — backed by three decades of precision engineering expertise.",
  },
  {
    id: "core-values",
    heading: "What Drives Us",
    type: "values",
    values: [
      {
        label: "Precision",
        description: "Every tool engineered to exact tolerances.",
        iconKey: "precision",
      },
      {
        label: "Integrity",
        description: "Transparent partnerships built on trust.",
        iconKey: "integrity",
      },
      {
        label: "Innovation",
        description: "Continuous investment in process and product development.",
        iconKey: "innovation",
      },
      {
        label: "Customer Focus",
        description: "Technical support that doesn't end at the sale.",
        iconKey: "customer-focus",
      },
    ],
  },
  {
    id: "quality",
    heading: "Built on Quality",
    type: "body",
    iconKey: "quality",
    body:
      "ISO-certified manufacturing processes aligned with international quality management standards. Rigorous inspection and validation at every production stage, from raw material to finished tool, ensuring consistent performance across every batch.",
  },
  {
    id: "journey",
    heading: "Three Decades of Precision",
    type: "body",
    iconKey: "journey",
    body:
      "Founded in 1994 by Mr. J. Ravi as a small-scale, craftsmanship-driven unit. Today, Reliance Diamond Tools has grown into a ₹60 Crore enterprise with 130+ skilled professionals operating from a 38,000 sq.ft. manufacturing facility in Madhavaram, Chennai — serving Automobile, Aerospace, Optical, Medical Industry, Die & Mould, and General Engineering industries.",
  },
];

export const FOUNDATION_ROTATE_MS = 7000;
