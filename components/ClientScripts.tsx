"use client"
import { useEffect } from 'react';
import GoogleTagManager from './GoogleTagManager';

export default function ClientScripts({ gtmId }: { gtmId: string }) {
  useEffect(() => {
    console.log('Client-side scripts initialized');
  }, []);
  
  return <GoogleTagManager gtmId={gtmId} />;
}