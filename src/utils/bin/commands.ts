// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Senior DSP & ML Engineer at Oticon (Demant).
PhD in Data-Driven Acoustic Holography from DTU.
Type 'summary' for a quick overview.
'summary' - short summary.
'publications' - my publications.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
export const scholar = async (args: string[]): Promise<string> => {
  window.open(`https://scholar.google.com/citations?hl=en&user=nxon5qUAAAAJ`);

  return 'Opening google scholar...';
};

// Publications
export const publications = async (args: string[]): Promise<string> => {
  return [
    "1. Karakonstantis X., & Fernandez-Grande E. (2021, August). Sound field reconstruction in rooms with deep generative models. In INTER-NOISE and NOISE-CON Congress and Conference Proceedings (Vol. 263, No. 5, pp. 1527–1538).",
    "2. Fernandez-Grande E., Caviedes-Nozal C., Hahmann M., Karakonstantis X., & Verburg S. (2021). Reconstruction of room impulse responses over extended domains for navigable sound field reproduction. In International Conference on Immersive and 3D Audio.",
    "3. Fernandez-Grande E., Karakonstantis X., Caviedes-Nozal D. & Gerstoft P. (2023, February). Generative models for sound field reconstruction. The Journal of the Acoustical Society of America.",
    "4. Karakonstantis X. & Fernandez-Grande E. (2022, August). Localising acoustic sources with a spherical graph neural network. 24th International Congress on Acoustics.",
    "5. Karakonstantis X., Fernandez-Grande E. (2023, August). Generative adversarial networks with physical sound field priors. The Journal of the Acoustical Society of America.",
    "6. Karakonstantis X., Fernandez-Grande E. (2023, September). Room impulse response reconstruction using physics-constrained neural networks. Forum Acusticum 2023.",
    "7. Karakonstantis X., Caviedes-Nozal D., Richard A. & Fernandez-Grande E. (2024, January). Room impulse response reconstruction with physics-informed deep learning. The Journal of the Acoustical Society of America.",
    "8. Olivieri M., Karakonstantis X., Pezzoli M., Antonacci F., Sarti A., Fernandez-Grande E. (2024) Physics-Informed Neural Network for the Volumetric Sound field Reconstruction of Speech Signals. EURASIP Journal on Audio, Speech, and Music Processing.",
    "9. Figueroa-Duran A., Karakonstantis X., Fernandez-Grande E. (2024, June). Bayesian Framework for Room Impulse Response Reconstruction using Explicit Frequency Regularisation. AES Europe 2024.",
    "10. Karakonstantis X., Fernandez-Grande E., Gerstoft P. (pre-print). Efficient Sound Field Reconstruction with Conditional Invertible Neural Networks."
  ].join("\n");
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Nope. Use a real terminal for that.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=ItZloH0XLHc', '_blank'); // ...I'm sorry
  return `Sure, sudo make me a sandwich.`;
};

// Banner
let name = config.name;
export const banner = (args?: string[]): string => {
  return `
   ^^^  ^^^  ^^^^ ^^^^  ^^^^^   ^^^^^^    ^^^^^^^^^^^^^^^^    ^^^^^^   ^^^^^  ^^^^ ^^^^  ^^^  ^^^  
  ^^^^ ^^^  ^^^^ ^^^^  ^^^^^  ^^^^^    ^^^^^^^^^^^^^^^^^^^^^^    ^^^^^  ^^^^^  ^^^^ ^^^^  ^^^ ^^^^ 
  ^^^ ^^^^ ^^^^ ^^^^  ^^^^  ^^^^^   ^^^^^^^^^^        ^^^^^^^^^^   ^^^^^  ^^^^  ^^^^ ^^^^ ^^^^ ^^^  
 ^^^  ^^^  ^^^  ^^^  ^^^^  ^^^^^  ^^^^^^^                  ^^^^^^^  ^^^^^  ^^^^  ^^^  ^^^  ^^^  ^^^ 
^^^  ^^^  ^^^  ^^^  ^^^^  ^^^^  ^^^^^^    ^^^^^^^^^^^^^^^^    ^^^^^^  ^^^^  ^^^^  ^^^  ^^^  ^^^  ^^^
^^^ ^^^  ^^^  ^^^  ^^^^  ^^^^  ^^^^^   ^^^^^^^^^^^^^^^^^^^^^^   ^^^^^  ^^^^  ^^^^  ^^^  ^^^  ^^^ ^^^
^^  ^^^ ^^^^ ^^^  ^^^^ ^^^^  ^^^^^   ^^^^^^^^^        ^^^^^^^^^   ^^^^^  ^^^^ ^^^^  ^^^ ^^^^ ^^^  ^^
^^ ^^^  ^^^ ^^^^ ^^^^ ^^^^  ^^^^^  ^^^^^^  ╦ ╦┌─┐┬  ┬  ┌─┐ ^^^^^^  ^^^^^  ^^^^ ^^^^ ^^^^ ^^^  ^^^ ^^
^  ^^^ ^^^  ^^^ ^^^^  ^^^  ^^^^  ^^^^^^    ╠═╣├┤ │  │  │ │   ^^^^^^  ^^^^  ^^^  ^^^^ ^^^  ^^^ ^^^  ^
^ ^^^  ^^^ ^^^  ^^^  ^^^  ^^^^  ^^^^^      ╩ ╩└─┘┴─┘┴─┘└─┘     ^^^^^  ^^^^  ^^^  ^^^  ^^^ ^^^  ^^^ ^
                                           ┬ ┬┌─┐┬─┐┬  ┌┬┐                        
                                           ││││ │├┬┘│   ││                  
                                           └┴┘└─┘┴└─┴─┘─┴┘                                    

My name is ${name.bold()}! 

I’m currently a Senior DSP Engineer at Oticon (Demant), where I research 
on-device deep-learning pipelines for speech enhancement. 

Previously, I completed a PhD in <a href="https://orbit.dtu.dk/en/publications/data-driven-methods-for-large-scale-sound-field-acquisition-and-a" target="_blank">Data-Driven Acoustic Holography</a> at DTU and a postdoc at ITU Copenhagen, 
focusing on neural models for reconstructing and reproducing reverberant sound fields. 

Outside work, I play guitar, compose music, and build DIY audio gadgets.

This is my personal site—type ‘summary’ for a quick overview, or ‘publications’ to see my papers.`;
};
