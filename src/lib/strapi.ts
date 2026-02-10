// Strapi API Client Utility
// For Strapi 5 CMS integration

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || '';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface HeroButtons {
  id: number;
  text: string;
  link: string;
}

interface Homepage {
  id: number;
  heroTitle: string;
  heroSubtitle: string;
  heroButtons: HeroButtons[];
  heroImages: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }[];
  };
}

async function fetchAPI<T>(endpoint: string): Promise<T | null> {
  const url = `${STRAPI_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN && {
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        })
      }
    });

    if (!response.ok) {
      console.error(`Strapi API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Strapi API Fetch Error:', error);
    return null;
  }
}

export async function getHomepage(): Promise<Homepage | null> {
  const data = await fetchAPI<StrapiResponse<Homepage>>('/api/homepage?populate=*');
  
  if (!data) {
    return null;
  }

  // Strapi 5 returns flattened data structure
  return data.data;
}

export { STRAPI_URL };
