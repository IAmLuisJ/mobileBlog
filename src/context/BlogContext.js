import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

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
    case "GETPOSTS": {
      return action.payload;
    }
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "GETPOSTS", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", {
      title: title,
      content: content,
    });
    // dispatch({ type: "CREATE", payload: { title: title, content: content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`.blogposts/${id}`);
    dispatch({ type: "DELETE", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {
      title: title,
      content: content,
    });

    dispatch({
      type: "EDIT",
      payload: { id: id, title: title, content: content },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
