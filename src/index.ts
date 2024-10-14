import { exit } from "process";
import { writeFile } from "fs/promises";
import ICAL from "ical.js";
import { sources } from "./sources";
import type { AppFeed, Feed } from "./types";

const main = async () => {
    // for (const source of sources) {}

    const source = sources[0];
    console.log(`${source.name} (${source.id})`);
    const icalResponse = await fetch((source.feed as Feed).url);

    if (!icalResponse.ok) {
        console.error(icalResponse.headers, await icalResponse.text());
        exit(2);
    }

    const icalText = await icalResponse.text();
    const parsed = ICAL.parse(icalText);
    const component = new ICAL.Component(parsed);
    const vevent1 = component.getFirstSubcomponent("vevent");
    if (!vevent1) exit(3);
    const event1 = new ICAL.Event(vevent1);

    console.log(event1);

    console.log("===");

    console.log(event1.startDate);
    console.log("===");
    console.log(event1.endDate);
    console.log("===");
    console.log(event1.duration);
    console.log("===");
    console.log(event1.location);
    console.log("===");
    console.log(event1.summary);
    console.log("===");
    console.log(event1.description);

    console.log("***===***");

    const output: AppFeed = {
        id: event1.uid,
        sourceId: source.id,
        title: event1.summary,
        description: event1.description,
        startDate: event1.startDate.toJSDate(),
        endDate: event1.endDate.toJSDate(),
        location: [

        ],
        tags: [
            event1.component.getFirstSubcomponent("categories")?.toString() ?? ""
        ],
        images: [],
        url: event1.component.getFirstSubcomponent("uri")?.toString() ?? ""
    };

    console.log(output);

    exit(0);
};

main().catch(async (error: Error) => {
    exit(1);
});
