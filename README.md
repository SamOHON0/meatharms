# The Meath Arms Country Inn

Pages: index, rooms, bar, explore, reviews, faqs, gallery, book, contact.
Live preview: meatharms.vercel.app (auto-deploys from main). Final domain: meath-arms.com.
Static HTML/CSS site, no build step. Edit the files, push to main, Vercel deploys.

Design: light editorial in the logo palette. Cream (#faf7ef) + deep green ink (#22382a) + gold accent (#96702a).
Type: Cormorant Garamond display / Figtree body (Google Fonts).
Buttons/pills 8px radius, cards 16px, inputs 10px. Footer and chat deep green.
Logo: images/logo.png (full) and logo-nav.png (nav/footer), transparent background.

## Client
Niall Phelan - nphelan74@gmail.com - 0402 36460 - themeatharms@outlook.com
Main Street, Aughrim, Co. Wicklow. Est. 1728, Phelan family. TWELVE en suite rooms across 9 room types (Niall corrected this 25 Aug, was previously wrong as ten).
Bar: Mon-Fri 2pm-11:30pm, Sat-Sun 12pm-12:30am. Live music weekends.
Restaurant closed at the minute, so no food on the site.
Socials: facebook.com/TheMeathArms (verify spelling with Niall), instagram.com/paddysbar_aughrim.
Bookings: freetobook chosen 3 Sep. See BOOKING-SETUP.md. /book.html has the widget slot ready; request form live meanwhile. No Booking.com references anywhere on the site.

## Images
All real photos: Niall's interiors (hero, bar-1..3, carousel-01..04) plus Booking.com pulls.
Room types match the live Booking.com listing (9 types): room-1 Deluxe Double, room-2 Deluxe Double or Twin, room-3 Double Mountain View (also the Explore Aughrim card), room-4 Standard Double, room-5 Twin Garden View, room-6 Standard Single, room-7 Deluxe Single, room-8 Economy Single, room-9 Standard Twin.
Real Booking.com review quotes on home (Katherine/AU), rooms (Karen/UK, Kate/IE) and bar (guest/IE). Rating 8.4 from 337 reviews, staff 9.3, cleanliness 8.9 (checked 24 Aug 2026).
Raw source jpgs in the repo root are gitignored (/*.jpg). Tidy them into /source-photos when handy.
The exterior photo (hero) is only 730px wide, from Booking.com. Ask Niall for a better front-of-building shot and replace images/exterior.jpg.

## TODOs before launch
- [ ] Swap Formspree [FORM-ID] in contact.html (create form at formspree.io, point it at themeatharms@outlook.com)
- [ ] Confirm Facebook URL: Niall typed "TheMesthArms", site uses /TheMeathArms/
- [ ] Confirm breakfast still runs for guests while the restaurant is closed (rooms page says it does)
- [ ] Ask Niall for a mobile if he wants WhatsApp (landline won't work on wa.me)
- [ ] Confirm who controls the meath-arms.com domain (an old site is live on it), then point it at Vercel
- [ ] Paddy's bar logo is a separate later job when Niall relaunches the bar

## Client feedback so far (email)
25 Aug, first draft: likes the layout and navigation, "it's what I had in mind". Two asks:
better photos generally, and the room count is TWELVE not ten.
2 Sep: promised more photos, and says he has "a few other things to point out" but wants to
see the second draft first. Chase the photos.
