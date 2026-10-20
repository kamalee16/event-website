**Campus Events Website**

A multi-page, front-end website for a college that lets students browse campus events, see the schedule, and fill in a registration form. It was built with plain HTML, CSS and JavaScript, so there is no backend and nothing to install.



**How to Run**

The website is hosted with GitHub Pages and can be opened directly in any browser:

Live site: https://kamalee16.github.io/event-website/


Tech Stack
HTML5: page structure, forms and tables
CSS3: style.css, shared by all pages (flexbox layout, cards, footer, forms)
JavaScript: script.js, for interactivity
Font Awesome 6.7.2 (CDN): icons
Project Structure
doodleblue/
├── index.html                  # Home page

├── about.html                  # About page

├── event page.html             # All events listing

├── event detail.html           # Single event details

├── schedule page.html          # Event schedule table

├── register page.html          # Registration form

├── style.css                   # Shared styles

├── script.js                   # Shared interactions

├── image/                      # Images used on the site

└── basic/                      # Early HTML/JS practice files (not part of the website)

**How the Website Works**

Every page shares the same header (logo, title, navigation links) and footer (description, quick links, social icons). The flow a visitor follows is:

Home → Events → Event Details → Register, with Schedule and About available from the navigation bar at any time.

Pages
Page	File	Description
**Home	index.html**
  Landing page with a welcome banner . It has a Featured Events section with three event cards  and an Event Categories section.
**About	about.html**
  Explains what Campus Events is, with three Our Mission cards (Engage Students, Build Community, Create Opportunities) and the four event types.
**Events	event page.html	** 
  Lists all six events as cards, each with an image, date, venue, short description and a View Details button. It includes a search bar section.
**Event Details	event detail.html**	
  Detailed view of one event (Tech Fest 2026). It shows the description plus date, time, location and category in a side panel. It has a Back to Events button and a Register for This Event button.
**Schedule	schedule page.html**
  A table of all upcoming events with name, date, time, venue and category.
**Register	register page.html**
  Registration form with Full Name, Email, Phone (10 digits), Department, Event, Preferred Date and an optional Message.
**Interactive Features (script.js)**
  Category filter (Home page): clicking a category tile (Technical, Cultural, Sports, Workshops) shows only the matching event cards. Clicking it again shows all events.
  Card hover effect: event cards lift slightly and gain a shadow on hover.
  Button hover effect: buttons briefly shrink when hovered.
  Form validation: the registration form uses built-in HTML5 validation (required fields, email format, 10-digit phone pattern).

The basic/ Folder

This folder holds my early practice work (HTML basics, a sample form, JavaScript exercises on arrays, objects and events). It is separate from the Campus Events website and is included only to show my learning progress.
