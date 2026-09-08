# The Meath Arms Country Inn

Pages: index, rooms, bar, explore, reviews, faqs, gallery, book, contact (+ 404.html, served by Vercel for unknown paths).
Live preview: meatharms.vercel.app (auto-deploys from main). Final domain: meath-arms.com.
Static HTML/CSS site, no build step. Edit the files, push to main, Vercel deploys.

Design: light editorial in the logo palette. Cream (#faf7ef) + deep green ink (#22382a) + gold accent (#96702a).
Type: Cormorant Garamond display / Figtree body (Google Fonts).
Buttons/pills 8px radius, cards 16px, inputs 10px. Footer and chat deep green.
Logo: images/logo.png (full) and logo-nav.png (nav/footer), transparent background.

## Client
Niall Phelan - nphelan74@gmail.com - 0402 36460 - themeatharms@outlook.com
Main Street, Aughrim, Co. Wicklow. Est. 1728, Phelan family. TWELVE en suite rooms across 8 room types on the site (Niall corrected the count 25 Aug; on 4 Sep he dropped Deluxe Single: "not correct, leave it out altogether").
Bar hours (REVISED by Niall 5 Sep, now live on site):
  Mon-Thu 2pm-11:30pm | Fri 2pm-12:30am | Sat 12pm-12:30am | Sun 12pm-11pm
  NOTE: Niall wrote Fri/Sat close as "12:30pm". Read as 12:30am (half twelve at night),
  since 2pm-12:30pm is impossible. Worth a one-line confirm.
  Live music at weekends.
Restaurant closed at the minute, so no food on the site.
Socials: facebook.com/TheMeathArms (verify spelling with Niall), instagram.com/paddysbar_aughrim.
Bookings: freetobook chosen 3 Sep. See BOOKING-SETUP.md. /book.html has the widget slot ready; request form live meanwhile. No Booking.com references anywhere on the site.

## Images
All real photos: Niall's interiors (hero, bar-1..3, carousel-01..04) plus Booking.com pulls.
Niall's own room photos (WhatsApp 7 Sep, via Jack): deluxe-1..8 are all DELUXE DOUBLE rooms per Niall's caption (several different deluxe rooms), economy-1/2 are the Economy Single. Standard Twin photos (grey twins) were in the chat but not saved to the folder yet. Raw WhatsApp files in images/ are gitignored, delete them locally.
Old Booking.com photos still in use: room-3 Mountain View (also aughrim.jpg), room-5 Twin Garden View (old, Niall says replace), room-6 Standard Single, room-9 Standard Twin. Standard Double card now uses deluxe-5 as a stand-in.
Legacy mapping: room-1 Deluxe Double, room-2 Deluxe Double or Twin, room-3 Double Mountain View (also the Explore Aughrim card), room-4 Standard Double, room-5 Twin Garden View, room-6 Standard Single, room-8 Economy Single, room-9 Standard Twin. room-7 (Deluxe Single) is unused, Niall dropped that room type.
Niall 4 Sep: Twin Garden View photo is "very old", Economy has no real photo ("tiny room"), Standard Single and Standard Double photos also being replaced. He is sending new room photos with labels. Swap room-4/5/6/8 when they land.
Real Booking.com review quotes on home (Katherine/AU), rooms (Karen/UK, Kate/IE) and bar (guest/IE). Rating 8.4 from 337 reviews, staff 9.3, cleanliness 8.9 (checked 24 Aug 2026).
Raw source jpgs in the repo root are gitignored (/*.jpg). Tidy them into /source-photos when handy.
The exterior photo (hero) is only 730px wide, from Booking.com. Ask Niall for a better front-of-building shot and replace images/exterior.jpg.

## TODOs before launch
- [ ] Swap Formspree [FORM-ID] in contact.html (create form at formspree.io, point it at themeatharms@outlook.com)
- [ ] Confirm Facebook URL: Niall typed "TheMesthArms", site uses /TheMeathArms/
- [ ] **BREAKFAST CLAIM UNVERIFIED AND POSSIBLY WRONG.** Site says "breakfast included" flatly
      (homepage, rooms page section, room cards, FAQ, book page). But the HubSpot build task
      (pulled from the Booking.com listing) prices Deluxe Double at EUR 140, or EUR 160 WITH
      breakfast, i.e. breakfast is a paid extra on at least some rates. Deluxe Single and Twin
      Garden View were listed as breakfast included. This is a commercial promise a guest could
      rely on. Confirm with Niall before launch and adjust the copy.
- [ ] Ask Niall for a mobile if he wants WhatsApp (landline won't work on wa.me)
- [ ] Confirm who controls the meath-arms.com domain (an old site is live on it), then point it at Vercel
- [ ] Paddy's bar logo is a separate later job when Niall relaunches the bar

## Client feedback so far (email)
25 Aug, first draft: likes the layout and navigation, "it's what I had in mind". Two asks:
better photos generally, and the room count is TWELVE not ten.
2 Sep: promised more photos, and says he has "a few other things to point out" but wants to
see the second draft first.
5 Sep: sent revised bar hours (applied). NO photos attached despite the HubSpot task saying
"new photos sent" - that email carried hours only. Photos still outstanding.
4 Sep: Niall emailed four breakfast photos (now breakfast-2..5) plus the room notes above (Deluxe Single dropped, room photos coming). Second draft polished 7 Sep (no repeated photos across a page, alt text everywhere, 404 page, theme-color). Not yet sent.
