export interface Category {
    name: string;
    query: string;
}

export const categories: Category[] = [
    { name: 'All', query: 'all' },
    { name: 'Pets & Animals', query: 'pets and animals' },
    { name: 'Sports', query: 'sports' },
    { name: 'Travel & Events', query: 'travel and events' },
    { name: 'Gaming', query: 'gaming' },
    { name: 'Comedy', query: 'comedy' },
    { name: 'Entertainment', query: 'entertainment' },
    { name: 'Learning & Education', query: 'learning and education' },
    { name: 'Lifestyle', query: 'lifestyle' },
    { name: 'Vlogs', query: 'vlogs' },
    { name: 'People & Blogs', query: 'people and blogs' },
    { name: 'Science & Technology', query: 'science and technology' },
]
