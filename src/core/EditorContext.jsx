import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

// --- 1. THE IMPORTS ---
import { TextBlock, ImageBlock, ButtonBlock, BoxBlock } from './blocks/Universal';
import { NavbarBlock } from './blocks/Navbar';
import { HeroBlock } from './blocks/Hero';
import { TwoColumnBlock } from './blocks/TwoColumn';
import { ProductCardBlock } from './blocks/ProductCard';
import { VideoPlayerBlock } from './blocks/VideoPlayer';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import gjsForms from 'grapesjs-plugin-forms';
import gjsFlexbox from 'grapesjs-blocks-flexbox';

const EditorContext = createContext(null);
export const useEditor = () => useContext(EditorContext);

export const EditorProvider = ({ children }) => {
  const [editor, setEditor] = useState(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    const initTimer = setTimeout(() => {
      const el = document.getElementById('blocks');
      if (!el) return;

      isLoaded.current = true;

     const editorInstance = grapesjs.init({
        container: '#gjs',
        // ... (keep height, width, etc.)

        // ADD THIS SECTION:
        plugins: [gjsBlocksBasic, gjsForms, gjsFlexbox],
        pluginsOpts: {
          [gjsBlocksBasic]: { flexGrid: true },
          [gjsForms]: {},
          [gjsFlexbox]: {}
        },

        // Keep your existing blockManager below...
       blockManager: {
  appendTo: '#blocks',
  expand: false,
  blocks: [
    // UNIVERSAL SECTION
    { ...TextBlock, category: 'Universal' },
    { ...ImageBlock, category: 'Universal' },
    { ...ButtonBlock, category: 'Universal' },
    { ...BoxBlock, category: 'Universal' },

    // COMMERCIAL SECTION
    { ...NavbarBlock, category: 'Commercial' },
    { ...ProductCardBlock, category: 'Commercial' },

    // STREAMER SECTION
    { ...HeroBlock, category: 'Streamer' },
    { ...VideoPlayerBlock, category: 'Streamer' },
    
    // OTHER SECTIONS
    { ...TwoColumnBlock, category: 'Layout' }
  ],
},

      // 3. STYLE MANAGER & OTHERS
      styleManager: {
        appendTo: '#styles',
        sectors: [
          { name: 'Dimension', open: false, buildProps: ['width', 'height', 'padding', 'margin'] },
          { name: 'Typography', open: false, buildProps: ['font-size', 'color', 'text-align'] },
          { name: 'Decorations', open: false, buildProps: ['background-color', 'border', 'border-radius'] }
        ],
      },
      traitManager: { appendTo: '#traits' },
      selectorManager: { appendTo: '#styles' },
      layerManager: { appendTo: '#layers' },
    });

      setEditor(editorInstance);
    }, 200);

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <EditorContext.Provider value={editor}>
      {children}
    </EditorContext.Provider>
  );
};