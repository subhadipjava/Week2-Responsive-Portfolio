# Week 2 - Responsive Portfolio Website

## Project Overview

This Week 2 project is a responsive personal portfolio website created using HTML5 and CSS3. The website was developed from scratch to understand how modern webpages adapt to different screen sizes such as desktop, tablet, and mobile devices.

The portfolio contains a navigation bar, Home section, About Me section, My Skills section, My Projects section, Contact section, and footer. The project also includes responsive images and flexible layouts to provide a consistent user experience across different devices.

The main purpose of this project was to apply responsive web design concepts practically. CSS Grid, Flexbox, media queries, flexible sizing, and responsive image techniques were used throughout the website. The layout changes according to the available screen width so that the content remains readable and properly organized.

## Website Sections

- Home
- About Me
- My Skills
- My Projects
- Contact Me
- Footer

## Responsive Techniques Used

- CSS Grid for major page layouts
- Flexbox for navigation and alignment
- Media queries for tablet and mobile devices
- Flexible font sizing using `clamp()`
- Responsive images using `max-width: 100%`
- Flexible spacing and sizing
- Hover effects for cards
- Mobile-friendly layouts

## Responsive Breakpoints

Two main breakpoints were used:

- `max-width: 800px` for tablet layouts
- `max-width: 500px` for mobile layouts

On smaller screens, the layout changes from multiple columns to fewer columns or a single-column structure where required.

## Images

The project includes images for:

- Home section
- About Me section
- Password Generator project
- Chess Game project
- Student CSE project

The images are styled using CSS so that they fit properly on different screen sizes.

## Testing

The website was tested on:

- Desktop view
- Tablet view
- Mobile view

The navigation, images, project cards, skills section, and page layout were checked to ensure that the content remained readable and properly arranged.

## Challenges and Solutions

One challenge was making the website responsive without creating horizontal scrolling on smaller screens. This was solved by using CSS Grid, flexible widths, media queries, and responsive image properties.

Another challenge was arranging the project and skill cards for different screen sizes. Media queries were used to change the number of columns depending on the available screen width.

## Design Decisions

A clean and simple portfolio layout was selected to make the website easy to navigate. A consistent design was maintained across all sections. CSS Grid was used for major content layouts, while Flexbox was used for navigation and smaller alignment tasks.

The design was created with scalability in mind so that additional skills, projects, or sections can be added later.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- Media Queries
- VS Code

## Project Structure

```text
Week2-Responsive-Portfolio/
│
├── index.html
├── style.css
├── README.md
│
└── images/
    ├── home-image.jpg
    ├── about-image.jpg
    ├── project1-image.jpg
    ├── project2-image.jpg
    └── project3-image.jpg