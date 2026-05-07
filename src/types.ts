export interface Product {
  id: string;
  cat: string;
  label: string;
  emoji?: string;
  dna: string;
}

export interface DimensionItem {
  n: string;
  p: string;
}

export interface Dimension {
  label: string;
  color: string;
  items: DimensionItem[];
}

export interface BrandConfig {
  id: string;
  name: string;
  tagline: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  categories: string[];
  products: Product[];
  dimensions: Record<string, Dimension>;
  brandProps: string[];
  negativePrompt: string;
}
