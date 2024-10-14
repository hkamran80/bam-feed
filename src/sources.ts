import type { Source } from "./types";

export const sources: Source[] = [
    {
        id: "mcceastbay",
        name: "MCC East Bay",
        feed: {
            url: "https://mcceastbay.org/calendar/?ical=1",
            type: "ical",
        },
    },
    // {
    //     id: "srvic",
    //     name: "San Ramon Valley Islamic Center",
    //     feed: { url: "https://srvic.org/events/?ical=1", type: "ical" },
    // },
    // {
    //     id: "sbia",
    //     name: "Masjid al-Mustafa (SBIA)",
    //     feed: { url: "https://sbia.info/category/events/feed/", type: "rss" },
    // },
    // {
    //     id: "mca",
    //     name: "MCA",
    //     feed: {
    //         url: "https://calendar.google.com/calendar/u/1?cid=Y18wZjEyZmU3Y2FlNjgzMjY0NGRkODdjNDhlOTEwYTdlODIwNjBiNzBhODFkMTJjZDlkZWYxM2Q2NzY0YmU2MWJmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
    //         type: "googlecalendar",
    //     },
    // },
    // {
    //     id: "icofcc",
    //     name: "Islamic Center of Contra Costa",
    //     feed: { url: "https://icofcc.org/events/feed", type: "rss" },
    // },
    // {
    //     id: "saba",
    //     name: "SABA Islamic Center",
    //     feed: {
    //         url: "https://calendar.google.com/calendar/u/1?cid=c2FiYXZpcnR1YWxAc2FiYS1pZ2Mub3Jn",
    //         type: "googlecalendar",
    //     },
    // },
    // {
    //     id: "icfbayarea",
    //     name: "Islamic Center of Fremont",
    //     feed: [
    //         { url: "https://icfbayarea.com/calendar/?ical=1", type: "ical" },
    //         { url: "https://icfbayarea.com/calendar/feed/", type: "rss" },
    //     ],
    // },
];
