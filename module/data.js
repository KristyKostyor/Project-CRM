import { API_URL } from "./api.js";

export const getData = async () => {
  try {
    const response = await fetch(`${API_URL}api/goods`);
    const goods = await response.json();
    console.log("getData response:", response); // Логгирование ответа сервера
    console.log("getData goods:", goods); // Логгирование данных
    return goods;
  } catch (error) {
    console.error("getData error:", error); // Логгирование ошибки
    throw error;
  }
};

export const getGood = async (id) => {
  try {
    const response = await fetch(`${API_URL}api/goods/${id}`);
    const good = await response.json();
    console.log("getGood response:", response); // Логгирование ответа сервера
    console.log("getGood good:", good); // Логгирование данных
    return good;
  } catch (error) {
    console.error("getGood error:", error); // Логгирование ошибки
    throw error;
  }
};

export const postGood = async (data) => {
  try {
    const response = await fetch(`${API_URL}api/goods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("postGood response:", response); // Логгирование ответа сервера

    if (response.ok) {
      const responseData = await response.json();
      console.log("postGood responseData:", responseData); // Логгирование данных
      return responseData;
    } else {
      console.error("postGood error status:", response.status); // Логгирование статуса ошибки
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("postGood error:", error); // Логгирование ошибки
    throw error;
  }
};

export const addGoodPage = (good, table) => {
  table.append(createRow(good));
};

export const editGood = async (editingId, editingGood) => {
  try {
    const response = await fetch(`${API_URL}api/goods/${editingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingGood),
    });

    console.log("editGood response:", response); // Логгирование ответа сервера

    if (response.ok) {
      const responseData = await response.json();
      console.log("editGood responseData:", responseData); // Логгирование данных
      return responseData;
    } else {
      console.error("editGood error status:", response.status); // Логгирование статуса ошибки
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("editGood error:", error); // Логгирование ошибки
    throw error;
  }
};

export const removeGood = async (id) => {
  try {
    const response = await fetch(`${API_URL}api/goods/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("removeGood response:", response); // Логгирование ответа сервера

    if (response.ok) {
      const responseData = await response.json();
      console.log("removeGood responseData:", responseData); // Логгирование данных
      return responseData;
    } else {
      console.error("removeGood error status:", response.status); // Логгирование статуса ошибки
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("removeGood error:", error); // Логгирование ошибки
    throw error;
  }
};
