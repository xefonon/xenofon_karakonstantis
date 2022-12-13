import config from '../../../config.json';
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '@fortawesome/free-solid-svg-icons'

let text = "SUMMARY";


const summary = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   summary: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@          
         @|                      @@         
  
`;
  } else {
    return `

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                                            -----------
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  ${text.bold()}
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓        > P E R S O N A L        ▐▓        CONTACT
▐▓              I N F O            ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓                                 ▐▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          <i class="ai ai-google-scholar-square ai"></i> <u><a href="https://scholar.google.com/citations?hl=en&user=nxon5qUAAAAJ${config.social.scholar}" target="_blank">scholar.google.com/xk</a></u>    
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            <i class="fa-solid fa-music"></i> MUSIC
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               <i class="fa-volume-up"></i> <u><a href="https://open.spotify.com/artist/6plhkDfyB7T7XCVUTLw6x3" target="_blank">Circassian</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  <i class="fa-volume-up"></i> <u><a href="https://open.spotify.com/artist/4SGgbh9hi64bXTKqZNHn0a" target="_blank">Melt Mountain</a></u>

`;
  }
};
export default summary;

