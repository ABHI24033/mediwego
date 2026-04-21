const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
const ACCESS_TOKEN_KEY = 'mediwego_access_token';

let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

function setStoredAccessToken(token) {
  accessToken = token;
  if (token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export function clearStoredAccessToken() {
  setStoredAccessToken('');
}

async function parseResponse(response) {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

async function refreshAccessTokenRequest() {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });

  const payload = await parseResponse(response);
  if (!response.ok) {
    clearStoredAccessToken();
    throw new Error(payload.message || 'Session expired');
  }

  setStoredAccessToken(payload.data.accessToken);
  return payload.data;
}

async function apiRequest(path, options = {}, { retryOnAuthError = true } = {}) {
  const headers = {
    ...((options.body && !(options.body instanceof FormData)) ? { 'Content-Type': 'application/json' } : {}),
    ...(options.headers || {}),
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  const payload = await parseResponse(response);

  if (response.status === 401 && retryOnAuthError && !path.startsWith('/auth/')) {
    await refreshAccessTokenRequest();
    return apiRequest(path, options, { retryOnAuthError: false });
  }

  if (!response.ok) {
    throw new Error(payload.message || 'Request failed');
  }

  return payload;
}

export async function loginAdmin(credentials) {
  const payload = await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, { retryOnAuthError: false });

  setStoredAccessToken(payload.data.accessToken);
  return payload.data;
}

export async function refreshSession() {
  const data = await refreshAccessTokenRequest();
  return data;
}

export async function logoutAdmin() {
  try {
    await apiRequest('/auth/logout', {
      method: 'POST',
    }, { retryOnAuthError: false });
  } finally {
    clearStoredAccessToken();
  }
}

export function getCurrentAdmin() {
  return apiRequest('/auth/me');
}

export function createPopupBanner(data) {
  return apiRequest('/popup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function getPopupBanners() {
  return apiRequest('/popup');
}

export function getActivePopupBanner() {
  return apiRequest('/popup/active');
}

export function updatePopupBanner(id, data) {
  return apiRequest(`/popup/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function uploadPopupImage(file) {
  const formData = new FormData();
  formData.append('image', file);
  return apiRequest('/popup/upload', {
    method: 'POST',
    body: formData,
  });
}

export function deletePopupBanner(id) {
  return apiRequest(`/popup/${id}`, {
    method: 'DELETE',
  });
}

export function activatePopupBanner(id) {
  return apiRequest(`/popup/activate/${id}`, {
    method: 'PATCH',
  });
}

export function createDemoLead(data) {
  return apiRequest('/demo', {
    method: 'POST',
    body: JSON.stringify(data),
  }, { retryOnAuthError: false });
}

export function getDemoLeads(params = {}) {
  const queryParams = new URLSearchParams(params).toString();
  const suffix = queryParams ? `?${queryParams}` : '';
  return apiRequest(`/demo${suffix}`);
}

export function updateDemoLead(id, data) {
  return apiRequest(`/demo/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function deleteDemoLead(id) {
  return apiRequest(`/demo/${id}`, {
    method: 'DELETE',
  });
}

export function getStats() {
  return apiRequest('/demo/stats');
}
