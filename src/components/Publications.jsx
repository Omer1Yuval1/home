import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

import refs from '../assets/refs.json';
import '../styles/publications.css';


const Publications = () => {
  
  const { darkMode } = useContext(ThemeContext);
  
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        
        // Sort by year, descending (newest first). 
        // Unknown years are treated as last (or can be treated as first if we convert to 9999)
        refs.sort((a, b) => {
          const yearA = a.year === 'Unknown' ? 0 : parseInt(a.year, 10);
          const yearB = b.year === 'Unknown' ? 0 : parseInt(b.year, 10);
          return yearB - yearA; // Descending
        });
        
        setPublications(refs);
      } catch (e) {
        console.error("Error fetching publications:", e);
        setError("Failed to load publications. Check if 'refs.json' is in the public folder.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []); // Runs only once on mount

  return (
    <div className={`publications_wrapper ${darkMode ? "publications_wrapper_dark" : ""}`}>
      <h2>Publications</h2>
      <div className="publications_list">
        {publications.map((pub, index) => (
          <PublicationEntry key={index} pub={pub} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Publications;

const PublicationEntry = ({ pub, darkMode }) => {
  // Function to bold your name in the author list
  const formatAuthors = (authors) => {
    // Escape special regex characters in the replacement string just in case
    // Use a regex with global flag to replace all occurrences of your name
    let formatted = authors.replace(/Yuval, Omer/g, '<strong>Yuval, Omer</strong>');
    formatted = formatted.replace(/Yuval, O /g, '<strong>Yuval, O </strong>');
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  // Determine the primary source text (Journal, Booktitle, or School for Thesis)
  let publicationSource = pub.journal || pub.booktitle || pub.school || "";
  if (pub.type === 'phdthesis' && pub.school) {
    publicationSource = `PhD Thesis, ${pub.school}`;
  } else if (pub.type === 'inproceedings' && pub.booktitle) {
    publicationSource = pub.booktitle;
  }

  // Determine the link (DOI is not explicitly provided in the BibTeX but included for robustness)
  const link = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : null);
  const yearText = pub.year && pub.year !== 'Unknown' ? pub.year : 'In Prep';

  return (
    <div className={`publication_wrapper ${darkMode ? "publication_wrapper_dark" : ""}`}>
      {/* Title as a link if available */}
      {link ? (
        <h3><a href={link} target="_blank" rel="noopener noreferrer">{pub.title}</a></h3>
      ) : (
        <h3>{pub.title}</h3>
      )}

      {/* Authors */}
      <p /* className="text-gray-700 text-sm mt-1 leading-relaxed" */>
        {formatAuthors(pub.author)}
      </p>

      {/* Source and Year */}
      <p /* className="text-gray-500 text-sm mt-1 italic" */>
        {publicationSource && <span /* className="mr-1" */>{publicationSource},</span>}
        &nbsp;{yearText}
      </p>

      {pub.status && <span className='status'>{pub.status}</span>}
    </div>
  );
};