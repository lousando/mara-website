import Vue from "vue";

// layout
import Page from "~/components/page.vue";
import Row from "~/components/row.vue";
import Column from "~/components/column.vue";
import Box from "~/components/box.vue";

import PageHeader from "~/components/page-header.vue";
import Notification from "~/components/notification";

import InlineNotification from "~/components/inline-notification";
import Paragraph from "~/components/paragraph";
import PrettyButton from "~/components/pretty-button";
import GoogleMap from "~/components/google-map";
import MaraCalendar from "~/components/mara-calendar";
import ContactForm from "~/components/contact-form";
import ClubMember from "~/components/club-member";

// layout
Vue.component("page", Page);
Vue.component("row", Row);
Vue.component("column", Column);
Vue.component("box", Box);

Vue.component("page-header", PageHeader);
Vue.component("notification", Notification);

Vue.component("inline-notification", InlineNotification);
Vue.component("paragraph", Paragraph);
Vue.component("pretty-button", PrettyButton);
Vue.component("google-map", GoogleMap);
Vue.component("mara-calendar", MaraCalendar);
Vue.component("contact-form", ContactForm);
Vue.component("club-member", ClubMember);
