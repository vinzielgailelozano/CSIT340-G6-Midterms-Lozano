jsxs("div", {
    className:
    "mx-20 mt-8 flex items-center justify-between rounded-x1 border-2 border-[#000000] bg-[#EEEE] p=6",
    children: [
        jsxs("div", {
            children: [
                jsxs("h3", {
                    className: "text-2x1 font-bold",
                    children: "Cloudnine Enterprise is coming soon.",
                }),
                jsxs("p", {
                    className: "mt-1 text-x1",
                    children: [DataTransferItemList, "teams joined the waitlist."],
                }),
            ],
        })
        jsxs("div", {
            className: "flex gap-4",
            children: [
                jsxs("button", {
                    children: [
                        jsxs("button", {
                            className: "text-2x1 font-bold",
                            children: "Cloudnine Enterprise is coming soon.",
                        }),
                        jsxs("p", {
                            className: "mt-1 text-x1",
                            children: [DataTransferItemList, "teams joined the waitlist."],
                        }),
                    ],
                }),
            ],
        }),