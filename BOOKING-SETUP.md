# Booking engine setup: freetobook

Decision made 3 Sep 2026. Engine chosen: **freetobook**, direct booking engine plus channel manager.

## Why

Booking engine is free forever, no commission, no annual fee. The channel manager is the
part that costs, and it is not optional: Niall is staying on Booking.com and will double-sell
a room without it.

Alternative considered: Sirvoy (Dublin, better product, embeds fully in-page) but the channel
manager only exists on the Pro tier at USD 54/month, roughly EUR 600/year. Hard to justify
for this property, and it undercuts the commission-saving pitch.

Ruled out: Little Hotelier (from USD 109/month), Cloudbeds, SiteMinder. Overbuilt.

## Costs (verified at en.freetobook.com/pricing, 3 Sep 2026)

| Item | Cost |
|---|---|
| Direct booking engine | Free. No tie-in, no annual fee, no commission |
| Channel manager | GBP 1.50 per booking, min GBP 9/month, max GBP 99/month |
| Channel connection | GBP 49 one-off per channel (Booking.com = one channel) |
| Card payments (optional) | GBP 139/year |
| Google Bookings (optional) | GBP 59/year, plus Google's own 7% of booking value |

Direct bookings do not count toward the channel manager per-booking fee.

Realistic monthly run rate for this property: GBP 9 to GBP 30, plus the one-off GBP 49.

## How it embeds

freetobook gives a JavaScript widget: a date picker with a Check availability button that
sits inline on our page, styled as part of the site. The guest picks dates on meath-arms.com,
then room selection and payment complete on freetobook's hosted page.

freetobook advise against iframing the full booking engine. Their own docs say to set the
booking page to open in a NEW WINDOW, not in frame.

## Wiring it in

1. Niall signs up at freetobook.com with the property details (needs his email and bank details).
2. In the dashboard: DIRECT BOOKINGS > BOOKING BUTTONS > SETTINGS.
3. Set the booking page to open in a new window.
4. Copy the responsive booking widget snippet.
5. Paste it into `book.html` between the `FREETOBOOK WIDGET START` / `END` comment markers.
6. Delete the `.ftb-placeholder` div.
7. Leave the request form underneath. It stays as the fallback for guests who would rather ask.

The room types in the request form dropdown match the nine types on the Booking.com listing,
so they should be set up the same way in freetobook for consistency.

## Room set-up in freetobook

12 physical en suite rooms across 9 types (confirmed by Niall 25 Aug):

Deluxe Double Room, Deluxe Double or Twin, Deluxe Single, Twin with Garden View,
Double with Mountain View, Standard Double, Standard Single, Standard Twin, Economy Single.

Check-in from 2pm, check-out by 10am. Breakfast included. Pets by arrangement.

## Still needed from Niall

- **Annual Booking.com commission figure.** This is the pitch for the setup fee and a higher
  retainer. At a typical 15%, a EUR 50k room-revenue year is EUR 7,500 going to Booking.com.
- Go-ahead to set up the freetobook account, and who owns it (his account, not ours).
