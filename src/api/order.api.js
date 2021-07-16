import axios from "axios";

async function postOrder(order) {
  try {
    const postOrder = await axios.post(
      "http://localhost:4000/order/buy",
      order
    );
    console.log(postOrder);
  } catch (error) {
    throw error;
  }
}

export default postOrder;
