// src/App.tsx
import React, { useState } from 'react';
import { fetchBookDetails, BookDetails } from './services/api';
import HistoryCard from './components/HistoryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress"

const App: React.FC = () => {
  const [bookId, setBookId] = useState<string>('');
  const [currentBook, setCurrentBook] = useState<BookDetails | null>(null);
  const [bookHistory, setBookHistory] = useState<BookDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!bookId) return;
    setLoading(true)
    const bookDetails = await fetchBookDetails(bookId);
    setLoading(false)
    if (bookDetails) {
      setCurrentBook(bookDetails);
      setBookHistory((prevHistory) => [bookDetails, ...prevHistory]);
    }
    setBookId('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gutenberg Book Search</h1>
      {loading ? <><p>Loading</p> <Progress value={33} /></> : <></>}

      {/* Search Input */}
      <div className="flex gap-2 justify-center mb-8">
        <Input
          type="text"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          className="w-64"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Current Book Details */}
      {currentBook && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Search Result</h2>
          <HistoryCard {...currentBook} />
        </div>
      )}

      {/* Book History */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Search History</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {bookHistory.map((book) => (
            <HistoryCard key={book.bookId} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;