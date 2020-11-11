import './highlight.pack';
import renderMathInElement from './katex/contrib/auto-render.mjs';
import { initializeCodeFolding } from './codeFolding';

window.hljs.initHighlightingOnLoad();
initializeCodeFolding();
Array.from(document.querySelectorAll('.math')).forEach((elem) => renderMathInElement(elem));