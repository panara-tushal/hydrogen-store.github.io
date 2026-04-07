import { Link } from "react-router";
import { useState } from "react";

const sections = [
    {
        id: "home-banner",
        name: "Home Banner",
        simple: true,
        previewUrl: "https://prnt.sc/0ygcWwMt3qy7",
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/Qe5HR1U03HCr" }],
        steps: ["Click on the Home Banner metaobject", "Open the desired entry", "Update the required fields", "Click Save"],
    },
    {
        id: "review",
        name: "Review",
        simple: true,
        previewUrl: "https://prnt.sc/a9UU78ypsPUF",
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/i_wHNwBLUDJq" }],
        steps: ["Click on the Review metaobject", "Open the entry", "Update the required fields", "Click Save"],
    },
    {
        id: "location",
        name: "Location",
        simple: true,
        previewUrl: "https://prnt.sc/ro8AjzzLCrsX",
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/ht3tHOWpPkQV" }],
        steps: ["Click on Location metaobject", "Open the entry", "Update the required fields", "Click Save"],
    },
    {
        id: "instagram",
        name: "Instagram",
        simple: false,
        previewUrl: "https://prnt.sc/m6wpFV2axpGL",
        connected: ["Instagram", "Instagram Slider"],
        how: "Inside the Instagram metaobject, there is a Content field. This field contains multiple Instagram Slider entries (shown as small items in the list).",
        steps: [
            "Click on the Instagram metaobject",
            "Open the entry",
            "Scroll to the Content field",
            "Click on any item inside the Content list (these are Instagram Slider entries)",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Instagram", url: "https://prnt.sc/3plb4V1OqZmz" },
            { label: "Instagram Slider", url: "https://prnt.sc/SfnWipQADjRl" },
        ],
    },
    {
        id: "story-craft",
        name: "Story Craft",
        simple: false,
        previewUrl: "https://prnt.sc/2yKM02Idl1Ab",
        connected: ["Story Craft Parent", "Story Craft Item"],
        how: "Inside the Story Craft Parent metaobject, there is a field Story Craft Item. This field contains Story Craft Item entries. Each item represents one story block.",
        steps: [
            "Click on the Story Craft Parent metaobject",
            "Open the entry",
            "Find the linked Story Craft Item list",
            "Click on any item from the list",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Story Craft Parent", url: "https://prnt.sc/V0gbc8W_qOAB" },
            { label: "Story Craft Item", url: "https://prnt.sc/7Nt0FnphQ9fS" },
        ],
    },
    {
        id: "split-banner",
        name: "Split Banner Splited",
        simple: false,
        previewUrl: "https://prnt.sc/0K0hFcD_Cz0-",
        connected: ["Split Banner Splited", "Split Banner List"],
        how: "Inside the Split Banner Splited metaobject, there is a field Split Banner List. This field contains multiple Split Banner List entries.",
        steps: [
            "Click on the Split Banner Splited metaobject",
            "Open the entry",
            "Find the linked Split Banner List",
            "Click on any item from the list",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Split Banner Splited", url: "https://prnt.sc/a_hkMMFTYViV" },
            { label: "Split Banner List", url: "https://prnt.sc/wSB7sf63HvFa" },
        ],
    },
    {
        id: "initiatives",
        name: "Initiatives Splited",
        simple: false,
        previewUrl: "https://prnt.sc/DtOvIbGkj_yD",
        connected: ["Initiatives Splited", "Initiatives Splited List"],
        how: "Inside the Initiatives Splited metaobject, there is a field Initiatives Splited List. This field contains multiple Initiatives Splited List entries.",
        steps: [
            "Click on the Initiatives Splited metaobject",
            "Open the entry",
            "Find the linked Initiatives Splited List",
            "Click on any item from the list",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Initiatives Splited", url: "https://prnt.sc/YexqWF4_oW38" },
            { label: "Initiatives Splited List", url: "https://prnt.sc/3xFPZnDZQd2H" },
        ],
    },
    {
        id: "gemstone",
        name: "Gemstone Guidance Splited",
        simple: true,
        previewUrl: "https://prnt.sc/gJiH_Y_4ngiP",
        steps: ["Click on Gemstone Guidance Splited metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/tEvh7Xmpzd-u" }],
    },
    {
        id: "ring-collections",
        name: "Ring Collections Splited",
        simple: true,
        previewUrl: "https://prnt.sc/UwzGrXjV4kPd",
        steps: ["Click on Ring Collections Splited metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/zm5xCbbSbFRw" }],
    },
    {
        id: "collection-heading",
        name: "Collection or Product Heading",
        simple: false,
        previewUrl: "https://prnt.sc/DtOvIbGkj_yD",
        connected: ["Collection or Product Heading", "Collection or Product Slider"],
        how: "Inside the Collection or Product Heading metaobject, there is a field Collection or Product Slider. This field contains multiple Collection or Product Slider entries.",
        steps: [
            "Click on the Collection or Product Heading metaobject",
            "Open the entry",
            "Find the linked Collection or Product Slider",
            "Click on any item from the list",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Collection or Product Heading", url: "https://prnt.sc/G1bo0bJCO57y" },
            { label: "Collection or Product Slider", url: "https://prnt.sc/F467wzGLb5RK" },
        ],
    },
    {
        id: "faq",
        name: "FAQ",
        simple: true,
        previewUrl: "https://prnt.sc/N8Ib_o1Q0Vn8",
        steps: ["Click on FAQ metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "https://prnt.sc/tW7I4xGU8NZQ" }],
    },
    {
        id: "diamond-collection",
        name: "Diamond Collection",
        simple: false,
        previewUrl: "https://prnt.sc/5AIvaLq7U1Qh",
        connected: ["Diamond Collection", "Collection List"],
        how: "Inside the Diamond Collection metaobject, there is a field Collection List. This field contains multiple Collection List entries.",
        steps: [
            "Click on the Diamond Collection metaobject",
            "Open the entry",
            "Find the linked Collection List",
            "Click on any item from the list",
            "Make the required changes",
            "Click Save",
        ],
        screenshots: [
            { label: "Diamond Collection", url: "https://prnt.sc/fn0QRclqAMlt" },
            { label: "Collection List", url: "https://prnt.sc/BScKuqNN7JI3" },
        ],
    },
];

const metaobjectSteps = [
    "Go to your Shopify Admin",
    "Click on Content",
    "Select Metaobjects",
    "You will see the list of all available metaobjects",
];

export default function Documentation() {
    // return (

    //     <>
    //         <section className="documentation">
    //             <div className="page-width">
    //                 <div className="documentation-wrapper">
    //                     <div className="documentation-header">
    //                         <div>
    //                             <h1>Documentation: Section Content Customization</h1>
    //                         </div>
    //                     </div>

    //                     <div className="documentation-content">
    //                         <p>This section explains how to customize content within existing sections in the Hydrogen storefront.</p>
    //                         <p>Customization allows updating text, images, and data without modifying the component structure or code logic.</p>

    //                     </div>
    //                 </div>
    //             </div>
    //         </section>

    //         <section className="documentation-section">
    //             <div className="page-width">
    //                 <div className="documentation-wrapper">
    //                     <h2>Open Metaobjects</h2>
    //                     <ul>
    //                         <li>Go to your Shopify Admin</li>
    //                         <li>Click on Content</li>
    //                         <li>Select Metaobjects</li>
    //                         <li>You will see the list of all available metaobjects</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </section>

    //     </>
    // );

    const [openCards, setOpenCards] = useState({});

    const toggle = (id) =>
        setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));

    return (
        <div className="hcg-root">

            {/* Top bar */}
            <div className="hcg-topbar">Hydrogen Customization Guide — Shopify Admin</div>

            {/* Hero: title left + Open Metaobjects right */}
            <div className="hcg-hero">
                <div className="hcg-hero-inner">

                    {/* Left: title + description */}
                    <div className="hcg-hero-left">
                        <div className="hcg-breadcrumb">
                            Shopify Admin <span>/</span> Content <span>/</span> Metaobjects
                        </div>
                        <h1 className="hcg-title">
                            Hydrogen <em>Customization</em> Guide
                        </h1>
                        <div className="hcg-gold-rule" />
                        <p className="hcg-subtitle">
                            A complete reference for managing your storefront sections through
                            Shopify Metaobjects. Expand any section below to view step-by-step
                            instructions and screenshots.
                        </p>
                    </div>

                    {/* Right: Open Metaobjects card */}
                    <div className="hcg-meta-card">
                        <div className="hcg-meta-card-header">
                            <div className="hcg-meta-eyebrow">Step 00 — Getting Started</div>
                            <div className="hcg-meta-title">Open Metaobjects</div>
                        </div>
                        <div className="hcg-meta-steps">
                            {metaobjectSteps.map((step, i) => (
                                <div className="hcg-meta-step" key={i}>
                                    <span className="hcg-meta-step-num">0{i + 1}</span>
                                    <span className="hcg-meta-step-text">{step}</span>
                                </div>
                            ))}
                        </div>
                        <div className="hcg-meta-footer">
                            <a
                                className="hcg-screenshot-link"
                                href="https://prnt.sc/6NhL7VmevNuX"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ↗ View Screenshot
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hcg-section-divider" />

            {/* Accordion */}
            <div className="hcg-accordion-section">
                <div className="hcg-accordion-label">Sections You Can Customize</div>

                {sections.map((s, idx) => {
                    const isOpen = !!openCards[s.id];
                    return (
                        <div className="hcg-section-card" key={s.id}>
                            <div
                                className={`hcg-card-header ${isOpen ? "open" : ""}`}
                                onClick={() => toggle(s.id)}
                            >
                                <div className="hcg-card-title-row">
                                    <span className="hcg-card-index">{String(idx + 1).padStart(2, "0")}</span>
                                    <span className="hcg-card-name">{s.name}</span>
                                    {!s.simple && <span className="hcg-linked-chip">Linked</span>}
                                </div>
                                <span className={`hcg-card-chevron ${isOpen ? "open" : ""}`}>▾</span>
                            </div>

                            <div className={`hcg-card-body ${isOpen ? "open" : ""}`}>

                                {/* Preview */}
                                {s.previewUrl && (
                                    <div className="hcg-preview-link">
                                        Applies to section:&nbsp;
                                        <a href={s.previewUrl} target="_blank" rel="noreferrer">
                                            View section preview ↗
                                        </a>
                                    </div>
                                )}

                                <div className={s.simple ? "hcg-card-body-single" : "hcg-card-body-inner"}>

                                    {/* Left col: notice + how it works (complex only) */}
                                    {!s.simple && (
                                        <div>
                                            {s.connected && (
                                                <div className="hcg-notice">
                                                    <div className="hcg-notice-title">Important — Connected Metaobjects</div>
                                                    <div className="hcg-notice-intro">
                                                        This section works using two connected metaobjects:
                                                    </div>
                                                    <div className="hcg-connected-chips">
                                                        {s.connected.map((c, i) => (
                                                            <div className="hcg-connected-chip" key={i}>
                                                                <span className="hcg-chip-label">{i === 0 ? "Main" : "Items"}</span>
                                                                {c}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {s.how && (
                                                <>
                                                    <div className="hcg-sub-label">How It Works</div>
                                                    <p className="hcg-how-text">{s.how}</p>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {/* Right col (or only col): steps + screenshots */}
                                    <div>
                                        <div className="hcg-sub-label">Steps</div>
                                        <div className="hcg-steps">
                                            {s.steps.map((step, i) => (
                                                <div className="hcg-step" key={i}>
                                                    <span className="hcg-step-num">{String(i + 1).padStart(2, "0")}</span>
                                                    <span className="hcg-step-text">{step}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {s.screenshots && (
                                            <div className="hcg-screenshot-links">
                                                {s.screenshots.map((sc, i) => (
                                                    <a
                                                        key={i}
                                                        className="hcg-screenshot-link"
                                                        href={sc.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        ↗ {sc.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}