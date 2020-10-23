import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [...state, { title: `Blog Post #${blogPosts.length + 1}` }];
    }
    default:
      return state;
  }
};

const addBlogPosts = (dispatch) => {
  return () => {
    dispatch({ type: "CREATE" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts },
  []
);
