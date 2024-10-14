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
    description: string;
    startDate: Date;
    endDate: Date;
    location: {
        type: "in-person" | "virtual";
        place: string;
    }[];
}
