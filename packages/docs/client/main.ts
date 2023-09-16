// import { registerSyntaxHighlighter } from './registerSyntaxHighlighter.js';

// const hljs = registerSyntaxHighlighter();

// hljs.highlightAll();

document
  .querySelectorAll<HTMLButtonElement>('button[data-copydata]')
  .forEach((copyButton) => {
    copyButton.addEventListener('click', () => {
      const copyText = copyButton.dataset.copydata;
      if (copyText) {
        navigator.clipboard.writeText(copyText).then(() => {
          copyButton.classList.add('copied');
          setTimeout(() => {
            copyButton.classList.remove('copied');
          }, 2000);
        });
      }
    });
  });
