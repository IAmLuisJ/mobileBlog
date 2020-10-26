import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [
        ...state,
        {
          id: Math.random() * 99999,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    }
    case "DELETE": {
      return state.filter((state) => state.id != action.payload);
    }
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "CREATE", payload: { title: title, content: content } });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
