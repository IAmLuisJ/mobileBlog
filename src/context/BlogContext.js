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
    case "EDIT": {
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });
    }
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "CREATE", payload: { title: title, content: content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "EDIT",
      payload: { id: id, title: title, content: content },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
