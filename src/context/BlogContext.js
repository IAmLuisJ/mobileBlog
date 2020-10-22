import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [...state, { title: `Blog Post #${blogPosts.length + 1}` }];
    }
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPosts = () => {
    dispatch({ type: "CREATE" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
