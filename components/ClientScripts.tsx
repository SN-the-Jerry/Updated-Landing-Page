"use client"
import { useEffect } from 'react';
import GoogleTagManager from './GoogleTagManager';
import MetaPixelScript from './MetaPixelScript';
import LineTag from '@/components/LineTag';

interface ClientScriptsProps {
  gtmId: string;
  metaPixelId?: string;
  lineTagId?: string; 
}

export default function ClientScripts({ 
  gtmId, 
  metaPixelId, 
  lineTagId, 
}: ClientScriptsProps) {
  useEffect(() => {
    console.log('Client-side scripts initialized');
  }, []);
  
  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
      {metaPixelId && <MetaPixelScript pixelId={metaPixelId} />}
      {lineTagId && <LineTag lineTagId={lineTagId} />}
    </>
  );
}