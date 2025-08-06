# Guide for OUTREACH website

## Before Starting

If you wish to preview the website when editing, you should install [Node.js](https://nodejs.org/) and run the following commands in the terminal:

```bash
npm install
```

Then, each time you want to preview the website, run:

```bash
npm run dev
```

Remarks: the terminal should be in the root directory of the project, where the `package.json` file is located.

## Updating Yearly Information

First, you need to change the year in the `app/data.js` file. This will affect the navigation bar show on the top, it will automatically display years from 2024 until `year`.

The pages is stored directly in the `app`, where you will find every year's information page. For example, 2024 information page is the folder `app/2024`. To add a new course page, you can just copy the folder of the previous year and rename it to the new year (e.g., `2026` for the 2026 information page), then update the `page.js` file inside.

Since there are no internationalization (i18n) for the courses page, the content is explicitly written in the `page.js` file and you can directly edit the file to update the page.

Inside the `page.js` file, you should see a really long array that contains all the event:

```javascript
const events = [
  {
    title: "{Event Title}",
    subtitle: "{Event Subtitle}",
    introduction: "{Event Introduction}",
    date: "{Event Date}",
    time: "{Event Time}",
    speaker: "{Event Speaker}",
    abstract: "{Event Abstract}",
    target: "{Event Target Audience}",
    medium: "{Event Medium}",
    images: ["{Image directory 1}", "{Image directory 2}"],
    extraTitle: ["{Extra Title_1}", "{Extra Title_2}"],
    extraContentTitle: ["{Extra Content Title_1}", "{Extra Content Title_2}"],
    extraContent: [["{Extra Content_11}", "{Extra Content_12}"], ["{Extra Content_21}", "{Extra Content_22}"]],
    externaLink: ["{sentence_before_link}", "{External_Link}", "{sentence_after_link}"],
    remarks: "{Event Remarks}",
  },
    // more events...
];
```

Points to note:

1. Almost all fields are optional, except `title`, you can just not include the field if you do not need it.
2. `introduction`, `abstract`, `extraContent`, and `remarks` accept break lines, so you can use `\n` to create a new line.
3. `images` is an array of image directories, which should be placed in the `public` folder. For example, if you have an image `public/images/event1.png`, you should put `"/images/event1.png"` in the `images` array.
4. `extraTitle`, `extraContentTitle`, and `extraContent` are used to create extra content sections, where

    - `extraTitle` is an array of titles for each boxes,
    - `extraContentTitle` is an array of titles for each content inside the boxes, and
    - `extraContent` is a 2D array of content for each content inside the boxes, hence, order matters.

5. `externalLink` is an array of string for displaying external links. It is assumed that that to display as following format:

    ```javascript
    {sentence_before_link} here {sentence_after_link}
    ```

    For example, if you want to display "For more information, please visit [here](https://example.com).", you can set `externalLink` to:

    ```javascript
    externalLink: ["For more information, please visit", "https://example.com", "."]
    ```