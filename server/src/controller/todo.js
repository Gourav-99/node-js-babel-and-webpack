import { User } from "../database";
export const getTodos = async (req, res) => {
  try {
    const { email } = req.user;
    console.log("email", email);
    const user = await User.findOne({ email });
    return res.status(200).json({
      message: "todos fetched successfully",
      success: true,
      data: user.todoList,
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      data: null,
    });
  }
};
export const createTodo = async (req, res) => {
  try {
    const { email } = req.user;

    const { title } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { $push: { todoList: { title: title } } },
      { new: true }
    );

    return res.status(200).json({
      message: "todo pushed successfully",
      success: true,
      data: user.todoList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      data: null,
    });
  }
};

export const updateTodoItem = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const { email } = req.user;
    const { isComplete, title } = req.body;
    console.log(req.body);
    const user = await User.findOneAndUpdate(
      { email, "todoList._id": id },
      {
        $set: {
          "todoList.$.isComplete":
            isComplete !== "undefined" ? isComplete : "todoList.$.isComplete",
          "todoList.$.title":
            title !== "undefined" ? title : "todoList.$.title",
        },
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Update successfully",
      success: true,
      data: user.todoList.find((item) => item._id.toString() === id),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      data: null,
    });
  }
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const { email } = req.user;
  const user = await User.findOneAndUpdate(
    { email, "todoList._id": id },
    { $pull: { todoList: { _id: id } } },
    { new: true }
  );

  return res.status(200).json({
    message: "Item deleted successfully",
    success: true,
    data: user.todoList,
  });
};
