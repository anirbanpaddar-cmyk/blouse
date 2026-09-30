import React from 'react';
import { SIZE_CHART } from '../data/products';
import { X, Ruler, Sparkles, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#CF9E38]/30 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#420A17] p-5 sm:p-6 text-[#FDFBF7] flex items-center justify-between border-b border-[#CF9E38]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#5C0F21] flex items-center justify-center text-[#E2B657]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">Sindaram Blouse Size Chart</h3>
              <p className="text-xs text-[#EFE7D8]/80 font-bengali">সঠিক সাইজ পরিমাপ ও নির্দেশিকা (ইঞ্চি)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#EFE7D8] hover:text-white hover:bg-[#5C0F21] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Bengali Tailoring Benefit Card */}
          <div className="p-4 bg-[#F8F3EA] rounded-2xl border border-[#CF9E38]/40">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#8C1935] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#420A17] mb-1">
                  The Sindaram Comfort Fit Assurance
                </h4>
                <p className="text-xs text-[#420A17]/85 leading-relaxed">
                  All our ready-made and designer blouses are tailored with <strong>pre-moulded soft bra pads</strong> and an extra <strong>2 to 2.5 inches of internal margin</strong> on both side seams. If your bust fluctuates or you need a looser fit, any local tailor or yourself can open a single seam effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Size Chart Table */}
          <div>
            <h4 className="text-xs font-bold text-[#8C1935] uppercase tracking-wider mb-3">
              Body Measurements (Inches)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-[#EFE7D8]">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#420A17] text-[#EFE7D8] text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3 font-semibold">Size</th>
                    <th className="py-2.5 px-3 font-semibold">Bust</th>
                    <th className="py-2.5 px-3 font-semibold">Underbust</th>
                    <th className="py-2.5 px-3 font-semibold">Waist</th>
                    <th className="py-2.5 px-3 font-semibold">Shoulder</th>
                    <th className="py-2.5 px-3 font-semibold">Armhole</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7D8] bg-[#FDFBF7]">
                  {SIZE_CHART.map((row, index) => (
                    <tr 
                      key={row.size}
                      className={index % 2 === 0 ? 'bg-[#FDFBF7]' : 'bg-[#F8F3EA]/50'}
                    >
                      <td className="py-2.5 px-3 font-bold text-[#420A17] font-mono">{row.size}</td>
                      <td className="py-2.5 px-3 font-mono font-medium text-[#8C1935]">{row.bust}</td>
                      <td className="py-2.5 px-3 font-mono">{row.underbust}</td>
                      <td className="py-2.5 px-3 font-mono">{row.waist}</td>
                      <td className="py-2.5 px-3 font-mono">{row.shoulder}</td>
                      <td className="py-2.5 px-3 font-mono">{row.armhole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure Instructions */}
          <div className="bg-[#F8F3EA]/60 p-4 rounded-2xl border border-[#EFE7D8] text-xs space-y-2">
            <h4 className="font-bold text-[#420A17] mb-2">How to Measure for Your Blouse:</h4>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Bust:</strong> Measure around the fullest part of your bust while wearing a well-fitting regular bra. Keep the measuring tape comfortable, not too tight.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Underbust:</strong> Measure directly below the bust line where your blouse bottom band will rest.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Waist:</strong> Measure at your natural waistline, usually 1 inch above the navel.</span>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#420A17] text-[#FDFBF7] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#5C0F21] transition-colors"
          >
            I Understand, Return to Blouse
          </button>
        </div>

      </div>
    </div>
  );
};
