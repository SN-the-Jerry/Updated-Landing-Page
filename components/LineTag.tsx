'use client'
import Script from 'next/script'

interface LineTagProps {
    lineTagId: string;
}

export default function LineTag({ lineTagId }: LineTagProps) {
    return (
        <>
            <Script
                id="line-tag-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(g,d,o){
                            g._ltq = g._ltq || [];g._lt=g._lt||function(){g._ltq.push(arguments)};
                            var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
                            var s=d.createElement('script');s.async=1;
                            s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
                            var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
                        })(window, document);
                        _lt('init', {
                            customerType: 'account',
                            tagId: '${lineTagId}'
                        });
                        _lt('send', 'pv', ['${lineTagId}']);
                    `,
                }}
            />
            <noscript>
                <img 
                    height="1" 
                    width="1" 
                    style={{display: 'none'}}
                    src={`https://tr.line.me/tag.gif?c_t=lap&t_id=${lineTagId}&e=pv&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    )
}