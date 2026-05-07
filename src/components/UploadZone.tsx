import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Camera, Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface UploadZoneProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
  accentColor: string;
}

export default function UploadZone({ image, onImageChange, accentColor }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    useFsAccessApi: false
  } as any);

  return (
    <div className="relative group">
      <AnimatePresence mode="wait">
        {!image ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            {...getRootProps()}
            className={cn(
              "relative h-48 sm:h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all overflow-hidden",
              isDragActive ? "border-white bg-white/10" : "border-white/20 hover:border-white/40 bg-white/5"
            )}
          >
            <input {...getInputProps()} />
            
            {/* Background Grain/Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${accentColor}22`, border: `1px solid ${accentColor}` }}
            >
              <Upload className="w-8 h-8" style={{ color: accentColor }} />
            </div>
            
            <div className="text-center px-6">
              <p className="text-lg font-bold text-white mb-1">Prenez votre plat en photo</p>
              <p className="text-sm text-white/40">ou glissez un fichier ici</p>
            </div>
            
            <div className="flex gap-4 mt-2">
               <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest font-bold text-white/60 border border-white/5">
                 <Camera className="w-3 h-3" /> Caméra
               </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/20"
          >
            <img src={image} alt="Dish" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onImageChange(null);
              }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="absolute bottom-4 left-4 flex flex-col gap-1">
              <p className="text-xs uppercase tracking-tighter font-black text-white/50">PLAT SOURCE DÉTECTÉ</p>
              <p className="text-sm font-bold text-white">Analyse de la texture en cours...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
