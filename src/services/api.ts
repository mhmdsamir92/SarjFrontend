
import axios from 'axios';

interface BookDetails {
  bookId: string;
  title: string;
  summary: string;
  bookText: string;
  keyCharacters: string;
  language: string;
  sentiment: string;
  author: string
}

const fetchBookDetails = async (bookId: string): Promise<BookDetails | null> => {
  try {

    const book: BookDetails = await axios.post(
        `https://sarjbackend.onrender.com/analyze`,
        {
            book_id: bookId
        }
    ).then(response => {
        const result = response.data
        return {
            author: result['author'],
            bookId: result['book_id'],
            bookText: result['book_text'],
            keyCharacters: result['key_characters'],
            language: result['language'],
            sentiment: result['sentiment'],
            summary: result['summary'],
            title: result['title']
        }
    });

    return book;
    // // Fetch metadata
    // const metadataUrl = `https://www.gutenberg.org/ebooks/${bookId}`;
    // const metadataResponse = await axios.get(metadataUrl);
    // const metadata = metadataResponse.data;

    // // Extract title from metadata (this is a simplified example)
    // const titleMatch = metadata.match(/<title>(.*?)<\/title>/);
    // const title = titleMatch ? titleMatch[1] : 'Unknown Title';

    // // Fetch content (first 500 characters as summary)
    // const contentUrl = `https://www.gutenberg.org/files/${bookId}/${bookId}-0.txt`;
    // const contentResponse = await axios.get(contentUrl);
    // const summary = contentResponse.data.substring(0, 500) + '...';

    // return {
    //   bookId,
    //   title,
    //   summary,
    // };
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};

export {
    fetchBookDetails
};
export type { BookDetails };
