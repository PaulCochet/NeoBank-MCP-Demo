import { stitch } from '@google/stitch-sdk';
import fs from 'fs';
import fetch from 'node-fetch';

async function run() {
  try {
    const project = await stitch.project('15692567640520004949');
    const screen = await project.screen('55258fbe261f4b22945ee1109f17a9c1');
    let html = await screen.getHtml();
    
    if (html.startsWith('http')) {
      console.log('Fetching HTML from URL:', html);
      const res = await fetch(html);
      html = await res.text();
    }
    
    fs.writeFileSync('velocitybank_final.html', html);
    console.log('HTML saved to velocitybank_final.html');
  } catch (err) {
    console.error(err);
  }
}

run();
