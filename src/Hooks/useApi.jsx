import { useState } from "react";
import api from "../Api";

function useApi(initialData = []) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get(url);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const post = async (url, requestData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.post(url, requestData);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const patch = async (url, requestData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.patch(url, requestData);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const Delete = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.delete(url);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, get, post, patch, Delete };
}

export default useApi;
