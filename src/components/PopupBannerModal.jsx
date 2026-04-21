import React, { useEffect, useState } from 'react';
import { getActivePopupBanner } from '../services/api';

const STORAGE_KEY = 'mediwego_popup_banner_shown';

const PopupBannerModal = () => {
  const [banner, setBanner] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const response = await getActivePopupBanner();
        const activeBanner = response.data;
        if (!activeBanner) return;

        const storageKey = `${STORAGE_KEY}_${activeBanner.id}`;
        if (localStorage.getItem(storageKey)) return;

        setBanner(activeBanner);
        setVisible(true);
      } catch (error) {
        console.error('Failed to load popup banner', error);
      }
    };

    loadBanner();
  }, []);

  const closePopup = () => {
    if (banner?.id) {
      localStorage.setItem(`${STORAGE_KEY}_${banner.id}`, 'true');
    }
    setVisible(false);
  };

  if (!visible || !banner) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.5rem] bg-gray-900 shadow-2xl shadow-black/40 transform transition-all duration-300 ease-out ring-1 ring-white/10">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
          aria-label="Close popup"
        >
          ✕
        </button>

        <div
          className="relative cursor-pointer overflow-hidden rounded-[1.5rem]"
          onClick={() => banner.redirect_url && window.open(banner.redirect_url, '_blank')}
        >
          <img
            src={banner.image_url}
            alt={banner.title || 'Popup banner'}
            className="h-[360px] w-full object-cover sm:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default PopupBannerModal;
