import hljs from 'highlight.js';
import renderMathInElement from 'katex/dist/contrib/auto-render.mjs';
import { initializeCodeFolding } from './codeFolding';
import imageModal from './imageModal';

hljs.initHighlightingOnLoad();
initializeCodeFolding();
Array.from(document.querySelectorAll('.math')).forEach((elem) => renderMathInElement(elem));
imageModal();