export type LogOutput = "console" | "file";

export type AnyRecord<T extends string | number | symbol = string> = Record<
    T,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
>;

export type Feed = {
    url: string;
    type: "ical" | "rss" | "googlecalendar";
};

export type Source = {
    id: string;
    name: string;
    feed: Feed | Feed[];
};

// Output
export type AppFeed = {
    id: string;
    sourceId: string;
    title: string;

    /** The description should support Markdown or a **very** limited form of HTML/CSS. */
    description: string;
    startDate: Date;
    endDate: Date;

    pricing?: string;
    capacity?: string;

    location: {
        // TODO: Find better type names
        type: "in-person" | "virtual";
        address: string;
    }[];

    /** Tags may be pulled from the calendar entry, manually input, or automatically assigned */
    tags: string[];

    // TODO: Decide whether to cache images on BAM servers or always pull from upstream. Images will always be cached on-device.
    images: string[];
    url: string;

    /** A call-to-action (CTA) may be specified to provide a button to the user which will redirect them to a URL */
    cta?: string;
};
