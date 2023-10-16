"use client"
import { useState, useEffect } from 'react';

interface PageDetailProps {
  page?: {
    body: string;
  } | null; // Make 'page' prop optional
}

const PageDetail: React.FC<PageDetailProps> = ({ page }) => {
  // State to store the page data
  const [pageData, setPageData] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('/api/pageDetail?slug=about-us');; // Replace 'your-slug' with the actual slug
        if (response.ok) {
          const data = await response.json();
          setPageData(data.page?.body || null); // Update 'pageData' with the fetched body content
        } else {
          console.error('Failed to fetch page data');
        }
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    if (!pageData) {
      fetchPageData();
    }
  }, [pageData]);

  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: pageData || '' }} />
  );
};

export default PageDetail;
