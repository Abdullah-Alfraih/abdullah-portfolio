# Abdullah AlFraih — Data Analyst Portfolio

A bilingual, responsive portfolio prepared for GitHub Pages. This flat-file edition is designed for easy browser upload and works without any build tools.

## Preview

Open `index.html` in a browser. Keep all six files together in the repository root.

## Edit all content from one file

Open `data.js`. This is the only file you normally need to edit.

### Add a project

Inside `projects`, copy an existing `{ ... }` item, paste it after the previous item, and change:

- `status`: Arabic and English status.
- `title`: Arabic and English project title.
- `description`: Arabic and English description.
- `tools`: tools used, such as `SQL`, `Power BI`, or `Excel`.
- `link`: GitHub or dashboard URL. Leave `""` to hide the button.

Remember the comma between project items.

### Add a course or certificate

Inside `certificates`, copy an existing item and update its bilingual title, issuer, year and link. Leave the link empty if there is no public credential.

### Add contact details

At the top of `data.js`, update `email`, `phone`, `linkedin`, and `github`. Empty details are hidden automatically.

### Replace the resume

1. Put your PDF beside `index.html`, for example `Abdullah-AlFraih-CV.pdf`.
2. Change `resume: "resume.html"` in `data.js` to `resume: "Abdullah-AlFraih-CV.pdf"`.

## Publish on GitHub Pages

1. Upload everything inside this folder to the root of your `abdullah-portfolio` repository. Do not upload the outer folder itself.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main**, folder **/(root)**, then **Save**.
5. Your expected address is `https://abdullah-alfraih.github.io/abdullah-portfolio/`.

All paths are relative, so the site works both locally and under the GitHub Pages project path.
