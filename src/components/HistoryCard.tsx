import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface HistoryCardProps {
    bookId: string;
    title: string;
    summary: string;
    bookText: string;
    keyCharacters: string;
    language: string;
    sentiment: string;
    author: string
}

const HistoryCard: React.FC<HistoryCardProps> = ({ bookId, title, summary, sentiment,  keyCharacters, language, author}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
            <p>Book ID: {bookId}</p>
            <p>Author: {author} </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600"><b>Title</b>: {title}</p>
        <p className="text-sm text-gray-600"><b>Sentiment</b>: {sentiment}</p>
        <p className="text-sm text-gray-600"><b>Key Characters</b>: {keyCharacters}</p>
        <p className="text-sm text-gray-600"><b>Language</b>: {language}</p>
        <p className="text-sm text-gray-600"><b>Summary</b>: {summary}</p>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;