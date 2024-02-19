import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

// get all brand
export const getAllBrand = createAsyncThunk("product/getAllBrand", async () => {
  try {
    const response = await axios.get(`${baseUrl}/brand/`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create brand
export const createBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/brand/`,
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// update brand
export const updateBrand = createAsyncThunk(
  "product/updateBrand",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/brand/${data.editId}`,
        data.form_data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// update brand status
export const updateBrandStatus = createAsyncThunk(
  "product/updateBrandStatus",
  async ({ status, id }) => {
    try {
      const response = await axios.put(
        `${baseUrl}/brand/status/${id}`,
        { status },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create brand
export const deleteBrand = createAsyncThunk(
  "product/deleteBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/brand/${id}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all Tag
export const getAllTag = createAsyncThunk("product/getAllTag", async () => {
  try {
    const response = await axios.get(`${baseUrl}/tag/`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create Tag
export const createTag = createAsyncThunk("product/createTag", async (data) => {
  try {
    const response = await axios.post(
      `${baseUrl}/tag/`,
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create Tag
export const updateTag = createAsyncThunk(
  "product/updateTag",
  async (data) => {
    try {
      const response = await axios.put(
        `${baseUrl}/tag/${data.id}`,
        { name : data.name },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// delete Tag
export const deleteTag = createAsyncThunk("product/deleteTag", async (id) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/tag/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// tag status change
export const tagStatusChange = createAsyncThunk(
  "product/tagStatusChange",
  async ({ status, id }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/tag/status/${id}`,
        { status },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all category
export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/category`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a category
export const createCategory = createAsyncThunk(
  "product/createCategory",
  async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/category`,
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a category
export const deleteCategory = createAsyncThunk(
  "product/deleteCategory",
  async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/category/${id}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// category status update
export const categoryStatusUpdate = createAsyncThunk(
  "product/categoryStatusUpdate",
  async ({ status, id }) => {
    try {
      const response = await axios.put(
        `${baseUrl}/category/status/${id}`,
        { status },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
