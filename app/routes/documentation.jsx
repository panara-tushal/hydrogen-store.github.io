import { Link } from "react-router";
import { useState } from "react";

const sections = [
    {
        id: "home-banner",
        name: "Home Banner",
        simple: true,
        previewUrl: "app/assets/Screenshot_1.jpg",
        screenshots: [{ label: "View Screenshot", url: "app/assets/image.png" }],
        steps: ["Click on the Home Banner metaobject", "Open the desired entry", "Update the required fields", "Click Save"],
    },
    {
        id: "review",
        name: "Review",
        simple: true,
        previewUrl: "app/assets/Screenshot_1.jpg",
        screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_2.jpg" }],
        steps: ["Click on the Review metaobject", "Open the entry", "Update the required fields", "Click Save"],
    },
    {
        id: "location",
        name: "Location",
        simple: true,
        previewUrl: "app/assets/location.jpg",
        screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_4.jpg" }],
        steps: ["Click on Location metaobject", "Open the entry", "Update the required fields", "Click Save"],
    },
    {
        id: "instagram",
        name: "Instagram",
        simple: false,
        previewUrl: "app/assets/Screenshot_29.jpg",
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
            { label: "Instagram", url: "app/assets/Screenshot_5.jpg" },
            { label: "Instagram Slider", url: "app/assets/Screenshot_6.jpg" },
        ],
    },
    {
        id: "story-craft",
        name: "Story Craft",
        simple: false,
        previewUrl: "app/assets/Screenshot_7.jpg",
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
            { label: "Story Craft Parent", url: "app/assets/Screenshot_8.jpg" },
            { label: "Story Craft Item", url: "app/assets/Screenshot_9.jpg" },
        ],
    },
    {
        id: "split-banner",
        name: "Split Banner Splited",
        simple: false,
        previewUrl: "app/assets/Screenshot_10.jpg",
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
            { label: "Split Banner Splited", url: "app/assets/Screenshot_11.jpg" },
            { label: "Split Banner List", url: "app/assets/Screenshot_12.jpg" },
        ],
    },
    {
        id: "initiatives",
        name: "Initiatives Splited",
        simple: false,
        previewUrl: "app/assets/Screenshot_13.jpg",
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
            { label: "Initiatives Splited", url: "app/assets/Screenshot_14.jpg" },
            { label: "Initiatives Splited List", url: "app/assets/Screenshot_15.jpg" },
        ],
    },
    {
        id: "gemstone",
        name: "Gemstone Guidance Splited",
        simple: true,
        previewUrl: "app/assets/Screenshot_16.jpg",
        steps: ["Click on Gemstone Guidance Splited metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_17.jpg" }],
    },
    {
        id: "ring-collections",
        name: "Ring Collections Splited",
        simple: true,
        previewUrl: "app/assets/Screenshot_18.jpg",
        steps: ["Click on Ring Collections Splited metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_19.jpg" }],
    },
    {
        id: "product-add",
        name: "Product Add",
        simple: true,
        description: "Use these variant metafields to add gallery media and engraving preview images for product variants.",
        steps: [
            "Open the product in Shopify Admin.",
            "Select the variant you want to customize.",
            "In the variant metafields section, add custom.variant_media or custom.engraving_preview as needed.",
            "Attach media references, upload a preview image, or update both fields.",
            "Save the variant and refresh the product page.",
        ],
    },
    {
        id: "collection-heading",
        name: "Collection or Product Heading",
        simple: false,
        previewUrl: "app/assets/Screenshot_28.jpg",
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
            { label: "Collection or Product Heading", url: "app/assets/Screenshot_20.jpg" },
            { label: "Collection or Product Slider", url: "app/assets/Screenshot_21.jpg" },
        ],
    },
    {
        id: "faq",
        name: "FAQ",
        simple: true,
        previewUrl: "app/assets/Screenshot_22.jpg",
        steps: ["Click on FAQ metaobject", "Open the entry", "Update the required fields", "Click Save"],
        screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_23.jpg" }],
    },
    {
        id: "diamond-collection",
        name: "Diamond Collection",
        simple: false,
        previewUrl: "app/assets/Screenshot_24.jpg",
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
            { label: "Diamond Collection", url: "app/assets/Screenshot_25.jpg" },
            { label: "Collection List", url: "app/assets/Screenshot_26.jpg" },
        ],
    },
];


const product = [
    {
        id: "variant-media",
        name: "variant_media",
        simple: true,
        previewUrl: "app/assets/Screenshot_34.jpg",
        description: "Add variant-specific gallery media so selected variants can show extra images or videos in the product media carousel.",
        steps: [
            "Open the product in Shopify Admin.",
            "Select the variant you want to customize.",
            "In the variant metafields section, add custom.variant_media.",
            "Attach one or more media references (images or videos).",
            "Save the variant and refresh the product page.",
        ],
         screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_33.jpg" }],
    },
    {
        id: "engraving-preview",
        name: "engraving_preview",
        simple: true,
        previewUrl: "app/assets/Screenshot_31.jpg",
        description: "Use this metafield to set the engraving preview image for a variant on products tagged ENGAGEMENT RINGS.",
        steps: [
            "Open the product in Shopify Admin.",
            "Add the product tag ENGAGEMENT RINGS.",
            "Select the variant you want to customize.",
            "In the variant metafields section, add custom.engraving_preview.",
            "Upload or select an engraving preview image reference.",
            "Save the variant, refresh the product page, and enter engraving text.",
        ],
         screenshots: [{ label: "View Screenshot", url: "app/assets/Screenshot_32.jpg" }],
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
                                        <div>Applies to section:</div>
                                        <img
                                            src={s.previewUrl}
                                            alt={`Preview for ${s.name}`}
                                            className="hcg-section-image"
                                        />
                                    </div>
                                )}

                                {s.description && (
                                    <div className="hcg-section-description">{s.description}</div>
                                )}

<div>
                                
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

                                        {s.screenshots.length == 1 && (
                                            <div className="hcg-screenshot-links">
                                                {s.screenshots.map((sc, i) => (
                                                    <div key={i} className="hcg-screenshot-item">
                                                        <div className="hcg-screenshot-label">{sc.label}</div>
                                                        <img
                                                            src={sc.url}
                                                            alt={sc.label}
                                                            className="hcg-screenshot-image"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>

                                {s.screenshots.length > 1 && (
                                            <div className="hcg-screenshot-links">
                                                {s.screenshots.map((sc, i) => (
                                                    <div key={i} className="hcg-screenshot-item">
                                                        <div className="hcg-screenshot-label">{sc.label}</div>
                                                        <img
                                                            src={sc.url}
                                                            alt={sc.label}
                                                            className="hcg-screenshot-image"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="hcg-accordion-section">
                <div className="hcg-accordion-label">Product You Can Customize</div>

                {product.map((s, idx) => {
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
                                        <div>Applies to section:</div>
                                        <img
                                            src={s.previewUrl}
                                            alt={`Preview for ${s.name}`}
                                            className="hcg-section-image"
                                        />
                                    </div>
                                )}

                                {s.description && (
                                    <div className="hcg-section-description">{s.description}</div>
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
                                                    <div key={i} className="hcg-screenshot-item">
                                                        <div className="hcg-screenshot-label">{sc.label}</div>
                                                        <img
                                                            src={sc.url}
                                                            alt={sc.label}
                                                            className="hcg-screenshot-image"
                                                        />
                                                    </div>
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