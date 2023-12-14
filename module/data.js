import createRow from "./createRow.js";
import { API_URL } from "./api.js";
import { openModal } from "./modalControl.js";


let productId = 2074454224;
export const getData = async () => {
  const response = await fetch(`${API_URL}api/goods/`);
  const goods = await response.json();
  return goods;
};

export const getGood = async (id) => {
  const response = await fetch(`${API_URL}api/goods/${id}`);
  const good = await response.json();
  return good;
};

export const postGood = async (data) => {
  const response = await fetch(`${API_URL}api/goods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

export const addGoodPage = (good, table) => {
  table.append(createRow(good));
};

export const editGood = async (editingId, editingGood) => {
  const response = await fetch(`${API_URL}api/goods/${editingId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editingGood),
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

export const removeGood = async (id) => {
  const response = await fetch(`${API_URL}api/goods/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

const populateModalFields = async (productId) => {
  try {
    const productData = await getGood(productId);
    const nameInput = document.getElementById("name");
    const categoryInput = document.getElementById("scale-input");
    const scaleInput = document.getElementById("scale");
    const descriptionInput = document.getElementById("discription");
    const amountInput = document.getElementById("amount");
    const priceInput = document.getElementById("price");

    nameInput.value = productData.title;
    categoryInput.value = productData.category;
    scaleInput.value=productData.units;
    descriptionInput.value=productData.description;
    amountInput.value=productData.count;
    priceInput.value=productData.price;

  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", () => {
      populateModalFields(productId);
      console.log("button clicked");
      openModal();
    });
  });
});


const getGoodById = async (id) => {
  try {
    const response = await fetch(`${API_URL}api/goods/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch good with ID ${id}`);
    }
    const good = await response.json();
    return good;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

getGoodById(productId)
  .then((good) => {
    console.log("Received good:", good);
  })
  .catch((error) => {
    console.error("Error fetching good:", error);
  });
