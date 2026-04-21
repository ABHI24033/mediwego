import React, { useEffect, useState } from 'react';
import { ImagePlus, Trash2, Edit3, CheckCircle, Loader2 } from 'lucide-react';
import {
  createPopupBanner,
  getPopupBanners,
  updatePopupBanner,
  deletePopupBanner,
  activatePopupBanner,
  uploadPopupImage,
} from '../../services/api';

const initialForm = {
  title: '',
  image_url: '',
  redirect_url: '',
  is_active: false,
};

const PopupBanners = () => {
  const [banners, setBanners] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const response = await getPopupBanners();
      setBanners(response.data || []);
    } catch (error) {
      console.error('Unable to load banners', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.image_url.trim()) {
      return;
    }

    try {
      setSaving(true);
      if (editingId) {
        await updatePopupBanner(editingId, form);
      } else {
        await createPopupBanner(form);
      }
      await fetchBanners();
      resetForm();
    } catch (error) {
      console.error('Unable to save banner', error);
    } finally {
      setSaving(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadImage = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);
      const response = await uploadPopupImage(selectedFile);
      setForm((prev) => ({
        ...prev,
        image_url: response.data.image_url,
      }));
      setSelectedFile(null);
    } catch (error) {
      console.error('Image upload failed', error);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (banner) => {
    setEditingId(banner.id);
    setForm({
      title: banner.title || '',
      image_url: banner.image_url || '',
      redirect_url: banner.redirect_url || '',
      is_active: banner.is_active === 1 || banner.is_active === true,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this banner?')) return;
    try {
      await deletePopupBanner(id);
      await fetchBanners();
    } catch (error) {
      console.error('Unable to delete banner', error);
    }
  };

  const handleActivate = async (id) => {
    try {
      await activatePopupBanner(id);
      await fetchBanners();
    } catch (error) {
      console.error('Unable to activate banner', error);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Popup Banners</h1>
        <p className="text-gray-600 mt-1">Manage image popups shown to users.</p>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ImagePlus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Create / edit banner</h2>
              <p className="text-sm text-gray-500">Provide an image URL and optional redirect link.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Image</label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
                />
                <button
                  type="button"
                  onClick={handleUploadImage}
                  disabled={!selectedFile || uploading}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                className="mt-2 block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="https://example.com/banner.jpg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-2 block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Special offer for clinics"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Redirect URL</label>
              <input
                name="redirect_url"
                value={form.redirect_url}
                onChange={handleChange}
                className="mt-2 block w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="https://example.com/offer"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={form.is_active}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Activate banner immediately
              </label>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? 'Saving...' : editingId ? 'Update Banner' : 'Add Banner'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active banner</h2>
          <div className="rounded-3xl bg-blue-50 p-4 text-sm text-blue-700">
            Only one active banner can be shown to users at a time.
          </div>

          <div className="mt-6 overflow-x-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12 text-blue-600">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Banner</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {banners.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="px-4 py-8 text-center text-gray-500">
                        No banners created yet.
                      </td>
                    </tr>
                  ) : (
                    banners.map((banner) => (
                      <tr key={banner.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="max-w-md">
                            <p className="font-medium text-gray-900">{banner.title || 'Untitled banner'}</p>
                            <p className="truncate text-gray-500">{banner.image_url}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${banner.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {banner.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            {!banner.is_active && (
                              <button
                                type="button"
                                onClick={() => handleActivate(banner.id)}
                                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-2 text-white transition hover:bg-green-700"
                              >
                                <CheckCircle className="w-4 h-4" />
                                Activate
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleEdit(banner)}
                              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-blue-700 transition hover:bg-blue-100"
                            >
                              <Edit3 className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(banner.id)}
                              className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-red-700 transition hover:bg-red-100"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopupBanners;
