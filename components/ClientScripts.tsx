"use client"
import { useEffect } from 'react';
import GoogleTagManager from './GoogleTagManager';
import MetaPixelScript from './MetaPixelScript';

interface ClientScriptsProps {
  gtmId: string;
  metaPixelId?: string; // Optional - provide your Meta Pixel ID
}

export default function ClientScripts({ 
  gtmId, 
  metaPixelId 
}: ClientScriptsProps) {
  useEffect(() => {
    console.log('Client-side scripts initialized');
  }, []);
  
  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
      {metaPixelId && <MetaPixelScript pixelId={metaPixelId} />}
    </>
  );
}