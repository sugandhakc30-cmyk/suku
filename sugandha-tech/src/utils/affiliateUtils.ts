import { DEFAULT_ASSOCIATE_TAG } from '../data/amazonProducts';

const STORAGE_KEY_TAG = 'gearpicks_amazon_tag';

export function getStoredAssociateTag(): string {
  try {
    const tag = localStorage.getItem(STORAGE_KEY_TAG);
    if (tag && tag.trim().length > 0) {
      return tag.trim();
    }
  } catch {
    // Fallback if localStorage blocked
  }
  return DEFAULT_ASSOCIATE_TAG;
}

export function saveAssociateTag(tag: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_TAG, tag.trim());
  } catch {
    // Ignore error
  }
}

/**
 * Builds a compliant full Amazon affiliate tracking URL.
 * Example output: https://www.amazon.com/dp/B09XS7JWHH?tag=gearpicks-20&linkCode=ogi&th=1
 */
export function buildAffiliateUrl(baseUrl: string, asin: string, tagOverride?: string): string {
  if (baseUrl.includes('amzn.to')) {
    return baseUrl;
  }

  const associateTag = tagOverride || getStoredAssociateTag();
  const cleanAsin = asin.trim();
  
  // Base clean format
  const base = baseUrl.includes('/dp/') ? baseUrl : `https://www.amazon.com/dp/${cleanAsin}`;
  
  // Remove existing query params if any
  const urlWithoutParams = base.split('?')[0];
  
  return `${urlWithoutParams}?tag=${encodeURIComponent(associateTag)}&linkCode=ogi&th=1`;
}

/**
 * Standard mandatory FTC disclosure notice string
 */
export const MANDATORY_FOOTER_DISCLOSURE = "As an Amazon Associate I earn from qualifying purchases.";

export const MANDATORY_AD_LABEL = "#ad (Paid Link)";
