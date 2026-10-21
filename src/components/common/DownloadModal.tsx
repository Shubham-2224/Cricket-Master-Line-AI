import { useEffect } from 'react';
import { X, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const { downloads } = siteConfig;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#1B1230] border border-white/10 p-6 md:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#841770]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#3C1392]/30 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#BDB4C9] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
          aria-label="Close download dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="h-12 w-12 rounded-2xl overflow-hidden bg-white border border-white/20 shadow-lg shrink-0">
            <img
              src="/assets/app_icon.png"
              alt="Cricket Master Line AI Official App Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 id="download-modal-title" className="text-xl font-bold font-heading text-white">
              Get Cricket Master Line AI
            </h3>
            <p className="text-xs text-[#BDB4C9]">
              Mobile application for cricket intelligence &amp; analysis
            </p>
          </div>
        </div>

        {/* Status / Instructions Card */}
        <div className="my-5 rounded-xl bg-[#10091F]/80 p-4 border border-white/5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E879F9] shrink-0 mt-0.5" />
            <div className="text-xs text-[#BDB4C9] leading-relaxed">
              <span className="font-semibold text-white block mb-0.5">
                Official Store Availability
              </span>
              {downloads.statusNote}
            </div>
          </div>
        </div>

        {/* Download Buttons / Status */}
        <div className="space-y-3 my-6">
          {/* Android Button */}
          {downloads.isAndroidLive && downloads.androidPlayStoreUrl ? (
            <a
              href={downloads.androidPlayStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#3C1392] to-[#841770] text-white font-medium hover:brightness-110 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.023 2.023 0 0 1-.61-.318c-.463-.385-.75-.97-.75-1.63V3.762c0-.66.287-1.245.75-1.63.18-.15.388-.26.609-.318zm11.238 11.24l2.562 2.56-11.455 6.612 8.893-9.172zm2.562-2.108L14.847 8.384 5.954 1.772l11.455 6.613.001.001.001.001-.006.007.006.006-.006.006.006.006-.006.006.006.006zm1.096 1.096l3.528 2.036c.983.568.983 1.488 0 2.056l-3.528 2.037-2.09-2.09 2.09-2.039z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/70">Get it on</div>
                  <div className="text-sm font-semibold">Google Play Store</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.023 2.023 0 0 1-.61-.318c-.463-.385-.75-.97-.75-1.63V3.762c0-.66.287-1.245.75-1.63.18-.15.388-.26.609-.318zm11.238 11.24l2.562 2.56-11.455 6.612 8.893-9.172zm2.562-2.108L14.847 8.384 5.954 1.772l11.455 6.613.001.001.001.001-.006.007.006.006-.006.006.006.006-.006.006.006.006zm1.096 1.096l3.528 2.036c.983.568.983 1.488 0 2.056l-3.528 2.037-2.09-2.09 2.09-2.039z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Android (Google Play)</div>
                  <div className="text-xs text-[#BDB4C9]">Coming soon / In store review</div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                Pending Store URL
              </span>
            </div>
          )}

          {/* iOS Button */}
          {downloads.isIosLive && downloads.iosAppStoreUrl ? (
            <a
              href={downloads.iosAppStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#3C1392] to-[#841770] text-white font-medium hover:brightness-110 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.56-.69.95-1.64.84-2.6-.82.03-1.83.56-2.41 1.24-.52.6-.97 1.57-.85 2.5.93.07 1.87-.47 2.42-1.14z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/70">Download on the</div>
                  <div className="text-sm font-semibold">Apple App Store</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <div className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.56-.69.95-1.64.84-2.6-.82.03-1.83.56-2.41 1.24-.52.6-.97 1.57-.85 2.5.93.07 1.87-.47 2.42-1.14z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">iOS (App Store)</div>
                  <div className="text-xs text-[#BDB4C9]">Coming soon / In store review</div>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                Pending Store URL
              </span>
            </div>
          )}
        </div>

        {/* Developer / Webmaster Configuration Note */}
        <div className="rounded-lg bg-white/5 p-3 text-[11px] text-[#8E83A2] border border-dashed border-white/10 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-[#C4B5FD] shrink-0 mt-0.5" />
          <span>
            <strong className="text-white">Admin Note:</strong> Official store URLs are configured in{' '}
            <code className="text-[#E879F9]">src/config/siteConfig.ts</code>. Set{' '}
            <code className="text-[#C4B5FD]">isAndroidLive: true</code> or{' '}
            <code className="text-[#C4B5FD]">isIosLive: true</code> along with target URLs to enable immediate direct download links.
          </span>
        </div>

        {/* Dismiss Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg bg-white/10 hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
