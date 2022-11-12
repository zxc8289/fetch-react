import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Card, ListGroup } from "react-bootstrap";

const App = () => {
  const [post, setPost] = useState([{}]);
  const [postId, setPostId] = useState(1);

  const test = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  useEffect(() => {
    test();
  }, [postId]);

  const addButton = () => {
    setPostId(postId + 1);
  };

  return (
    <div>
      {/* {post.map((data) => {
        return ( */}
      <Card style={{ width: "30rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>userId : {post.userId}</ListGroup.Item>
          <ListGroup.Item>id : {post.id}</ListGroup.Item>
          <ListGroup.Item>{post.title}</ListGroup.Item>
          <ListGroup.Item>{post.body}</ListGroup.Item>
        </ListGroup>
      </Card>
      {/* );
      })} */}
      <button onClick={addButton}>다음글</button>
      {/* <button onClick={() => setPostId((prev) => prev + 1)}>다음글</button> */}
    </div>
  );
};

export default App;
