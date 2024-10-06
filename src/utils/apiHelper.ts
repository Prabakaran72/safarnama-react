const API_URL = import.meta.env.VITE_API_URL;
import { useAuth } from "../components/Auth/AuthProvider";

interface ApiHelper {
  get: (endpoint: string) => Promise<any>;
  post: (endpoint: string, data: any) => Promise<any>;
  put: (endpoint: string, data: any) => Promise<any>;
  delete: (endpoint: string) => Promise<any>;
  postFormData: (endpoint: string, data: any) => Promise<any>;
  putFormData: (endpoint: string, data: any) => Promise<any>;
}

const apiHelper = (state: any, dispatch: any): ApiHelper => {
  return {
    // async get(endpoint: string, toast: {success?: string, error?:string, info?: string, warn?:string}): Promise<any> {
    async get(endpoint: string): Promise<any> {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // responseHandler(response, dispatch);
        return await response.json();
      } catch (error) {
        console.error('GET request failed:', error);
        throw error;
      }
    },

    async post(endpoint: string, data: any): Promise<any> {

      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        responseHandler(response, dispatch, endpoint);
        return await response.json();
      } catch (error) {
        console.error('POST request failed:', error);
        throw error;
      }
    },

    async put(endpoint: string, data: any): Promise<any> {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
      }
    },

    async delete(endpoint: string): Promise<any> {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
      }
    },

    async postFormData(endpoint: string, data: any): Promise<any> {

      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            'Accept': 'application/json, text/plain, */*',
          },
          credentials: 'include',
          body: data
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        responseHandler(response, dispatch, endpoint);
        return await response.json();
      } catch (error) {
        console.error('POST request failed:', error);
        throw error;
      }
    },

    async putFormData(endpoint: string, data: any): Promise<any> {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          // body: JSON.stringify(data),
          body: data
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
      }
    },
  }
};

export default apiHelper;

const EndPoint : {[key: string] : string} ={
  route: 'Route created. Click on the map to edit it.',
  place: 'Place created ',
  experience: 'Experience',
}

export const responseHandler = (response: any, dispatch: any, endpoint:string) => {
  let message = '';
  let type = '';
  if (response.status >= 200 && response.status < 300) {
    message = `${EndPoint[endpoint]} successfully completed.`;
    type = 'success';
  } else if (response.status >= 400 && response.status < 500) {
    message = `An error occurred. Please try again.`;
    type = 'error';
  } else if (response.status >= 300 && response.status < 400) {
    message = `Information received. Please check your details.`;
    type = 'info';
  } else {
    message = `An unexpected error occurred.`;
    type = 'error';
  }
  dispatch({ type: 'App/toast', payload: { message: message, type: type, position: 'bottom-center' } })
}