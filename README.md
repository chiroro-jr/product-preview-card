# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](C:\Users\nyash\Documents\Codespaces\frontend mentor\product-preview-card\design\desktop-live.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

### What I learned

- Its easier to implement columns that are equal and remain equal when using Grid rather than Flexbox. Even if your set all the columns to `flex: 1`, if you have a column whose intrinsic size is larger than the others then that column will take up more space. Grid is consistent in that manner.
- Somehow `height:100%` does not work if you have flex items in a row. I tried doing this when I shifted my card from a single column layout on mobile to two columns on desktop. I ended up using Grid instead. I'm yet to learn why.
- It's easier to move fast with a framework like Tailwind CSS since you don't have to type out all the CSS properties and values in full. You still need to know CSS though. In addition Tailwind CSS had some really nice defaults which gives you consistency out of the box.
- To make it easier to identify your different sections when using Tailwind CSS you could write class names like `class="sectionName | tailwind class"` e.g `class="card | p-4 bg-white font-bold"` instead of just `class="p-4 bg-white font-bold"`. This will make it easier for you when moving through your markup. You could also use HTML comment to label different sections.  This same technique cold also be used to separate Tailwind CSS classes from your custom class. Most of these issues are not really there if you are using a component based architecture with frameworks like [Astro](https://astro.build/) for example.

## Author

- Frontend Mentor - [@chiroro-jr](https://www.frontendmentor.io/profile/chiroro-jr)
- Twitter - [@chiroro_jr](https://www.twitter.com/chiroro_jr)
