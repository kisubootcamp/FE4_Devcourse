// CURD
// C Create - Post
// R Read - Get
// U Update - PUT/PATCH

import { useEffect, useState, useTransition } from 'react';

// D Delete - DELETE
export default function FetchBasicv3() {
  // 데이터를 가져오겠다. (읽어오겠다)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [ispending, startTransiton] = useTransition();

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'unknown Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => {
    //     console.log(response);
    //     if (!response.ok) throw new Error('Network response was not ok');
    //     return response.json();
    //   })
    //   .then((result) => {
    //     setPosts(result);
    //   })
    //   .catch((error: Error) => {
    //     console.log(error.message);
    //     setError(error.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    startTransiton(async () => {
      await fetchPosts();
    });
  }, []);

  if (ispending) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
