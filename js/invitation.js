(() => {
  'use strict';

  // import * as inviteContent from content-001.js
  // import * as moment() from moment
  // let inviteContent, moment; // For linting purposes only

  if (location.hash) {
    init();
  }

  function init () {
    const slicedHash = location.hash.slice(1);
    location.hash = '';
    const details = JSON.parse(atob(decodeURIComponent(slicedHash)));
    const arriveTime = {
      min10: moment(details.date).subtract(10, 'minutes'),
      min20: moment(details.date).subtract(20, 'minutes')
    };
    const dates = {
      year: moment(details.date).format('YYYY'),
      month: {
        long: moment(details.date).format('MMMM'),
        short: moment().format('MMM')
      },
      date: moment(details.date).format('D'),
      day: {
        long: moment(details.date).format('dddd'),
        short: moment(details.date).format('ddd')
      },
      time: {
        hours24: moment(details.date).format('HH'),
        hours12: moment(details.date).format('h'),
        ap: moment(details.date).format('a'),
        minutes: moment(details.date).format('mm')
      },
      arrive_time: {
        min10: {
          hours24: moment(arriveTime.min10).format('HH'),
          hours12: moment(arriveTime.min10).format('h'),
          ap: moment(arriveTime.min10).format('a'),
          minutes: moment(arriveTime.min10).format('mm')
        },
        min20: {
          hours24: moment(arriveTime.min20).format('HH'),
          hours12: moment(arriveTime.min20).format('h'),
          ap: moment(arriveTime.min20).format('a'),
          minutes: moment(arriveTime.min20).format('mm')
        }
      }
    };

    const inviteContent = `<h1><img class="animated zoomIn" src="images/listening-event-poster.svg" title="Neue Klänge Beisammensein (Gathering to Hear New Sounds): A listening event in two parts" alt="Neue Klänge Beisammensein (Gathering to Hear New Sounds): A listening event in two parts" /></h1>

    <p class="salutation">Hello ${details.guest}.</p>
    <p>Thank you for expressing your interest in being a part of this listening event. I anticipate that it will be an excellent time for everyone in attendance. Below is some information about the event.</p>

    <h2 id="what-is-this">What is this?</h2>

    <p>If this will be your first time participating in a group listening, you might be wondering what exactly is going to happen. A helpful analogy is to imagine visiting the cinema to see a movie with friends. The cinema is a space where people gather with the express purpose of enjoying a movie—the creative work of a director and the crew involved in producing it. Mirroring the cinema analogy, we will gather together to listen to a creative audio work intentionally, isolating ourselves from other distractions in order to focus on the sounds we will hear.</p>
    <p>We will be listening to the creative work purposefully, not just as background music while we socialize. In fact—just like in a cinema theatre—it is impolite to interrupt others’ listening experience by talking or to distract others by using your phone. We each want the ability to be fully present in order to enjoy what we’re using our time to experience.</p>
    <p>But don’t worry—we’re not just going to sit and stare at one another without speaking. There will be plenty of time before and after the actual listening portion to socialize. In fact, it’s this aspect of togetherness that’s equally vital, and that’s why we will gather together instead of each listening on our own! Just as you might discuss what a movie caused you to feel or think after you saw it with your friends, we will discuss the sounds we will hear and the thoughts and feelings we will experience because of it.</p>

    <h2 id="when-and-where-is-it-happening">When and where is it happening?</h2>

    <p>For this listening event, ${details.host.given_name_1} ${details.host.surname} and ${details.host.given_name_2} ${details.host.surname} are welcoming us to enjoy ourselves in the comfort and privacy of their home.</p>
    <p>The event will take place on ${dates.day.long}, ${dates.date} ${dates.month.long}. Plan to arrive between ${dates.arrive_time.min20.hours12}:${dates.arrive_time.min20.minutes}—${dates.arrive_time.min10.hours12}:${dates.arrive_time.min10.minutes} ${dates.arrive_time.min10.ap} in order to give all of us some time to greet each other and settle in before the listening portion will begin (just after ${dates.time.hours12} ${dates.time.ap}). Please arrive on time as not to delay others.</p>
    <p>The ${details.host.surname}s’ home is at ${details.address_components.street_number} ${details.address_components.route}, ${details.address_components.postal_code}, ${details.address_components.locality}, ${details.address_components.administrative_area_level_1}. If you are driving a vehicle to the event, there will be a space for you to park it on the street near their home.</p>

    <div class="card">
      <iframe class="google-map" src="${details.address_components.embed_url}" frameborder="0" style="border:0" allowfullscreen></iframe>
      <p><span class="label">Time:</span> ${dates.arrive_time.min20.hours12}:${dates.arrive_time.min20.minutes} ${dates.arrive_time.min10.ap}<br />
      <span class="label">Date:</span> ${dates.day.short} ${dates.date} ${dates.month.short}<br />
      <span class="label">Location:</span> <a href="https://www.google.com/maps/search/${encodeURIComponent(details.address_components.street_number + ' ' + details.address_components.route + ', ' + details.address_components.postal_code + ', ' + details.address_components.locality + ', ' + details.address_components.administrative_area_level_1)}">${details.address_components.street_number} ${details.address_components.route}, ${details.address_components.postal_code}, ${details.address_components.locality}, ${details.address_components.administrative_area_level_1}</a></p>
    </div>

    <h2 id="any-other-details">Any other details?</h2>

    <p>This specific listening event will take place in two parts, with an intermission between. I anticipate that it will require approximately two hours of time, including the intermission and discussion.</p>
    <p>I would like to emphasize the importance of being present without distractions: for this event, if you bring a device with you that emits an audible or visual signal (for example, a mobile phone), you will need to either turn it off completely during the listening portions, or switch it into a silent mode and place it in an adjacent room so that no one will be able to see it or hear its motor if it vibrates. I will remind you before we begin.</p>
    <p>The ${details.host.surname}s and I will provide a couple of beverage options for you so that you can stay hydrated during the event. There will also be some hors d'oeuvres in case you get hungry.</p>
    <p>I am pleased by the possibility that you might join us. Please remember that this invitation is only for you; this event is being held in the privacy of someone’s home and, unfortunately, the venue will not permit it to be open to all—it is by invitation only. If you know someone who you think would like to attend, please speak to me first in order to ensure that there is available space and to get approval from our hosts. I hope this event will expand in the future!</p>
    <p class="signature">— Jesse</p>`;


    const expiredContent = `<div class="bad-invite">
      <p>This invitation has expired.</p>
      <p class="suggestion">Check out the <a href="https://jsejcksn.github.io/listening-suggestions/">listening suggestions</a> instead?</p>
    </div>`;

    if (moment().isBefore(details.date)) {
      writeContent(inviteContent);
    } else {
      writeContent(expiredContent);
    }
  }

  function writeContent (html) {
    let c = document.getElementById('container');
    c.innerHTML = html;
  }

})();
