# Last Breath Gym Website

A fast, mobile-friendly website for **Last Breath**, a gym in Gomti Nagar, Lucknow.
Plain HTML, CSS and JavaScript. No build step, no frameworks, no installs.

## Pages
- **Home**: headline, member and trainer stats, the feel of the gym, coaches, how to join, member quotes
- **Gallery**: photo grid of the gym
- **Contact**: phone and WhatsApp numbers, opening hours, Google Maps, Instagram
- **Free trial**: a form that opens WhatsApp with the visitor's details ready to send

All pages live in `index.html`. The menu switches between them using the page address (`#home`, `#gallery`, `#contact`, `#trial`).

## Folder structure
```
last-breath-website/
├── index.html                  main page (all views)
├── css/style.css               all styling and animations
├── js/script.js                page switching, form, count-up numbers, embers
├── images/                     logo, coach photos, gallery photos, Instagram photo
├── standalone-single-file.html everything inside one file (for quick sharing)
└── README.md
```

## How to open it
Double-click `index.html`. It opens in your browser. An internet connection is needed only for the web fonts.

## Common edits
Open `index.html` in any text editor (VS Code, Notepad) and search for the text.

| What | Search for |
|---|---|
| Phone numbers | `6390831017`, `8090204783` |
| Opening hours | `Opening hours` and `5–10 AM` |
| Instagram | `ie.varun` |
| Google Maps link | `maps.app.goo.gl` |
| Trainer names | `Trainer name` |
| Member quotes | `Add a real member quote` |

- **Photos:** replace the files in `images/` and keep the same file names.
- **Colors:** the color variables are at the top of `css/style.css` (`--red`, `--gold`, `--bg`).
- **Free trial WhatsApp number:** in `js/script.js`, change the value of `WA` (country code first, no plus sign or spaces, for example `916390831017`).

## How the free trial form works
The form does not store anything. When someone submits it, WhatsApp opens with their name, phone, goal and preferred time already typed out, addressed to the number in `js/script.js`. If you later want entries saved to a list, connect the form to a service such as Google Forms or Formspree.

## Publish it free
**Netlify Drop (easiest):** go to app.netlify.com/drop and drag the whole `last-breath-website` folder onto the page. You get a free link in about a minute.

**GitHub Pages:** create a repository, upload these files, then open Settings, Pages, and choose the main branch.

**Cloudflare Pages:** create a project and upload the folder.

A custom domain such as `lastbreath.in` can be connected to any of these for a small yearly fee.

## Before you go live
- Replace the placeholder text for trainer names, certifications and member quotes.
- Use photos taken inside your own gym. Visitors trust real photos.
- Only publish member photos and quotes with their permission.
- Add your gym to Google Business Profile so people find you on Maps.
